import { Injectable } from '@nestjs/common';
import {
  AbilityBuilder,
  createMongoAbility,
  buildMongoQueryMatcher,
  PureAbility,
  AbilityTuple,
  MatchConditions,
  MongoAbility,
} from '@casl/ability';
import {
  allInterpreters,
  allParsingInstructions,
  MongoQuery,
} from '@ucast/mongo2js';

export enum PolicyEnum {
  json = 0,
  mongo,
  func,
}
export enum EffectEnum {
  can = 'can',
  cannot = 'cannot',
}
export interface IPolicy {
  type: PolicyEnum;
  effect: EffectEnum;
  action: string; // 操作标识，CURD
  subject: string; // 资源标识，Class类
  fields?: string[] | string; // 字段
  conditions?: string | Record<string, any>; // 查询条件
  args?: string[] | string; //针对于件数场景的参数
}

type AppAbility = PureAbility<AbilityTuple, MatchConditions>;
type AbilityType = MongoAbility<AbilityTuple, MongoQuery> | AppAbility;

@Injectable()
export class CaslAbilityService {
  buildAbility(polices: IPolicy[], args?: any) {
    const abilityArr: AbilityType[] = [];
    let ability: AbilityType;

    polices.forEach((policy) => {
      switch (policy.type) {
        case PolicyEnum.json:
          ability = this.handleJsonType(policy);
          break;
        case PolicyEnum.mongo:
          ability = this.handleMongoType(policy);
          break;
        case PolicyEnum.func:
          ability = this.handleFunctionType(policy, args);
          break;
        default:
          ability = this.handleJsonType(policy);
          break;
      }
      abilityArr.push(ability);
    });

    return abilityArr;
  }

  determineAction(effect: EffectEnum, builder: any) {
    return effect === EffectEnum.can ? builder.can : builder.cannot;
  }
  // 1. 针对一般的场景
  // can('action', 'subject', 'fields', 'conditions')
  // action: read, delete, update, create, mange
  // subject: 实体，Article, Role
  // fields: 字段列表， title,content, published
  // conditions: 条件, { author: 'John' }
  handleJsonType(policy: IPolicy) {
    const { can, cannot, build } = new AbilityBuilder(createMongoAbility);

    const action = this.determineAction(policy.effect, { can, cannot });
    const localArgs: any[] = [];
    if (policy.fields) {
      if (Array.isArray(policy.fields)) {
        if (policy.fields.length > 0) {
          localArgs.push(policy.fields);
        }
      } else {
        localArgs.push(policy.fields);
      }
    }

    if (policy.conditions) {
      if (Array.isArray(policy.conditions)) {
        if (policy.conditions.length > 0) {
          localArgs.push(policy.conditions);
        }
      }
    } else {
      const cond =
        typeof policy.conditions === 'object' && policy.conditions['data']
          ? policy.conditions['data']
          : policy.conditions;
      localArgs.push(cond);
    }

    action(policy.action, policy.subject, ...localArgs);

    return build();
  }
  // 2. 针对Mongo查询场景
  handleMongoType(policy: IPolicy) {
    const { can, cannot, build } = new AbilityBuilder(createMongoAbility);
    const action = this.determineAction(policy.effect, { can, cannot });
    const conditionsMatcher = buildMongoQueryMatcher(
      allParsingInstructions,
      allInterpreters,
    );

    const localArgs: any[] = [];
    if (policy.fields) {
      localArgs.push(policy.fields);
    }

    if (policy.conditions) {
      const cond =
        typeof policy.conditions === 'object' && policy.conditions['data']
          ? policy.conditions['data']
          : policy.conditions;

      localArgs.push(cond);
    }

    action(policy.action, policy.subject, ...localArgs);

    return build({
      conditionsMatcher,
    });
  }
  // 3. 针对函数的场景
  handleFunctionType(policy: IPolicy, args?: any) {
    const { can, cannot, build } = new AbilityBuilder<AppAbility>(PureAbility);
    const lambdaMatcher = (matchConditions: MatchConditions) => matchConditions;
    const action = this.determineAction(policy.effect, { can, cannot });

    let func;
    if (policy.args && policy.args.length > 0) {
      if (policy.conditions && policy.conditions['data']) {
        // eslint-disable-next-line @typescript-eslint/no-implied-eval
        func = new Function(
          ...policy.args,
          'return ' + policy.conditions['data'],
        );
      } else {
        // eslint-disable-next-line @typescript-eslint/no-implied-eval
        func = new Function('return ' + (policy.conditions as string));
      }
    } else {
      // eslint-disable-next-line @typescript-eslint/no-implied-eval
      func = new Function('return ' + (policy.conditions as string));
    }
    action(policy.action, policy.subject, func(...args));

    return build({
      conditionsMatcher: lambdaMatcher,
    });
  }
}
