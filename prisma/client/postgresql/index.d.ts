
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model UserRole
 * 
 */
export type UserRole = $Result.DefaultSelection<Prisma.$UserRolePayload>
/**
 * Model Permission
 * 
 */
export type Permission = $Result.DefaultSelection<Prisma.$PermissionPayload>
/**
 * Model RolePermissions
 * 
 */
export type RolePermissions = $Result.DefaultSelection<Prisma.$RolePermissionsPayload>
/**
 * Model Policy
 * 
 */
export type Policy = $Result.DefaultSelection<Prisma.$PolicyPayload>
/**
 * Model RolePolicy
 * 
 */
export type RolePolicy = $Result.DefaultSelection<Prisma.$RolePolicyPayload>
/**
 * Model PermissionPolicy
 * 
 */
export type PermissionPolicy = $Result.DefaultSelection<Prisma.$PermissionPolicyPayload>
/**
 * Model Menu
 * 
 */
export type Menu = $Result.DefaultSelection<Prisma.$MenuPayload>
/**
 * Model MenuMeta
 * 
 */
export type MenuMeta = $Result.DefaultSelection<Prisma.$MenuMetaPayload>
/**
 * Model RoleMenu
 * 
 */
export type RoleMenu = $Result.DefaultSelection<Prisma.$RoleMenuPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs>;

  /**
   * `prisma.userRole`: Exposes CRUD operations for the **UserRole** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserRoles
    * const userRoles = await prisma.userRole.findMany()
    * ```
    */
  get userRole(): Prisma.UserRoleDelegate<ExtArgs>;

  /**
   * `prisma.permission`: Exposes CRUD operations for the **Permission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Permissions
    * const permissions = await prisma.permission.findMany()
    * ```
    */
  get permission(): Prisma.PermissionDelegate<ExtArgs>;

  /**
   * `prisma.rolePermissions`: Exposes CRUD operations for the **RolePermissions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RolePermissions
    * const rolePermissions = await prisma.rolePermissions.findMany()
    * ```
    */
  get rolePermissions(): Prisma.RolePermissionsDelegate<ExtArgs>;

  /**
   * `prisma.policy`: Exposes CRUD operations for the **Policy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Policies
    * const policies = await prisma.policy.findMany()
    * ```
    */
  get policy(): Prisma.PolicyDelegate<ExtArgs>;

  /**
   * `prisma.rolePolicy`: Exposes CRUD operations for the **RolePolicy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RolePolicies
    * const rolePolicies = await prisma.rolePolicy.findMany()
    * ```
    */
  get rolePolicy(): Prisma.RolePolicyDelegate<ExtArgs>;

  /**
   * `prisma.permissionPolicy`: Exposes CRUD operations for the **PermissionPolicy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PermissionPolicies
    * const permissionPolicies = await prisma.permissionPolicy.findMany()
    * ```
    */
  get permissionPolicy(): Prisma.PermissionPolicyDelegate<ExtArgs>;

  /**
   * `prisma.menu`: Exposes CRUD operations for the **Menu** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Menus
    * const menus = await prisma.menu.findMany()
    * ```
    */
  get menu(): Prisma.MenuDelegate<ExtArgs>;

  /**
   * `prisma.menuMeta`: Exposes CRUD operations for the **MenuMeta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MenuMetas
    * const menuMetas = await prisma.menuMeta.findMany()
    * ```
    */
  get menuMeta(): Prisma.MenuMetaDelegate<ExtArgs>;

  /**
   * `prisma.roleMenu`: Exposes CRUD operations for the **RoleMenu** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RoleMenus
    * const roleMenus = await prisma.roleMenu.findMany()
    * ```
    */
  get roleMenu(): Prisma.RoleMenuDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Role: 'Role',
    UserRole: 'UserRole',
    Permission: 'Permission',
    RolePermissions: 'RolePermissions',
    Policy: 'Policy',
    RolePolicy: 'RolePolicy',
    PermissionPolicy: 'PermissionPolicy',
    Menu: 'Menu',
    MenuMeta: 'MenuMeta',
    RoleMenu: 'RoleMenu'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "role" | "userRole" | "permission" | "rolePermissions" | "policy" | "rolePolicy" | "permissionPolicy" | "menu" | "menuMeta" | "roleMenu"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      UserRole: {
        payload: Prisma.$UserRolePayload<ExtArgs>
        fields: Prisma.UserRoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserRoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserRoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          findFirst: {
            args: Prisma.UserRoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserRoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          findMany: {
            args: Prisma.UserRoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>[]
          }
          create: {
            args: Prisma.UserRoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          createMany: {
            args: Prisma.UserRoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserRoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>[]
          }
          delete: {
            args: Prisma.UserRoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          update: {
            args: Prisma.UserRoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          deleteMany: {
            args: Prisma.UserRoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserRoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserRoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          aggregate: {
            args: Prisma.UserRoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserRole>
          }
          groupBy: {
            args: Prisma.UserRoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserRoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserRoleCountArgs<ExtArgs>
            result: $Utils.Optional<UserRoleCountAggregateOutputType> | number
          }
        }
      }
      Permission: {
        payload: Prisma.$PermissionPayload<ExtArgs>
        fields: Prisma.PermissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PermissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PermissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          findFirst: {
            args: Prisma.PermissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PermissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          findMany: {
            args: Prisma.PermissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>[]
          }
          create: {
            args: Prisma.PermissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          createMany: {
            args: Prisma.PermissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PermissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>[]
          }
          delete: {
            args: Prisma.PermissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          update: {
            args: Prisma.PermissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          deleteMany: {
            args: Prisma.PermissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PermissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PermissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          aggregate: {
            args: Prisma.PermissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePermission>
          }
          groupBy: {
            args: Prisma.PermissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PermissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PermissionCountArgs<ExtArgs>
            result: $Utils.Optional<PermissionCountAggregateOutputType> | number
          }
        }
      }
      RolePermissions: {
        payload: Prisma.$RolePermissionsPayload<ExtArgs>
        fields: Prisma.RolePermissionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RolePermissionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RolePermissionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionsPayload>
          }
          findFirst: {
            args: Prisma.RolePermissionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RolePermissionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionsPayload>
          }
          findMany: {
            args: Prisma.RolePermissionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionsPayload>[]
          }
          create: {
            args: Prisma.RolePermissionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionsPayload>
          }
          createMany: {
            args: Prisma.RolePermissionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RolePermissionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionsPayload>[]
          }
          delete: {
            args: Prisma.RolePermissionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionsPayload>
          }
          update: {
            args: Prisma.RolePermissionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionsPayload>
          }
          deleteMany: {
            args: Prisma.RolePermissionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RolePermissionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RolePermissionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionsPayload>
          }
          aggregate: {
            args: Prisma.RolePermissionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRolePermissions>
          }
          groupBy: {
            args: Prisma.RolePermissionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<RolePermissionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.RolePermissionsCountArgs<ExtArgs>
            result: $Utils.Optional<RolePermissionsCountAggregateOutputType> | number
          }
        }
      }
      Policy: {
        payload: Prisma.$PolicyPayload<ExtArgs>
        fields: Prisma.PolicyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PolicyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PolicyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyPayload>
          }
          findFirst: {
            args: Prisma.PolicyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PolicyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyPayload>
          }
          findMany: {
            args: Prisma.PolicyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyPayload>[]
          }
          create: {
            args: Prisma.PolicyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyPayload>
          }
          createMany: {
            args: Prisma.PolicyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PolicyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyPayload>[]
          }
          delete: {
            args: Prisma.PolicyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyPayload>
          }
          update: {
            args: Prisma.PolicyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyPayload>
          }
          deleteMany: {
            args: Prisma.PolicyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PolicyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PolicyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PolicyPayload>
          }
          aggregate: {
            args: Prisma.PolicyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePolicy>
          }
          groupBy: {
            args: Prisma.PolicyGroupByArgs<ExtArgs>
            result: $Utils.Optional<PolicyGroupByOutputType>[]
          }
          count: {
            args: Prisma.PolicyCountArgs<ExtArgs>
            result: $Utils.Optional<PolicyCountAggregateOutputType> | number
          }
        }
      }
      RolePolicy: {
        payload: Prisma.$RolePolicyPayload<ExtArgs>
        fields: Prisma.RolePolicyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RolePolicyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePolicyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RolePolicyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePolicyPayload>
          }
          findFirst: {
            args: Prisma.RolePolicyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePolicyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RolePolicyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePolicyPayload>
          }
          findMany: {
            args: Prisma.RolePolicyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePolicyPayload>[]
          }
          create: {
            args: Prisma.RolePolicyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePolicyPayload>
          }
          createMany: {
            args: Prisma.RolePolicyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RolePolicyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePolicyPayload>[]
          }
          delete: {
            args: Prisma.RolePolicyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePolicyPayload>
          }
          update: {
            args: Prisma.RolePolicyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePolicyPayload>
          }
          deleteMany: {
            args: Prisma.RolePolicyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RolePolicyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RolePolicyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePolicyPayload>
          }
          aggregate: {
            args: Prisma.RolePolicyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRolePolicy>
          }
          groupBy: {
            args: Prisma.RolePolicyGroupByArgs<ExtArgs>
            result: $Utils.Optional<RolePolicyGroupByOutputType>[]
          }
          count: {
            args: Prisma.RolePolicyCountArgs<ExtArgs>
            result: $Utils.Optional<RolePolicyCountAggregateOutputType> | number
          }
        }
      }
      PermissionPolicy: {
        payload: Prisma.$PermissionPolicyPayload<ExtArgs>
        fields: Prisma.PermissionPolicyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PermissionPolicyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPolicyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PermissionPolicyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPolicyPayload>
          }
          findFirst: {
            args: Prisma.PermissionPolicyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPolicyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PermissionPolicyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPolicyPayload>
          }
          findMany: {
            args: Prisma.PermissionPolicyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPolicyPayload>[]
          }
          create: {
            args: Prisma.PermissionPolicyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPolicyPayload>
          }
          createMany: {
            args: Prisma.PermissionPolicyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PermissionPolicyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPolicyPayload>[]
          }
          delete: {
            args: Prisma.PermissionPolicyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPolicyPayload>
          }
          update: {
            args: Prisma.PermissionPolicyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPolicyPayload>
          }
          deleteMany: {
            args: Prisma.PermissionPolicyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PermissionPolicyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PermissionPolicyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPolicyPayload>
          }
          aggregate: {
            args: Prisma.PermissionPolicyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePermissionPolicy>
          }
          groupBy: {
            args: Prisma.PermissionPolicyGroupByArgs<ExtArgs>
            result: $Utils.Optional<PermissionPolicyGroupByOutputType>[]
          }
          count: {
            args: Prisma.PermissionPolicyCountArgs<ExtArgs>
            result: $Utils.Optional<PermissionPolicyCountAggregateOutputType> | number
          }
        }
      }
      Menu: {
        payload: Prisma.$MenuPayload<ExtArgs>
        fields: Prisma.MenuFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MenuFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MenuFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>
          }
          findFirst: {
            args: Prisma.MenuFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MenuFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>
          }
          findMany: {
            args: Prisma.MenuFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>[]
          }
          create: {
            args: Prisma.MenuCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>
          }
          createMany: {
            args: Prisma.MenuCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MenuCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>[]
          }
          delete: {
            args: Prisma.MenuDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>
          }
          update: {
            args: Prisma.MenuUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>
          }
          deleteMany: {
            args: Prisma.MenuDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MenuUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MenuUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>
          }
          aggregate: {
            args: Prisma.MenuAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMenu>
          }
          groupBy: {
            args: Prisma.MenuGroupByArgs<ExtArgs>
            result: $Utils.Optional<MenuGroupByOutputType>[]
          }
          count: {
            args: Prisma.MenuCountArgs<ExtArgs>
            result: $Utils.Optional<MenuCountAggregateOutputType> | number
          }
        }
      }
      MenuMeta: {
        payload: Prisma.$MenuMetaPayload<ExtArgs>
        fields: Prisma.MenuMetaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MenuMetaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuMetaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MenuMetaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuMetaPayload>
          }
          findFirst: {
            args: Prisma.MenuMetaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuMetaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MenuMetaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuMetaPayload>
          }
          findMany: {
            args: Prisma.MenuMetaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuMetaPayload>[]
          }
          create: {
            args: Prisma.MenuMetaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuMetaPayload>
          }
          createMany: {
            args: Prisma.MenuMetaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MenuMetaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuMetaPayload>[]
          }
          delete: {
            args: Prisma.MenuMetaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuMetaPayload>
          }
          update: {
            args: Prisma.MenuMetaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuMetaPayload>
          }
          deleteMany: {
            args: Prisma.MenuMetaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MenuMetaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MenuMetaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuMetaPayload>
          }
          aggregate: {
            args: Prisma.MenuMetaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMenuMeta>
          }
          groupBy: {
            args: Prisma.MenuMetaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MenuMetaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MenuMetaCountArgs<ExtArgs>
            result: $Utils.Optional<MenuMetaCountAggregateOutputType> | number
          }
        }
      }
      RoleMenu: {
        payload: Prisma.$RoleMenuPayload<ExtArgs>
        fields: Prisma.RoleMenuFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleMenuFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoleMenuPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleMenuFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoleMenuPayload>
          }
          findFirst: {
            args: Prisma.RoleMenuFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoleMenuPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleMenuFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoleMenuPayload>
          }
          findMany: {
            args: Prisma.RoleMenuFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoleMenuPayload>[]
          }
          create: {
            args: Prisma.RoleMenuCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoleMenuPayload>
          }
          createMany: {
            args: Prisma.RoleMenuCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoleMenuCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoleMenuPayload>[]
          }
          delete: {
            args: Prisma.RoleMenuDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoleMenuPayload>
          }
          update: {
            args: Prisma.RoleMenuUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoleMenuPayload>
          }
          deleteMany: {
            args: Prisma.RoleMenuDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleMenuUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RoleMenuUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoleMenuPayload>
          }
          aggregate: {
            args: Prisma.RoleMenuAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoleMenu>
          }
          groupBy: {
            args: Prisma.RoleMenuGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleMenuGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleMenuCountArgs<ExtArgs>
            result: $Utils.Optional<RoleMenuCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    UserRole: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserRole?: boolean | UserCountOutputTypeCountUserRoleArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserRoleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRoleWhereInput
  }


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    users: number
    RolePermissions: number
    RolePolicy: number
    RoleMenu: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | RoleCountOutputTypeCountUsersArgs
    RolePermissions?: boolean | RoleCountOutputTypeCountRolePermissionsArgs
    RolePolicy?: boolean | RoleCountOutputTypeCountRolePolicyArgs
    RoleMenu?: boolean | RoleCountOutputTypeCountRoleMenuArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRoleWhereInput
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountRolePermissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolePermissionsWhereInput
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountRolePolicyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolePolicyWhereInput
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountRoleMenuArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleMenuWhereInput
  }


  /**
   * Count Type PermissionCountOutputType
   */

  export type PermissionCountOutputType = {
    RolePermissions: number
    PermissionPolicy: number
  }

  export type PermissionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    RolePermissions?: boolean | PermissionCountOutputTypeCountRolePermissionsArgs
    PermissionPolicy?: boolean | PermissionCountOutputTypeCountPermissionPolicyArgs
  }

  // Custom InputTypes
  /**
   * PermissionCountOutputType without action
   */
  export type PermissionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionCountOutputType
     */
    select?: PermissionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PermissionCountOutputType without action
   */
  export type PermissionCountOutputTypeCountRolePermissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolePermissionsWhereInput
  }

  /**
   * PermissionCountOutputType without action
   */
  export type PermissionCountOutputTypeCountPermissionPolicyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermissionPolicyWhereInput
  }


  /**
   * Count Type PolicyCountOutputType
   */

  export type PolicyCountOutputType = {
    RolePolicy: number
    PermissionPolicy: number
  }

  export type PolicyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    RolePolicy?: boolean | PolicyCountOutputTypeCountRolePolicyArgs
    PermissionPolicy?: boolean | PolicyCountOutputTypeCountPermissionPolicyArgs
  }

  // Custom InputTypes
  /**
   * PolicyCountOutputType without action
   */
  export type PolicyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PolicyCountOutputType
     */
    select?: PolicyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PolicyCountOutputType without action
   */
  export type PolicyCountOutputTypeCountRolePolicyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolePolicyWhereInput
  }

  /**
   * PolicyCountOutputType without action
   */
  export type PolicyCountOutputTypeCountPermissionPolicyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermissionPolicyWhereInput
  }


  /**
   * Count Type MenuCountOutputType
   */

  export type MenuCountOutputType = {
    children: number
    roleMenus: number
  }

  export type MenuCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    children?: boolean | MenuCountOutputTypeCountChildrenArgs
    roleMenus?: boolean | MenuCountOutputTypeCountRoleMenusArgs
  }

  // Custom InputTypes
  /**
   * MenuCountOutputType without action
   */
  export type MenuCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuCountOutputType
     */
    select?: MenuCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MenuCountOutputType without action
   */
  export type MenuCountOutputTypeCountChildrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenuWhereInput
  }

  /**
   * MenuCountOutputType without action
   */
  export type MenuCountOutputTypeCountRoleMenusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleMenuWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    password: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    UserRole?: boolean | User$UserRoleArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserRole?: boolean | User$UserRoleArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      UserRole: Prisma.$UserRolePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    UserRole<T extends User$UserRoleArgs<ExtArgs> = {}>(args?: Subset<T, User$UserRoleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.UserRole
   */
  export type User$UserRoleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    where?: UserRoleWhereInput
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    cursor?: UserRoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleAvgAggregateOutputType = {
    id: number | null
  }

  export type RoleSumAggregateOutputType = {
    id: number | null
  }

  export type RoleMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
  }

  export type RoleMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    name: number
    description: number
    _all: number
  }


  export type RoleAvgAggregateInputType = {
    id?: true
  }

  export type RoleSumAggregateInputType = {
    id?: true
  }

  export type RoleMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _avg?: RoleAvgAggregateInputType
    _sum?: RoleSumAggregateInputType
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: number
    name: string
    description: string | null
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    users?: boolean | Role$usersArgs<ExtArgs>
    RolePermissions?: boolean | Role$RolePermissionsArgs<ExtArgs>
    RolePolicy?: boolean | Role$RolePolicyArgs<ExtArgs>
    RoleMenu?: boolean | Role$RoleMenuArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
  }

  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Role$usersArgs<ExtArgs>
    RolePermissions?: boolean | Role$RolePermissionsArgs<ExtArgs>
    RolePolicy?: boolean | Role$RolePolicyArgs<ExtArgs>
    RoleMenu?: boolean | Role$RoleMenuArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      users: Prisma.$UserRolePayload<ExtArgs>[]
      RolePermissions: Prisma.$RolePermissionsPayload<ExtArgs>[]
      RolePolicy: Prisma.$RolePolicyPayload<ExtArgs>[]
      RoleMenu: Prisma.$RoleMenuPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {RoleCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoleCreateManyAndReturnArgs>(args?: SelectSubset<T, RoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Role$usersArgs<ExtArgs> = {}>(args?: Subset<T, Role$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findMany"> | Null>
    RolePermissions<T extends Role$RolePermissionsArgs<ExtArgs> = {}>(args?: Subset<T, Role$RolePermissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePermissionsPayload<ExtArgs>, T, "findMany"> | Null>
    RolePolicy<T extends Role$RolePolicyArgs<ExtArgs> = {}>(args?: Subset<T, Role$RolePolicyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePolicyPayload<ExtArgs>, T, "findMany"> | Null>
    RoleMenu<T extends Role$RoleMenuArgs<ExtArgs> = {}>(args?: Subset<T, Role$RoleMenuArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoleMenuPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Role model
   */ 
  interface RoleFieldRefs {
    readonly id: FieldRef<"Role", 'Int'>
    readonly name: FieldRef<"Role", 'String'>
    readonly description: FieldRef<"Role", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role createManyAndReturn
   */
  export type RoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
  }

  /**
   * Role.users
   */
  export type Role$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    where?: UserRoleWhereInput
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    cursor?: UserRoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * Role.RolePermissions
   */
  export type Role$RolePermissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermissions
     */
    select?: RolePermissionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionsInclude<ExtArgs> | null
    where?: RolePermissionsWhereInput
    orderBy?: RolePermissionsOrderByWithRelationInput | RolePermissionsOrderByWithRelationInput[]
    cursor?: RolePermissionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RolePermissionsScalarFieldEnum | RolePermissionsScalarFieldEnum[]
  }

  /**
   * Role.RolePolicy
   */
  export type Role$RolePolicyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePolicy
     */
    select?: RolePolicySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePolicyInclude<ExtArgs> | null
    where?: RolePolicyWhereInput
    orderBy?: RolePolicyOrderByWithRelationInput | RolePolicyOrderByWithRelationInput[]
    cursor?: RolePolicyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RolePolicyScalarFieldEnum | RolePolicyScalarFieldEnum[]
  }

  /**
   * Role.RoleMenu
   */
  export type Role$RoleMenuArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleMenu
     */
    select?: RoleMenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleMenuInclude<ExtArgs> | null
    where?: RoleMenuWhereInput
    orderBy?: RoleMenuOrderByWithRelationInput | RoleMenuOrderByWithRelationInput[]
    cursor?: RoleMenuWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoleMenuScalarFieldEnum | RoleMenuScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model UserRole
   */

  export type AggregateUserRole = {
    _count: UserRoleCountAggregateOutputType | null
    _avg: UserRoleAvgAggregateOutputType | null
    _sum: UserRoleSumAggregateOutputType | null
    _min: UserRoleMinAggregateOutputType | null
    _max: UserRoleMaxAggregateOutputType | null
  }

  export type UserRoleAvgAggregateOutputType = {
    userId: number | null
    roleId: number | null
  }

  export type UserRoleSumAggregateOutputType = {
    userId: number | null
    roleId: number | null
  }

  export type UserRoleMinAggregateOutputType = {
    userId: number | null
    roleId: number | null
  }

  export type UserRoleMaxAggregateOutputType = {
    userId: number | null
    roleId: number | null
  }

  export type UserRoleCountAggregateOutputType = {
    userId: number
    roleId: number
    _all: number
  }


  export type UserRoleAvgAggregateInputType = {
    userId?: true
    roleId?: true
  }

  export type UserRoleSumAggregateInputType = {
    userId?: true
    roleId?: true
  }

  export type UserRoleMinAggregateInputType = {
    userId?: true
    roleId?: true
  }

  export type UserRoleMaxAggregateInputType = {
    userId?: true
    roleId?: true
  }

  export type UserRoleCountAggregateInputType = {
    userId?: true
    roleId?: true
    _all?: true
  }

  export type UserRoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRole to aggregate.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserRoles
    **/
    _count?: true | UserRoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserRoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserRoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserRoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserRoleMaxAggregateInputType
  }

  export type GetUserRoleAggregateType<T extends UserRoleAggregateArgs> = {
        [P in keyof T & keyof AggregateUserRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserRole[P]>
      : GetScalarType<T[P], AggregateUserRole[P]>
  }




  export type UserRoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRoleWhereInput
    orderBy?: UserRoleOrderByWithAggregationInput | UserRoleOrderByWithAggregationInput[]
    by: UserRoleScalarFieldEnum[] | UserRoleScalarFieldEnum
    having?: UserRoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserRoleCountAggregateInputType | true
    _avg?: UserRoleAvgAggregateInputType
    _sum?: UserRoleSumAggregateInputType
    _min?: UserRoleMinAggregateInputType
    _max?: UserRoleMaxAggregateInputType
  }

  export type UserRoleGroupByOutputType = {
    userId: number
    roleId: number
    _count: UserRoleCountAggregateOutputType | null
    _avg: UserRoleAvgAggregateOutputType | null
    _sum: UserRoleSumAggregateOutputType | null
    _min: UserRoleMinAggregateOutputType | null
    _max: UserRoleMaxAggregateOutputType | null
  }

  type GetUserRoleGroupByPayload<T extends UserRoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserRoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserRoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserRoleGroupByOutputType[P]>
            : GetScalarType<T[P], UserRoleGroupByOutputType[P]>
        }
      >
    >


  export type UserRoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    roleId?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userRole"]>

  export type UserRoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    roleId?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userRole"]>

  export type UserRoleSelectScalar = {
    userId?: boolean
    roleId?: boolean
  }

  export type UserRoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserRoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserRolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserRole"
    objects: {
      role: Prisma.$RolePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      roleId: number
    }, ExtArgs["result"]["userRole"]>
    composites: {}
  }

  type UserRoleGetPayload<S extends boolean | null | undefined | UserRoleDefaultArgs> = $Result.GetResult<Prisma.$UserRolePayload, S>

  type UserRoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserRoleFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserRoleCountAggregateInputType | true
    }

  export interface UserRoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserRole'], meta: { name: 'UserRole' } }
    /**
     * Find zero or one UserRole that matches the filter.
     * @param {UserRoleFindUniqueArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserRoleFindUniqueArgs>(args: SelectSubset<T, UserRoleFindUniqueArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserRole that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserRoleFindUniqueOrThrowArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserRoleFindUniqueOrThrowArgs>(args: SelectSubset<T, UserRoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserRole that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleFindFirstArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserRoleFindFirstArgs>(args?: SelectSubset<T, UserRoleFindFirstArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserRole that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleFindFirstOrThrowArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserRoleFindFirstOrThrowArgs>(args?: SelectSubset<T, UserRoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserRoles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserRoles
     * const userRoles = await prisma.userRole.findMany()
     * 
     * // Get first 10 UserRoles
     * const userRoles = await prisma.userRole.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userRoleWithUserIdOnly = await prisma.userRole.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserRoleFindManyArgs>(args?: SelectSubset<T, UserRoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserRole.
     * @param {UserRoleCreateArgs} args - Arguments to create a UserRole.
     * @example
     * // Create one UserRole
     * const UserRole = await prisma.userRole.create({
     *   data: {
     *     // ... data to create a UserRole
     *   }
     * })
     * 
     */
    create<T extends UserRoleCreateArgs>(args: SelectSubset<T, UserRoleCreateArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserRoles.
     * @param {UserRoleCreateManyArgs} args - Arguments to create many UserRoles.
     * @example
     * // Create many UserRoles
     * const userRole = await prisma.userRole.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserRoleCreateManyArgs>(args?: SelectSubset<T, UserRoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserRoles and returns the data saved in the database.
     * @param {UserRoleCreateManyAndReturnArgs} args - Arguments to create many UserRoles.
     * @example
     * // Create many UserRoles
     * const userRole = await prisma.userRole.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserRoles and only return the `userId`
     * const userRoleWithUserIdOnly = await prisma.userRole.createManyAndReturn({ 
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserRoleCreateManyAndReturnArgs>(args?: SelectSubset<T, UserRoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UserRole.
     * @param {UserRoleDeleteArgs} args - Arguments to delete one UserRole.
     * @example
     * // Delete one UserRole
     * const UserRole = await prisma.userRole.delete({
     *   where: {
     *     // ... filter to delete one UserRole
     *   }
     * })
     * 
     */
    delete<T extends UserRoleDeleteArgs>(args: SelectSubset<T, UserRoleDeleteArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserRole.
     * @param {UserRoleUpdateArgs} args - Arguments to update one UserRole.
     * @example
     * // Update one UserRole
     * const userRole = await prisma.userRole.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserRoleUpdateArgs>(args: SelectSubset<T, UserRoleUpdateArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserRoles.
     * @param {UserRoleDeleteManyArgs} args - Arguments to filter UserRoles to delete.
     * @example
     * // Delete a few UserRoles
     * const { count } = await prisma.userRole.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserRoleDeleteManyArgs>(args?: SelectSubset<T, UserRoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserRoles
     * const userRole = await prisma.userRole.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserRoleUpdateManyArgs>(args: SelectSubset<T, UserRoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserRole.
     * @param {UserRoleUpsertArgs} args - Arguments to update or create a UserRole.
     * @example
     * // Update or create a UserRole
     * const userRole = await prisma.userRole.upsert({
     *   create: {
     *     // ... data to create a UserRole
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserRole we want to update
     *   }
     * })
     */
    upsert<T extends UserRoleUpsertArgs>(args: SelectSubset<T, UserRoleUpsertArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UserRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleCountArgs} args - Arguments to filter UserRoles to count.
     * @example
     * // Count the number of UserRoles
     * const count = await prisma.userRole.count({
     *   where: {
     *     // ... the filter for the UserRoles we want to count
     *   }
     * })
    **/
    count<T extends UserRoleCountArgs>(
      args?: Subset<T, UserRoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserRoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserRoleAggregateArgs>(args: Subset<T, UserRoleAggregateArgs>): Prisma.PrismaPromise<GetUserRoleAggregateType<T>>

    /**
     * Group by UserRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserRoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserRoleGroupByArgs['orderBy'] }
        : { orderBy?: UserRoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserRoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserRole model
   */
  readonly fields: UserRoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserRole.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserRoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserRole model
   */ 
  interface UserRoleFieldRefs {
    readonly userId: FieldRef<"UserRole", 'Int'>
    readonly roleId: FieldRef<"UserRole", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UserRole findUnique
   */
  export type UserRoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole findUniqueOrThrow
   */
  export type UserRoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole findFirst
   */
  export type UserRoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRoles.
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRoles.
     */
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * UserRole findFirstOrThrow
   */
  export type UserRoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRoles.
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRoles.
     */
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * UserRole findMany
   */
  export type UserRoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRoles to fetch.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserRoles.
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * UserRole create
   */
  export type UserRoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * The data needed to create a UserRole.
     */
    data: XOR<UserRoleCreateInput, UserRoleUncheckedCreateInput>
  }

  /**
   * UserRole createMany
   */
  export type UserRoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserRoles.
     */
    data: UserRoleCreateManyInput | UserRoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserRole createManyAndReturn
   */
  export type UserRoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UserRoles.
     */
    data: UserRoleCreateManyInput | UserRoleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserRole update
   */
  export type UserRoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * The data needed to update a UserRole.
     */
    data: XOR<UserRoleUpdateInput, UserRoleUncheckedUpdateInput>
    /**
     * Choose, which UserRole to update.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole updateMany
   */
  export type UserRoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserRoles.
     */
    data: XOR<UserRoleUpdateManyMutationInput, UserRoleUncheckedUpdateManyInput>
    /**
     * Filter which UserRoles to update
     */
    where?: UserRoleWhereInput
  }

  /**
   * UserRole upsert
   */
  export type UserRoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * The filter to search for the UserRole to update in case it exists.
     */
    where: UserRoleWhereUniqueInput
    /**
     * In case the UserRole found by the `where` argument doesn't exist, create a new UserRole with this data.
     */
    create: XOR<UserRoleCreateInput, UserRoleUncheckedCreateInput>
    /**
     * In case the UserRole was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserRoleUpdateInput, UserRoleUncheckedUpdateInput>
  }

  /**
   * UserRole delete
   */
  export type UserRoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter which UserRole to delete.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole deleteMany
   */
  export type UserRoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRoles to delete
     */
    where?: UserRoleWhereInput
  }

  /**
   * UserRole without action
   */
  export type UserRoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
  }


  /**
   * Model Permission
   */

  export type AggregatePermission = {
    _count: PermissionCountAggregateOutputType | null
    _avg: PermissionAvgAggregateOutputType | null
    _sum: PermissionSumAggregateOutputType | null
    _min: PermissionMinAggregateOutputType | null
    _max: PermissionMaxAggregateOutputType | null
  }

  export type PermissionAvgAggregateOutputType = {
    id: number | null
  }

  export type PermissionSumAggregateOutputType = {
    id: number | null
  }

  export type PermissionMinAggregateOutputType = {
    id: number | null
    name: string | null
    action: string | null
    description: string | null
  }

  export type PermissionMaxAggregateOutputType = {
    id: number | null
    name: string | null
    action: string | null
    description: string | null
  }

  export type PermissionCountAggregateOutputType = {
    id: number
    name: number
    action: number
    description: number
    _all: number
  }


  export type PermissionAvgAggregateInputType = {
    id?: true
  }

  export type PermissionSumAggregateInputType = {
    id?: true
  }

  export type PermissionMinAggregateInputType = {
    id?: true
    name?: true
    action?: true
    description?: true
  }

  export type PermissionMaxAggregateInputType = {
    id?: true
    name?: true
    action?: true
    description?: true
  }

  export type PermissionCountAggregateInputType = {
    id?: true
    name?: true
    action?: true
    description?: true
    _all?: true
  }

  export type PermissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Permission to aggregate.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Permissions
    **/
    _count?: true | PermissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PermissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PermissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PermissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PermissionMaxAggregateInputType
  }

  export type GetPermissionAggregateType<T extends PermissionAggregateArgs> = {
        [P in keyof T & keyof AggregatePermission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePermission[P]>
      : GetScalarType<T[P], AggregatePermission[P]>
  }




  export type PermissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermissionWhereInput
    orderBy?: PermissionOrderByWithAggregationInput | PermissionOrderByWithAggregationInput[]
    by: PermissionScalarFieldEnum[] | PermissionScalarFieldEnum
    having?: PermissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PermissionCountAggregateInputType | true
    _avg?: PermissionAvgAggregateInputType
    _sum?: PermissionSumAggregateInputType
    _min?: PermissionMinAggregateInputType
    _max?: PermissionMaxAggregateInputType
  }

  export type PermissionGroupByOutputType = {
    id: number
    name: string
    action: string
    description: string | null
    _count: PermissionCountAggregateOutputType | null
    _avg: PermissionAvgAggregateOutputType | null
    _sum: PermissionSumAggregateOutputType | null
    _min: PermissionMinAggregateOutputType | null
    _max: PermissionMaxAggregateOutputType | null
  }

  type GetPermissionGroupByPayload<T extends PermissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PermissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PermissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PermissionGroupByOutputType[P]>
            : GetScalarType<T[P], PermissionGroupByOutputType[P]>
        }
      >
    >


  export type PermissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    action?: boolean
    description?: boolean
    RolePermissions?: boolean | Permission$RolePermissionsArgs<ExtArgs>
    PermissionPolicy?: boolean | Permission$PermissionPolicyArgs<ExtArgs>
    _count?: boolean | PermissionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["permission"]>

  export type PermissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    action?: boolean
    description?: boolean
  }, ExtArgs["result"]["permission"]>

  export type PermissionSelectScalar = {
    id?: boolean
    name?: boolean
    action?: boolean
    description?: boolean
  }

  export type PermissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    RolePermissions?: boolean | Permission$RolePermissionsArgs<ExtArgs>
    PermissionPolicy?: boolean | Permission$PermissionPolicyArgs<ExtArgs>
    _count?: boolean | PermissionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PermissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PermissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Permission"
    objects: {
      RolePermissions: Prisma.$RolePermissionsPayload<ExtArgs>[]
      PermissionPolicy: Prisma.$PermissionPolicyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      action: string
      description: string | null
    }, ExtArgs["result"]["permission"]>
    composites: {}
  }

  type PermissionGetPayload<S extends boolean | null | undefined | PermissionDefaultArgs> = $Result.GetResult<Prisma.$PermissionPayload, S>

  type PermissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PermissionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PermissionCountAggregateInputType | true
    }

  export interface PermissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Permission'], meta: { name: 'Permission' } }
    /**
     * Find zero or one Permission that matches the filter.
     * @param {PermissionFindUniqueArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PermissionFindUniqueArgs>(args: SelectSubset<T, PermissionFindUniqueArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Permission that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PermissionFindUniqueOrThrowArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PermissionFindUniqueOrThrowArgs>(args: SelectSubset<T, PermissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Permission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindFirstArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PermissionFindFirstArgs>(args?: SelectSubset<T, PermissionFindFirstArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Permission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindFirstOrThrowArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PermissionFindFirstOrThrowArgs>(args?: SelectSubset<T, PermissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Permissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Permissions
     * const permissions = await prisma.permission.findMany()
     * 
     * // Get first 10 Permissions
     * const permissions = await prisma.permission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const permissionWithIdOnly = await prisma.permission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PermissionFindManyArgs>(args?: SelectSubset<T, PermissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Permission.
     * @param {PermissionCreateArgs} args - Arguments to create a Permission.
     * @example
     * // Create one Permission
     * const Permission = await prisma.permission.create({
     *   data: {
     *     // ... data to create a Permission
     *   }
     * })
     * 
     */
    create<T extends PermissionCreateArgs>(args: SelectSubset<T, PermissionCreateArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Permissions.
     * @param {PermissionCreateManyArgs} args - Arguments to create many Permissions.
     * @example
     * // Create many Permissions
     * const permission = await prisma.permission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PermissionCreateManyArgs>(args?: SelectSubset<T, PermissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Permissions and returns the data saved in the database.
     * @param {PermissionCreateManyAndReturnArgs} args - Arguments to create many Permissions.
     * @example
     * // Create many Permissions
     * const permission = await prisma.permission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Permissions and only return the `id`
     * const permissionWithIdOnly = await prisma.permission.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PermissionCreateManyAndReturnArgs>(args?: SelectSubset<T, PermissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Permission.
     * @param {PermissionDeleteArgs} args - Arguments to delete one Permission.
     * @example
     * // Delete one Permission
     * const Permission = await prisma.permission.delete({
     *   where: {
     *     // ... filter to delete one Permission
     *   }
     * })
     * 
     */
    delete<T extends PermissionDeleteArgs>(args: SelectSubset<T, PermissionDeleteArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Permission.
     * @param {PermissionUpdateArgs} args - Arguments to update one Permission.
     * @example
     * // Update one Permission
     * const permission = await prisma.permission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PermissionUpdateArgs>(args: SelectSubset<T, PermissionUpdateArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Permissions.
     * @param {PermissionDeleteManyArgs} args - Arguments to filter Permissions to delete.
     * @example
     * // Delete a few Permissions
     * const { count } = await prisma.permission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PermissionDeleteManyArgs>(args?: SelectSubset<T, PermissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Permissions
     * const permission = await prisma.permission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PermissionUpdateManyArgs>(args: SelectSubset<T, PermissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Permission.
     * @param {PermissionUpsertArgs} args - Arguments to update or create a Permission.
     * @example
     * // Update or create a Permission
     * const permission = await prisma.permission.upsert({
     *   create: {
     *     // ... data to create a Permission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Permission we want to update
     *   }
     * })
     */
    upsert<T extends PermissionUpsertArgs>(args: SelectSubset<T, PermissionUpsertArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionCountArgs} args - Arguments to filter Permissions to count.
     * @example
     * // Count the number of Permissions
     * const count = await prisma.permission.count({
     *   where: {
     *     // ... the filter for the Permissions we want to count
     *   }
     * })
    **/
    count<T extends PermissionCountArgs>(
      args?: Subset<T, PermissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PermissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PermissionAggregateArgs>(args: Subset<T, PermissionAggregateArgs>): Prisma.PrismaPromise<GetPermissionAggregateType<T>>

    /**
     * Group by Permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PermissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PermissionGroupByArgs['orderBy'] }
        : { orderBy?: PermissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PermissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPermissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Permission model
   */
  readonly fields: PermissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Permission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PermissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    RolePermissions<T extends Permission$RolePermissionsArgs<ExtArgs> = {}>(args?: Subset<T, Permission$RolePermissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePermissionsPayload<ExtArgs>, T, "findMany"> | Null>
    PermissionPolicy<T extends Permission$PermissionPolicyArgs<ExtArgs> = {}>(args?: Subset<T, Permission$PermissionPolicyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionPolicyPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Permission model
   */ 
  interface PermissionFieldRefs {
    readonly id: FieldRef<"Permission", 'Int'>
    readonly name: FieldRef<"Permission", 'String'>
    readonly action: FieldRef<"Permission", 'String'>
    readonly description: FieldRef<"Permission", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Permission findUnique
   */
  export type PermissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission findUniqueOrThrow
   */
  export type PermissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission findFirst
   */
  export type PermissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Permissions.
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permissions.
     */
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * Permission findFirstOrThrow
   */
  export type PermissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Permissions.
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permissions.
     */
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * Permission findMany
   */
  export type PermissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permissions to fetch.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Permissions.
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * Permission create
   */
  export type PermissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * The data needed to create a Permission.
     */
    data: XOR<PermissionCreateInput, PermissionUncheckedCreateInput>
  }

  /**
   * Permission createMany
   */
  export type PermissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Permissions.
     */
    data: PermissionCreateManyInput | PermissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Permission createManyAndReturn
   */
  export type PermissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Permissions.
     */
    data: PermissionCreateManyInput | PermissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Permission update
   */
  export type PermissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * The data needed to update a Permission.
     */
    data: XOR<PermissionUpdateInput, PermissionUncheckedUpdateInput>
    /**
     * Choose, which Permission to update.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission updateMany
   */
  export type PermissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Permissions.
     */
    data: XOR<PermissionUpdateManyMutationInput, PermissionUncheckedUpdateManyInput>
    /**
     * Filter which Permissions to update
     */
    where?: PermissionWhereInput
  }

  /**
   * Permission upsert
   */
  export type PermissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * The filter to search for the Permission to update in case it exists.
     */
    where: PermissionWhereUniqueInput
    /**
     * In case the Permission found by the `where` argument doesn't exist, create a new Permission with this data.
     */
    create: XOR<PermissionCreateInput, PermissionUncheckedCreateInput>
    /**
     * In case the Permission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PermissionUpdateInput, PermissionUncheckedUpdateInput>
  }

  /**
   * Permission delete
   */
  export type PermissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter which Permission to delete.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission deleteMany
   */
  export type PermissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Permissions to delete
     */
    where?: PermissionWhereInput
  }

  /**
   * Permission.RolePermissions
   */
  export type Permission$RolePermissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermissions
     */
    select?: RolePermissionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionsInclude<ExtArgs> | null
    where?: RolePermissionsWhereInput
    orderBy?: RolePermissionsOrderByWithRelationInput | RolePermissionsOrderByWithRelationInput[]
    cursor?: RolePermissionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RolePermissionsScalarFieldEnum | RolePermissionsScalarFieldEnum[]
  }

  /**
   * Permission.PermissionPolicy
   */
  export type Permission$PermissionPolicyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionPolicy
     */
    select?: PermissionPolicySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionPolicyInclude<ExtArgs> | null
    where?: PermissionPolicyWhereInput
    orderBy?: PermissionPolicyOrderByWithRelationInput | PermissionPolicyOrderByWithRelationInput[]
    cursor?: PermissionPolicyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PermissionPolicyScalarFieldEnum | PermissionPolicyScalarFieldEnum[]
  }

  /**
   * Permission without action
   */
  export type PermissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
  }


  /**
   * Model RolePermissions
   */

  export type AggregateRolePermissions = {
    _count: RolePermissionsCountAggregateOutputType | null
    _avg: RolePermissionsAvgAggregateOutputType | null
    _sum: RolePermissionsSumAggregateOutputType | null
    _min: RolePermissionsMinAggregateOutputType | null
    _max: RolePermissionsMaxAggregateOutputType | null
  }

  export type RolePermissionsAvgAggregateOutputType = {
    roleId: number | null
    permissionId: number | null
  }

  export type RolePermissionsSumAggregateOutputType = {
    roleId: number | null
    permissionId: number | null
  }

  export type RolePermissionsMinAggregateOutputType = {
    roleId: number | null
    permissionId: number | null
  }

  export type RolePermissionsMaxAggregateOutputType = {
    roleId: number | null
    permissionId: number | null
  }

  export type RolePermissionsCountAggregateOutputType = {
    roleId: number
    permissionId: number
    _all: number
  }


  export type RolePermissionsAvgAggregateInputType = {
    roleId?: true
    permissionId?: true
  }

  export type RolePermissionsSumAggregateInputType = {
    roleId?: true
    permissionId?: true
  }

  export type RolePermissionsMinAggregateInputType = {
    roleId?: true
    permissionId?: true
  }

  export type RolePermissionsMaxAggregateInputType = {
    roleId?: true
    permissionId?: true
  }

  export type RolePermissionsCountAggregateInputType = {
    roleId?: true
    permissionId?: true
    _all?: true
  }

  export type RolePermissionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RolePermissions to aggregate.
     */
    where?: RolePermissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolePermissions to fetch.
     */
    orderBy?: RolePermissionsOrderByWithRelationInput | RolePermissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RolePermissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolePermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolePermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RolePermissions
    **/
    _count?: true | RolePermissionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RolePermissionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RolePermissionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RolePermissionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RolePermissionsMaxAggregateInputType
  }

  export type GetRolePermissionsAggregateType<T extends RolePermissionsAggregateArgs> = {
        [P in keyof T & keyof AggregateRolePermissions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRolePermissions[P]>
      : GetScalarType<T[P], AggregateRolePermissions[P]>
  }




  export type RolePermissionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolePermissionsWhereInput
    orderBy?: RolePermissionsOrderByWithAggregationInput | RolePermissionsOrderByWithAggregationInput[]
    by: RolePermissionsScalarFieldEnum[] | RolePermissionsScalarFieldEnum
    having?: RolePermissionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RolePermissionsCountAggregateInputType | true
    _avg?: RolePermissionsAvgAggregateInputType
    _sum?: RolePermissionsSumAggregateInputType
    _min?: RolePermissionsMinAggregateInputType
    _max?: RolePermissionsMaxAggregateInputType
  }

  export type RolePermissionsGroupByOutputType = {
    roleId: number
    permissionId: number
    _count: RolePermissionsCountAggregateOutputType | null
    _avg: RolePermissionsAvgAggregateOutputType | null
    _sum: RolePermissionsSumAggregateOutputType | null
    _min: RolePermissionsMinAggregateOutputType | null
    _max: RolePermissionsMaxAggregateOutputType | null
  }

  type GetRolePermissionsGroupByPayload<T extends RolePermissionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RolePermissionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RolePermissionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RolePermissionsGroupByOutputType[P]>
            : GetScalarType<T[P], RolePermissionsGroupByOutputType[P]>
        }
      >
    >


  export type RolePermissionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    roleId?: boolean
    permissionId?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    permission?: boolean | PermissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rolePermissions"]>

  export type RolePermissionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    roleId?: boolean
    permissionId?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    permission?: boolean | PermissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rolePermissions"]>

  export type RolePermissionsSelectScalar = {
    roleId?: boolean
    permissionId?: boolean
  }

  export type RolePermissionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    permission?: boolean | PermissionDefaultArgs<ExtArgs>
  }
  export type RolePermissionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    permission?: boolean | PermissionDefaultArgs<ExtArgs>
  }

  export type $RolePermissionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RolePermissions"
    objects: {
      role: Prisma.$RolePayload<ExtArgs>
      permission: Prisma.$PermissionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      roleId: number
      permissionId: number
    }, ExtArgs["result"]["rolePermissions"]>
    composites: {}
  }

  type RolePermissionsGetPayload<S extends boolean | null | undefined | RolePermissionsDefaultArgs> = $Result.GetResult<Prisma.$RolePermissionsPayload, S>

  type RolePermissionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RolePermissionsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RolePermissionsCountAggregateInputType | true
    }

  export interface RolePermissionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RolePermissions'], meta: { name: 'RolePermissions' } }
    /**
     * Find zero or one RolePermissions that matches the filter.
     * @param {RolePermissionsFindUniqueArgs} args - Arguments to find a RolePermissions
     * @example
     * // Get one RolePermissions
     * const rolePermissions = await prisma.rolePermissions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RolePermissionsFindUniqueArgs>(args: SelectSubset<T, RolePermissionsFindUniqueArgs<ExtArgs>>): Prisma__RolePermissionsClient<$Result.GetResult<Prisma.$RolePermissionsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one RolePermissions that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RolePermissionsFindUniqueOrThrowArgs} args - Arguments to find a RolePermissions
     * @example
     * // Get one RolePermissions
     * const rolePermissions = await prisma.rolePermissions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RolePermissionsFindUniqueOrThrowArgs>(args: SelectSubset<T, RolePermissionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RolePermissionsClient<$Result.GetResult<Prisma.$RolePermissionsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first RolePermissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionsFindFirstArgs} args - Arguments to find a RolePermissions
     * @example
     * // Get one RolePermissions
     * const rolePermissions = await prisma.rolePermissions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RolePermissionsFindFirstArgs>(args?: SelectSubset<T, RolePermissionsFindFirstArgs<ExtArgs>>): Prisma__RolePermissionsClient<$Result.GetResult<Prisma.$RolePermissionsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first RolePermissions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionsFindFirstOrThrowArgs} args - Arguments to find a RolePermissions
     * @example
     * // Get one RolePermissions
     * const rolePermissions = await prisma.rolePermissions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RolePermissionsFindFirstOrThrowArgs>(args?: SelectSubset<T, RolePermissionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__RolePermissionsClient<$Result.GetResult<Prisma.$RolePermissionsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more RolePermissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RolePermissions
     * const rolePermissions = await prisma.rolePermissions.findMany()
     * 
     * // Get first 10 RolePermissions
     * const rolePermissions = await prisma.rolePermissions.findMany({ take: 10 })
     * 
     * // Only select the `roleId`
     * const rolePermissionsWithRoleIdOnly = await prisma.rolePermissions.findMany({ select: { roleId: true } })
     * 
     */
    findMany<T extends RolePermissionsFindManyArgs>(args?: SelectSubset<T, RolePermissionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePermissionsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a RolePermissions.
     * @param {RolePermissionsCreateArgs} args - Arguments to create a RolePermissions.
     * @example
     * // Create one RolePermissions
     * const RolePermissions = await prisma.rolePermissions.create({
     *   data: {
     *     // ... data to create a RolePermissions
     *   }
     * })
     * 
     */
    create<T extends RolePermissionsCreateArgs>(args: SelectSubset<T, RolePermissionsCreateArgs<ExtArgs>>): Prisma__RolePermissionsClient<$Result.GetResult<Prisma.$RolePermissionsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many RolePermissions.
     * @param {RolePermissionsCreateManyArgs} args - Arguments to create many RolePermissions.
     * @example
     * // Create many RolePermissions
     * const rolePermissions = await prisma.rolePermissions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RolePermissionsCreateManyArgs>(args?: SelectSubset<T, RolePermissionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RolePermissions and returns the data saved in the database.
     * @param {RolePermissionsCreateManyAndReturnArgs} args - Arguments to create many RolePermissions.
     * @example
     * // Create many RolePermissions
     * const rolePermissions = await prisma.rolePermissions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RolePermissions and only return the `roleId`
     * const rolePermissionsWithRoleIdOnly = await prisma.rolePermissions.createManyAndReturn({ 
     *   select: { roleId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RolePermissionsCreateManyAndReturnArgs>(args?: SelectSubset<T, RolePermissionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePermissionsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a RolePermissions.
     * @param {RolePermissionsDeleteArgs} args - Arguments to delete one RolePermissions.
     * @example
     * // Delete one RolePermissions
     * const RolePermissions = await prisma.rolePermissions.delete({
     *   where: {
     *     // ... filter to delete one RolePermissions
     *   }
     * })
     * 
     */
    delete<T extends RolePermissionsDeleteArgs>(args: SelectSubset<T, RolePermissionsDeleteArgs<ExtArgs>>): Prisma__RolePermissionsClient<$Result.GetResult<Prisma.$RolePermissionsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one RolePermissions.
     * @param {RolePermissionsUpdateArgs} args - Arguments to update one RolePermissions.
     * @example
     * // Update one RolePermissions
     * const rolePermissions = await prisma.rolePermissions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RolePermissionsUpdateArgs>(args: SelectSubset<T, RolePermissionsUpdateArgs<ExtArgs>>): Prisma__RolePermissionsClient<$Result.GetResult<Prisma.$RolePermissionsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more RolePermissions.
     * @param {RolePermissionsDeleteManyArgs} args - Arguments to filter RolePermissions to delete.
     * @example
     * // Delete a few RolePermissions
     * const { count } = await prisma.rolePermissions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RolePermissionsDeleteManyArgs>(args?: SelectSubset<T, RolePermissionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RolePermissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RolePermissions
     * const rolePermissions = await prisma.rolePermissions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RolePermissionsUpdateManyArgs>(args: SelectSubset<T, RolePermissionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RolePermissions.
     * @param {RolePermissionsUpsertArgs} args - Arguments to update or create a RolePermissions.
     * @example
     * // Update or create a RolePermissions
     * const rolePermissions = await prisma.rolePermissions.upsert({
     *   create: {
     *     // ... data to create a RolePermissions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RolePermissions we want to update
     *   }
     * })
     */
    upsert<T extends RolePermissionsUpsertArgs>(args: SelectSubset<T, RolePermissionsUpsertArgs<ExtArgs>>): Prisma__RolePermissionsClient<$Result.GetResult<Prisma.$RolePermissionsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of RolePermissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionsCountArgs} args - Arguments to filter RolePermissions to count.
     * @example
     * // Count the number of RolePermissions
     * const count = await prisma.rolePermissions.count({
     *   where: {
     *     // ... the filter for the RolePermissions we want to count
     *   }
     * })
    **/
    count<T extends RolePermissionsCountArgs>(
      args?: Subset<T, RolePermissionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RolePermissionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RolePermissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RolePermissionsAggregateArgs>(args: Subset<T, RolePermissionsAggregateArgs>): Prisma.PrismaPromise<GetRolePermissionsAggregateType<T>>

    /**
     * Group by RolePermissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RolePermissionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RolePermissionsGroupByArgs['orderBy'] }
        : { orderBy?: RolePermissionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RolePermissionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolePermissionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RolePermissions model
   */
  readonly fields: RolePermissionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RolePermissions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RolePermissionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    permission<T extends PermissionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PermissionDefaultArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RolePermissions model
   */ 
  interface RolePermissionsFieldRefs {
    readonly roleId: FieldRef<"RolePermissions", 'Int'>
    readonly permissionId: FieldRef<"RolePermissions", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * RolePermissions findUnique
   */
  export type RolePermissionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermissions
     */
    select?: RolePermissionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionsInclude<ExtArgs> | null
    /**
     * Filter, which RolePermissions to fetch.
     */
    where: RolePermissionsWhereUniqueInput
  }

  /**
   * RolePermissions findUniqueOrThrow
   */
  export type RolePermissionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermissions
     */
    select?: RolePermissionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionsInclude<ExtArgs> | null
    /**
     * Filter, which RolePermissions to fetch.
     */
    where: RolePermissionsWhereUniqueInput
  }

  /**
   * RolePermissions findFirst
   */
  export type RolePermissionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermissions
     */
    select?: RolePermissionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionsInclude<ExtArgs> | null
    /**
     * Filter, which RolePermissions to fetch.
     */
    where?: RolePermissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolePermissions to fetch.
     */
    orderBy?: RolePermissionsOrderByWithRelationInput | RolePermissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RolePermissions.
     */
    cursor?: RolePermissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolePermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolePermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RolePermissions.
     */
    distinct?: RolePermissionsScalarFieldEnum | RolePermissionsScalarFieldEnum[]
  }

  /**
   * RolePermissions findFirstOrThrow
   */
  export type RolePermissionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermissions
     */
    select?: RolePermissionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionsInclude<ExtArgs> | null
    /**
     * Filter, which RolePermissions to fetch.
     */
    where?: RolePermissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolePermissions to fetch.
     */
    orderBy?: RolePermissionsOrderByWithRelationInput | RolePermissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RolePermissions.
     */
    cursor?: RolePermissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolePermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolePermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RolePermissions.
     */
    distinct?: RolePermissionsScalarFieldEnum | RolePermissionsScalarFieldEnum[]
  }

  /**
   * RolePermissions findMany
   */
  export type RolePermissionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermissions
     */
    select?: RolePermissionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionsInclude<ExtArgs> | null
    /**
     * Filter, which RolePermissions to fetch.
     */
    where?: RolePermissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolePermissions to fetch.
     */
    orderBy?: RolePermissionsOrderByWithRelationInput | RolePermissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RolePermissions.
     */
    cursor?: RolePermissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolePermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolePermissions.
     */
    skip?: number
    distinct?: RolePermissionsScalarFieldEnum | RolePermissionsScalarFieldEnum[]
  }

  /**
   * RolePermissions create
   */
  export type RolePermissionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermissions
     */
    select?: RolePermissionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionsInclude<ExtArgs> | null
    /**
     * The data needed to create a RolePermissions.
     */
    data: XOR<RolePermissionsCreateInput, RolePermissionsUncheckedCreateInput>
  }

  /**
   * RolePermissions createMany
   */
  export type RolePermissionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RolePermissions.
     */
    data: RolePermissionsCreateManyInput | RolePermissionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RolePermissions createManyAndReturn
   */
  export type RolePermissionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermissions
     */
    select?: RolePermissionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many RolePermissions.
     */
    data: RolePermissionsCreateManyInput | RolePermissionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RolePermissions update
   */
  export type RolePermissionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermissions
     */
    select?: RolePermissionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionsInclude<ExtArgs> | null
    /**
     * The data needed to update a RolePermissions.
     */
    data: XOR<RolePermissionsUpdateInput, RolePermissionsUncheckedUpdateInput>
    /**
     * Choose, which RolePermissions to update.
     */
    where: RolePermissionsWhereUniqueInput
  }

  /**
   * RolePermissions updateMany
   */
  export type RolePermissionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RolePermissions.
     */
    data: XOR<RolePermissionsUpdateManyMutationInput, RolePermissionsUncheckedUpdateManyInput>
    /**
     * Filter which RolePermissions to update
     */
    where?: RolePermissionsWhereInput
  }

  /**
   * RolePermissions upsert
   */
  export type RolePermissionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermissions
     */
    select?: RolePermissionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionsInclude<ExtArgs> | null
    /**
     * The filter to search for the RolePermissions to update in case it exists.
     */
    where: RolePermissionsWhereUniqueInput
    /**
     * In case the RolePermissions found by the `where` argument doesn't exist, create a new RolePermissions with this data.
     */
    create: XOR<RolePermissionsCreateInput, RolePermissionsUncheckedCreateInput>
    /**
     * In case the RolePermissions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RolePermissionsUpdateInput, RolePermissionsUncheckedUpdateInput>
  }

  /**
   * RolePermissions delete
   */
  export type RolePermissionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermissions
     */
    select?: RolePermissionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionsInclude<ExtArgs> | null
    /**
     * Filter which RolePermissions to delete.
     */
    where: RolePermissionsWhereUniqueInput
  }

  /**
   * RolePermissions deleteMany
   */
  export type RolePermissionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RolePermissions to delete
     */
    where?: RolePermissionsWhereInput
  }

  /**
   * RolePermissions without action
   */
  export type RolePermissionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermissions
     */
    select?: RolePermissionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionsInclude<ExtArgs> | null
  }


  /**
   * Model Policy
   */

  export type AggregatePolicy = {
    _count: PolicyCountAggregateOutputType | null
    _avg: PolicyAvgAggregateOutputType | null
    _sum: PolicySumAggregateOutputType | null
    _min: PolicyMinAggregateOutputType | null
    _max: PolicyMaxAggregateOutputType | null
  }

  export type PolicyAvgAggregateOutputType = {
    id: number | null
    type: number | null
  }

  export type PolicySumAggregateOutputType = {
    id: number | null
    type: number | null
  }

  export type PolicyMinAggregateOutputType = {
    id: number | null
    type: number | null
    effect: string | null
    action: string | null
    subject: string | null
    encode: string | null
  }

  export type PolicyMaxAggregateOutputType = {
    id: number | null
    type: number | null
    effect: string | null
    action: string | null
    subject: string | null
    encode: string | null
  }

  export type PolicyCountAggregateOutputType = {
    id: number
    type: number
    effect: number
    action: number
    subject: number
    fields: number
    conditions: number
    args: number
    encode: number
    _all: number
  }


  export type PolicyAvgAggregateInputType = {
    id?: true
    type?: true
  }

  export type PolicySumAggregateInputType = {
    id?: true
    type?: true
  }

  export type PolicyMinAggregateInputType = {
    id?: true
    type?: true
    effect?: true
    action?: true
    subject?: true
    encode?: true
  }

  export type PolicyMaxAggregateInputType = {
    id?: true
    type?: true
    effect?: true
    action?: true
    subject?: true
    encode?: true
  }

  export type PolicyCountAggregateInputType = {
    id?: true
    type?: true
    effect?: true
    action?: true
    subject?: true
    fields?: true
    conditions?: true
    args?: true
    encode?: true
    _all?: true
  }

  export type PolicyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Policy to aggregate.
     */
    where?: PolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Policies to fetch.
     */
    orderBy?: PolicyOrderByWithRelationInput | PolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Policies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Policies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Policies
    **/
    _count?: true | PolicyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PolicyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PolicySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PolicyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PolicyMaxAggregateInputType
  }

  export type GetPolicyAggregateType<T extends PolicyAggregateArgs> = {
        [P in keyof T & keyof AggregatePolicy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePolicy[P]>
      : GetScalarType<T[P], AggregatePolicy[P]>
  }




  export type PolicyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PolicyWhereInput
    orderBy?: PolicyOrderByWithAggregationInput | PolicyOrderByWithAggregationInput[]
    by: PolicyScalarFieldEnum[] | PolicyScalarFieldEnum
    having?: PolicyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PolicyCountAggregateInputType | true
    _avg?: PolicyAvgAggregateInputType
    _sum?: PolicySumAggregateInputType
    _min?: PolicyMinAggregateInputType
    _max?: PolicyMaxAggregateInputType
  }

  export type PolicyGroupByOutputType = {
    id: number
    type: number
    effect: string
    action: string
    subject: string
    fields: JsonValue | null
    conditions: JsonValue | null
    args: JsonValue | null
    encode: string
    _count: PolicyCountAggregateOutputType | null
    _avg: PolicyAvgAggregateOutputType | null
    _sum: PolicySumAggregateOutputType | null
    _min: PolicyMinAggregateOutputType | null
    _max: PolicyMaxAggregateOutputType | null
  }

  type GetPolicyGroupByPayload<T extends PolicyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PolicyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PolicyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PolicyGroupByOutputType[P]>
            : GetScalarType<T[P], PolicyGroupByOutputType[P]>
        }
      >
    >


  export type PolicySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    effect?: boolean
    action?: boolean
    subject?: boolean
    fields?: boolean
    conditions?: boolean
    args?: boolean
    encode?: boolean
    RolePolicy?: boolean | Policy$RolePolicyArgs<ExtArgs>
    PermissionPolicy?: boolean | Policy$PermissionPolicyArgs<ExtArgs>
    _count?: boolean | PolicyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["policy"]>

  export type PolicySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    effect?: boolean
    action?: boolean
    subject?: boolean
    fields?: boolean
    conditions?: boolean
    args?: boolean
    encode?: boolean
  }, ExtArgs["result"]["policy"]>

  export type PolicySelectScalar = {
    id?: boolean
    type?: boolean
    effect?: boolean
    action?: boolean
    subject?: boolean
    fields?: boolean
    conditions?: boolean
    args?: boolean
    encode?: boolean
  }

  export type PolicyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    RolePolicy?: boolean | Policy$RolePolicyArgs<ExtArgs>
    PermissionPolicy?: boolean | Policy$PermissionPolicyArgs<ExtArgs>
    _count?: boolean | PolicyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PolicyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PolicyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Policy"
    objects: {
      RolePolicy: Prisma.$RolePolicyPayload<ExtArgs>[]
      PermissionPolicy: Prisma.$PermissionPolicyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type: number
      effect: string
      action: string
      subject: string
      fields: Prisma.JsonValue | null
      conditions: Prisma.JsonValue | null
      args: Prisma.JsonValue | null
      encode: string
    }, ExtArgs["result"]["policy"]>
    composites: {}
  }

  type PolicyGetPayload<S extends boolean | null | undefined | PolicyDefaultArgs> = $Result.GetResult<Prisma.$PolicyPayload, S>

  type PolicyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PolicyFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PolicyCountAggregateInputType | true
    }

  export interface PolicyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Policy'], meta: { name: 'Policy' } }
    /**
     * Find zero or one Policy that matches the filter.
     * @param {PolicyFindUniqueArgs} args - Arguments to find a Policy
     * @example
     * // Get one Policy
     * const policy = await prisma.policy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PolicyFindUniqueArgs>(args: SelectSubset<T, PolicyFindUniqueArgs<ExtArgs>>): Prisma__PolicyClient<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Policy that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PolicyFindUniqueOrThrowArgs} args - Arguments to find a Policy
     * @example
     * // Get one Policy
     * const policy = await prisma.policy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PolicyFindUniqueOrThrowArgs>(args: SelectSubset<T, PolicyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PolicyClient<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Policy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyFindFirstArgs} args - Arguments to find a Policy
     * @example
     * // Get one Policy
     * const policy = await prisma.policy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PolicyFindFirstArgs>(args?: SelectSubset<T, PolicyFindFirstArgs<ExtArgs>>): Prisma__PolicyClient<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Policy that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyFindFirstOrThrowArgs} args - Arguments to find a Policy
     * @example
     * // Get one Policy
     * const policy = await prisma.policy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PolicyFindFirstOrThrowArgs>(args?: SelectSubset<T, PolicyFindFirstOrThrowArgs<ExtArgs>>): Prisma__PolicyClient<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Policies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Policies
     * const policies = await prisma.policy.findMany()
     * 
     * // Get first 10 Policies
     * const policies = await prisma.policy.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const policyWithIdOnly = await prisma.policy.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PolicyFindManyArgs>(args?: SelectSubset<T, PolicyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Policy.
     * @param {PolicyCreateArgs} args - Arguments to create a Policy.
     * @example
     * // Create one Policy
     * const Policy = await prisma.policy.create({
     *   data: {
     *     // ... data to create a Policy
     *   }
     * })
     * 
     */
    create<T extends PolicyCreateArgs>(args: SelectSubset<T, PolicyCreateArgs<ExtArgs>>): Prisma__PolicyClient<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Policies.
     * @param {PolicyCreateManyArgs} args - Arguments to create many Policies.
     * @example
     * // Create many Policies
     * const policy = await prisma.policy.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PolicyCreateManyArgs>(args?: SelectSubset<T, PolicyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Policies and returns the data saved in the database.
     * @param {PolicyCreateManyAndReturnArgs} args - Arguments to create many Policies.
     * @example
     * // Create many Policies
     * const policy = await prisma.policy.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Policies and only return the `id`
     * const policyWithIdOnly = await prisma.policy.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PolicyCreateManyAndReturnArgs>(args?: SelectSubset<T, PolicyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Policy.
     * @param {PolicyDeleteArgs} args - Arguments to delete one Policy.
     * @example
     * // Delete one Policy
     * const Policy = await prisma.policy.delete({
     *   where: {
     *     // ... filter to delete one Policy
     *   }
     * })
     * 
     */
    delete<T extends PolicyDeleteArgs>(args: SelectSubset<T, PolicyDeleteArgs<ExtArgs>>): Prisma__PolicyClient<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Policy.
     * @param {PolicyUpdateArgs} args - Arguments to update one Policy.
     * @example
     * // Update one Policy
     * const policy = await prisma.policy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PolicyUpdateArgs>(args: SelectSubset<T, PolicyUpdateArgs<ExtArgs>>): Prisma__PolicyClient<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Policies.
     * @param {PolicyDeleteManyArgs} args - Arguments to filter Policies to delete.
     * @example
     * // Delete a few Policies
     * const { count } = await prisma.policy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PolicyDeleteManyArgs>(args?: SelectSubset<T, PolicyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Policies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Policies
     * const policy = await prisma.policy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PolicyUpdateManyArgs>(args: SelectSubset<T, PolicyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Policy.
     * @param {PolicyUpsertArgs} args - Arguments to update or create a Policy.
     * @example
     * // Update or create a Policy
     * const policy = await prisma.policy.upsert({
     *   create: {
     *     // ... data to create a Policy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Policy we want to update
     *   }
     * })
     */
    upsert<T extends PolicyUpsertArgs>(args: SelectSubset<T, PolicyUpsertArgs<ExtArgs>>): Prisma__PolicyClient<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Policies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyCountArgs} args - Arguments to filter Policies to count.
     * @example
     * // Count the number of Policies
     * const count = await prisma.policy.count({
     *   where: {
     *     // ... the filter for the Policies we want to count
     *   }
     * })
    **/
    count<T extends PolicyCountArgs>(
      args?: Subset<T, PolicyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PolicyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Policy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PolicyAggregateArgs>(args: Subset<T, PolicyAggregateArgs>): Prisma.PrismaPromise<GetPolicyAggregateType<T>>

    /**
     * Group by Policy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PolicyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PolicyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PolicyGroupByArgs['orderBy'] }
        : { orderBy?: PolicyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PolicyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPolicyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Policy model
   */
  readonly fields: PolicyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Policy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PolicyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    RolePolicy<T extends Policy$RolePolicyArgs<ExtArgs> = {}>(args?: Subset<T, Policy$RolePolicyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePolicyPayload<ExtArgs>, T, "findMany"> | Null>
    PermissionPolicy<T extends Policy$PermissionPolicyArgs<ExtArgs> = {}>(args?: Subset<T, Policy$PermissionPolicyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionPolicyPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Policy model
   */ 
  interface PolicyFieldRefs {
    readonly id: FieldRef<"Policy", 'Int'>
    readonly type: FieldRef<"Policy", 'Int'>
    readonly effect: FieldRef<"Policy", 'String'>
    readonly action: FieldRef<"Policy", 'String'>
    readonly subject: FieldRef<"Policy", 'String'>
    readonly fields: FieldRef<"Policy", 'Json'>
    readonly conditions: FieldRef<"Policy", 'Json'>
    readonly args: FieldRef<"Policy", 'Json'>
    readonly encode: FieldRef<"Policy", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Policy findUnique
   */
  export type PolicyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyInclude<ExtArgs> | null
    /**
     * Filter, which Policy to fetch.
     */
    where: PolicyWhereUniqueInput
  }

  /**
   * Policy findUniqueOrThrow
   */
  export type PolicyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyInclude<ExtArgs> | null
    /**
     * Filter, which Policy to fetch.
     */
    where: PolicyWhereUniqueInput
  }

  /**
   * Policy findFirst
   */
  export type PolicyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyInclude<ExtArgs> | null
    /**
     * Filter, which Policy to fetch.
     */
    where?: PolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Policies to fetch.
     */
    orderBy?: PolicyOrderByWithRelationInput | PolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Policies.
     */
    cursor?: PolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Policies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Policies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Policies.
     */
    distinct?: PolicyScalarFieldEnum | PolicyScalarFieldEnum[]
  }

  /**
   * Policy findFirstOrThrow
   */
  export type PolicyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyInclude<ExtArgs> | null
    /**
     * Filter, which Policy to fetch.
     */
    where?: PolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Policies to fetch.
     */
    orderBy?: PolicyOrderByWithRelationInput | PolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Policies.
     */
    cursor?: PolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Policies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Policies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Policies.
     */
    distinct?: PolicyScalarFieldEnum | PolicyScalarFieldEnum[]
  }

  /**
   * Policy findMany
   */
  export type PolicyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyInclude<ExtArgs> | null
    /**
     * Filter, which Policies to fetch.
     */
    where?: PolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Policies to fetch.
     */
    orderBy?: PolicyOrderByWithRelationInput | PolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Policies.
     */
    cursor?: PolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Policies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Policies.
     */
    skip?: number
    distinct?: PolicyScalarFieldEnum | PolicyScalarFieldEnum[]
  }

  /**
   * Policy create
   */
  export type PolicyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyInclude<ExtArgs> | null
    /**
     * The data needed to create a Policy.
     */
    data: XOR<PolicyCreateInput, PolicyUncheckedCreateInput>
  }

  /**
   * Policy createMany
   */
  export type PolicyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Policies.
     */
    data: PolicyCreateManyInput | PolicyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Policy createManyAndReturn
   */
  export type PolicyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Policies.
     */
    data: PolicyCreateManyInput | PolicyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Policy update
   */
  export type PolicyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyInclude<ExtArgs> | null
    /**
     * The data needed to update a Policy.
     */
    data: XOR<PolicyUpdateInput, PolicyUncheckedUpdateInput>
    /**
     * Choose, which Policy to update.
     */
    where: PolicyWhereUniqueInput
  }

  /**
   * Policy updateMany
   */
  export type PolicyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Policies.
     */
    data: XOR<PolicyUpdateManyMutationInput, PolicyUncheckedUpdateManyInput>
    /**
     * Filter which Policies to update
     */
    where?: PolicyWhereInput
  }

  /**
   * Policy upsert
   */
  export type PolicyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyInclude<ExtArgs> | null
    /**
     * The filter to search for the Policy to update in case it exists.
     */
    where: PolicyWhereUniqueInput
    /**
     * In case the Policy found by the `where` argument doesn't exist, create a new Policy with this data.
     */
    create: XOR<PolicyCreateInput, PolicyUncheckedCreateInput>
    /**
     * In case the Policy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PolicyUpdateInput, PolicyUncheckedUpdateInput>
  }

  /**
   * Policy delete
   */
  export type PolicyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyInclude<ExtArgs> | null
    /**
     * Filter which Policy to delete.
     */
    where: PolicyWhereUniqueInput
  }

  /**
   * Policy deleteMany
   */
  export type PolicyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Policies to delete
     */
    where?: PolicyWhereInput
  }

  /**
   * Policy.RolePolicy
   */
  export type Policy$RolePolicyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePolicy
     */
    select?: RolePolicySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePolicyInclude<ExtArgs> | null
    where?: RolePolicyWhereInput
    orderBy?: RolePolicyOrderByWithRelationInput | RolePolicyOrderByWithRelationInput[]
    cursor?: RolePolicyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RolePolicyScalarFieldEnum | RolePolicyScalarFieldEnum[]
  }

  /**
   * Policy.PermissionPolicy
   */
  export type Policy$PermissionPolicyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionPolicy
     */
    select?: PermissionPolicySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionPolicyInclude<ExtArgs> | null
    where?: PermissionPolicyWhereInput
    orderBy?: PermissionPolicyOrderByWithRelationInput | PermissionPolicyOrderByWithRelationInput[]
    cursor?: PermissionPolicyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PermissionPolicyScalarFieldEnum | PermissionPolicyScalarFieldEnum[]
  }

  /**
   * Policy without action
   */
  export type PolicyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Policy
     */
    select?: PolicySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PolicyInclude<ExtArgs> | null
  }


  /**
   * Model RolePolicy
   */

  export type AggregateRolePolicy = {
    _count: RolePolicyCountAggregateOutputType | null
    _avg: RolePolicyAvgAggregateOutputType | null
    _sum: RolePolicySumAggregateOutputType | null
    _min: RolePolicyMinAggregateOutputType | null
    _max: RolePolicyMaxAggregateOutputType | null
  }

  export type RolePolicyAvgAggregateOutputType = {
    roleId: number | null
    policyId: number | null
  }

  export type RolePolicySumAggregateOutputType = {
    roleId: number | null
    policyId: number | null
  }

  export type RolePolicyMinAggregateOutputType = {
    roleId: number | null
    policyId: number | null
  }

  export type RolePolicyMaxAggregateOutputType = {
    roleId: number | null
    policyId: number | null
  }

  export type RolePolicyCountAggregateOutputType = {
    roleId: number
    policyId: number
    _all: number
  }


  export type RolePolicyAvgAggregateInputType = {
    roleId?: true
    policyId?: true
  }

  export type RolePolicySumAggregateInputType = {
    roleId?: true
    policyId?: true
  }

  export type RolePolicyMinAggregateInputType = {
    roleId?: true
    policyId?: true
  }

  export type RolePolicyMaxAggregateInputType = {
    roleId?: true
    policyId?: true
  }

  export type RolePolicyCountAggregateInputType = {
    roleId?: true
    policyId?: true
    _all?: true
  }

  export type RolePolicyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RolePolicy to aggregate.
     */
    where?: RolePolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolePolicies to fetch.
     */
    orderBy?: RolePolicyOrderByWithRelationInput | RolePolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RolePolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolePolicies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolePolicies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RolePolicies
    **/
    _count?: true | RolePolicyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RolePolicyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RolePolicySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RolePolicyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RolePolicyMaxAggregateInputType
  }

  export type GetRolePolicyAggregateType<T extends RolePolicyAggregateArgs> = {
        [P in keyof T & keyof AggregateRolePolicy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRolePolicy[P]>
      : GetScalarType<T[P], AggregateRolePolicy[P]>
  }




  export type RolePolicyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolePolicyWhereInput
    orderBy?: RolePolicyOrderByWithAggregationInput | RolePolicyOrderByWithAggregationInput[]
    by: RolePolicyScalarFieldEnum[] | RolePolicyScalarFieldEnum
    having?: RolePolicyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RolePolicyCountAggregateInputType | true
    _avg?: RolePolicyAvgAggregateInputType
    _sum?: RolePolicySumAggregateInputType
    _min?: RolePolicyMinAggregateInputType
    _max?: RolePolicyMaxAggregateInputType
  }

  export type RolePolicyGroupByOutputType = {
    roleId: number
    policyId: number
    _count: RolePolicyCountAggregateOutputType | null
    _avg: RolePolicyAvgAggregateOutputType | null
    _sum: RolePolicySumAggregateOutputType | null
    _min: RolePolicyMinAggregateOutputType | null
    _max: RolePolicyMaxAggregateOutputType | null
  }

  type GetRolePolicyGroupByPayload<T extends RolePolicyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RolePolicyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RolePolicyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RolePolicyGroupByOutputType[P]>
            : GetScalarType<T[P], RolePolicyGroupByOutputType[P]>
        }
      >
    >


  export type RolePolicySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    roleId?: boolean
    policyId?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    policy?: boolean | PolicyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rolePolicy"]>

  export type RolePolicySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    roleId?: boolean
    policyId?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    policy?: boolean | PolicyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rolePolicy"]>

  export type RolePolicySelectScalar = {
    roleId?: boolean
    policyId?: boolean
  }

  export type RolePolicyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    policy?: boolean | PolicyDefaultArgs<ExtArgs>
  }
  export type RolePolicyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    policy?: boolean | PolicyDefaultArgs<ExtArgs>
  }

  export type $RolePolicyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RolePolicy"
    objects: {
      role: Prisma.$RolePayload<ExtArgs>
      policy: Prisma.$PolicyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      roleId: number
      policyId: number
    }, ExtArgs["result"]["rolePolicy"]>
    composites: {}
  }

  type RolePolicyGetPayload<S extends boolean | null | undefined | RolePolicyDefaultArgs> = $Result.GetResult<Prisma.$RolePolicyPayload, S>

  type RolePolicyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RolePolicyFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RolePolicyCountAggregateInputType | true
    }

  export interface RolePolicyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RolePolicy'], meta: { name: 'RolePolicy' } }
    /**
     * Find zero or one RolePolicy that matches the filter.
     * @param {RolePolicyFindUniqueArgs} args - Arguments to find a RolePolicy
     * @example
     * // Get one RolePolicy
     * const rolePolicy = await prisma.rolePolicy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RolePolicyFindUniqueArgs>(args: SelectSubset<T, RolePolicyFindUniqueArgs<ExtArgs>>): Prisma__RolePolicyClient<$Result.GetResult<Prisma.$RolePolicyPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one RolePolicy that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RolePolicyFindUniqueOrThrowArgs} args - Arguments to find a RolePolicy
     * @example
     * // Get one RolePolicy
     * const rolePolicy = await prisma.rolePolicy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RolePolicyFindUniqueOrThrowArgs>(args: SelectSubset<T, RolePolicyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RolePolicyClient<$Result.GetResult<Prisma.$RolePolicyPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first RolePolicy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePolicyFindFirstArgs} args - Arguments to find a RolePolicy
     * @example
     * // Get one RolePolicy
     * const rolePolicy = await prisma.rolePolicy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RolePolicyFindFirstArgs>(args?: SelectSubset<T, RolePolicyFindFirstArgs<ExtArgs>>): Prisma__RolePolicyClient<$Result.GetResult<Prisma.$RolePolicyPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first RolePolicy that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePolicyFindFirstOrThrowArgs} args - Arguments to find a RolePolicy
     * @example
     * // Get one RolePolicy
     * const rolePolicy = await prisma.rolePolicy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RolePolicyFindFirstOrThrowArgs>(args?: SelectSubset<T, RolePolicyFindFirstOrThrowArgs<ExtArgs>>): Prisma__RolePolicyClient<$Result.GetResult<Prisma.$RolePolicyPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more RolePolicies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePolicyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RolePolicies
     * const rolePolicies = await prisma.rolePolicy.findMany()
     * 
     * // Get first 10 RolePolicies
     * const rolePolicies = await prisma.rolePolicy.findMany({ take: 10 })
     * 
     * // Only select the `roleId`
     * const rolePolicyWithRoleIdOnly = await prisma.rolePolicy.findMany({ select: { roleId: true } })
     * 
     */
    findMany<T extends RolePolicyFindManyArgs>(args?: SelectSubset<T, RolePolicyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePolicyPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a RolePolicy.
     * @param {RolePolicyCreateArgs} args - Arguments to create a RolePolicy.
     * @example
     * // Create one RolePolicy
     * const RolePolicy = await prisma.rolePolicy.create({
     *   data: {
     *     // ... data to create a RolePolicy
     *   }
     * })
     * 
     */
    create<T extends RolePolicyCreateArgs>(args: SelectSubset<T, RolePolicyCreateArgs<ExtArgs>>): Prisma__RolePolicyClient<$Result.GetResult<Prisma.$RolePolicyPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many RolePolicies.
     * @param {RolePolicyCreateManyArgs} args - Arguments to create many RolePolicies.
     * @example
     * // Create many RolePolicies
     * const rolePolicy = await prisma.rolePolicy.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RolePolicyCreateManyArgs>(args?: SelectSubset<T, RolePolicyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RolePolicies and returns the data saved in the database.
     * @param {RolePolicyCreateManyAndReturnArgs} args - Arguments to create many RolePolicies.
     * @example
     * // Create many RolePolicies
     * const rolePolicy = await prisma.rolePolicy.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RolePolicies and only return the `roleId`
     * const rolePolicyWithRoleIdOnly = await prisma.rolePolicy.createManyAndReturn({ 
     *   select: { roleId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RolePolicyCreateManyAndReturnArgs>(args?: SelectSubset<T, RolePolicyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePolicyPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a RolePolicy.
     * @param {RolePolicyDeleteArgs} args - Arguments to delete one RolePolicy.
     * @example
     * // Delete one RolePolicy
     * const RolePolicy = await prisma.rolePolicy.delete({
     *   where: {
     *     // ... filter to delete one RolePolicy
     *   }
     * })
     * 
     */
    delete<T extends RolePolicyDeleteArgs>(args: SelectSubset<T, RolePolicyDeleteArgs<ExtArgs>>): Prisma__RolePolicyClient<$Result.GetResult<Prisma.$RolePolicyPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one RolePolicy.
     * @param {RolePolicyUpdateArgs} args - Arguments to update one RolePolicy.
     * @example
     * // Update one RolePolicy
     * const rolePolicy = await prisma.rolePolicy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RolePolicyUpdateArgs>(args: SelectSubset<T, RolePolicyUpdateArgs<ExtArgs>>): Prisma__RolePolicyClient<$Result.GetResult<Prisma.$RolePolicyPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more RolePolicies.
     * @param {RolePolicyDeleteManyArgs} args - Arguments to filter RolePolicies to delete.
     * @example
     * // Delete a few RolePolicies
     * const { count } = await prisma.rolePolicy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RolePolicyDeleteManyArgs>(args?: SelectSubset<T, RolePolicyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RolePolicies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePolicyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RolePolicies
     * const rolePolicy = await prisma.rolePolicy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RolePolicyUpdateManyArgs>(args: SelectSubset<T, RolePolicyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RolePolicy.
     * @param {RolePolicyUpsertArgs} args - Arguments to update or create a RolePolicy.
     * @example
     * // Update or create a RolePolicy
     * const rolePolicy = await prisma.rolePolicy.upsert({
     *   create: {
     *     // ... data to create a RolePolicy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RolePolicy we want to update
     *   }
     * })
     */
    upsert<T extends RolePolicyUpsertArgs>(args: SelectSubset<T, RolePolicyUpsertArgs<ExtArgs>>): Prisma__RolePolicyClient<$Result.GetResult<Prisma.$RolePolicyPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of RolePolicies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePolicyCountArgs} args - Arguments to filter RolePolicies to count.
     * @example
     * // Count the number of RolePolicies
     * const count = await prisma.rolePolicy.count({
     *   where: {
     *     // ... the filter for the RolePolicies we want to count
     *   }
     * })
    **/
    count<T extends RolePolicyCountArgs>(
      args?: Subset<T, RolePolicyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RolePolicyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RolePolicy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePolicyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RolePolicyAggregateArgs>(args: Subset<T, RolePolicyAggregateArgs>): Prisma.PrismaPromise<GetRolePolicyAggregateType<T>>

    /**
     * Group by RolePolicy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePolicyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RolePolicyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RolePolicyGroupByArgs['orderBy'] }
        : { orderBy?: RolePolicyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RolePolicyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolePolicyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RolePolicy model
   */
  readonly fields: RolePolicyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RolePolicy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RolePolicyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    policy<T extends PolicyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PolicyDefaultArgs<ExtArgs>>): Prisma__PolicyClient<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RolePolicy model
   */ 
  interface RolePolicyFieldRefs {
    readonly roleId: FieldRef<"RolePolicy", 'Int'>
    readonly policyId: FieldRef<"RolePolicy", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * RolePolicy findUnique
   */
  export type RolePolicyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePolicy
     */
    select?: RolePolicySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePolicyInclude<ExtArgs> | null
    /**
     * Filter, which RolePolicy to fetch.
     */
    where: RolePolicyWhereUniqueInput
  }

  /**
   * RolePolicy findUniqueOrThrow
   */
  export type RolePolicyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePolicy
     */
    select?: RolePolicySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePolicyInclude<ExtArgs> | null
    /**
     * Filter, which RolePolicy to fetch.
     */
    where: RolePolicyWhereUniqueInput
  }

  /**
   * RolePolicy findFirst
   */
  export type RolePolicyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePolicy
     */
    select?: RolePolicySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePolicyInclude<ExtArgs> | null
    /**
     * Filter, which RolePolicy to fetch.
     */
    where?: RolePolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolePolicies to fetch.
     */
    orderBy?: RolePolicyOrderByWithRelationInput | RolePolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RolePolicies.
     */
    cursor?: RolePolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolePolicies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolePolicies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RolePolicies.
     */
    distinct?: RolePolicyScalarFieldEnum | RolePolicyScalarFieldEnum[]
  }

  /**
   * RolePolicy findFirstOrThrow
   */
  export type RolePolicyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePolicy
     */
    select?: RolePolicySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePolicyInclude<ExtArgs> | null
    /**
     * Filter, which RolePolicy to fetch.
     */
    where?: RolePolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolePolicies to fetch.
     */
    orderBy?: RolePolicyOrderByWithRelationInput | RolePolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RolePolicies.
     */
    cursor?: RolePolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolePolicies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolePolicies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RolePolicies.
     */
    distinct?: RolePolicyScalarFieldEnum | RolePolicyScalarFieldEnum[]
  }

  /**
   * RolePolicy findMany
   */
  export type RolePolicyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePolicy
     */
    select?: RolePolicySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePolicyInclude<ExtArgs> | null
    /**
     * Filter, which RolePolicies to fetch.
     */
    where?: RolePolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolePolicies to fetch.
     */
    orderBy?: RolePolicyOrderByWithRelationInput | RolePolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RolePolicies.
     */
    cursor?: RolePolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolePolicies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolePolicies.
     */
    skip?: number
    distinct?: RolePolicyScalarFieldEnum | RolePolicyScalarFieldEnum[]
  }

  /**
   * RolePolicy create
   */
  export type RolePolicyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePolicy
     */
    select?: RolePolicySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePolicyInclude<ExtArgs> | null
    /**
     * The data needed to create a RolePolicy.
     */
    data: XOR<RolePolicyCreateInput, RolePolicyUncheckedCreateInput>
  }

  /**
   * RolePolicy createMany
   */
  export type RolePolicyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RolePolicies.
     */
    data: RolePolicyCreateManyInput | RolePolicyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RolePolicy createManyAndReturn
   */
  export type RolePolicyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePolicy
     */
    select?: RolePolicySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many RolePolicies.
     */
    data: RolePolicyCreateManyInput | RolePolicyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePolicyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RolePolicy update
   */
  export type RolePolicyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePolicy
     */
    select?: RolePolicySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePolicyInclude<ExtArgs> | null
    /**
     * The data needed to update a RolePolicy.
     */
    data: XOR<RolePolicyUpdateInput, RolePolicyUncheckedUpdateInput>
    /**
     * Choose, which RolePolicy to update.
     */
    where: RolePolicyWhereUniqueInput
  }

  /**
   * RolePolicy updateMany
   */
  export type RolePolicyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RolePolicies.
     */
    data: XOR<RolePolicyUpdateManyMutationInput, RolePolicyUncheckedUpdateManyInput>
    /**
     * Filter which RolePolicies to update
     */
    where?: RolePolicyWhereInput
  }

  /**
   * RolePolicy upsert
   */
  export type RolePolicyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePolicy
     */
    select?: RolePolicySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePolicyInclude<ExtArgs> | null
    /**
     * The filter to search for the RolePolicy to update in case it exists.
     */
    where: RolePolicyWhereUniqueInput
    /**
     * In case the RolePolicy found by the `where` argument doesn't exist, create a new RolePolicy with this data.
     */
    create: XOR<RolePolicyCreateInput, RolePolicyUncheckedCreateInput>
    /**
     * In case the RolePolicy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RolePolicyUpdateInput, RolePolicyUncheckedUpdateInput>
  }

  /**
   * RolePolicy delete
   */
  export type RolePolicyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePolicy
     */
    select?: RolePolicySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePolicyInclude<ExtArgs> | null
    /**
     * Filter which RolePolicy to delete.
     */
    where: RolePolicyWhereUniqueInput
  }

  /**
   * RolePolicy deleteMany
   */
  export type RolePolicyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RolePolicies to delete
     */
    where?: RolePolicyWhereInput
  }

  /**
   * RolePolicy without action
   */
  export type RolePolicyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePolicy
     */
    select?: RolePolicySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePolicyInclude<ExtArgs> | null
  }


  /**
   * Model PermissionPolicy
   */

  export type AggregatePermissionPolicy = {
    _count: PermissionPolicyCountAggregateOutputType | null
    _avg: PermissionPolicyAvgAggregateOutputType | null
    _sum: PermissionPolicySumAggregateOutputType | null
    _min: PermissionPolicyMinAggregateOutputType | null
    _max: PermissionPolicyMaxAggregateOutputType | null
  }

  export type PermissionPolicyAvgAggregateOutputType = {
    permissionId: number | null
    policyId: number | null
  }

  export type PermissionPolicySumAggregateOutputType = {
    permissionId: number | null
    policyId: number | null
  }

  export type PermissionPolicyMinAggregateOutputType = {
    permissionId: number | null
    policyId: number | null
  }

  export type PermissionPolicyMaxAggregateOutputType = {
    permissionId: number | null
    policyId: number | null
  }

  export type PermissionPolicyCountAggregateOutputType = {
    permissionId: number
    policyId: number
    _all: number
  }


  export type PermissionPolicyAvgAggregateInputType = {
    permissionId?: true
    policyId?: true
  }

  export type PermissionPolicySumAggregateInputType = {
    permissionId?: true
    policyId?: true
  }

  export type PermissionPolicyMinAggregateInputType = {
    permissionId?: true
    policyId?: true
  }

  export type PermissionPolicyMaxAggregateInputType = {
    permissionId?: true
    policyId?: true
  }

  export type PermissionPolicyCountAggregateInputType = {
    permissionId?: true
    policyId?: true
    _all?: true
  }

  export type PermissionPolicyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PermissionPolicy to aggregate.
     */
    where?: PermissionPolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PermissionPolicies to fetch.
     */
    orderBy?: PermissionPolicyOrderByWithRelationInput | PermissionPolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PermissionPolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PermissionPolicies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PermissionPolicies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PermissionPolicies
    **/
    _count?: true | PermissionPolicyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PermissionPolicyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PermissionPolicySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PermissionPolicyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PermissionPolicyMaxAggregateInputType
  }

  export type GetPermissionPolicyAggregateType<T extends PermissionPolicyAggregateArgs> = {
        [P in keyof T & keyof AggregatePermissionPolicy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePermissionPolicy[P]>
      : GetScalarType<T[P], AggregatePermissionPolicy[P]>
  }




  export type PermissionPolicyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermissionPolicyWhereInput
    orderBy?: PermissionPolicyOrderByWithAggregationInput | PermissionPolicyOrderByWithAggregationInput[]
    by: PermissionPolicyScalarFieldEnum[] | PermissionPolicyScalarFieldEnum
    having?: PermissionPolicyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PermissionPolicyCountAggregateInputType | true
    _avg?: PermissionPolicyAvgAggregateInputType
    _sum?: PermissionPolicySumAggregateInputType
    _min?: PermissionPolicyMinAggregateInputType
    _max?: PermissionPolicyMaxAggregateInputType
  }

  export type PermissionPolicyGroupByOutputType = {
    permissionId: number
    policyId: number
    _count: PermissionPolicyCountAggregateOutputType | null
    _avg: PermissionPolicyAvgAggregateOutputType | null
    _sum: PermissionPolicySumAggregateOutputType | null
    _min: PermissionPolicyMinAggregateOutputType | null
    _max: PermissionPolicyMaxAggregateOutputType | null
  }

  type GetPermissionPolicyGroupByPayload<T extends PermissionPolicyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PermissionPolicyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PermissionPolicyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PermissionPolicyGroupByOutputType[P]>
            : GetScalarType<T[P], PermissionPolicyGroupByOutputType[P]>
        }
      >
    >


  export type PermissionPolicySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    permissionId?: boolean
    policyId?: boolean
    permission?: boolean | PermissionDefaultArgs<ExtArgs>
    policy?: boolean | PolicyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["permissionPolicy"]>

  export type PermissionPolicySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    permissionId?: boolean
    policyId?: boolean
    permission?: boolean | PermissionDefaultArgs<ExtArgs>
    policy?: boolean | PolicyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["permissionPolicy"]>

  export type PermissionPolicySelectScalar = {
    permissionId?: boolean
    policyId?: boolean
  }

  export type PermissionPolicyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    permission?: boolean | PermissionDefaultArgs<ExtArgs>
    policy?: boolean | PolicyDefaultArgs<ExtArgs>
  }
  export type PermissionPolicyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    permission?: boolean | PermissionDefaultArgs<ExtArgs>
    policy?: boolean | PolicyDefaultArgs<ExtArgs>
  }

  export type $PermissionPolicyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PermissionPolicy"
    objects: {
      permission: Prisma.$PermissionPayload<ExtArgs>
      policy: Prisma.$PolicyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      permissionId: number
      policyId: number
    }, ExtArgs["result"]["permissionPolicy"]>
    composites: {}
  }

  type PermissionPolicyGetPayload<S extends boolean | null | undefined | PermissionPolicyDefaultArgs> = $Result.GetResult<Prisma.$PermissionPolicyPayload, S>

  type PermissionPolicyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PermissionPolicyFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PermissionPolicyCountAggregateInputType | true
    }

  export interface PermissionPolicyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PermissionPolicy'], meta: { name: 'PermissionPolicy' } }
    /**
     * Find zero or one PermissionPolicy that matches the filter.
     * @param {PermissionPolicyFindUniqueArgs} args - Arguments to find a PermissionPolicy
     * @example
     * // Get one PermissionPolicy
     * const permissionPolicy = await prisma.permissionPolicy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PermissionPolicyFindUniqueArgs>(args: SelectSubset<T, PermissionPolicyFindUniqueArgs<ExtArgs>>): Prisma__PermissionPolicyClient<$Result.GetResult<Prisma.$PermissionPolicyPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PermissionPolicy that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PermissionPolicyFindUniqueOrThrowArgs} args - Arguments to find a PermissionPolicy
     * @example
     * // Get one PermissionPolicy
     * const permissionPolicy = await prisma.permissionPolicy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PermissionPolicyFindUniqueOrThrowArgs>(args: SelectSubset<T, PermissionPolicyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PermissionPolicyClient<$Result.GetResult<Prisma.$PermissionPolicyPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PermissionPolicy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionPolicyFindFirstArgs} args - Arguments to find a PermissionPolicy
     * @example
     * // Get one PermissionPolicy
     * const permissionPolicy = await prisma.permissionPolicy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PermissionPolicyFindFirstArgs>(args?: SelectSubset<T, PermissionPolicyFindFirstArgs<ExtArgs>>): Prisma__PermissionPolicyClient<$Result.GetResult<Prisma.$PermissionPolicyPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PermissionPolicy that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionPolicyFindFirstOrThrowArgs} args - Arguments to find a PermissionPolicy
     * @example
     * // Get one PermissionPolicy
     * const permissionPolicy = await prisma.permissionPolicy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PermissionPolicyFindFirstOrThrowArgs>(args?: SelectSubset<T, PermissionPolicyFindFirstOrThrowArgs<ExtArgs>>): Prisma__PermissionPolicyClient<$Result.GetResult<Prisma.$PermissionPolicyPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PermissionPolicies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionPolicyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PermissionPolicies
     * const permissionPolicies = await prisma.permissionPolicy.findMany()
     * 
     * // Get first 10 PermissionPolicies
     * const permissionPolicies = await prisma.permissionPolicy.findMany({ take: 10 })
     * 
     * // Only select the `permissionId`
     * const permissionPolicyWithPermissionIdOnly = await prisma.permissionPolicy.findMany({ select: { permissionId: true } })
     * 
     */
    findMany<T extends PermissionPolicyFindManyArgs>(args?: SelectSubset<T, PermissionPolicyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionPolicyPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PermissionPolicy.
     * @param {PermissionPolicyCreateArgs} args - Arguments to create a PermissionPolicy.
     * @example
     * // Create one PermissionPolicy
     * const PermissionPolicy = await prisma.permissionPolicy.create({
     *   data: {
     *     // ... data to create a PermissionPolicy
     *   }
     * })
     * 
     */
    create<T extends PermissionPolicyCreateArgs>(args: SelectSubset<T, PermissionPolicyCreateArgs<ExtArgs>>): Prisma__PermissionPolicyClient<$Result.GetResult<Prisma.$PermissionPolicyPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PermissionPolicies.
     * @param {PermissionPolicyCreateManyArgs} args - Arguments to create many PermissionPolicies.
     * @example
     * // Create many PermissionPolicies
     * const permissionPolicy = await prisma.permissionPolicy.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PermissionPolicyCreateManyArgs>(args?: SelectSubset<T, PermissionPolicyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PermissionPolicies and returns the data saved in the database.
     * @param {PermissionPolicyCreateManyAndReturnArgs} args - Arguments to create many PermissionPolicies.
     * @example
     * // Create many PermissionPolicies
     * const permissionPolicy = await prisma.permissionPolicy.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PermissionPolicies and only return the `permissionId`
     * const permissionPolicyWithPermissionIdOnly = await prisma.permissionPolicy.createManyAndReturn({ 
     *   select: { permissionId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PermissionPolicyCreateManyAndReturnArgs>(args?: SelectSubset<T, PermissionPolicyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionPolicyPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PermissionPolicy.
     * @param {PermissionPolicyDeleteArgs} args - Arguments to delete one PermissionPolicy.
     * @example
     * // Delete one PermissionPolicy
     * const PermissionPolicy = await prisma.permissionPolicy.delete({
     *   where: {
     *     // ... filter to delete one PermissionPolicy
     *   }
     * })
     * 
     */
    delete<T extends PermissionPolicyDeleteArgs>(args: SelectSubset<T, PermissionPolicyDeleteArgs<ExtArgs>>): Prisma__PermissionPolicyClient<$Result.GetResult<Prisma.$PermissionPolicyPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PermissionPolicy.
     * @param {PermissionPolicyUpdateArgs} args - Arguments to update one PermissionPolicy.
     * @example
     * // Update one PermissionPolicy
     * const permissionPolicy = await prisma.permissionPolicy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PermissionPolicyUpdateArgs>(args: SelectSubset<T, PermissionPolicyUpdateArgs<ExtArgs>>): Prisma__PermissionPolicyClient<$Result.GetResult<Prisma.$PermissionPolicyPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PermissionPolicies.
     * @param {PermissionPolicyDeleteManyArgs} args - Arguments to filter PermissionPolicies to delete.
     * @example
     * // Delete a few PermissionPolicies
     * const { count } = await prisma.permissionPolicy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PermissionPolicyDeleteManyArgs>(args?: SelectSubset<T, PermissionPolicyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PermissionPolicies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionPolicyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PermissionPolicies
     * const permissionPolicy = await prisma.permissionPolicy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PermissionPolicyUpdateManyArgs>(args: SelectSubset<T, PermissionPolicyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PermissionPolicy.
     * @param {PermissionPolicyUpsertArgs} args - Arguments to update or create a PermissionPolicy.
     * @example
     * // Update or create a PermissionPolicy
     * const permissionPolicy = await prisma.permissionPolicy.upsert({
     *   create: {
     *     // ... data to create a PermissionPolicy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PermissionPolicy we want to update
     *   }
     * })
     */
    upsert<T extends PermissionPolicyUpsertArgs>(args: SelectSubset<T, PermissionPolicyUpsertArgs<ExtArgs>>): Prisma__PermissionPolicyClient<$Result.GetResult<Prisma.$PermissionPolicyPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PermissionPolicies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionPolicyCountArgs} args - Arguments to filter PermissionPolicies to count.
     * @example
     * // Count the number of PermissionPolicies
     * const count = await prisma.permissionPolicy.count({
     *   where: {
     *     // ... the filter for the PermissionPolicies we want to count
     *   }
     * })
    **/
    count<T extends PermissionPolicyCountArgs>(
      args?: Subset<T, PermissionPolicyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PermissionPolicyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PermissionPolicy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionPolicyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PermissionPolicyAggregateArgs>(args: Subset<T, PermissionPolicyAggregateArgs>): Prisma.PrismaPromise<GetPermissionPolicyAggregateType<T>>

    /**
     * Group by PermissionPolicy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionPolicyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PermissionPolicyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PermissionPolicyGroupByArgs['orderBy'] }
        : { orderBy?: PermissionPolicyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PermissionPolicyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPermissionPolicyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PermissionPolicy model
   */
  readonly fields: PermissionPolicyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PermissionPolicy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PermissionPolicyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    permission<T extends PermissionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PermissionDefaultArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    policy<T extends PolicyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PolicyDefaultArgs<ExtArgs>>): Prisma__PolicyClient<$Result.GetResult<Prisma.$PolicyPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PermissionPolicy model
   */ 
  interface PermissionPolicyFieldRefs {
    readonly permissionId: FieldRef<"PermissionPolicy", 'Int'>
    readonly policyId: FieldRef<"PermissionPolicy", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PermissionPolicy findUnique
   */
  export type PermissionPolicyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionPolicy
     */
    select?: PermissionPolicySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionPolicyInclude<ExtArgs> | null
    /**
     * Filter, which PermissionPolicy to fetch.
     */
    where: PermissionPolicyWhereUniqueInput
  }

  /**
   * PermissionPolicy findUniqueOrThrow
   */
  export type PermissionPolicyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionPolicy
     */
    select?: PermissionPolicySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionPolicyInclude<ExtArgs> | null
    /**
     * Filter, which PermissionPolicy to fetch.
     */
    where: PermissionPolicyWhereUniqueInput
  }

  /**
   * PermissionPolicy findFirst
   */
  export type PermissionPolicyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionPolicy
     */
    select?: PermissionPolicySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionPolicyInclude<ExtArgs> | null
    /**
     * Filter, which PermissionPolicy to fetch.
     */
    where?: PermissionPolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PermissionPolicies to fetch.
     */
    orderBy?: PermissionPolicyOrderByWithRelationInput | PermissionPolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PermissionPolicies.
     */
    cursor?: PermissionPolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PermissionPolicies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PermissionPolicies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PermissionPolicies.
     */
    distinct?: PermissionPolicyScalarFieldEnum | PermissionPolicyScalarFieldEnum[]
  }

  /**
   * PermissionPolicy findFirstOrThrow
   */
  export type PermissionPolicyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionPolicy
     */
    select?: PermissionPolicySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionPolicyInclude<ExtArgs> | null
    /**
     * Filter, which PermissionPolicy to fetch.
     */
    where?: PermissionPolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PermissionPolicies to fetch.
     */
    orderBy?: PermissionPolicyOrderByWithRelationInput | PermissionPolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PermissionPolicies.
     */
    cursor?: PermissionPolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PermissionPolicies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PermissionPolicies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PermissionPolicies.
     */
    distinct?: PermissionPolicyScalarFieldEnum | PermissionPolicyScalarFieldEnum[]
  }

  /**
   * PermissionPolicy findMany
   */
  export type PermissionPolicyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionPolicy
     */
    select?: PermissionPolicySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionPolicyInclude<ExtArgs> | null
    /**
     * Filter, which PermissionPolicies to fetch.
     */
    where?: PermissionPolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PermissionPolicies to fetch.
     */
    orderBy?: PermissionPolicyOrderByWithRelationInput | PermissionPolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PermissionPolicies.
     */
    cursor?: PermissionPolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PermissionPolicies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PermissionPolicies.
     */
    skip?: number
    distinct?: PermissionPolicyScalarFieldEnum | PermissionPolicyScalarFieldEnum[]
  }

  /**
   * PermissionPolicy create
   */
  export type PermissionPolicyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionPolicy
     */
    select?: PermissionPolicySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionPolicyInclude<ExtArgs> | null
    /**
     * The data needed to create a PermissionPolicy.
     */
    data: XOR<PermissionPolicyCreateInput, PermissionPolicyUncheckedCreateInput>
  }

  /**
   * PermissionPolicy createMany
   */
  export type PermissionPolicyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PermissionPolicies.
     */
    data: PermissionPolicyCreateManyInput | PermissionPolicyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PermissionPolicy createManyAndReturn
   */
  export type PermissionPolicyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionPolicy
     */
    select?: PermissionPolicySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PermissionPolicies.
     */
    data: PermissionPolicyCreateManyInput | PermissionPolicyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionPolicyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PermissionPolicy update
   */
  export type PermissionPolicyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionPolicy
     */
    select?: PermissionPolicySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionPolicyInclude<ExtArgs> | null
    /**
     * The data needed to update a PermissionPolicy.
     */
    data: XOR<PermissionPolicyUpdateInput, PermissionPolicyUncheckedUpdateInput>
    /**
     * Choose, which PermissionPolicy to update.
     */
    where: PermissionPolicyWhereUniqueInput
  }

  /**
   * PermissionPolicy updateMany
   */
  export type PermissionPolicyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PermissionPolicies.
     */
    data: XOR<PermissionPolicyUpdateManyMutationInput, PermissionPolicyUncheckedUpdateManyInput>
    /**
     * Filter which PermissionPolicies to update
     */
    where?: PermissionPolicyWhereInput
  }

  /**
   * PermissionPolicy upsert
   */
  export type PermissionPolicyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionPolicy
     */
    select?: PermissionPolicySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionPolicyInclude<ExtArgs> | null
    /**
     * The filter to search for the PermissionPolicy to update in case it exists.
     */
    where: PermissionPolicyWhereUniqueInput
    /**
     * In case the PermissionPolicy found by the `where` argument doesn't exist, create a new PermissionPolicy with this data.
     */
    create: XOR<PermissionPolicyCreateInput, PermissionPolicyUncheckedCreateInput>
    /**
     * In case the PermissionPolicy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PermissionPolicyUpdateInput, PermissionPolicyUncheckedUpdateInput>
  }

  /**
   * PermissionPolicy delete
   */
  export type PermissionPolicyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionPolicy
     */
    select?: PermissionPolicySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionPolicyInclude<ExtArgs> | null
    /**
     * Filter which PermissionPolicy to delete.
     */
    where: PermissionPolicyWhereUniqueInput
  }

  /**
   * PermissionPolicy deleteMany
   */
  export type PermissionPolicyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PermissionPolicies to delete
     */
    where?: PermissionPolicyWhereInput
  }

  /**
   * PermissionPolicy without action
   */
  export type PermissionPolicyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionPolicy
     */
    select?: PermissionPolicySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionPolicyInclude<ExtArgs> | null
  }


  /**
   * Model Menu
   */

  export type AggregateMenu = {
    _count: MenuCountAggregateOutputType | null
    _avg: MenuAvgAggregateOutputType | null
    _sum: MenuSumAggregateOutputType | null
    _min: MenuMinAggregateOutputType | null
    _max: MenuMaxAggregateOutputType | null
  }

  export type MenuAvgAggregateOutputType = {
    id: number | null
    status: number | null
    parentId: number | null
    metaId: number | null
  }

  export type MenuSumAggregateOutputType = {
    id: number | null
    status: number | null
    parentId: number | null
    metaId: number | null
  }

  export type MenuMinAggregateOutputType = {
    id: number | null
    name: string | null
    path: string | null
    label: string | null
    component: string | null
    redirect: string | null
    fullPath: string | null
    alias: string | null
    status: number | null
    parentId: number | null
    metaId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MenuMaxAggregateOutputType = {
    id: number | null
    name: string | null
    path: string | null
    label: string | null
    component: string | null
    redirect: string | null
    fullPath: string | null
    alias: string | null
    status: number | null
    parentId: number | null
    metaId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MenuCountAggregateOutputType = {
    id: number
    name: number
    path: number
    label: number
    component: number
    redirect: number
    fullPath: number
    alias: number
    status: number
    parentId: number
    metaId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MenuAvgAggregateInputType = {
    id?: true
    status?: true
    parentId?: true
    metaId?: true
  }

  export type MenuSumAggregateInputType = {
    id?: true
    status?: true
    parentId?: true
    metaId?: true
  }

  export type MenuMinAggregateInputType = {
    id?: true
    name?: true
    path?: true
    label?: true
    component?: true
    redirect?: true
    fullPath?: true
    alias?: true
    status?: true
    parentId?: true
    metaId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MenuMaxAggregateInputType = {
    id?: true
    name?: true
    path?: true
    label?: true
    component?: true
    redirect?: true
    fullPath?: true
    alias?: true
    status?: true
    parentId?: true
    metaId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MenuCountAggregateInputType = {
    id?: true
    name?: true
    path?: true
    label?: true
    component?: true
    redirect?: true
    fullPath?: true
    alias?: true
    status?: true
    parentId?: true
    metaId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MenuAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Menu to aggregate.
     */
    where?: MenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Menus to fetch.
     */
    orderBy?: MenuOrderByWithRelationInput | MenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Menus
    **/
    _count?: true | MenuCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MenuAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MenuSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MenuMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MenuMaxAggregateInputType
  }

  export type GetMenuAggregateType<T extends MenuAggregateArgs> = {
        [P in keyof T & keyof AggregateMenu]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMenu[P]>
      : GetScalarType<T[P], AggregateMenu[P]>
  }




  export type MenuGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenuWhereInput
    orderBy?: MenuOrderByWithAggregationInput | MenuOrderByWithAggregationInput[]
    by: MenuScalarFieldEnum[] | MenuScalarFieldEnum
    having?: MenuScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MenuCountAggregateInputType | true
    _avg?: MenuAvgAggregateInputType
    _sum?: MenuSumAggregateInputType
    _min?: MenuMinAggregateInputType
    _max?: MenuMaxAggregateInputType
  }

  export type MenuGroupByOutputType = {
    id: number
    name: string
    path: string
    label: string
    component: string | null
    redirect: string | null
    fullPath: string | null
    alias: string | null
    status: number
    parentId: number | null
    metaId: number | null
    createdAt: Date
    updatedAt: Date
    _count: MenuCountAggregateOutputType | null
    _avg: MenuAvgAggregateOutputType | null
    _sum: MenuSumAggregateOutputType | null
    _min: MenuMinAggregateOutputType | null
    _max: MenuMaxAggregateOutputType | null
  }

  type GetMenuGroupByPayload<T extends MenuGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MenuGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MenuGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MenuGroupByOutputType[P]>
            : GetScalarType<T[P], MenuGroupByOutputType[P]>
        }
      >
    >


  export type MenuSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    path?: boolean
    label?: boolean
    component?: boolean
    redirect?: boolean
    fullPath?: boolean
    alias?: boolean
    status?: boolean
    parentId?: boolean
    metaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    meta?: boolean | Menu$metaArgs<ExtArgs>
    parent?: boolean | Menu$parentArgs<ExtArgs>
    children?: boolean | Menu$childrenArgs<ExtArgs>
    roleMenus?: boolean | Menu$roleMenusArgs<ExtArgs>
    _count?: boolean | MenuCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menu"]>

  export type MenuSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    path?: boolean
    label?: boolean
    component?: boolean
    redirect?: boolean
    fullPath?: boolean
    alias?: boolean
    status?: boolean
    parentId?: boolean
    metaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parent?: boolean | Menu$parentArgs<ExtArgs>
  }, ExtArgs["result"]["menu"]>

  export type MenuSelectScalar = {
    id?: boolean
    name?: boolean
    path?: boolean
    label?: boolean
    component?: boolean
    redirect?: boolean
    fullPath?: boolean
    alias?: boolean
    status?: boolean
    parentId?: boolean
    metaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MenuInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta?: boolean | Menu$metaArgs<ExtArgs>
    parent?: boolean | Menu$parentArgs<ExtArgs>
    children?: boolean | Menu$childrenArgs<ExtArgs>
    roleMenus?: boolean | Menu$roleMenusArgs<ExtArgs>
    _count?: boolean | MenuCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MenuIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Menu$parentArgs<ExtArgs>
  }

  export type $MenuPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Menu"
    objects: {
      meta: Prisma.$MenuMetaPayload<ExtArgs> | null
      parent: Prisma.$MenuPayload<ExtArgs> | null
      children: Prisma.$MenuPayload<ExtArgs>[]
      roleMenus: Prisma.$RoleMenuPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      path: string
      label: string
      component: string | null
      redirect: string | null
      fullPath: string | null
      alias: string | null
      status: number
      parentId: number | null
      metaId: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["menu"]>
    composites: {}
  }

  type MenuGetPayload<S extends boolean | null | undefined | MenuDefaultArgs> = $Result.GetResult<Prisma.$MenuPayload, S>

  type MenuCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MenuFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MenuCountAggregateInputType | true
    }

  export interface MenuDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Menu'], meta: { name: 'Menu' } }
    /**
     * Find zero or one Menu that matches the filter.
     * @param {MenuFindUniqueArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MenuFindUniqueArgs>(args: SelectSubset<T, MenuFindUniqueArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Menu that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MenuFindUniqueOrThrowArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MenuFindUniqueOrThrowArgs>(args: SelectSubset<T, MenuFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Menu that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuFindFirstArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MenuFindFirstArgs>(args?: SelectSubset<T, MenuFindFirstArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Menu that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuFindFirstOrThrowArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MenuFindFirstOrThrowArgs>(args?: SelectSubset<T, MenuFindFirstOrThrowArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Menus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Menus
     * const menus = await prisma.menu.findMany()
     * 
     * // Get first 10 Menus
     * const menus = await prisma.menu.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const menuWithIdOnly = await prisma.menu.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MenuFindManyArgs>(args?: SelectSubset<T, MenuFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Menu.
     * @param {MenuCreateArgs} args - Arguments to create a Menu.
     * @example
     * // Create one Menu
     * const Menu = await prisma.menu.create({
     *   data: {
     *     // ... data to create a Menu
     *   }
     * })
     * 
     */
    create<T extends MenuCreateArgs>(args: SelectSubset<T, MenuCreateArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Menus.
     * @param {MenuCreateManyArgs} args - Arguments to create many Menus.
     * @example
     * // Create many Menus
     * const menu = await prisma.menu.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MenuCreateManyArgs>(args?: SelectSubset<T, MenuCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Menus and returns the data saved in the database.
     * @param {MenuCreateManyAndReturnArgs} args - Arguments to create many Menus.
     * @example
     * // Create many Menus
     * const menu = await prisma.menu.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Menus and only return the `id`
     * const menuWithIdOnly = await prisma.menu.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MenuCreateManyAndReturnArgs>(args?: SelectSubset<T, MenuCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Menu.
     * @param {MenuDeleteArgs} args - Arguments to delete one Menu.
     * @example
     * // Delete one Menu
     * const Menu = await prisma.menu.delete({
     *   where: {
     *     // ... filter to delete one Menu
     *   }
     * })
     * 
     */
    delete<T extends MenuDeleteArgs>(args: SelectSubset<T, MenuDeleteArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Menu.
     * @param {MenuUpdateArgs} args - Arguments to update one Menu.
     * @example
     * // Update one Menu
     * const menu = await prisma.menu.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MenuUpdateArgs>(args: SelectSubset<T, MenuUpdateArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Menus.
     * @param {MenuDeleteManyArgs} args - Arguments to filter Menus to delete.
     * @example
     * // Delete a few Menus
     * const { count } = await prisma.menu.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MenuDeleteManyArgs>(args?: SelectSubset<T, MenuDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Menus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Menus
     * const menu = await prisma.menu.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MenuUpdateManyArgs>(args: SelectSubset<T, MenuUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Menu.
     * @param {MenuUpsertArgs} args - Arguments to update or create a Menu.
     * @example
     * // Update or create a Menu
     * const menu = await prisma.menu.upsert({
     *   create: {
     *     // ... data to create a Menu
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Menu we want to update
     *   }
     * })
     */
    upsert<T extends MenuUpsertArgs>(args: SelectSubset<T, MenuUpsertArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Menus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuCountArgs} args - Arguments to filter Menus to count.
     * @example
     * // Count the number of Menus
     * const count = await prisma.menu.count({
     *   where: {
     *     // ... the filter for the Menus we want to count
     *   }
     * })
    **/
    count<T extends MenuCountArgs>(
      args?: Subset<T, MenuCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MenuCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Menu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MenuAggregateArgs>(args: Subset<T, MenuAggregateArgs>): Prisma.PrismaPromise<GetMenuAggregateType<T>>

    /**
     * Group by Menu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MenuGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MenuGroupByArgs['orderBy'] }
        : { orderBy?: MenuGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MenuGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMenuGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Menu model
   */
  readonly fields: MenuFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Menu.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MenuClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    meta<T extends Menu$metaArgs<ExtArgs> = {}>(args?: Subset<T, Menu$metaArgs<ExtArgs>>): Prisma__MenuMetaClient<$Result.GetResult<Prisma.$MenuMetaPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    parent<T extends Menu$parentArgs<ExtArgs> = {}>(args?: Subset<T, Menu$parentArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    children<T extends Menu$childrenArgs<ExtArgs> = {}>(args?: Subset<T, Menu$childrenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "findMany"> | Null>
    roleMenus<T extends Menu$roleMenusArgs<ExtArgs> = {}>(args?: Subset<T, Menu$roleMenusArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoleMenuPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Menu model
   */ 
  interface MenuFieldRefs {
    readonly id: FieldRef<"Menu", 'Int'>
    readonly name: FieldRef<"Menu", 'String'>
    readonly path: FieldRef<"Menu", 'String'>
    readonly label: FieldRef<"Menu", 'String'>
    readonly component: FieldRef<"Menu", 'String'>
    readonly redirect: FieldRef<"Menu", 'String'>
    readonly fullPath: FieldRef<"Menu", 'String'>
    readonly alias: FieldRef<"Menu", 'String'>
    readonly status: FieldRef<"Menu", 'Int'>
    readonly parentId: FieldRef<"Menu", 'Int'>
    readonly metaId: FieldRef<"Menu", 'Int'>
    readonly createdAt: FieldRef<"Menu", 'DateTime'>
    readonly updatedAt: FieldRef<"Menu", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Menu findUnique
   */
  export type MenuFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * Filter, which Menu to fetch.
     */
    where: MenuWhereUniqueInput
  }

  /**
   * Menu findUniqueOrThrow
   */
  export type MenuFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * Filter, which Menu to fetch.
     */
    where: MenuWhereUniqueInput
  }

  /**
   * Menu findFirst
   */
  export type MenuFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * Filter, which Menu to fetch.
     */
    where?: MenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Menus to fetch.
     */
    orderBy?: MenuOrderByWithRelationInput | MenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Menus.
     */
    cursor?: MenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Menus.
     */
    distinct?: MenuScalarFieldEnum | MenuScalarFieldEnum[]
  }

  /**
   * Menu findFirstOrThrow
   */
  export type MenuFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * Filter, which Menu to fetch.
     */
    where?: MenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Menus to fetch.
     */
    orderBy?: MenuOrderByWithRelationInput | MenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Menus.
     */
    cursor?: MenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Menus.
     */
    distinct?: MenuScalarFieldEnum | MenuScalarFieldEnum[]
  }

  /**
   * Menu findMany
   */
  export type MenuFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * Filter, which Menus to fetch.
     */
    where?: MenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Menus to fetch.
     */
    orderBy?: MenuOrderByWithRelationInput | MenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Menus.
     */
    cursor?: MenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Menus.
     */
    skip?: number
    distinct?: MenuScalarFieldEnum | MenuScalarFieldEnum[]
  }

  /**
   * Menu create
   */
  export type MenuCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * The data needed to create a Menu.
     */
    data: XOR<MenuCreateInput, MenuUncheckedCreateInput>
  }

  /**
   * Menu createMany
   */
  export type MenuCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Menus.
     */
    data: MenuCreateManyInput | MenuCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Menu createManyAndReturn
   */
  export type MenuCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Menus.
     */
    data: MenuCreateManyInput | MenuCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Menu update
   */
  export type MenuUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * The data needed to update a Menu.
     */
    data: XOR<MenuUpdateInput, MenuUncheckedUpdateInput>
    /**
     * Choose, which Menu to update.
     */
    where: MenuWhereUniqueInput
  }

  /**
   * Menu updateMany
   */
  export type MenuUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Menus.
     */
    data: XOR<MenuUpdateManyMutationInput, MenuUncheckedUpdateManyInput>
    /**
     * Filter which Menus to update
     */
    where?: MenuWhereInput
  }

  /**
   * Menu upsert
   */
  export type MenuUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * The filter to search for the Menu to update in case it exists.
     */
    where: MenuWhereUniqueInput
    /**
     * In case the Menu found by the `where` argument doesn't exist, create a new Menu with this data.
     */
    create: XOR<MenuCreateInput, MenuUncheckedCreateInput>
    /**
     * In case the Menu was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MenuUpdateInput, MenuUncheckedUpdateInput>
  }

  /**
   * Menu delete
   */
  export type MenuDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * Filter which Menu to delete.
     */
    where: MenuWhereUniqueInput
  }

  /**
   * Menu deleteMany
   */
  export type MenuDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Menus to delete
     */
    where?: MenuWhereInput
  }

  /**
   * Menu.meta
   */
  export type Menu$metaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuMeta
     */
    select?: MenuMetaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuMetaInclude<ExtArgs> | null
    where?: MenuMetaWhereInput
  }

  /**
   * Menu.parent
   */
  export type Menu$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    where?: MenuWhereInput
  }

  /**
   * Menu.children
   */
  export type Menu$childrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    where?: MenuWhereInput
    orderBy?: MenuOrderByWithRelationInput | MenuOrderByWithRelationInput[]
    cursor?: MenuWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MenuScalarFieldEnum | MenuScalarFieldEnum[]
  }

  /**
   * Menu.roleMenus
   */
  export type Menu$roleMenusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleMenu
     */
    select?: RoleMenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleMenuInclude<ExtArgs> | null
    where?: RoleMenuWhereInput
    orderBy?: RoleMenuOrderByWithRelationInput | RoleMenuOrderByWithRelationInput[]
    cursor?: RoleMenuWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoleMenuScalarFieldEnum | RoleMenuScalarFieldEnum[]
  }

  /**
   * Menu without action
   */
  export type MenuDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
  }


  /**
   * Model MenuMeta
   */

  export type AggregateMenuMeta = {
    _count: MenuMetaCountAggregateOutputType | null
    _avg: MenuMetaAvgAggregateOutputType | null
    _sum: MenuMetaSumAggregateOutputType | null
    _min: MenuMetaMinAggregateOutputType | null
    _max: MenuMetaMaxAggregateOutputType | null
  }

  export type MenuMetaAvgAggregateOutputType = {
    id: number | null
    order: number | null
    status: number | null
    menuId: number | null
  }

  export type MenuMetaSumAggregateOutputType = {
    id: number | null
    order: number | null
    status: number | null
    menuId: number | null
  }

  export type MenuMetaMinAggregateOutputType = {
    id: number | null
    title: string | null
    layout: string | null
    order: number | null
    hidden: boolean | null
    disabled: boolean | null
    icon: string | null
    status: number | null
    menuId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MenuMetaMaxAggregateOutputType = {
    id: number | null
    title: string | null
    layout: string | null
    order: number | null
    hidden: boolean | null
    disabled: boolean | null
    icon: string | null
    status: number | null
    menuId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MenuMetaCountAggregateOutputType = {
    id: number
    title: number
    layout: number
    order: number
    hidden: number
    disabled: number
    icon: number
    status: number
    menuId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MenuMetaAvgAggregateInputType = {
    id?: true
    order?: true
    status?: true
    menuId?: true
  }

  export type MenuMetaSumAggregateInputType = {
    id?: true
    order?: true
    status?: true
    menuId?: true
  }

  export type MenuMetaMinAggregateInputType = {
    id?: true
    title?: true
    layout?: true
    order?: true
    hidden?: true
    disabled?: true
    icon?: true
    status?: true
    menuId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MenuMetaMaxAggregateInputType = {
    id?: true
    title?: true
    layout?: true
    order?: true
    hidden?: true
    disabled?: true
    icon?: true
    status?: true
    menuId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MenuMetaCountAggregateInputType = {
    id?: true
    title?: true
    layout?: true
    order?: true
    hidden?: true
    disabled?: true
    icon?: true
    status?: true
    menuId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MenuMetaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MenuMeta to aggregate.
     */
    where?: MenuMetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuMetas to fetch.
     */
    orderBy?: MenuMetaOrderByWithRelationInput | MenuMetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MenuMetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuMetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuMetas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MenuMetas
    **/
    _count?: true | MenuMetaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MenuMetaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MenuMetaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MenuMetaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MenuMetaMaxAggregateInputType
  }

  export type GetMenuMetaAggregateType<T extends MenuMetaAggregateArgs> = {
        [P in keyof T & keyof AggregateMenuMeta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMenuMeta[P]>
      : GetScalarType<T[P], AggregateMenuMeta[P]>
  }




  export type MenuMetaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenuMetaWhereInput
    orderBy?: MenuMetaOrderByWithAggregationInput | MenuMetaOrderByWithAggregationInput[]
    by: MenuMetaScalarFieldEnum[] | MenuMetaScalarFieldEnum
    having?: MenuMetaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MenuMetaCountAggregateInputType | true
    _avg?: MenuMetaAvgAggregateInputType
    _sum?: MenuMetaSumAggregateInputType
    _min?: MenuMetaMinAggregateInputType
    _max?: MenuMetaMaxAggregateInputType
  }

  export type MenuMetaGroupByOutputType = {
    id: number
    title: string | null
    layout: string | null
    order: number | null
    hidden: boolean
    disabled: boolean
    icon: string | null
    status: number
    menuId: number
    createdAt: Date
    updatedAt: Date
    _count: MenuMetaCountAggregateOutputType | null
    _avg: MenuMetaAvgAggregateOutputType | null
    _sum: MenuMetaSumAggregateOutputType | null
    _min: MenuMetaMinAggregateOutputType | null
    _max: MenuMetaMaxAggregateOutputType | null
  }

  type GetMenuMetaGroupByPayload<T extends MenuMetaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MenuMetaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MenuMetaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MenuMetaGroupByOutputType[P]>
            : GetScalarType<T[P], MenuMetaGroupByOutputType[P]>
        }
      >
    >


  export type MenuMetaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    layout?: boolean
    order?: boolean
    hidden?: boolean
    disabled?: boolean
    icon?: boolean
    status?: boolean
    menuId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    menu?: boolean | MenuDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menuMeta"]>

  export type MenuMetaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    layout?: boolean
    order?: boolean
    hidden?: boolean
    disabled?: boolean
    icon?: boolean
    status?: boolean
    menuId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    menu?: boolean | MenuDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menuMeta"]>

  export type MenuMetaSelectScalar = {
    id?: boolean
    title?: boolean
    layout?: boolean
    order?: boolean
    hidden?: boolean
    disabled?: boolean
    icon?: boolean
    status?: boolean
    menuId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MenuMetaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menu?: boolean | MenuDefaultArgs<ExtArgs>
  }
  export type MenuMetaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menu?: boolean | MenuDefaultArgs<ExtArgs>
  }

  export type $MenuMetaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MenuMeta"
    objects: {
      menu: Prisma.$MenuPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string | null
      layout: string | null
      order: number | null
      hidden: boolean
      disabled: boolean
      icon: string | null
      status: number
      menuId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["menuMeta"]>
    composites: {}
  }

  type MenuMetaGetPayload<S extends boolean | null | undefined | MenuMetaDefaultArgs> = $Result.GetResult<Prisma.$MenuMetaPayload, S>

  type MenuMetaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MenuMetaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MenuMetaCountAggregateInputType | true
    }

  export interface MenuMetaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MenuMeta'], meta: { name: 'MenuMeta' } }
    /**
     * Find zero or one MenuMeta that matches the filter.
     * @param {MenuMetaFindUniqueArgs} args - Arguments to find a MenuMeta
     * @example
     * // Get one MenuMeta
     * const menuMeta = await prisma.menuMeta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MenuMetaFindUniqueArgs>(args: SelectSubset<T, MenuMetaFindUniqueArgs<ExtArgs>>): Prisma__MenuMetaClient<$Result.GetResult<Prisma.$MenuMetaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one MenuMeta that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MenuMetaFindUniqueOrThrowArgs} args - Arguments to find a MenuMeta
     * @example
     * // Get one MenuMeta
     * const menuMeta = await prisma.menuMeta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MenuMetaFindUniqueOrThrowArgs>(args: SelectSubset<T, MenuMetaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MenuMetaClient<$Result.GetResult<Prisma.$MenuMetaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first MenuMeta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuMetaFindFirstArgs} args - Arguments to find a MenuMeta
     * @example
     * // Get one MenuMeta
     * const menuMeta = await prisma.menuMeta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MenuMetaFindFirstArgs>(args?: SelectSubset<T, MenuMetaFindFirstArgs<ExtArgs>>): Prisma__MenuMetaClient<$Result.GetResult<Prisma.$MenuMetaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first MenuMeta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuMetaFindFirstOrThrowArgs} args - Arguments to find a MenuMeta
     * @example
     * // Get one MenuMeta
     * const menuMeta = await prisma.menuMeta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MenuMetaFindFirstOrThrowArgs>(args?: SelectSubset<T, MenuMetaFindFirstOrThrowArgs<ExtArgs>>): Prisma__MenuMetaClient<$Result.GetResult<Prisma.$MenuMetaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more MenuMetas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuMetaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MenuMetas
     * const menuMetas = await prisma.menuMeta.findMany()
     * 
     * // Get first 10 MenuMetas
     * const menuMetas = await prisma.menuMeta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const menuMetaWithIdOnly = await prisma.menuMeta.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MenuMetaFindManyArgs>(args?: SelectSubset<T, MenuMetaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuMetaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a MenuMeta.
     * @param {MenuMetaCreateArgs} args - Arguments to create a MenuMeta.
     * @example
     * // Create one MenuMeta
     * const MenuMeta = await prisma.menuMeta.create({
     *   data: {
     *     // ... data to create a MenuMeta
     *   }
     * })
     * 
     */
    create<T extends MenuMetaCreateArgs>(args: SelectSubset<T, MenuMetaCreateArgs<ExtArgs>>): Prisma__MenuMetaClient<$Result.GetResult<Prisma.$MenuMetaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many MenuMetas.
     * @param {MenuMetaCreateManyArgs} args - Arguments to create many MenuMetas.
     * @example
     * // Create many MenuMetas
     * const menuMeta = await prisma.menuMeta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MenuMetaCreateManyArgs>(args?: SelectSubset<T, MenuMetaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MenuMetas and returns the data saved in the database.
     * @param {MenuMetaCreateManyAndReturnArgs} args - Arguments to create many MenuMetas.
     * @example
     * // Create many MenuMetas
     * const menuMeta = await prisma.menuMeta.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MenuMetas and only return the `id`
     * const menuMetaWithIdOnly = await prisma.menuMeta.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MenuMetaCreateManyAndReturnArgs>(args?: SelectSubset<T, MenuMetaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuMetaPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a MenuMeta.
     * @param {MenuMetaDeleteArgs} args - Arguments to delete one MenuMeta.
     * @example
     * // Delete one MenuMeta
     * const MenuMeta = await prisma.menuMeta.delete({
     *   where: {
     *     // ... filter to delete one MenuMeta
     *   }
     * })
     * 
     */
    delete<T extends MenuMetaDeleteArgs>(args: SelectSubset<T, MenuMetaDeleteArgs<ExtArgs>>): Prisma__MenuMetaClient<$Result.GetResult<Prisma.$MenuMetaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one MenuMeta.
     * @param {MenuMetaUpdateArgs} args - Arguments to update one MenuMeta.
     * @example
     * // Update one MenuMeta
     * const menuMeta = await prisma.menuMeta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MenuMetaUpdateArgs>(args: SelectSubset<T, MenuMetaUpdateArgs<ExtArgs>>): Prisma__MenuMetaClient<$Result.GetResult<Prisma.$MenuMetaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more MenuMetas.
     * @param {MenuMetaDeleteManyArgs} args - Arguments to filter MenuMetas to delete.
     * @example
     * // Delete a few MenuMetas
     * const { count } = await prisma.menuMeta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MenuMetaDeleteManyArgs>(args?: SelectSubset<T, MenuMetaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MenuMetas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuMetaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MenuMetas
     * const menuMeta = await prisma.menuMeta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MenuMetaUpdateManyArgs>(args: SelectSubset<T, MenuMetaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MenuMeta.
     * @param {MenuMetaUpsertArgs} args - Arguments to update or create a MenuMeta.
     * @example
     * // Update or create a MenuMeta
     * const menuMeta = await prisma.menuMeta.upsert({
     *   create: {
     *     // ... data to create a MenuMeta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MenuMeta we want to update
     *   }
     * })
     */
    upsert<T extends MenuMetaUpsertArgs>(args: SelectSubset<T, MenuMetaUpsertArgs<ExtArgs>>): Prisma__MenuMetaClient<$Result.GetResult<Prisma.$MenuMetaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of MenuMetas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuMetaCountArgs} args - Arguments to filter MenuMetas to count.
     * @example
     * // Count the number of MenuMetas
     * const count = await prisma.menuMeta.count({
     *   where: {
     *     // ... the filter for the MenuMetas we want to count
     *   }
     * })
    **/
    count<T extends MenuMetaCountArgs>(
      args?: Subset<T, MenuMetaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MenuMetaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MenuMeta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuMetaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MenuMetaAggregateArgs>(args: Subset<T, MenuMetaAggregateArgs>): Prisma.PrismaPromise<GetMenuMetaAggregateType<T>>

    /**
     * Group by MenuMeta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuMetaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MenuMetaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MenuMetaGroupByArgs['orderBy'] }
        : { orderBy?: MenuMetaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MenuMetaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMenuMetaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MenuMeta model
   */
  readonly fields: MenuMetaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MenuMeta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MenuMetaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    menu<T extends MenuDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MenuDefaultArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MenuMeta model
   */ 
  interface MenuMetaFieldRefs {
    readonly id: FieldRef<"MenuMeta", 'Int'>
    readonly title: FieldRef<"MenuMeta", 'String'>
    readonly layout: FieldRef<"MenuMeta", 'String'>
    readonly order: FieldRef<"MenuMeta", 'Int'>
    readonly hidden: FieldRef<"MenuMeta", 'Boolean'>
    readonly disabled: FieldRef<"MenuMeta", 'Boolean'>
    readonly icon: FieldRef<"MenuMeta", 'String'>
    readonly status: FieldRef<"MenuMeta", 'Int'>
    readonly menuId: FieldRef<"MenuMeta", 'Int'>
    readonly createdAt: FieldRef<"MenuMeta", 'DateTime'>
    readonly updatedAt: FieldRef<"MenuMeta", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MenuMeta findUnique
   */
  export type MenuMetaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuMeta
     */
    select?: MenuMetaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuMetaInclude<ExtArgs> | null
    /**
     * Filter, which MenuMeta to fetch.
     */
    where: MenuMetaWhereUniqueInput
  }

  /**
   * MenuMeta findUniqueOrThrow
   */
  export type MenuMetaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuMeta
     */
    select?: MenuMetaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuMetaInclude<ExtArgs> | null
    /**
     * Filter, which MenuMeta to fetch.
     */
    where: MenuMetaWhereUniqueInput
  }

  /**
   * MenuMeta findFirst
   */
  export type MenuMetaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuMeta
     */
    select?: MenuMetaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuMetaInclude<ExtArgs> | null
    /**
     * Filter, which MenuMeta to fetch.
     */
    where?: MenuMetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuMetas to fetch.
     */
    orderBy?: MenuMetaOrderByWithRelationInput | MenuMetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MenuMetas.
     */
    cursor?: MenuMetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuMetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuMetas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MenuMetas.
     */
    distinct?: MenuMetaScalarFieldEnum | MenuMetaScalarFieldEnum[]
  }

  /**
   * MenuMeta findFirstOrThrow
   */
  export type MenuMetaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuMeta
     */
    select?: MenuMetaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuMetaInclude<ExtArgs> | null
    /**
     * Filter, which MenuMeta to fetch.
     */
    where?: MenuMetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuMetas to fetch.
     */
    orderBy?: MenuMetaOrderByWithRelationInput | MenuMetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MenuMetas.
     */
    cursor?: MenuMetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuMetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuMetas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MenuMetas.
     */
    distinct?: MenuMetaScalarFieldEnum | MenuMetaScalarFieldEnum[]
  }

  /**
   * MenuMeta findMany
   */
  export type MenuMetaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuMeta
     */
    select?: MenuMetaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuMetaInclude<ExtArgs> | null
    /**
     * Filter, which MenuMetas to fetch.
     */
    where?: MenuMetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuMetas to fetch.
     */
    orderBy?: MenuMetaOrderByWithRelationInput | MenuMetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MenuMetas.
     */
    cursor?: MenuMetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuMetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuMetas.
     */
    skip?: number
    distinct?: MenuMetaScalarFieldEnum | MenuMetaScalarFieldEnum[]
  }

  /**
   * MenuMeta create
   */
  export type MenuMetaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuMeta
     */
    select?: MenuMetaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuMetaInclude<ExtArgs> | null
    /**
     * The data needed to create a MenuMeta.
     */
    data: XOR<MenuMetaCreateInput, MenuMetaUncheckedCreateInput>
  }

  /**
   * MenuMeta createMany
   */
  export type MenuMetaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MenuMetas.
     */
    data: MenuMetaCreateManyInput | MenuMetaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MenuMeta createManyAndReturn
   */
  export type MenuMetaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuMeta
     */
    select?: MenuMetaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many MenuMetas.
     */
    data: MenuMetaCreateManyInput | MenuMetaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuMetaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MenuMeta update
   */
  export type MenuMetaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuMeta
     */
    select?: MenuMetaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuMetaInclude<ExtArgs> | null
    /**
     * The data needed to update a MenuMeta.
     */
    data: XOR<MenuMetaUpdateInput, MenuMetaUncheckedUpdateInput>
    /**
     * Choose, which MenuMeta to update.
     */
    where: MenuMetaWhereUniqueInput
  }

  /**
   * MenuMeta updateMany
   */
  export type MenuMetaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MenuMetas.
     */
    data: XOR<MenuMetaUpdateManyMutationInput, MenuMetaUncheckedUpdateManyInput>
    /**
     * Filter which MenuMetas to update
     */
    where?: MenuMetaWhereInput
  }

  /**
   * MenuMeta upsert
   */
  export type MenuMetaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuMeta
     */
    select?: MenuMetaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuMetaInclude<ExtArgs> | null
    /**
     * The filter to search for the MenuMeta to update in case it exists.
     */
    where: MenuMetaWhereUniqueInput
    /**
     * In case the MenuMeta found by the `where` argument doesn't exist, create a new MenuMeta with this data.
     */
    create: XOR<MenuMetaCreateInput, MenuMetaUncheckedCreateInput>
    /**
     * In case the MenuMeta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MenuMetaUpdateInput, MenuMetaUncheckedUpdateInput>
  }

  /**
   * MenuMeta delete
   */
  export type MenuMetaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuMeta
     */
    select?: MenuMetaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuMetaInclude<ExtArgs> | null
    /**
     * Filter which MenuMeta to delete.
     */
    where: MenuMetaWhereUniqueInput
  }

  /**
   * MenuMeta deleteMany
   */
  export type MenuMetaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MenuMetas to delete
     */
    where?: MenuMetaWhereInput
  }

  /**
   * MenuMeta without action
   */
  export type MenuMetaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuMeta
     */
    select?: MenuMetaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuMetaInclude<ExtArgs> | null
  }


  /**
   * Model RoleMenu
   */

  export type AggregateRoleMenu = {
    _count: RoleMenuCountAggregateOutputType | null
    _avg: RoleMenuAvgAggregateOutputType | null
    _sum: RoleMenuSumAggregateOutputType | null
    _min: RoleMenuMinAggregateOutputType | null
    _max: RoleMenuMaxAggregateOutputType | null
  }

  export type RoleMenuAvgAggregateOutputType = {
    roleId: number | null
    menuId: number | null
  }

  export type RoleMenuSumAggregateOutputType = {
    roleId: number | null
    menuId: number | null
  }

  export type RoleMenuMinAggregateOutputType = {
    roleId: number | null
    menuId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoleMenuMaxAggregateOutputType = {
    roleId: number | null
    menuId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoleMenuCountAggregateOutputType = {
    roleId: number
    menuId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RoleMenuAvgAggregateInputType = {
    roleId?: true
    menuId?: true
  }

  export type RoleMenuSumAggregateInputType = {
    roleId?: true
    menuId?: true
  }

  export type RoleMenuMinAggregateInputType = {
    roleId?: true
    menuId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoleMenuMaxAggregateInputType = {
    roleId?: true
    menuId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoleMenuCountAggregateInputType = {
    roleId?: true
    menuId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RoleMenuAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoleMenu to aggregate.
     */
    where?: RoleMenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoleMenus to fetch.
     */
    orderBy?: RoleMenuOrderByWithRelationInput | RoleMenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleMenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoleMenus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoleMenus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RoleMenus
    **/
    _count?: true | RoleMenuCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoleMenuAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoleMenuSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMenuMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMenuMaxAggregateInputType
  }

  export type GetRoleMenuAggregateType<T extends RoleMenuAggregateArgs> = {
        [P in keyof T & keyof AggregateRoleMenu]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoleMenu[P]>
      : GetScalarType<T[P], AggregateRoleMenu[P]>
  }




  export type RoleMenuGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleMenuWhereInput
    orderBy?: RoleMenuOrderByWithAggregationInput | RoleMenuOrderByWithAggregationInput[]
    by: RoleMenuScalarFieldEnum[] | RoleMenuScalarFieldEnum
    having?: RoleMenuScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleMenuCountAggregateInputType | true
    _avg?: RoleMenuAvgAggregateInputType
    _sum?: RoleMenuSumAggregateInputType
    _min?: RoleMenuMinAggregateInputType
    _max?: RoleMenuMaxAggregateInputType
  }

  export type RoleMenuGroupByOutputType = {
    roleId: number
    menuId: number
    createdAt: Date
    updatedAt: Date
    _count: RoleMenuCountAggregateOutputType | null
    _avg: RoleMenuAvgAggregateOutputType | null
    _sum: RoleMenuSumAggregateOutputType | null
    _min: RoleMenuMinAggregateOutputType | null
    _max: RoleMenuMaxAggregateOutputType | null
  }

  type GetRoleMenuGroupByPayload<T extends RoleMenuGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleMenuGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleMenuGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleMenuGroupByOutputType[P]>
            : GetScalarType<T[P], RoleMenuGroupByOutputType[P]>
        }
      >
    >


  export type RoleMenuSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    roleId?: boolean
    menuId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    menu?: boolean | MenuDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roleMenu"]>

  export type RoleMenuSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    roleId?: boolean
    menuId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    menu?: boolean | MenuDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roleMenu"]>

  export type RoleMenuSelectScalar = {
    roleId?: boolean
    menuId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RoleMenuInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    menu?: boolean | MenuDefaultArgs<ExtArgs>
  }
  export type RoleMenuIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    menu?: boolean | MenuDefaultArgs<ExtArgs>
  }

  export type $RoleMenuPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RoleMenu"
    objects: {
      role: Prisma.$RolePayload<ExtArgs>
      menu: Prisma.$MenuPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      roleId: number
      menuId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["roleMenu"]>
    composites: {}
  }

  type RoleMenuGetPayload<S extends boolean | null | undefined | RoleMenuDefaultArgs> = $Result.GetResult<Prisma.$RoleMenuPayload, S>

  type RoleMenuCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RoleMenuFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RoleMenuCountAggregateInputType | true
    }

  export interface RoleMenuDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RoleMenu'], meta: { name: 'RoleMenu' } }
    /**
     * Find zero or one RoleMenu that matches the filter.
     * @param {RoleMenuFindUniqueArgs} args - Arguments to find a RoleMenu
     * @example
     * // Get one RoleMenu
     * const roleMenu = await prisma.roleMenu.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleMenuFindUniqueArgs>(args: SelectSubset<T, RoleMenuFindUniqueArgs<ExtArgs>>): Prisma__RoleMenuClient<$Result.GetResult<Prisma.$RoleMenuPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one RoleMenu that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RoleMenuFindUniqueOrThrowArgs} args - Arguments to find a RoleMenu
     * @example
     * // Get one RoleMenu
     * const roleMenu = await prisma.roleMenu.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleMenuFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleMenuFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleMenuClient<$Result.GetResult<Prisma.$RoleMenuPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first RoleMenu that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleMenuFindFirstArgs} args - Arguments to find a RoleMenu
     * @example
     * // Get one RoleMenu
     * const roleMenu = await prisma.roleMenu.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleMenuFindFirstArgs>(args?: SelectSubset<T, RoleMenuFindFirstArgs<ExtArgs>>): Prisma__RoleMenuClient<$Result.GetResult<Prisma.$RoleMenuPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first RoleMenu that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleMenuFindFirstOrThrowArgs} args - Arguments to find a RoleMenu
     * @example
     * // Get one RoleMenu
     * const roleMenu = await prisma.roleMenu.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleMenuFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleMenuFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleMenuClient<$Result.GetResult<Prisma.$RoleMenuPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more RoleMenus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleMenuFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoleMenus
     * const roleMenus = await prisma.roleMenu.findMany()
     * 
     * // Get first 10 RoleMenus
     * const roleMenus = await prisma.roleMenu.findMany({ take: 10 })
     * 
     * // Only select the `roleId`
     * const roleMenuWithRoleIdOnly = await prisma.roleMenu.findMany({ select: { roleId: true } })
     * 
     */
    findMany<T extends RoleMenuFindManyArgs>(args?: SelectSubset<T, RoleMenuFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoleMenuPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a RoleMenu.
     * @param {RoleMenuCreateArgs} args - Arguments to create a RoleMenu.
     * @example
     * // Create one RoleMenu
     * const RoleMenu = await prisma.roleMenu.create({
     *   data: {
     *     // ... data to create a RoleMenu
     *   }
     * })
     * 
     */
    create<T extends RoleMenuCreateArgs>(args: SelectSubset<T, RoleMenuCreateArgs<ExtArgs>>): Prisma__RoleMenuClient<$Result.GetResult<Prisma.$RoleMenuPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many RoleMenus.
     * @param {RoleMenuCreateManyArgs} args - Arguments to create many RoleMenus.
     * @example
     * // Create many RoleMenus
     * const roleMenu = await prisma.roleMenu.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleMenuCreateManyArgs>(args?: SelectSubset<T, RoleMenuCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RoleMenus and returns the data saved in the database.
     * @param {RoleMenuCreateManyAndReturnArgs} args - Arguments to create many RoleMenus.
     * @example
     * // Create many RoleMenus
     * const roleMenu = await prisma.roleMenu.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RoleMenus and only return the `roleId`
     * const roleMenuWithRoleIdOnly = await prisma.roleMenu.createManyAndReturn({ 
     *   select: { roleId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoleMenuCreateManyAndReturnArgs>(args?: SelectSubset<T, RoleMenuCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoleMenuPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a RoleMenu.
     * @param {RoleMenuDeleteArgs} args - Arguments to delete one RoleMenu.
     * @example
     * // Delete one RoleMenu
     * const RoleMenu = await prisma.roleMenu.delete({
     *   where: {
     *     // ... filter to delete one RoleMenu
     *   }
     * })
     * 
     */
    delete<T extends RoleMenuDeleteArgs>(args: SelectSubset<T, RoleMenuDeleteArgs<ExtArgs>>): Prisma__RoleMenuClient<$Result.GetResult<Prisma.$RoleMenuPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one RoleMenu.
     * @param {RoleMenuUpdateArgs} args - Arguments to update one RoleMenu.
     * @example
     * // Update one RoleMenu
     * const roleMenu = await prisma.roleMenu.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleMenuUpdateArgs>(args: SelectSubset<T, RoleMenuUpdateArgs<ExtArgs>>): Prisma__RoleMenuClient<$Result.GetResult<Prisma.$RoleMenuPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more RoleMenus.
     * @param {RoleMenuDeleteManyArgs} args - Arguments to filter RoleMenus to delete.
     * @example
     * // Delete a few RoleMenus
     * const { count } = await prisma.roleMenu.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleMenuDeleteManyArgs>(args?: SelectSubset<T, RoleMenuDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoleMenus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleMenuUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoleMenus
     * const roleMenu = await prisma.roleMenu.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleMenuUpdateManyArgs>(args: SelectSubset<T, RoleMenuUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RoleMenu.
     * @param {RoleMenuUpsertArgs} args - Arguments to update or create a RoleMenu.
     * @example
     * // Update or create a RoleMenu
     * const roleMenu = await prisma.roleMenu.upsert({
     *   create: {
     *     // ... data to create a RoleMenu
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoleMenu we want to update
     *   }
     * })
     */
    upsert<T extends RoleMenuUpsertArgs>(args: SelectSubset<T, RoleMenuUpsertArgs<ExtArgs>>): Prisma__RoleMenuClient<$Result.GetResult<Prisma.$RoleMenuPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of RoleMenus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleMenuCountArgs} args - Arguments to filter RoleMenus to count.
     * @example
     * // Count the number of RoleMenus
     * const count = await prisma.roleMenu.count({
     *   where: {
     *     // ... the filter for the RoleMenus we want to count
     *   }
     * })
    **/
    count<T extends RoleMenuCountArgs>(
      args?: Subset<T, RoleMenuCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleMenuCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RoleMenu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleMenuAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoleMenuAggregateArgs>(args: Subset<T, RoleMenuAggregateArgs>): Prisma.PrismaPromise<GetRoleMenuAggregateType<T>>

    /**
     * Group by RoleMenu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleMenuGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoleMenuGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleMenuGroupByArgs['orderBy'] }
        : { orderBy?: RoleMenuGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoleMenuGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleMenuGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RoleMenu model
   */
  readonly fields: RoleMenuFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RoleMenu.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleMenuClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    menu<T extends MenuDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MenuDefaultArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RoleMenu model
   */ 
  interface RoleMenuFieldRefs {
    readonly roleId: FieldRef<"RoleMenu", 'Int'>
    readonly menuId: FieldRef<"RoleMenu", 'Int'>
    readonly createdAt: FieldRef<"RoleMenu", 'DateTime'>
    readonly updatedAt: FieldRef<"RoleMenu", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RoleMenu findUnique
   */
  export type RoleMenuFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleMenu
     */
    select?: RoleMenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleMenuInclude<ExtArgs> | null
    /**
     * Filter, which RoleMenu to fetch.
     */
    where: RoleMenuWhereUniqueInput
  }

  /**
   * RoleMenu findUniqueOrThrow
   */
  export type RoleMenuFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleMenu
     */
    select?: RoleMenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleMenuInclude<ExtArgs> | null
    /**
     * Filter, which RoleMenu to fetch.
     */
    where: RoleMenuWhereUniqueInput
  }

  /**
   * RoleMenu findFirst
   */
  export type RoleMenuFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleMenu
     */
    select?: RoleMenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleMenuInclude<ExtArgs> | null
    /**
     * Filter, which RoleMenu to fetch.
     */
    where?: RoleMenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoleMenus to fetch.
     */
    orderBy?: RoleMenuOrderByWithRelationInput | RoleMenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoleMenus.
     */
    cursor?: RoleMenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoleMenus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoleMenus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoleMenus.
     */
    distinct?: RoleMenuScalarFieldEnum | RoleMenuScalarFieldEnum[]
  }

  /**
   * RoleMenu findFirstOrThrow
   */
  export type RoleMenuFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleMenu
     */
    select?: RoleMenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleMenuInclude<ExtArgs> | null
    /**
     * Filter, which RoleMenu to fetch.
     */
    where?: RoleMenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoleMenus to fetch.
     */
    orderBy?: RoleMenuOrderByWithRelationInput | RoleMenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoleMenus.
     */
    cursor?: RoleMenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoleMenus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoleMenus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoleMenus.
     */
    distinct?: RoleMenuScalarFieldEnum | RoleMenuScalarFieldEnum[]
  }

  /**
   * RoleMenu findMany
   */
  export type RoleMenuFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleMenu
     */
    select?: RoleMenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleMenuInclude<ExtArgs> | null
    /**
     * Filter, which RoleMenus to fetch.
     */
    where?: RoleMenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoleMenus to fetch.
     */
    orderBy?: RoleMenuOrderByWithRelationInput | RoleMenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RoleMenus.
     */
    cursor?: RoleMenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoleMenus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoleMenus.
     */
    skip?: number
    distinct?: RoleMenuScalarFieldEnum | RoleMenuScalarFieldEnum[]
  }

  /**
   * RoleMenu create
   */
  export type RoleMenuCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleMenu
     */
    select?: RoleMenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleMenuInclude<ExtArgs> | null
    /**
     * The data needed to create a RoleMenu.
     */
    data: XOR<RoleMenuCreateInput, RoleMenuUncheckedCreateInput>
  }

  /**
   * RoleMenu createMany
   */
  export type RoleMenuCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RoleMenus.
     */
    data: RoleMenuCreateManyInput | RoleMenuCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RoleMenu createManyAndReturn
   */
  export type RoleMenuCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleMenu
     */
    select?: RoleMenuSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many RoleMenus.
     */
    data: RoleMenuCreateManyInput | RoleMenuCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleMenuIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RoleMenu update
   */
  export type RoleMenuUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleMenu
     */
    select?: RoleMenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleMenuInclude<ExtArgs> | null
    /**
     * The data needed to update a RoleMenu.
     */
    data: XOR<RoleMenuUpdateInput, RoleMenuUncheckedUpdateInput>
    /**
     * Choose, which RoleMenu to update.
     */
    where: RoleMenuWhereUniqueInput
  }

  /**
   * RoleMenu updateMany
   */
  export type RoleMenuUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RoleMenus.
     */
    data: XOR<RoleMenuUpdateManyMutationInput, RoleMenuUncheckedUpdateManyInput>
    /**
     * Filter which RoleMenus to update
     */
    where?: RoleMenuWhereInput
  }

  /**
   * RoleMenu upsert
   */
  export type RoleMenuUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleMenu
     */
    select?: RoleMenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleMenuInclude<ExtArgs> | null
    /**
     * The filter to search for the RoleMenu to update in case it exists.
     */
    where: RoleMenuWhereUniqueInput
    /**
     * In case the RoleMenu found by the `where` argument doesn't exist, create a new RoleMenu with this data.
     */
    create: XOR<RoleMenuCreateInput, RoleMenuUncheckedCreateInput>
    /**
     * In case the RoleMenu was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleMenuUpdateInput, RoleMenuUncheckedUpdateInput>
  }

  /**
   * RoleMenu delete
   */
  export type RoleMenuDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleMenu
     */
    select?: RoleMenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleMenuInclude<ExtArgs> | null
    /**
     * Filter which RoleMenu to delete.
     */
    where: RoleMenuWhereUniqueInput
  }

  /**
   * RoleMenu deleteMany
   */
  export type RoleMenuDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoleMenus to delete
     */
    where?: RoleMenuWhereInput
  }

  /**
   * RoleMenu without action
   */
  export type RoleMenuDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleMenu
     */
    select?: RoleMenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleMenuInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const UserRoleScalarFieldEnum: {
    userId: 'userId',
    roleId: 'roleId'
  };

  export type UserRoleScalarFieldEnum = (typeof UserRoleScalarFieldEnum)[keyof typeof UserRoleScalarFieldEnum]


  export const PermissionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    action: 'action',
    description: 'description'
  };

  export type PermissionScalarFieldEnum = (typeof PermissionScalarFieldEnum)[keyof typeof PermissionScalarFieldEnum]


  export const RolePermissionsScalarFieldEnum: {
    roleId: 'roleId',
    permissionId: 'permissionId'
  };

  export type RolePermissionsScalarFieldEnum = (typeof RolePermissionsScalarFieldEnum)[keyof typeof RolePermissionsScalarFieldEnum]


  export const PolicyScalarFieldEnum: {
    id: 'id',
    type: 'type',
    effect: 'effect',
    action: 'action',
    subject: 'subject',
    fields: 'fields',
    conditions: 'conditions',
    args: 'args',
    encode: 'encode'
  };

  export type PolicyScalarFieldEnum = (typeof PolicyScalarFieldEnum)[keyof typeof PolicyScalarFieldEnum]


  export const RolePolicyScalarFieldEnum: {
    roleId: 'roleId',
    policyId: 'policyId'
  };

  export type RolePolicyScalarFieldEnum = (typeof RolePolicyScalarFieldEnum)[keyof typeof RolePolicyScalarFieldEnum]


  export const PermissionPolicyScalarFieldEnum: {
    permissionId: 'permissionId',
    policyId: 'policyId'
  };

  export type PermissionPolicyScalarFieldEnum = (typeof PermissionPolicyScalarFieldEnum)[keyof typeof PermissionPolicyScalarFieldEnum]


  export const MenuScalarFieldEnum: {
    id: 'id',
    name: 'name',
    path: 'path',
    label: 'label',
    component: 'component',
    redirect: 'redirect',
    fullPath: 'fullPath',
    alias: 'alias',
    status: 'status',
    parentId: 'parentId',
    metaId: 'metaId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MenuScalarFieldEnum = (typeof MenuScalarFieldEnum)[keyof typeof MenuScalarFieldEnum]


  export const MenuMetaScalarFieldEnum: {
    id: 'id',
    title: 'title',
    layout: 'layout',
    order: 'order',
    hidden: 'hidden',
    disabled: 'disabled',
    icon: 'icon',
    status: 'status',
    menuId: 'menuId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MenuMetaScalarFieldEnum = (typeof MenuMetaScalarFieldEnum)[keyof typeof MenuMetaScalarFieldEnum]


  export const RoleMenuScalarFieldEnum: {
    roleId: 'roleId',
    menuId: 'menuId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RoleMenuScalarFieldEnum = (typeof RoleMenuScalarFieldEnum)[keyof typeof RoleMenuScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    UserRole?: UserRoleListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    UserRole?: UserRoleOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    UserRole?: UserRoleListRelationFilter
  }, "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: IntFilter<"Role"> | number
    name?: StringFilter<"Role"> | string
    description?: StringNullableFilter<"Role"> | string | null
    users?: UserRoleListRelationFilter
    RolePermissions?: RolePermissionsListRelationFilter
    RolePolicy?: RolePolicyListRelationFilter
    RoleMenu?: RoleMenuListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    users?: UserRoleOrderByRelationAggregateInput
    RolePermissions?: RolePermissionsOrderByRelationAggregateInput
    RolePolicy?: RolePolicyOrderByRelationAggregateInput
    RoleMenu?: RoleMenuOrderByRelationAggregateInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    description?: StringNullableFilter<"Role"> | string | null
    users?: UserRoleListRelationFilter
    RolePermissions?: RolePermissionsListRelationFilter
    RolePolicy?: RolePolicyListRelationFilter
    RoleMenu?: RoleMenuListRelationFilter
  }, "id" | "name">

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: RoleCountOrderByAggregateInput
    _avg?: RoleAvgOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
    _sum?: RoleSumOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Role"> | number
    name?: StringWithAggregatesFilter<"Role"> | string
    description?: StringNullableWithAggregatesFilter<"Role"> | string | null
  }

  export type UserRoleWhereInput = {
    AND?: UserRoleWhereInput | UserRoleWhereInput[]
    OR?: UserRoleWhereInput[]
    NOT?: UserRoleWhereInput | UserRoleWhereInput[]
    userId?: IntFilter<"UserRole"> | number
    roleId?: IntFilter<"UserRole"> | number
    role?: XOR<RoleRelationFilter, RoleWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type UserRoleOrderByWithRelationInput = {
    userId?: SortOrder
    roleId?: SortOrder
    role?: RoleOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type UserRoleWhereUniqueInput = Prisma.AtLeast<{
    userId_roleId?: UserRoleUserIdRoleIdCompoundUniqueInput
    AND?: UserRoleWhereInput | UserRoleWhereInput[]
    OR?: UserRoleWhereInput[]
    NOT?: UserRoleWhereInput | UserRoleWhereInput[]
    userId?: IntFilter<"UserRole"> | number
    roleId?: IntFilter<"UserRole"> | number
    role?: XOR<RoleRelationFilter, RoleWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "userId_roleId">

  export type UserRoleOrderByWithAggregationInput = {
    userId?: SortOrder
    roleId?: SortOrder
    _count?: UserRoleCountOrderByAggregateInput
    _avg?: UserRoleAvgOrderByAggregateInput
    _max?: UserRoleMaxOrderByAggregateInput
    _min?: UserRoleMinOrderByAggregateInput
    _sum?: UserRoleSumOrderByAggregateInput
  }

  export type UserRoleScalarWhereWithAggregatesInput = {
    AND?: UserRoleScalarWhereWithAggregatesInput | UserRoleScalarWhereWithAggregatesInput[]
    OR?: UserRoleScalarWhereWithAggregatesInput[]
    NOT?: UserRoleScalarWhereWithAggregatesInput | UserRoleScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"UserRole"> | number
    roleId?: IntWithAggregatesFilter<"UserRole"> | number
  }

  export type PermissionWhereInput = {
    AND?: PermissionWhereInput | PermissionWhereInput[]
    OR?: PermissionWhereInput[]
    NOT?: PermissionWhereInput | PermissionWhereInput[]
    id?: IntFilter<"Permission"> | number
    name?: StringFilter<"Permission"> | string
    action?: StringFilter<"Permission"> | string
    description?: StringNullableFilter<"Permission"> | string | null
    RolePermissions?: RolePermissionsListRelationFilter
    PermissionPolicy?: PermissionPolicyListRelationFilter
  }

  export type PermissionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    action?: SortOrder
    description?: SortOrderInput | SortOrder
    RolePermissions?: RolePermissionsOrderByRelationAggregateInput
    PermissionPolicy?: PermissionPolicyOrderByRelationAggregateInput
  }

  export type PermissionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: PermissionWhereInput | PermissionWhereInput[]
    OR?: PermissionWhereInput[]
    NOT?: PermissionWhereInput | PermissionWhereInput[]
    action?: StringFilter<"Permission"> | string
    description?: StringNullableFilter<"Permission"> | string | null
    RolePermissions?: RolePermissionsListRelationFilter
    PermissionPolicy?: PermissionPolicyListRelationFilter
  }, "id" | "name">

  export type PermissionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    action?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: PermissionCountOrderByAggregateInput
    _avg?: PermissionAvgOrderByAggregateInput
    _max?: PermissionMaxOrderByAggregateInput
    _min?: PermissionMinOrderByAggregateInput
    _sum?: PermissionSumOrderByAggregateInput
  }

  export type PermissionScalarWhereWithAggregatesInput = {
    AND?: PermissionScalarWhereWithAggregatesInput | PermissionScalarWhereWithAggregatesInput[]
    OR?: PermissionScalarWhereWithAggregatesInput[]
    NOT?: PermissionScalarWhereWithAggregatesInput | PermissionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Permission"> | number
    name?: StringWithAggregatesFilter<"Permission"> | string
    action?: StringWithAggregatesFilter<"Permission"> | string
    description?: StringNullableWithAggregatesFilter<"Permission"> | string | null
  }

  export type RolePermissionsWhereInput = {
    AND?: RolePermissionsWhereInput | RolePermissionsWhereInput[]
    OR?: RolePermissionsWhereInput[]
    NOT?: RolePermissionsWhereInput | RolePermissionsWhereInput[]
    roleId?: IntFilter<"RolePermissions"> | number
    permissionId?: IntFilter<"RolePermissions"> | number
    role?: XOR<RoleRelationFilter, RoleWhereInput>
    permission?: XOR<PermissionRelationFilter, PermissionWhereInput>
  }

  export type RolePermissionsOrderByWithRelationInput = {
    roleId?: SortOrder
    permissionId?: SortOrder
    role?: RoleOrderByWithRelationInput
    permission?: PermissionOrderByWithRelationInput
  }

  export type RolePermissionsWhereUniqueInput = Prisma.AtLeast<{
    roleId_permissionId?: RolePermissionsRoleIdPermissionIdCompoundUniqueInput
    AND?: RolePermissionsWhereInput | RolePermissionsWhereInput[]
    OR?: RolePermissionsWhereInput[]
    NOT?: RolePermissionsWhereInput | RolePermissionsWhereInput[]
    roleId?: IntFilter<"RolePermissions"> | number
    permissionId?: IntFilter<"RolePermissions"> | number
    role?: XOR<RoleRelationFilter, RoleWhereInput>
    permission?: XOR<PermissionRelationFilter, PermissionWhereInput>
  }, "roleId_permissionId">

  export type RolePermissionsOrderByWithAggregationInput = {
    roleId?: SortOrder
    permissionId?: SortOrder
    _count?: RolePermissionsCountOrderByAggregateInput
    _avg?: RolePermissionsAvgOrderByAggregateInput
    _max?: RolePermissionsMaxOrderByAggregateInput
    _min?: RolePermissionsMinOrderByAggregateInput
    _sum?: RolePermissionsSumOrderByAggregateInput
  }

  export type RolePermissionsScalarWhereWithAggregatesInput = {
    AND?: RolePermissionsScalarWhereWithAggregatesInput | RolePermissionsScalarWhereWithAggregatesInput[]
    OR?: RolePermissionsScalarWhereWithAggregatesInput[]
    NOT?: RolePermissionsScalarWhereWithAggregatesInput | RolePermissionsScalarWhereWithAggregatesInput[]
    roleId?: IntWithAggregatesFilter<"RolePermissions"> | number
    permissionId?: IntWithAggregatesFilter<"RolePermissions"> | number
  }

  export type PolicyWhereInput = {
    AND?: PolicyWhereInput | PolicyWhereInput[]
    OR?: PolicyWhereInput[]
    NOT?: PolicyWhereInput | PolicyWhereInput[]
    id?: IntFilter<"Policy"> | number
    type?: IntFilter<"Policy"> | number
    effect?: StringFilter<"Policy"> | string
    action?: StringFilter<"Policy"> | string
    subject?: StringFilter<"Policy"> | string
    fields?: JsonNullableFilter<"Policy">
    conditions?: JsonNullableFilter<"Policy">
    args?: JsonNullableFilter<"Policy">
    encode?: StringFilter<"Policy"> | string
    RolePolicy?: RolePolicyListRelationFilter
    PermissionPolicy?: PermissionPolicyListRelationFilter
  }

  export type PolicyOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    effect?: SortOrder
    action?: SortOrder
    subject?: SortOrder
    fields?: SortOrderInput | SortOrder
    conditions?: SortOrderInput | SortOrder
    args?: SortOrderInput | SortOrder
    encode?: SortOrder
    RolePolicy?: RolePolicyOrderByRelationAggregateInput
    PermissionPolicy?: PermissionPolicyOrderByRelationAggregateInput
  }

  export type PolicyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    encode?: string
    AND?: PolicyWhereInput | PolicyWhereInput[]
    OR?: PolicyWhereInput[]
    NOT?: PolicyWhereInput | PolicyWhereInput[]
    type?: IntFilter<"Policy"> | number
    effect?: StringFilter<"Policy"> | string
    action?: StringFilter<"Policy"> | string
    subject?: StringFilter<"Policy"> | string
    fields?: JsonNullableFilter<"Policy">
    conditions?: JsonNullableFilter<"Policy">
    args?: JsonNullableFilter<"Policy">
    RolePolicy?: RolePolicyListRelationFilter
    PermissionPolicy?: PermissionPolicyListRelationFilter
  }, "id" | "encode">

  export type PolicyOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    effect?: SortOrder
    action?: SortOrder
    subject?: SortOrder
    fields?: SortOrderInput | SortOrder
    conditions?: SortOrderInput | SortOrder
    args?: SortOrderInput | SortOrder
    encode?: SortOrder
    _count?: PolicyCountOrderByAggregateInput
    _avg?: PolicyAvgOrderByAggregateInput
    _max?: PolicyMaxOrderByAggregateInput
    _min?: PolicyMinOrderByAggregateInput
    _sum?: PolicySumOrderByAggregateInput
  }

  export type PolicyScalarWhereWithAggregatesInput = {
    AND?: PolicyScalarWhereWithAggregatesInput | PolicyScalarWhereWithAggregatesInput[]
    OR?: PolicyScalarWhereWithAggregatesInput[]
    NOT?: PolicyScalarWhereWithAggregatesInput | PolicyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Policy"> | number
    type?: IntWithAggregatesFilter<"Policy"> | number
    effect?: StringWithAggregatesFilter<"Policy"> | string
    action?: StringWithAggregatesFilter<"Policy"> | string
    subject?: StringWithAggregatesFilter<"Policy"> | string
    fields?: JsonNullableWithAggregatesFilter<"Policy">
    conditions?: JsonNullableWithAggregatesFilter<"Policy">
    args?: JsonNullableWithAggregatesFilter<"Policy">
    encode?: StringWithAggregatesFilter<"Policy"> | string
  }

  export type RolePolicyWhereInput = {
    AND?: RolePolicyWhereInput | RolePolicyWhereInput[]
    OR?: RolePolicyWhereInput[]
    NOT?: RolePolicyWhereInput | RolePolicyWhereInput[]
    roleId?: IntFilter<"RolePolicy"> | number
    policyId?: IntFilter<"RolePolicy"> | number
    role?: XOR<RoleRelationFilter, RoleWhereInput>
    policy?: XOR<PolicyRelationFilter, PolicyWhereInput>
  }

  export type RolePolicyOrderByWithRelationInput = {
    roleId?: SortOrder
    policyId?: SortOrder
    role?: RoleOrderByWithRelationInput
    policy?: PolicyOrderByWithRelationInput
  }

  export type RolePolicyWhereUniqueInput = Prisma.AtLeast<{
    roleId_policyId?: RolePolicyRoleIdPolicyIdCompoundUniqueInput
    AND?: RolePolicyWhereInput | RolePolicyWhereInput[]
    OR?: RolePolicyWhereInput[]
    NOT?: RolePolicyWhereInput | RolePolicyWhereInput[]
    roleId?: IntFilter<"RolePolicy"> | number
    policyId?: IntFilter<"RolePolicy"> | number
    role?: XOR<RoleRelationFilter, RoleWhereInput>
    policy?: XOR<PolicyRelationFilter, PolicyWhereInput>
  }, "roleId_policyId">

  export type RolePolicyOrderByWithAggregationInput = {
    roleId?: SortOrder
    policyId?: SortOrder
    _count?: RolePolicyCountOrderByAggregateInput
    _avg?: RolePolicyAvgOrderByAggregateInput
    _max?: RolePolicyMaxOrderByAggregateInput
    _min?: RolePolicyMinOrderByAggregateInput
    _sum?: RolePolicySumOrderByAggregateInput
  }

  export type RolePolicyScalarWhereWithAggregatesInput = {
    AND?: RolePolicyScalarWhereWithAggregatesInput | RolePolicyScalarWhereWithAggregatesInput[]
    OR?: RolePolicyScalarWhereWithAggregatesInput[]
    NOT?: RolePolicyScalarWhereWithAggregatesInput | RolePolicyScalarWhereWithAggregatesInput[]
    roleId?: IntWithAggregatesFilter<"RolePolicy"> | number
    policyId?: IntWithAggregatesFilter<"RolePolicy"> | number
  }

  export type PermissionPolicyWhereInput = {
    AND?: PermissionPolicyWhereInput | PermissionPolicyWhereInput[]
    OR?: PermissionPolicyWhereInput[]
    NOT?: PermissionPolicyWhereInput | PermissionPolicyWhereInput[]
    permissionId?: IntFilter<"PermissionPolicy"> | number
    policyId?: IntFilter<"PermissionPolicy"> | number
    permission?: XOR<PermissionRelationFilter, PermissionWhereInput>
    policy?: XOR<PolicyRelationFilter, PolicyWhereInput>
  }

  export type PermissionPolicyOrderByWithRelationInput = {
    permissionId?: SortOrder
    policyId?: SortOrder
    permission?: PermissionOrderByWithRelationInput
    policy?: PolicyOrderByWithRelationInput
  }

  export type PermissionPolicyWhereUniqueInput = Prisma.AtLeast<{
    permissionId_policyId?: PermissionPolicyPermissionIdPolicyIdCompoundUniqueInput
    AND?: PermissionPolicyWhereInput | PermissionPolicyWhereInput[]
    OR?: PermissionPolicyWhereInput[]
    NOT?: PermissionPolicyWhereInput | PermissionPolicyWhereInput[]
    permissionId?: IntFilter<"PermissionPolicy"> | number
    policyId?: IntFilter<"PermissionPolicy"> | number
    permission?: XOR<PermissionRelationFilter, PermissionWhereInput>
    policy?: XOR<PolicyRelationFilter, PolicyWhereInput>
  }, "permissionId_policyId">

  export type PermissionPolicyOrderByWithAggregationInput = {
    permissionId?: SortOrder
    policyId?: SortOrder
    _count?: PermissionPolicyCountOrderByAggregateInput
    _avg?: PermissionPolicyAvgOrderByAggregateInput
    _max?: PermissionPolicyMaxOrderByAggregateInput
    _min?: PermissionPolicyMinOrderByAggregateInput
    _sum?: PermissionPolicySumOrderByAggregateInput
  }

  export type PermissionPolicyScalarWhereWithAggregatesInput = {
    AND?: PermissionPolicyScalarWhereWithAggregatesInput | PermissionPolicyScalarWhereWithAggregatesInput[]
    OR?: PermissionPolicyScalarWhereWithAggregatesInput[]
    NOT?: PermissionPolicyScalarWhereWithAggregatesInput | PermissionPolicyScalarWhereWithAggregatesInput[]
    permissionId?: IntWithAggregatesFilter<"PermissionPolicy"> | number
    policyId?: IntWithAggregatesFilter<"PermissionPolicy"> | number
  }

  export type MenuWhereInput = {
    AND?: MenuWhereInput | MenuWhereInput[]
    OR?: MenuWhereInput[]
    NOT?: MenuWhereInput | MenuWhereInput[]
    id?: IntFilter<"Menu"> | number
    name?: StringFilter<"Menu"> | string
    path?: StringFilter<"Menu"> | string
    label?: StringFilter<"Menu"> | string
    component?: StringNullableFilter<"Menu"> | string | null
    redirect?: StringNullableFilter<"Menu"> | string | null
    fullPath?: StringNullableFilter<"Menu"> | string | null
    alias?: StringNullableFilter<"Menu"> | string | null
    status?: IntFilter<"Menu"> | number
    parentId?: IntNullableFilter<"Menu"> | number | null
    metaId?: IntNullableFilter<"Menu"> | number | null
    createdAt?: DateTimeFilter<"Menu"> | Date | string
    updatedAt?: DateTimeFilter<"Menu"> | Date | string
    meta?: XOR<MenuMetaNullableRelationFilter, MenuMetaWhereInput> | null
    parent?: XOR<MenuNullableRelationFilter, MenuWhereInput> | null
    children?: MenuListRelationFilter
    roleMenus?: RoleMenuListRelationFilter
  }

  export type MenuOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    path?: SortOrder
    label?: SortOrder
    component?: SortOrderInput | SortOrder
    redirect?: SortOrderInput | SortOrder
    fullPath?: SortOrderInput | SortOrder
    alias?: SortOrderInput | SortOrder
    status?: SortOrder
    parentId?: SortOrderInput | SortOrder
    metaId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    meta?: MenuMetaOrderByWithRelationInput
    parent?: MenuOrderByWithRelationInput
    children?: MenuOrderByRelationAggregateInput
    roleMenus?: RoleMenuOrderByRelationAggregateInput
  }

  export type MenuWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    metaId?: number
    AND?: MenuWhereInput | MenuWhereInput[]
    OR?: MenuWhereInput[]
    NOT?: MenuWhereInput | MenuWhereInput[]
    path?: StringFilter<"Menu"> | string
    label?: StringFilter<"Menu"> | string
    component?: StringNullableFilter<"Menu"> | string | null
    redirect?: StringNullableFilter<"Menu"> | string | null
    fullPath?: StringNullableFilter<"Menu"> | string | null
    alias?: StringNullableFilter<"Menu"> | string | null
    status?: IntFilter<"Menu"> | number
    parentId?: IntNullableFilter<"Menu"> | number | null
    createdAt?: DateTimeFilter<"Menu"> | Date | string
    updatedAt?: DateTimeFilter<"Menu"> | Date | string
    meta?: XOR<MenuMetaNullableRelationFilter, MenuMetaWhereInput> | null
    parent?: XOR<MenuNullableRelationFilter, MenuWhereInput> | null
    children?: MenuListRelationFilter
    roleMenus?: RoleMenuListRelationFilter
  }, "id" | "name" | "metaId">

  export type MenuOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    path?: SortOrder
    label?: SortOrder
    component?: SortOrderInput | SortOrder
    redirect?: SortOrderInput | SortOrder
    fullPath?: SortOrderInput | SortOrder
    alias?: SortOrderInput | SortOrder
    status?: SortOrder
    parentId?: SortOrderInput | SortOrder
    metaId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MenuCountOrderByAggregateInput
    _avg?: MenuAvgOrderByAggregateInput
    _max?: MenuMaxOrderByAggregateInput
    _min?: MenuMinOrderByAggregateInput
    _sum?: MenuSumOrderByAggregateInput
  }

  export type MenuScalarWhereWithAggregatesInput = {
    AND?: MenuScalarWhereWithAggregatesInput | MenuScalarWhereWithAggregatesInput[]
    OR?: MenuScalarWhereWithAggregatesInput[]
    NOT?: MenuScalarWhereWithAggregatesInput | MenuScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Menu"> | number
    name?: StringWithAggregatesFilter<"Menu"> | string
    path?: StringWithAggregatesFilter<"Menu"> | string
    label?: StringWithAggregatesFilter<"Menu"> | string
    component?: StringNullableWithAggregatesFilter<"Menu"> | string | null
    redirect?: StringNullableWithAggregatesFilter<"Menu"> | string | null
    fullPath?: StringNullableWithAggregatesFilter<"Menu"> | string | null
    alias?: StringNullableWithAggregatesFilter<"Menu"> | string | null
    status?: IntWithAggregatesFilter<"Menu"> | number
    parentId?: IntNullableWithAggregatesFilter<"Menu"> | number | null
    metaId?: IntNullableWithAggregatesFilter<"Menu"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Menu"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Menu"> | Date | string
  }

  export type MenuMetaWhereInput = {
    AND?: MenuMetaWhereInput | MenuMetaWhereInput[]
    OR?: MenuMetaWhereInput[]
    NOT?: MenuMetaWhereInput | MenuMetaWhereInput[]
    id?: IntFilter<"MenuMeta"> | number
    title?: StringNullableFilter<"MenuMeta"> | string | null
    layout?: StringNullableFilter<"MenuMeta"> | string | null
    order?: IntNullableFilter<"MenuMeta"> | number | null
    hidden?: BoolFilter<"MenuMeta"> | boolean
    disabled?: BoolFilter<"MenuMeta"> | boolean
    icon?: StringNullableFilter<"MenuMeta"> | string | null
    status?: IntFilter<"MenuMeta"> | number
    menuId?: IntFilter<"MenuMeta"> | number
    createdAt?: DateTimeFilter<"MenuMeta"> | Date | string
    updatedAt?: DateTimeFilter<"MenuMeta"> | Date | string
    menu?: XOR<MenuRelationFilter, MenuWhereInput>
  }

  export type MenuMetaOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    layout?: SortOrderInput | SortOrder
    order?: SortOrderInput | SortOrder
    hidden?: SortOrder
    disabled?: SortOrder
    icon?: SortOrderInput | SortOrder
    status?: SortOrder
    menuId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    menu?: MenuOrderByWithRelationInput
  }

  export type MenuMetaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    menuId?: number
    AND?: MenuMetaWhereInput | MenuMetaWhereInput[]
    OR?: MenuMetaWhereInput[]
    NOT?: MenuMetaWhereInput | MenuMetaWhereInput[]
    title?: StringNullableFilter<"MenuMeta"> | string | null
    layout?: StringNullableFilter<"MenuMeta"> | string | null
    order?: IntNullableFilter<"MenuMeta"> | number | null
    hidden?: BoolFilter<"MenuMeta"> | boolean
    disabled?: BoolFilter<"MenuMeta"> | boolean
    icon?: StringNullableFilter<"MenuMeta"> | string | null
    status?: IntFilter<"MenuMeta"> | number
    createdAt?: DateTimeFilter<"MenuMeta"> | Date | string
    updatedAt?: DateTimeFilter<"MenuMeta"> | Date | string
    menu?: XOR<MenuRelationFilter, MenuWhereInput>
  }, "id" | "menuId">

  export type MenuMetaOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    layout?: SortOrderInput | SortOrder
    order?: SortOrderInput | SortOrder
    hidden?: SortOrder
    disabled?: SortOrder
    icon?: SortOrderInput | SortOrder
    status?: SortOrder
    menuId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MenuMetaCountOrderByAggregateInput
    _avg?: MenuMetaAvgOrderByAggregateInput
    _max?: MenuMetaMaxOrderByAggregateInput
    _min?: MenuMetaMinOrderByAggregateInput
    _sum?: MenuMetaSumOrderByAggregateInput
  }

  export type MenuMetaScalarWhereWithAggregatesInput = {
    AND?: MenuMetaScalarWhereWithAggregatesInput | MenuMetaScalarWhereWithAggregatesInput[]
    OR?: MenuMetaScalarWhereWithAggregatesInput[]
    NOT?: MenuMetaScalarWhereWithAggregatesInput | MenuMetaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MenuMeta"> | number
    title?: StringNullableWithAggregatesFilter<"MenuMeta"> | string | null
    layout?: StringNullableWithAggregatesFilter<"MenuMeta"> | string | null
    order?: IntNullableWithAggregatesFilter<"MenuMeta"> | number | null
    hidden?: BoolWithAggregatesFilter<"MenuMeta"> | boolean
    disabled?: BoolWithAggregatesFilter<"MenuMeta"> | boolean
    icon?: StringNullableWithAggregatesFilter<"MenuMeta"> | string | null
    status?: IntWithAggregatesFilter<"MenuMeta"> | number
    menuId?: IntWithAggregatesFilter<"MenuMeta"> | number
    createdAt?: DateTimeWithAggregatesFilter<"MenuMeta"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MenuMeta"> | Date | string
  }

  export type RoleMenuWhereInput = {
    AND?: RoleMenuWhereInput | RoleMenuWhereInput[]
    OR?: RoleMenuWhereInput[]
    NOT?: RoleMenuWhereInput | RoleMenuWhereInput[]
    roleId?: IntFilter<"RoleMenu"> | number
    menuId?: IntFilter<"RoleMenu"> | number
    createdAt?: DateTimeFilter<"RoleMenu"> | Date | string
    updatedAt?: DateTimeFilter<"RoleMenu"> | Date | string
    role?: XOR<RoleRelationFilter, RoleWhereInput>
    menu?: XOR<MenuRelationFilter, MenuWhereInput>
  }

  export type RoleMenuOrderByWithRelationInput = {
    roleId?: SortOrder
    menuId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: RoleOrderByWithRelationInput
    menu?: MenuOrderByWithRelationInput
  }

  export type RoleMenuWhereUniqueInput = Prisma.AtLeast<{
    roleId_menuId?: RoleMenuRoleIdMenuIdCompoundUniqueInput
    AND?: RoleMenuWhereInput | RoleMenuWhereInput[]
    OR?: RoleMenuWhereInput[]
    NOT?: RoleMenuWhereInput | RoleMenuWhereInput[]
    roleId?: IntFilter<"RoleMenu"> | number
    menuId?: IntFilter<"RoleMenu"> | number
    createdAt?: DateTimeFilter<"RoleMenu"> | Date | string
    updatedAt?: DateTimeFilter<"RoleMenu"> | Date | string
    role?: XOR<RoleRelationFilter, RoleWhereInput>
    menu?: XOR<MenuRelationFilter, MenuWhereInput>
  }, "roleId_menuId">

  export type RoleMenuOrderByWithAggregationInput = {
    roleId?: SortOrder
    menuId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RoleMenuCountOrderByAggregateInput
    _avg?: RoleMenuAvgOrderByAggregateInput
    _max?: RoleMenuMaxOrderByAggregateInput
    _min?: RoleMenuMinOrderByAggregateInput
    _sum?: RoleMenuSumOrderByAggregateInput
  }

  export type RoleMenuScalarWhereWithAggregatesInput = {
    AND?: RoleMenuScalarWhereWithAggregatesInput | RoleMenuScalarWhereWithAggregatesInput[]
    OR?: RoleMenuScalarWhereWithAggregatesInput[]
    NOT?: RoleMenuScalarWhereWithAggregatesInput | RoleMenuScalarWhereWithAggregatesInput[]
    roleId?: IntWithAggregatesFilter<"RoleMenu"> | number
    menuId?: IntWithAggregatesFilter<"RoleMenu"> | number
    createdAt?: DateTimeWithAggregatesFilter<"RoleMenu"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RoleMenu"> | Date | string
  }

  export type UserCreateInput = {
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    UserRole?: UserRoleCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    UserRole?: UserRoleUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserRole?: UserRoleUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserRole?: UserRoleUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleCreateInput = {
    name: string
    description?: string | null
    users?: UserRoleCreateNestedManyWithoutRoleInput
    RolePermissions?: RolePermissionsCreateNestedManyWithoutRoleInput
    RolePolicy?: RolePolicyCreateNestedManyWithoutRoleInput
    RoleMenu?: RoleMenuCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    users?: UserRoleUncheckedCreateNestedManyWithoutRoleInput
    RolePermissions?: RolePermissionsUncheckedCreateNestedManyWithoutRoleInput
    RolePolicy?: RolePolicyUncheckedCreateNestedManyWithoutRoleInput
    RoleMenu?: RoleMenuUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserRoleUpdateManyWithoutRoleNestedInput
    RolePermissions?: RolePermissionsUpdateManyWithoutRoleNestedInput
    RolePolicy?: RolePolicyUpdateManyWithoutRoleNestedInput
    RoleMenu?: RoleMenuUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserRoleUncheckedUpdateManyWithoutRoleNestedInput
    RolePermissions?: RolePermissionsUncheckedUpdateManyWithoutRoleNestedInput
    RolePolicy?: RolePolicyUncheckedUpdateManyWithoutRoleNestedInput
    RoleMenu?: RoleMenuUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    id?: number
    name: string
    description?: string | null
  }

  export type RoleUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserRoleCreateInput = {
    role: RoleCreateNestedOneWithoutUsersInput
    user: UserCreateNestedOneWithoutUserRoleInput
  }

  export type UserRoleUncheckedCreateInput = {
    userId: number
    roleId: number
  }

  export type UserRoleUpdateInput = {
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    user?: UserUpdateOneRequiredWithoutUserRoleNestedInput
  }

  export type UserRoleUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
  }

  export type UserRoleCreateManyInput = {
    userId: number
    roleId: number
  }

  export type UserRoleUpdateManyMutationInput = {

  }

  export type UserRoleUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
  }

  export type PermissionCreateInput = {
    name: string
    action: string
    description?: string | null
    RolePermissions?: RolePermissionsCreateNestedManyWithoutPermissionInput
    PermissionPolicy?: PermissionPolicyCreateNestedManyWithoutPermissionInput
  }

  export type PermissionUncheckedCreateInput = {
    id?: number
    name: string
    action: string
    description?: string | null
    RolePermissions?: RolePermissionsUncheckedCreateNestedManyWithoutPermissionInput
    PermissionPolicy?: PermissionPolicyUncheckedCreateNestedManyWithoutPermissionInput
  }

  export type PermissionUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    RolePermissions?: RolePermissionsUpdateManyWithoutPermissionNestedInput
    PermissionPolicy?: PermissionPolicyUpdateManyWithoutPermissionNestedInput
  }

  export type PermissionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    RolePermissions?: RolePermissionsUncheckedUpdateManyWithoutPermissionNestedInput
    PermissionPolicy?: PermissionPolicyUncheckedUpdateManyWithoutPermissionNestedInput
  }

  export type PermissionCreateManyInput = {
    id?: number
    name: string
    action: string
    description?: string | null
  }

  export type PermissionUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PermissionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RolePermissionsCreateInput = {
    role: RoleCreateNestedOneWithoutRolePermissionsInput
    permission: PermissionCreateNestedOneWithoutRolePermissionsInput
  }

  export type RolePermissionsUncheckedCreateInput = {
    roleId: number
    permissionId: number
  }

  export type RolePermissionsUpdateInput = {
    role?: RoleUpdateOneRequiredWithoutRolePermissionsNestedInput
    permission?: PermissionUpdateOneRequiredWithoutRolePermissionsNestedInput
  }

  export type RolePermissionsUncheckedUpdateInput = {
    roleId?: IntFieldUpdateOperationsInput | number
    permissionId?: IntFieldUpdateOperationsInput | number
  }

  export type RolePermissionsCreateManyInput = {
    roleId: number
    permissionId: number
  }

  export type RolePermissionsUpdateManyMutationInput = {

  }

  export type RolePermissionsUncheckedUpdateManyInput = {
    roleId?: IntFieldUpdateOperationsInput | number
    permissionId?: IntFieldUpdateOperationsInput | number
  }

  export type PolicyCreateInput = {
    type: number
    effect: string
    action: string
    subject: string
    fields?: NullableJsonNullValueInput | InputJsonValue
    conditions?: NullableJsonNullValueInput | InputJsonValue
    args?: NullableJsonNullValueInput | InputJsonValue
    encode: string
    RolePolicy?: RolePolicyCreateNestedManyWithoutPolicyInput
    PermissionPolicy?: PermissionPolicyCreateNestedManyWithoutPolicyInput
  }

  export type PolicyUncheckedCreateInput = {
    id?: number
    type: number
    effect: string
    action: string
    subject: string
    fields?: NullableJsonNullValueInput | InputJsonValue
    conditions?: NullableJsonNullValueInput | InputJsonValue
    args?: NullableJsonNullValueInput | InputJsonValue
    encode: string
    RolePolicy?: RolePolicyUncheckedCreateNestedManyWithoutPolicyInput
    PermissionPolicy?: PermissionPolicyUncheckedCreateNestedManyWithoutPolicyInput
  }

  export type PolicyUpdateInput = {
    type?: IntFieldUpdateOperationsInput | number
    effect?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    fields?: NullableJsonNullValueInput | InputJsonValue
    conditions?: NullableJsonNullValueInput | InputJsonValue
    args?: NullableJsonNullValueInput | InputJsonValue
    encode?: StringFieldUpdateOperationsInput | string
    RolePolicy?: RolePolicyUpdateManyWithoutPolicyNestedInput
    PermissionPolicy?: PermissionPolicyUpdateManyWithoutPolicyNestedInput
  }

  export type PolicyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: IntFieldUpdateOperationsInput | number
    effect?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    fields?: NullableJsonNullValueInput | InputJsonValue
    conditions?: NullableJsonNullValueInput | InputJsonValue
    args?: NullableJsonNullValueInput | InputJsonValue
    encode?: StringFieldUpdateOperationsInput | string
    RolePolicy?: RolePolicyUncheckedUpdateManyWithoutPolicyNestedInput
    PermissionPolicy?: PermissionPolicyUncheckedUpdateManyWithoutPolicyNestedInput
  }

  export type PolicyCreateManyInput = {
    id?: number
    type: number
    effect: string
    action: string
    subject: string
    fields?: NullableJsonNullValueInput | InputJsonValue
    conditions?: NullableJsonNullValueInput | InputJsonValue
    args?: NullableJsonNullValueInput | InputJsonValue
    encode: string
  }

  export type PolicyUpdateManyMutationInput = {
    type?: IntFieldUpdateOperationsInput | number
    effect?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    fields?: NullableJsonNullValueInput | InputJsonValue
    conditions?: NullableJsonNullValueInput | InputJsonValue
    args?: NullableJsonNullValueInput | InputJsonValue
    encode?: StringFieldUpdateOperationsInput | string
  }

  export type PolicyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: IntFieldUpdateOperationsInput | number
    effect?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    fields?: NullableJsonNullValueInput | InputJsonValue
    conditions?: NullableJsonNullValueInput | InputJsonValue
    args?: NullableJsonNullValueInput | InputJsonValue
    encode?: StringFieldUpdateOperationsInput | string
  }

  export type RolePolicyCreateInput = {
    role: RoleCreateNestedOneWithoutRolePolicyInput
    policy: PolicyCreateNestedOneWithoutRolePolicyInput
  }

  export type RolePolicyUncheckedCreateInput = {
    roleId: number
    policyId: number
  }

  export type RolePolicyUpdateInput = {
    role?: RoleUpdateOneRequiredWithoutRolePolicyNestedInput
    policy?: PolicyUpdateOneRequiredWithoutRolePolicyNestedInput
  }

  export type RolePolicyUncheckedUpdateInput = {
    roleId?: IntFieldUpdateOperationsInput | number
    policyId?: IntFieldUpdateOperationsInput | number
  }

  export type RolePolicyCreateManyInput = {
    roleId: number
    policyId: number
  }

  export type RolePolicyUpdateManyMutationInput = {

  }

  export type RolePolicyUncheckedUpdateManyInput = {
    roleId?: IntFieldUpdateOperationsInput | number
    policyId?: IntFieldUpdateOperationsInput | number
  }

  export type PermissionPolicyCreateInput = {
    permission: PermissionCreateNestedOneWithoutPermissionPolicyInput
    policy: PolicyCreateNestedOneWithoutPermissionPolicyInput
  }

  export type PermissionPolicyUncheckedCreateInput = {
    permissionId: number
    policyId: number
  }

  export type PermissionPolicyUpdateInput = {
    permission?: PermissionUpdateOneRequiredWithoutPermissionPolicyNestedInput
    policy?: PolicyUpdateOneRequiredWithoutPermissionPolicyNestedInput
  }

  export type PermissionPolicyUncheckedUpdateInput = {
    permissionId?: IntFieldUpdateOperationsInput | number
    policyId?: IntFieldUpdateOperationsInput | number
  }

  export type PermissionPolicyCreateManyInput = {
    permissionId: number
    policyId: number
  }

  export type PermissionPolicyUpdateManyMutationInput = {

  }

  export type PermissionPolicyUncheckedUpdateManyInput = {
    permissionId?: IntFieldUpdateOperationsInput | number
    policyId?: IntFieldUpdateOperationsInput | number
  }

  export type MenuCreateInput = {
    name: string
    path: string
    label: string
    component?: string | null
    redirect?: string | null
    fullPath?: string | null
    alias?: string | null
    status?: number
    metaId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    meta?: MenuMetaCreateNestedOneWithoutMenuInput
    parent?: MenuCreateNestedOneWithoutChildrenInput
    children?: MenuCreateNestedManyWithoutParentInput
    roleMenus?: RoleMenuCreateNestedManyWithoutMenuInput
  }

  export type MenuUncheckedCreateInput = {
    id?: number
    name: string
    path: string
    label: string
    component?: string | null
    redirect?: string | null
    fullPath?: string | null
    alias?: string | null
    status?: number
    parentId?: number | null
    metaId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    meta?: MenuMetaUncheckedCreateNestedOneWithoutMenuInput
    children?: MenuUncheckedCreateNestedManyWithoutParentInput
    roleMenus?: RoleMenuUncheckedCreateNestedManyWithoutMenuInput
  }

  export type MenuUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    component?: NullableStringFieldUpdateOperationsInput | string | null
    redirect?: NullableStringFieldUpdateOperationsInput | string | null
    fullPath?: NullableStringFieldUpdateOperationsInput | string | null
    alias?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    metaId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meta?: MenuMetaUpdateOneWithoutMenuNestedInput
    parent?: MenuUpdateOneWithoutChildrenNestedInput
    children?: MenuUpdateManyWithoutParentNestedInput
    roleMenus?: RoleMenuUpdateManyWithoutMenuNestedInput
  }

  export type MenuUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    component?: NullableStringFieldUpdateOperationsInput | string | null
    redirect?: NullableStringFieldUpdateOperationsInput | string | null
    fullPath?: NullableStringFieldUpdateOperationsInput | string | null
    alias?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    metaId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meta?: MenuMetaUncheckedUpdateOneWithoutMenuNestedInput
    children?: MenuUncheckedUpdateManyWithoutParentNestedInput
    roleMenus?: RoleMenuUncheckedUpdateManyWithoutMenuNestedInput
  }

  export type MenuCreateManyInput = {
    id?: number
    name: string
    path: string
    label: string
    component?: string | null
    redirect?: string | null
    fullPath?: string | null
    alias?: string | null
    status?: number
    parentId?: number | null
    metaId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MenuUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    component?: NullableStringFieldUpdateOperationsInput | string | null
    redirect?: NullableStringFieldUpdateOperationsInput | string | null
    fullPath?: NullableStringFieldUpdateOperationsInput | string | null
    alias?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    metaId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    component?: NullableStringFieldUpdateOperationsInput | string | null
    redirect?: NullableStringFieldUpdateOperationsInput | string | null
    fullPath?: NullableStringFieldUpdateOperationsInput | string | null
    alias?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    metaId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuMetaCreateInput = {
    title?: string | null
    layout?: string | null
    order?: number | null
    hidden?: boolean
    disabled?: boolean
    icon?: string | null
    status?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    menu: MenuCreateNestedOneWithoutMetaInput
  }

  export type MenuMetaUncheckedCreateInput = {
    id?: number
    title?: string | null
    layout?: string | null
    order?: number | null
    hidden?: boolean
    disabled?: boolean
    icon?: string | null
    status?: number
    menuId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MenuMetaUpdateInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    layout?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    hidden?: BoolFieldUpdateOperationsInput | boolean
    disabled?: BoolFieldUpdateOperationsInput | boolean
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    menu?: MenuUpdateOneRequiredWithoutMetaNestedInput
  }

  export type MenuMetaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    layout?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    hidden?: BoolFieldUpdateOperationsInput | boolean
    disabled?: BoolFieldUpdateOperationsInput | boolean
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    menuId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuMetaCreateManyInput = {
    id?: number
    title?: string | null
    layout?: string | null
    order?: number | null
    hidden?: boolean
    disabled?: boolean
    icon?: string | null
    status?: number
    menuId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MenuMetaUpdateManyMutationInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    layout?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    hidden?: BoolFieldUpdateOperationsInput | boolean
    disabled?: BoolFieldUpdateOperationsInput | boolean
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuMetaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    layout?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    hidden?: BoolFieldUpdateOperationsInput | boolean
    disabled?: BoolFieldUpdateOperationsInput | boolean
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    menuId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleMenuCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    role: RoleCreateNestedOneWithoutRoleMenuInput
    menu: MenuCreateNestedOneWithoutRoleMenusInput
  }

  export type RoleMenuUncheckedCreateInput = {
    roleId: number
    menuId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoleMenuUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutRoleMenuNestedInput
    menu?: MenuUpdateOneRequiredWithoutRoleMenusNestedInput
  }

  export type RoleMenuUncheckedUpdateInput = {
    roleId?: IntFieldUpdateOperationsInput | number
    menuId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleMenuCreateManyInput = {
    roleId: number
    menuId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoleMenuUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleMenuUncheckedUpdateManyInput = {
    roleId?: IntFieldUpdateOperationsInput | number
    menuId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserRoleListRelationFilter = {
    every?: UserRoleWhereInput
    some?: UserRoleWhereInput
    none?: UserRoleWhereInput
  }

  export type UserRoleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type RolePermissionsListRelationFilter = {
    every?: RolePermissionsWhereInput
    some?: RolePermissionsWhereInput
    none?: RolePermissionsWhereInput
  }

  export type RolePolicyListRelationFilter = {
    every?: RolePolicyWhereInput
    some?: RolePolicyWhereInput
    none?: RolePolicyWhereInput
  }

  export type RoleMenuListRelationFilter = {
    every?: RoleMenuWhereInput
    some?: RoleMenuWhereInput
    none?: RoleMenuWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RolePermissionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RolePolicyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoleMenuOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type RoleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type RoleSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type RoleRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserRoleUserIdRoleIdCompoundUniqueInput = {
    userId: number
    roleId: number
  }

  export type UserRoleCountOrderByAggregateInput = {
    userId?: SortOrder
    roleId?: SortOrder
  }

  export type UserRoleAvgOrderByAggregateInput = {
    userId?: SortOrder
    roleId?: SortOrder
  }

  export type UserRoleMaxOrderByAggregateInput = {
    userId?: SortOrder
    roleId?: SortOrder
  }

  export type UserRoleMinOrderByAggregateInput = {
    userId?: SortOrder
    roleId?: SortOrder
  }

  export type UserRoleSumOrderByAggregateInput = {
    userId?: SortOrder
    roleId?: SortOrder
  }

  export type PermissionPolicyListRelationFilter = {
    every?: PermissionPolicyWhereInput
    some?: PermissionPolicyWhereInput
    none?: PermissionPolicyWhereInput
  }

  export type PermissionPolicyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PermissionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    action?: SortOrder
    description?: SortOrder
  }

  export type PermissionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PermissionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    action?: SortOrder
    description?: SortOrder
  }

  export type PermissionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    action?: SortOrder
    description?: SortOrder
  }

  export type PermissionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PermissionRelationFilter = {
    is?: PermissionWhereInput
    isNot?: PermissionWhereInput
  }

  export type RolePermissionsRoleIdPermissionIdCompoundUniqueInput = {
    roleId: number
    permissionId: number
  }

  export type RolePermissionsCountOrderByAggregateInput = {
    roleId?: SortOrder
    permissionId?: SortOrder
  }

  export type RolePermissionsAvgOrderByAggregateInput = {
    roleId?: SortOrder
    permissionId?: SortOrder
  }

  export type RolePermissionsMaxOrderByAggregateInput = {
    roleId?: SortOrder
    permissionId?: SortOrder
  }

  export type RolePermissionsMinOrderByAggregateInput = {
    roleId?: SortOrder
    permissionId?: SortOrder
  }

  export type RolePermissionsSumOrderByAggregateInput = {
    roleId?: SortOrder
    permissionId?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type PolicyCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    effect?: SortOrder
    action?: SortOrder
    subject?: SortOrder
    fields?: SortOrder
    conditions?: SortOrder
    args?: SortOrder
    encode?: SortOrder
  }

  export type PolicyAvgOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
  }

  export type PolicyMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    effect?: SortOrder
    action?: SortOrder
    subject?: SortOrder
    encode?: SortOrder
  }

  export type PolicyMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    effect?: SortOrder
    action?: SortOrder
    subject?: SortOrder
    encode?: SortOrder
  }

  export type PolicySumOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type PolicyRelationFilter = {
    is?: PolicyWhereInput
    isNot?: PolicyWhereInput
  }

  export type RolePolicyRoleIdPolicyIdCompoundUniqueInput = {
    roleId: number
    policyId: number
  }

  export type RolePolicyCountOrderByAggregateInput = {
    roleId?: SortOrder
    policyId?: SortOrder
  }

  export type RolePolicyAvgOrderByAggregateInput = {
    roleId?: SortOrder
    policyId?: SortOrder
  }

  export type RolePolicyMaxOrderByAggregateInput = {
    roleId?: SortOrder
    policyId?: SortOrder
  }

  export type RolePolicyMinOrderByAggregateInput = {
    roleId?: SortOrder
    policyId?: SortOrder
  }

  export type RolePolicySumOrderByAggregateInput = {
    roleId?: SortOrder
    policyId?: SortOrder
  }

  export type PermissionPolicyPermissionIdPolicyIdCompoundUniqueInput = {
    permissionId: number
    policyId: number
  }

  export type PermissionPolicyCountOrderByAggregateInput = {
    permissionId?: SortOrder
    policyId?: SortOrder
  }

  export type PermissionPolicyAvgOrderByAggregateInput = {
    permissionId?: SortOrder
    policyId?: SortOrder
  }

  export type PermissionPolicyMaxOrderByAggregateInput = {
    permissionId?: SortOrder
    policyId?: SortOrder
  }

  export type PermissionPolicyMinOrderByAggregateInput = {
    permissionId?: SortOrder
    policyId?: SortOrder
  }

  export type PermissionPolicySumOrderByAggregateInput = {
    permissionId?: SortOrder
    policyId?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type MenuMetaNullableRelationFilter = {
    is?: MenuMetaWhereInput | null
    isNot?: MenuMetaWhereInput | null
  }

  export type MenuNullableRelationFilter = {
    is?: MenuWhereInput | null
    isNot?: MenuWhereInput | null
  }

  export type MenuListRelationFilter = {
    every?: MenuWhereInput
    some?: MenuWhereInput
    none?: MenuWhereInput
  }

  export type MenuOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MenuCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    path?: SortOrder
    label?: SortOrder
    component?: SortOrder
    redirect?: SortOrder
    fullPath?: SortOrder
    alias?: SortOrder
    status?: SortOrder
    parentId?: SortOrder
    metaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MenuAvgOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    parentId?: SortOrder
    metaId?: SortOrder
  }

  export type MenuMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    path?: SortOrder
    label?: SortOrder
    component?: SortOrder
    redirect?: SortOrder
    fullPath?: SortOrder
    alias?: SortOrder
    status?: SortOrder
    parentId?: SortOrder
    metaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MenuMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    path?: SortOrder
    label?: SortOrder
    component?: SortOrder
    redirect?: SortOrder
    fullPath?: SortOrder
    alias?: SortOrder
    status?: SortOrder
    parentId?: SortOrder
    metaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MenuSumOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    parentId?: SortOrder
    metaId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type MenuRelationFilter = {
    is?: MenuWhereInput
    isNot?: MenuWhereInput
  }

  export type MenuMetaCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    layout?: SortOrder
    order?: SortOrder
    hidden?: SortOrder
    disabled?: SortOrder
    icon?: SortOrder
    status?: SortOrder
    menuId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MenuMetaAvgOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    status?: SortOrder
    menuId?: SortOrder
  }

  export type MenuMetaMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    layout?: SortOrder
    order?: SortOrder
    hidden?: SortOrder
    disabled?: SortOrder
    icon?: SortOrder
    status?: SortOrder
    menuId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MenuMetaMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    layout?: SortOrder
    order?: SortOrder
    hidden?: SortOrder
    disabled?: SortOrder
    icon?: SortOrder
    status?: SortOrder
    menuId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MenuMetaSumOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    status?: SortOrder
    menuId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type RoleMenuRoleIdMenuIdCompoundUniqueInput = {
    roleId: number
    menuId: number
  }

  export type RoleMenuCountOrderByAggregateInput = {
    roleId?: SortOrder
    menuId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoleMenuAvgOrderByAggregateInput = {
    roleId?: SortOrder
    menuId?: SortOrder
  }

  export type RoleMenuMaxOrderByAggregateInput = {
    roleId?: SortOrder
    menuId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoleMenuMinOrderByAggregateInput = {
    roleId?: SortOrder
    menuId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoleMenuSumOrderByAggregateInput = {
    roleId?: SortOrder
    menuId?: SortOrder
  }

  export type UserRoleCreateNestedManyWithoutUserInput = {
    create?: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput> | UserRoleCreateWithoutUserInput[] | UserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutUserInput | UserRoleCreateOrConnectWithoutUserInput[]
    createMany?: UserRoleCreateManyUserInputEnvelope
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
  }

  export type UserRoleUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput> | UserRoleCreateWithoutUserInput[] | UserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutUserInput | UserRoleCreateOrConnectWithoutUserInput[]
    createMany?: UserRoleCreateManyUserInputEnvelope
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserRoleUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput> | UserRoleCreateWithoutUserInput[] | UserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutUserInput | UserRoleCreateOrConnectWithoutUserInput[]
    upsert?: UserRoleUpsertWithWhereUniqueWithoutUserInput | UserRoleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserRoleCreateManyUserInputEnvelope
    set?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    disconnect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    delete?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    update?: UserRoleUpdateWithWhereUniqueWithoutUserInput | UserRoleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserRoleUpdateManyWithWhereWithoutUserInput | UserRoleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserRoleUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput> | UserRoleCreateWithoutUserInput[] | UserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutUserInput | UserRoleCreateOrConnectWithoutUserInput[]
    upsert?: UserRoleUpsertWithWhereUniqueWithoutUserInput | UserRoleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserRoleCreateManyUserInputEnvelope
    set?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    disconnect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    delete?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    update?: UserRoleUpdateWithWhereUniqueWithoutUserInput | UserRoleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserRoleUpdateManyWithWhereWithoutUserInput | UserRoleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
  }

  export type UserRoleCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput> | UserRoleCreateWithoutRoleInput[] | UserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutRoleInput | UserRoleCreateOrConnectWithoutRoleInput[]
    createMany?: UserRoleCreateManyRoleInputEnvelope
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
  }

  export type RolePermissionsCreateNestedManyWithoutRoleInput = {
    create?: XOR<RolePermissionsCreateWithoutRoleInput, RolePermissionsUncheckedCreateWithoutRoleInput> | RolePermissionsCreateWithoutRoleInput[] | RolePermissionsUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: RolePermissionsCreateOrConnectWithoutRoleInput | RolePermissionsCreateOrConnectWithoutRoleInput[]
    createMany?: RolePermissionsCreateManyRoleInputEnvelope
    connect?: RolePermissionsWhereUniqueInput | RolePermissionsWhereUniqueInput[]
  }

  export type RolePolicyCreateNestedManyWithoutRoleInput = {
    create?: XOR<RolePolicyCreateWithoutRoleInput, RolePolicyUncheckedCreateWithoutRoleInput> | RolePolicyCreateWithoutRoleInput[] | RolePolicyUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: RolePolicyCreateOrConnectWithoutRoleInput | RolePolicyCreateOrConnectWithoutRoleInput[]
    createMany?: RolePolicyCreateManyRoleInputEnvelope
    connect?: RolePolicyWhereUniqueInput | RolePolicyWhereUniqueInput[]
  }

  export type RoleMenuCreateNestedManyWithoutRoleInput = {
    create?: XOR<RoleMenuCreateWithoutRoleInput, RoleMenuUncheckedCreateWithoutRoleInput> | RoleMenuCreateWithoutRoleInput[] | RoleMenuUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: RoleMenuCreateOrConnectWithoutRoleInput | RoleMenuCreateOrConnectWithoutRoleInput[]
    createMany?: RoleMenuCreateManyRoleInputEnvelope
    connect?: RoleMenuWhereUniqueInput | RoleMenuWhereUniqueInput[]
  }

  export type UserRoleUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput> | UserRoleCreateWithoutRoleInput[] | UserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutRoleInput | UserRoleCreateOrConnectWithoutRoleInput[]
    createMany?: UserRoleCreateManyRoleInputEnvelope
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
  }

  export type RolePermissionsUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<RolePermissionsCreateWithoutRoleInput, RolePermissionsUncheckedCreateWithoutRoleInput> | RolePermissionsCreateWithoutRoleInput[] | RolePermissionsUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: RolePermissionsCreateOrConnectWithoutRoleInput | RolePermissionsCreateOrConnectWithoutRoleInput[]
    createMany?: RolePermissionsCreateManyRoleInputEnvelope
    connect?: RolePermissionsWhereUniqueInput | RolePermissionsWhereUniqueInput[]
  }

  export type RolePolicyUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<RolePolicyCreateWithoutRoleInput, RolePolicyUncheckedCreateWithoutRoleInput> | RolePolicyCreateWithoutRoleInput[] | RolePolicyUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: RolePolicyCreateOrConnectWithoutRoleInput | RolePolicyCreateOrConnectWithoutRoleInput[]
    createMany?: RolePolicyCreateManyRoleInputEnvelope
    connect?: RolePolicyWhereUniqueInput | RolePolicyWhereUniqueInput[]
  }

  export type RoleMenuUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<RoleMenuCreateWithoutRoleInput, RoleMenuUncheckedCreateWithoutRoleInput> | RoleMenuCreateWithoutRoleInput[] | RoleMenuUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: RoleMenuCreateOrConnectWithoutRoleInput | RoleMenuCreateOrConnectWithoutRoleInput[]
    createMany?: RoleMenuCreateManyRoleInputEnvelope
    connect?: RoleMenuWhereUniqueInput | RoleMenuWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserRoleUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput> | UserRoleCreateWithoutRoleInput[] | UserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutRoleInput | UserRoleCreateOrConnectWithoutRoleInput[]
    upsert?: UserRoleUpsertWithWhereUniqueWithoutRoleInput | UserRoleUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserRoleCreateManyRoleInputEnvelope
    set?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    disconnect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    delete?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    update?: UserRoleUpdateWithWhereUniqueWithoutRoleInput | UserRoleUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserRoleUpdateManyWithWhereWithoutRoleInput | UserRoleUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
  }

  export type RolePermissionsUpdateManyWithoutRoleNestedInput = {
    create?: XOR<RolePermissionsCreateWithoutRoleInput, RolePermissionsUncheckedCreateWithoutRoleInput> | RolePermissionsCreateWithoutRoleInput[] | RolePermissionsUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: RolePermissionsCreateOrConnectWithoutRoleInput | RolePermissionsCreateOrConnectWithoutRoleInput[]
    upsert?: RolePermissionsUpsertWithWhereUniqueWithoutRoleInput | RolePermissionsUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: RolePermissionsCreateManyRoleInputEnvelope
    set?: RolePermissionsWhereUniqueInput | RolePermissionsWhereUniqueInput[]
    disconnect?: RolePermissionsWhereUniqueInput | RolePermissionsWhereUniqueInput[]
    delete?: RolePermissionsWhereUniqueInput | RolePermissionsWhereUniqueInput[]
    connect?: RolePermissionsWhereUniqueInput | RolePermissionsWhereUniqueInput[]
    update?: RolePermissionsUpdateWithWhereUniqueWithoutRoleInput | RolePermissionsUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: RolePermissionsUpdateManyWithWhereWithoutRoleInput | RolePermissionsUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: RolePermissionsScalarWhereInput | RolePermissionsScalarWhereInput[]
  }

  export type RolePolicyUpdateManyWithoutRoleNestedInput = {
    create?: XOR<RolePolicyCreateWithoutRoleInput, RolePolicyUncheckedCreateWithoutRoleInput> | RolePolicyCreateWithoutRoleInput[] | RolePolicyUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: RolePolicyCreateOrConnectWithoutRoleInput | RolePolicyCreateOrConnectWithoutRoleInput[]
    upsert?: RolePolicyUpsertWithWhereUniqueWithoutRoleInput | RolePolicyUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: RolePolicyCreateManyRoleInputEnvelope
    set?: RolePolicyWhereUniqueInput | RolePolicyWhereUniqueInput[]
    disconnect?: RolePolicyWhereUniqueInput | RolePolicyWhereUniqueInput[]
    delete?: RolePolicyWhereUniqueInput | RolePolicyWhereUniqueInput[]
    connect?: RolePolicyWhereUniqueInput | RolePolicyWhereUniqueInput[]
    update?: RolePolicyUpdateWithWhereUniqueWithoutRoleInput | RolePolicyUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: RolePolicyUpdateManyWithWhereWithoutRoleInput | RolePolicyUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: RolePolicyScalarWhereInput | RolePolicyScalarWhereInput[]
  }

  export type RoleMenuUpdateManyWithoutRoleNestedInput = {
    create?: XOR<RoleMenuCreateWithoutRoleInput, RoleMenuUncheckedCreateWithoutRoleInput> | RoleMenuCreateWithoutRoleInput[] | RoleMenuUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: RoleMenuCreateOrConnectWithoutRoleInput | RoleMenuCreateOrConnectWithoutRoleInput[]
    upsert?: RoleMenuUpsertWithWhereUniqueWithoutRoleInput | RoleMenuUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: RoleMenuCreateManyRoleInputEnvelope
    set?: RoleMenuWhereUniqueInput | RoleMenuWhereUniqueInput[]
    disconnect?: RoleMenuWhereUniqueInput | RoleMenuWhereUniqueInput[]
    delete?: RoleMenuWhereUniqueInput | RoleMenuWhereUniqueInput[]
    connect?: RoleMenuWhereUniqueInput | RoleMenuWhereUniqueInput[]
    update?: RoleMenuUpdateWithWhereUniqueWithoutRoleInput | RoleMenuUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: RoleMenuUpdateManyWithWhereWithoutRoleInput | RoleMenuUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: RoleMenuScalarWhereInput | RoleMenuScalarWhereInput[]
  }

  export type UserRoleUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput> | UserRoleCreateWithoutRoleInput[] | UserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutRoleInput | UserRoleCreateOrConnectWithoutRoleInput[]
    upsert?: UserRoleUpsertWithWhereUniqueWithoutRoleInput | UserRoleUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserRoleCreateManyRoleInputEnvelope
    set?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    disconnect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    delete?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    update?: UserRoleUpdateWithWhereUniqueWithoutRoleInput | UserRoleUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserRoleUpdateManyWithWhereWithoutRoleInput | UserRoleUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
  }

  export type RolePermissionsUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<RolePermissionsCreateWithoutRoleInput, RolePermissionsUncheckedCreateWithoutRoleInput> | RolePermissionsCreateWithoutRoleInput[] | RolePermissionsUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: RolePermissionsCreateOrConnectWithoutRoleInput | RolePermissionsCreateOrConnectWithoutRoleInput[]
    upsert?: RolePermissionsUpsertWithWhereUniqueWithoutRoleInput | RolePermissionsUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: RolePermissionsCreateManyRoleInputEnvelope
    set?: RolePermissionsWhereUniqueInput | RolePermissionsWhereUniqueInput[]
    disconnect?: RolePermissionsWhereUniqueInput | RolePermissionsWhereUniqueInput[]
    delete?: RolePermissionsWhereUniqueInput | RolePermissionsWhereUniqueInput[]
    connect?: RolePermissionsWhereUniqueInput | RolePermissionsWhereUniqueInput[]
    update?: RolePermissionsUpdateWithWhereUniqueWithoutRoleInput | RolePermissionsUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: RolePermissionsUpdateManyWithWhereWithoutRoleInput | RolePermissionsUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: RolePermissionsScalarWhereInput | RolePermissionsScalarWhereInput[]
  }

  export type RolePolicyUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<RolePolicyCreateWithoutRoleInput, RolePolicyUncheckedCreateWithoutRoleInput> | RolePolicyCreateWithoutRoleInput[] | RolePolicyUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: RolePolicyCreateOrConnectWithoutRoleInput | RolePolicyCreateOrConnectWithoutRoleInput[]
    upsert?: RolePolicyUpsertWithWhereUniqueWithoutRoleInput | RolePolicyUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: RolePolicyCreateManyRoleInputEnvelope
    set?: RolePolicyWhereUniqueInput | RolePolicyWhereUniqueInput[]
    disconnect?: RolePolicyWhereUniqueInput | RolePolicyWhereUniqueInput[]
    delete?: RolePolicyWhereUniqueInput | RolePolicyWhereUniqueInput[]
    connect?: RolePolicyWhereUniqueInput | RolePolicyWhereUniqueInput[]
    update?: RolePolicyUpdateWithWhereUniqueWithoutRoleInput | RolePolicyUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: RolePolicyUpdateManyWithWhereWithoutRoleInput | RolePolicyUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: RolePolicyScalarWhereInput | RolePolicyScalarWhereInput[]
  }

  export type RoleMenuUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<RoleMenuCreateWithoutRoleInput, RoleMenuUncheckedCreateWithoutRoleInput> | RoleMenuCreateWithoutRoleInput[] | RoleMenuUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: RoleMenuCreateOrConnectWithoutRoleInput | RoleMenuCreateOrConnectWithoutRoleInput[]
    upsert?: RoleMenuUpsertWithWhereUniqueWithoutRoleInput | RoleMenuUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: RoleMenuCreateManyRoleInputEnvelope
    set?: RoleMenuWhereUniqueInput | RoleMenuWhereUniqueInput[]
    disconnect?: RoleMenuWhereUniqueInput | RoleMenuWhereUniqueInput[]
    delete?: RoleMenuWhereUniqueInput | RoleMenuWhereUniqueInput[]
    connect?: RoleMenuWhereUniqueInput | RoleMenuWhereUniqueInput[]
    update?: RoleMenuUpdateWithWhereUniqueWithoutRoleInput | RoleMenuUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: RoleMenuUpdateManyWithWhereWithoutRoleInput | RoleMenuUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: RoleMenuScalarWhereInput | RoleMenuScalarWhereInput[]
  }

  export type RoleCreateNestedOneWithoutUsersInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    connect?: RoleWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutUserRoleInput = {
    create?: XOR<UserCreateWithoutUserRoleInput, UserUncheckedCreateWithoutUserRoleInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserRoleInput
    connect?: UserWhereUniqueInput
  }

  export type RoleUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    upsert?: RoleUpsertWithoutUsersInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutUsersInput, RoleUpdateWithoutUsersInput>, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type UserUpdateOneRequiredWithoutUserRoleNestedInput = {
    create?: XOR<UserCreateWithoutUserRoleInput, UserUncheckedCreateWithoutUserRoleInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserRoleInput
    upsert?: UserUpsertWithoutUserRoleInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserRoleInput, UserUpdateWithoutUserRoleInput>, UserUncheckedUpdateWithoutUserRoleInput>
  }

  export type RolePermissionsCreateNestedManyWithoutPermissionInput = {
    create?: XOR<RolePermissionsCreateWithoutPermissionInput, RolePermissionsUncheckedCreateWithoutPermissionInput> | RolePermissionsCreateWithoutPermissionInput[] | RolePermissionsUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: RolePermissionsCreateOrConnectWithoutPermissionInput | RolePermissionsCreateOrConnectWithoutPermissionInput[]
    createMany?: RolePermissionsCreateManyPermissionInputEnvelope
    connect?: RolePermissionsWhereUniqueInput | RolePermissionsWhereUniqueInput[]
  }

  export type PermissionPolicyCreateNestedManyWithoutPermissionInput = {
    create?: XOR<PermissionPolicyCreateWithoutPermissionInput, PermissionPolicyUncheckedCreateWithoutPermissionInput> | PermissionPolicyCreateWithoutPermissionInput[] | PermissionPolicyUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: PermissionPolicyCreateOrConnectWithoutPermissionInput | PermissionPolicyCreateOrConnectWithoutPermissionInput[]
    createMany?: PermissionPolicyCreateManyPermissionInputEnvelope
    connect?: PermissionPolicyWhereUniqueInput | PermissionPolicyWhereUniqueInput[]
  }

  export type RolePermissionsUncheckedCreateNestedManyWithoutPermissionInput = {
    create?: XOR<RolePermissionsCreateWithoutPermissionInput, RolePermissionsUncheckedCreateWithoutPermissionInput> | RolePermissionsCreateWithoutPermissionInput[] | RolePermissionsUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: RolePermissionsCreateOrConnectWithoutPermissionInput | RolePermissionsCreateOrConnectWithoutPermissionInput[]
    createMany?: RolePermissionsCreateManyPermissionInputEnvelope
    connect?: RolePermissionsWhereUniqueInput | RolePermissionsWhereUniqueInput[]
  }

  export type PermissionPolicyUncheckedCreateNestedManyWithoutPermissionInput = {
    create?: XOR<PermissionPolicyCreateWithoutPermissionInput, PermissionPolicyUncheckedCreateWithoutPermissionInput> | PermissionPolicyCreateWithoutPermissionInput[] | PermissionPolicyUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: PermissionPolicyCreateOrConnectWithoutPermissionInput | PermissionPolicyCreateOrConnectWithoutPermissionInput[]
    createMany?: PermissionPolicyCreateManyPermissionInputEnvelope
    connect?: PermissionPolicyWhereUniqueInput | PermissionPolicyWhereUniqueInput[]
  }

  export type RolePermissionsUpdateManyWithoutPermissionNestedInput = {
    create?: XOR<RolePermissionsCreateWithoutPermissionInput, RolePermissionsUncheckedCreateWithoutPermissionInput> | RolePermissionsCreateWithoutPermissionInput[] | RolePermissionsUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: RolePermissionsCreateOrConnectWithoutPermissionInput | RolePermissionsCreateOrConnectWithoutPermissionInput[]
    upsert?: RolePermissionsUpsertWithWhereUniqueWithoutPermissionInput | RolePermissionsUpsertWithWhereUniqueWithoutPermissionInput[]
    createMany?: RolePermissionsCreateManyPermissionInputEnvelope
    set?: RolePermissionsWhereUniqueInput | RolePermissionsWhereUniqueInput[]
    disconnect?: RolePermissionsWhereUniqueInput | RolePermissionsWhereUniqueInput[]
    delete?: RolePermissionsWhereUniqueInput | RolePermissionsWhereUniqueInput[]
    connect?: RolePermissionsWhereUniqueInput | RolePermissionsWhereUniqueInput[]
    update?: RolePermissionsUpdateWithWhereUniqueWithoutPermissionInput | RolePermissionsUpdateWithWhereUniqueWithoutPermissionInput[]
    updateMany?: RolePermissionsUpdateManyWithWhereWithoutPermissionInput | RolePermissionsUpdateManyWithWhereWithoutPermissionInput[]
    deleteMany?: RolePermissionsScalarWhereInput | RolePermissionsScalarWhereInput[]
  }

  export type PermissionPolicyUpdateManyWithoutPermissionNestedInput = {
    create?: XOR<PermissionPolicyCreateWithoutPermissionInput, PermissionPolicyUncheckedCreateWithoutPermissionInput> | PermissionPolicyCreateWithoutPermissionInput[] | PermissionPolicyUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: PermissionPolicyCreateOrConnectWithoutPermissionInput | PermissionPolicyCreateOrConnectWithoutPermissionInput[]
    upsert?: PermissionPolicyUpsertWithWhereUniqueWithoutPermissionInput | PermissionPolicyUpsertWithWhereUniqueWithoutPermissionInput[]
    createMany?: PermissionPolicyCreateManyPermissionInputEnvelope
    set?: PermissionPolicyWhereUniqueInput | PermissionPolicyWhereUniqueInput[]
    disconnect?: PermissionPolicyWhereUniqueInput | PermissionPolicyWhereUniqueInput[]
    delete?: PermissionPolicyWhereUniqueInput | PermissionPolicyWhereUniqueInput[]
    connect?: PermissionPolicyWhereUniqueInput | PermissionPolicyWhereUniqueInput[]
    update?: PermissionPolicyUpdateWithWhereUniqueWithoutPermissionInput | PermissionPolicyUpdateWithWhereUniqueWithoutPermissionInput[]
    updateMany?: PermissionPolicyUpdateManyWithWhereWithoutPermissionInput | PermissionPolicyUpdateManyWithWhereWithoutPermissionInput[]
    deleteMany?: PermissionPolicyScalarWhereInput | PermissionPolicyScalarWhereInput[]
  }

  export type RolePermissionsUncheckedUpdateManyWithoutPermissionNestedInput = {
    create?: XOR<RolePermissionsCreateWithoutPermissionInput, RolePermissionsUncheckedCreateWithoutPermissionInput> | RolePermissionsCreateWithoutPermissionInput[] | RolePermissionsUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: RolePermissionsCreateOrConnectWithoutPermissionInput | RolePermissionsCreateOrConnectWithoutPermissionInput[]
    upsert?: RolePermissionsUpsertWithWhereUniqueWithoutPermissionInput | RolePermissionsUpsertWithWhereUniqueWithoutPermissionInput[]
    createMany?: RolePermissionsCreateManyPermissionInputEnvelope
    set?: RolePermissionsWhereUniqueInput | RolePermissionsWhereUniqueInput[]
    disconnect?: RolePermissionsWhereUniqueInput | RolePermissionsWhereUniqueInput[]
    delete?: RolePermissionsWhereUniqueInput | RolePermissionsWhereUniqueInput[]
    connect?: RolePermissionsWhereUniqueInput | RolePermissionsWhereUniqueInput[]
    update?: RolePermissionsUpdateWithWhereUniqueWithoutPermissionInput | RolePermissionsUpdateWithWhereUniqueWithoutPermissionInput[]
    updateMany?: RolePermissionsUpdateManyWithWhereWithoutPermissionInput | RolePermissionsUpdateManyWithWhereWithoutPermissionInput[]
    deleteMany?: RolePermissionsScalarWhereInput | RolePermissionsScalarWhereInput[]
  }

  export type PermissionPolicyUncheckedUpdateManyWithoutPermissionNestedInput = {
    create?: XOR<PermissionPolicyCreateWithoutPermissionInput, PermissionPolicyUncheckedCreateWithoutPermissionInput> | PermissionPolicyCreateWithoutPermissionInput[] | PermissionPolicyUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: PermissionPolicyCreateOrConnectWithoutPermissionInput | PermissionPolicyCreateOrConnectWithoutPermissionInput[]
    upsert?: PermissionPolicyUpsertWithWhereUniqueWithoutPermissionInput | PermissionPolicyUpsertWithWhereUniqueWithoutPermissionInput[]
    createMany?: PermissionPolicyCreateManyPermissionInputEnvelope
    set?: PermissionPolicyWhereUniqueInput | PermissionPolicyWhereUniqueInput[]
    disconnect?: PermissionPolicyWhereUniqueInput | PermissionPolicyWhereUniqueInput[]
    delete?: PermissionPolicyWhereUniqueInput | PermissionPolicyWhereUniqueInput[]
    connect?: PermissionPolicyWhereUniqueInput | PermissionPolicyWhereUniqueInput[]
    update?: PermissionPolicyUpdateWithWhereUniqueWithoutPermissionInput | PermissionPolicyUpdateWithWhereUniqueWithoutPermissionInput[]
    updateMany?: PermissionPolicyUpdateManyWithWhereWithoutPermissionInput | PermissionPolicyUpdateManyWithWhereWithoutPermissionInput[]
    deleteMany?: PermissionPolicyScalarWhereInput | PermissionPolicyScalarWhereInput[]
  }

  export type RoleCreateNestedOneWithoutRolePermissionsInput = {
    create?: XOR<RoleCreateWithoutRolePermissionsInput, RoleUncheckedCreateWithoutRolePermissionsInput>
    connectOrCreate?: RoleCreateOrConnectWithoutRolePermissionsInput
    connect?: RoleWhereUniqueInput
  }

  export type PermissionCreateNestedOneWithoutRolePermissionsInput = {
    create?: XOR<PermissionCreateWithoutRolePermissionsInput, PermissionUncheckedCreateWithoutRolePermissionsInput>
    connectOrCreate?: PermissionCreateOrConnectWithoutRolePermissionsInput
    connect?: PermissionWhereUniqueInput
  }

  export type RoleUpdateOneRequiredWithoutRolePermissionsNestedInput = {
    create?: XOR<RoleCreateWithoutRolePermissionsInput, RoleUncheckedCreateWithoutRolePermissionsInput>
    connectOrCreate?: RoleCreateOrConnectWithoutRolePermissionsInput
    upsert?: RoleUpsertWithoutRolePermissionsInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutRolePermissionsInput, RoleUpdateWithoutRolePermissionsInput>, RoleUncheckedUpdateWithoutRolePermissionsInput>
  }

  export type PermissionUpdateOneRequiredWithoutRolePermissionsNestedInput = {
    create?: XOR<PermissionCreateWithoutRolePermissionsInput, PermissionUncheckedCreateWithoutRolePermissionsInput>
    connectOrCreate?: PermissionCreateOrConnectWithoutRolePermissionsInput
    upsert?: PermissionUpsertWithoutRolePermissionsInput
    connect?: PermissionWhereUniqueInput
    update?: XOR<XOR<PermissionUpdateToOneWithWhereWithoutRolePermissionsInput, PermissionUpdateWithoutRolePermissionsInput>, PermissionUncheckedUpdateWithoutRolePermissionsInput>
  }

  export type RolePolicyCreateNestedManyWithoutPolicyInput = {
    create?: XOR<RolePolicyCreateWithoutPolicyInput, RolePolicyUncheckedCreateWithoutPolicyInput> | RolePolicyCreateWithoutPolicyInput[] | RolePolicyUncheckedCreateWithoutPolicyInput[]
    connectOrCreate?: RolePolicyCreateOrConnectWithoutPolicyInput | RolePolicyCreateOrConnectWithoutPolicyInput[]
    createMany?: RolePolicyCreateManyPolicyInputEnvelope
    connect?: RolePolicyWhereUniqueInput | RolePolicyWhereUniqueInput[]
  }

  export type PermissionPolicyCreateNestedManyWithoutPolicyInput = {
    create?: XOR<PermissionPolicyCreateWithoutPolicyInput, PermissionPolicyUncheckedCreateWithoutPolicyInput> | PermissionPolicyCreateWithoutPolicyInput[] | PermissionPolicyUncheckedCreateWithoutPolicyInput[]
    connectOrCreate?: PermissionPolicyCreateOrConnectWithoutPolicyInput | PermissionPolicyCreateOrConnectWithoutPolicyInput[]
    createMany?: PermissionPolicyCreateManyPolicyInputEnvelope
    connect?: PermissionPolicyWhereUniqueInput | PermissionPolicyWhereUniqueInput[]
  }

  export type RolePolicyUncheckedCreateNestedManyWithoutPolicyInput = {
    create?: XOR<RolePolicyCreateWithoutPolicyInput, RolePolicyUncheckedCreateWithoutPolicyInput> | RolePolicyCreateWithoutPolicyInput[] | RolePolicyUncheckedCreateWithoutPolicyInput[]
    connectOrCreate?: RolePolicyCreateOrConnectWithoutPolicyInput | RolePolicyCreateOrConnectWithoutPolicyInput[]
    createMany?: RolePolicyCreateManyPolicyInputEnvelope
    connect?: RolePolicyWhereUniqueInput | RolePolicyWhereUniqueInput[]
  }

  export type PermissionPolicyUncheckedCreateNestedManyWithoutPolicyInput = {
    create?: XOR<PermissionPolicyCreateWithoutPolicyInput, PermissionPolicyUncheckedCreateWithoutPolicyInput> | PermissionPolicyCreateWithoutPolicyInput[] | PermissionPolicyUncheckedCreateWithoutPolicyInput[]
    connectOrCreate?: PermissionPolicyCreateOrConnectWithoutPolicyInput | PermissionPolicyCreateOrConnectWithoutPolicyInput[]
    createMany?: PermissionPolicyCreateManyPolicyInputEnvelope
    connect?: PermissionPolicyWhereUniqueInput | PermissionPolicyWhereUniqueInput[]
  }

  export type RolePolicyUpdateManyWithoutPolicyNestedInput = {
    create?: XOR<RolePolicyCreateWithoutPolicyInput, RolePolicyUncheckedCreateWithoutPolicyInput> | RolePolicyCreateWithoutPolicyInput[] | RolePolicyUncheckedCreateWithoutPolicyInput[]
    connectOrCreate?: RolePolicyCreateOrConnectWithoutPolicyInput | RolePolicyCreateOrConnectWithoutPolicyInput[]
    upsert?: RolePolicyUpsertWithWhereUniqueWithoutPolicyInput | RolePolicyUpsertWithWhereUniqueWithoutPolicyInput[]
    createMany?: RolePolicyCreateManyPolicyInputEnvelope
    set?: RolePolicyWhereUniqueInput | RolePolicyWhereUniqueInput[]
    disconnect?: RolePolicyWhereUniqueInput | RolePolicyWhereUniqueInput[]
    delete?: RolePolicyWhereUniqueInput | RolePolicyWhereUniqueInput[]
    connect?: RolePolicyWhereUniqueInput | RolePolicyWhereUniqueInput[]
    update?: RolePolicyUpdateWithWhereUniqueWithoutPolicyInput | RolePolicyUpdateWithWhereUniqueWithoutPolicyInput[]
    updateMany?: RolePolicyUpdateManyWithWhereWithoutPolicyInput | RolePolicyUpdateManyWithWhereWithoutPolicyInput[]
    deleteMany?: RolePolicyScalarWhereInput | RolePolicyScalarWhereInput[]
  }

  export type PermissionPolicyUpdateManyWithoutPolicyNestedInput = {
    create?: XOR<PermissionPolicyCreateWithoutPolicyInput, PermissionPolicyUncheckedCreateWithoutPolicyInput> | PermissionPolicyCreateWithoutPolicyInput[] | PermissionPolicyUncheckedCreateWithoutPolicyInput[]
    connectOrCreate?: PermissionPolicyCreateOrConnectWithoutPolicyInput | PermissionPolicyCreateOrConnectWithoutPolicyInput[]
    upsert?: PermissionPolicyUpsertWithWhereUniqueWithoutPolicyInput | PermissionPolicyUpsertWithWhereUniqueWithoutPolicyInput[]
    createMany?: PermissionPolicyCreateManyPolicyInputEnvelope
    set?: PermissionPolicyWhereUniqueInput | PermissionPolicyWhereUniqueInput[]
    disconnect?: PermissionPolicyWhereUniqueInput | PermissionPolicyWhereUniqueInput[]
    delete?: PermissionPolicyWhereUniqueInput | PermissionPolicyWhereUniqueInput[]
    connect?: PermissionPolicyWhereUniqueInput | PermissionPolicyWhereUniqueInput[]
    update?: PermissionPolicyUpdateWithWhereUniqueWithoutPolicyInput | PermissionPolicyUpdateWithWhereUniqueWithoutPolicyInput[]
    updateMany?: PermissionPolicyUpdateManyWithWhereWithoutPolicyInput | PermissionPolicyUpdateManyWithWhereWithoutPolicyInput[]
    deleteMany?: PermissionPolicyScalarWhereInput | PermissionPolicyScalarWhereInput[]
  }

  export type RolePolicyUncheckedUpdateManyWithoutPolicyNestedInput = {
    create?: XOR<RolePolicyCreateWithoutPolicyInput, RolePolicyUncheckedCreateWithoutPolicyInput> | RolePolicyCreateWithoutPolicyInput[] | RolePolicyUncheckedCreateWithoutPolicyInput[]
    connectOrCreate?: RolePolicyCreateOrConnectWithoutPolicyInput | RolePolicyCreateOrConnectWithoutPolicyInput[]
    upsert?: RolePolicyUpsertWithWhereUniqueWithoutPolicyInput | RolePolicyUpsertWithWhereUniqueWithoutPolicyInput[]
    createMany?: RolePolicyCreateManyPolicyInputEnvelope
    set?: RolePolicyWhereUniqueInput | RolePolicyWhereUniqueInput[]
    disconnect?: RolePolicyWhereUniqueInput | RolePolicyWhereUniqueInput[]
    delete?: RolePolicyWhereUniqueInput | RolePolicyWhereUniqueInput[]
    connect?: RolePolicyWhereUniqueInput | RolePolicyWhereUniqueInput[]
    update?: RolePolicyUpdateWithWhereUniqueWithoutPolicyInput | RolePolicyUpdateWithWhereUniqueWithoutPolicyInput[]
    updateMany?: RolePolicyUpdateManyWithWhereWithoutPolicyInput | RolePolicyUpdateManyWithWhereWithoutPolicyInput[]
    deleteMany?: RolePolicyScalarWhereInput | RolePolicyScalarWhereInput[]
  }

  export type PermissionPolicyUncheckedUpdateManyWithoutPolicyNestedInput = {
    create?: XOR<PermissionPolicyCreateWithoutPolicyInput, PermissionPolicyUncheckedCreateWithoutPolicyInput> | PermissionPolicyCreateWithoutPolicyInput[] | PermissionPolicyUncheckedCreateWithoutPolicyInput[]
    connectOrCreate?: PermissionPolicyCreateOrConnectWithoutPolicyInput | PermissionPolicyCreateOrConnectWithoutPolicyInput[]
    upsert?: PermissionPolicyUpsertWithWhereUniqueWithoutPolicyInput | PermissionPolicyUpsertWithWhereUniqueWithoutPolicyInput[]
    createMany?: PermissionPolicyCreateManyPolicyInputEnvelope
    set?: PermissionPolicyWhereUniqueInput | PermissionPolicyWhereUniqueInput[]
    disconnect?: PermissionPolicyWhereUniqueInput | PermissionPolicyWhereUniqueInput[]
    delete?: PermissionPolicyWhereUniqueInput | PermissionPolicyWhereUniqueInput[]
    connect?: PermissionPolicyWhereUniqueInput | PermissionPolicyWhereUniqueInput[]
    update?: PermissionPolicyUpdateWithWhereUniqueWithoutPolicyInput | PermissionPolicyUpdateWithWhereUniqueWithoutPolicyInput[]
    updateMany?: PermissionPolicyUpdateManyWithWhereWithoutPolicyInput | PermissionPolicyUpdateManyWithWhereWithoutPolicyInput[]
    deleteMany?: PermissionPolicyScalarWhereInput | PermissionPolicyScalarWhereInput[]
  }

  export type RoleCreateNestedOneWithoutRolePolicyInput = {
    create?: XOR<RoleCreateWithoutRolePolicyInput, RoleUncheckedCreateWithoutRolePolicyInput>
    connectOrCreate?: RoleCreateOrConnectWithoutRolePolicyInput
    connect?: RoleWhereUniqueInput
  }

  export type PolicyCreateNestedOneWithoutRolePolicyInput = {
    create?: XOR<PolicyCreateWithoutRolePolicyInput, PolicyUncheckedCreateWithoutRolePolicyInput>
    connectOrCreate?: PolicyCreateOrConnectWithoutRolePolicyInput
    connect?: PolicyWhereUniqueInput
  }

  export type RoleUpdateOneRequiredWithoutRolePolicyNestedInput = {
    create?: XOR<RoleCreateWithoutRolePolicyInput, RoleUncheckedCreateWithoutRolePolicyInput>
    connectOrCreate?: RoleCreateOrConnectWithoutRolePolicyInput
    upsert?: RoleUpsertWithoutRolePolicyInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutRolePolicyInput, RoleUpdateWithoutRolePolicyInput>, RoleUncheckedUpdateWithoutRolePolicyInput>
  }

  export type PolicyUpdateOneRequiredWithoutRolePolicyNestedInput = {
    create?: XOR<PolicyCreateWithoutRolePolicyInput, PolicyUncheckedCreateWithoutRolePolicyInput>
    connectOrCreate?: PolicyCreateOrConnectWithoutRolePolicyInput
    upsert?: PolicyUpsertWithoutRolePolicyInput
    connect?: PolicyWhereUniqueInput
    update?: XOR<XOR<PolicyUpdateToOneWithWhereWithoutRolePolicyInput, PolicyUpdateWithoutRolePolicyInput>, PolicyUncheckedUpdateWithoutRolePolicyInput>
  }

  export type PermissionCreateNestedOneWithoutPermissionPolicyInput = {
    create?: XOR<PermissionCreateWithoutPermissionPolicyInput, PermissionUncheckedCreateWithoutPermissionPolicyInput>
    connectOrCreate?: PermissionCreateOrConnectWithoutPermissionPolicyInput
    connect?: PermissionWhereUniqueInput
  }

  export type PolicyCreateNestedOneWithoutPermissionPolicyInput = {
    create?: XOR<PolicyCreateWithoutPermissionPolicyInput, PolicyUncheckedCreateWithoutPermissionPolicyInput>
    connectOrCreate?: PolicyCreateOrConnectWithoutPermissionPolicyInput
    connect?: PolicyWhereUniqueInput
  }

  export type PermissionUpdateOneRequiredWithoutPermissionPolicyNestedInput = {
    create?: XOR<PermissionCreateWithoutPermissionPolicyInput, PermissionUncheckedCreateWithoutPermissionPolicyInput>
    connectOrCreate?: PermissionCreateOrConnectWithoutPermissionPolicyInput
    upsert?: PermissionUpsertWithoutPermissionPolicyInput
    connect?: PermissionWhereUniqueInput
    update?: XOR<XOR<PermissionUpdateToOneWithWhereWithoutPermissionPolicyInput, PermissionUpdateWithoutPermissionPolicyInput>, PermissionUncheckedUpdateWithoutPermissionPolicyInput>
  }

  export type PolicyUpdateOneRequiredWithoutPermissionPolicyNestedInput = {
    create?: XOR<PolicyCreateWithoutPermissionPolicyInput, PolicyUncheckedCreateWithoutPermissionPolicyInput>
    connectOrCreate?: PolicyCreateOrConnectWithoutPermissionPolicyInput
    upsert?: PolicyUpsertWithoutPermissionPolicyInput
    connect?: PolicyWhereUniqueInput
    update?: XOR<XOR<PolicyUpdateToOneWithWhereWithoutPermissionPolicyInput, PolicyUpdateWithoutPermissionPolicyInput>, PolicyUncheckedUpdateWithoutPermissionPolicyInput>
  }

  export type MenuMetaCreateNestedOneWithoutMenuInput = {
    create?: XOR<MenuMetaCreateWithoutMenuInput, MenuMetaUncheckedCreateWithoutMenuInput>
    connectOrCreate?: MenuMetaCreateOrConnectWithoutMenuInput
    connect?: MenuMetaWhereUniqueInput
  }

  export type MenuCreateNestedOneWithoutChildrenInput = {
    create?: XOR<MenuCreateWithoutChildrenInput, MenuUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: MenuCreateOrConnectWithoutChildrenInput
    connect?: MenuWhereUniqueInput
  }

  export type MenuCreateNestedManyWithoutParentInput = {
    create?: XOR<MenuCreateWithoutParentInput, MenuUncheckedCreateWithoutParentInput> | MenuCreateWithoutParentInput[] | MenuUncheckedCreateWithoutParentInput[]
    connectOrCreate?: MenuCreateOrConnectWithoutParentInput | MenuCreateOrConnectWithoutParentInput[]
    createMany?: MenuCreateManyParentInputEnvelope
    connect?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
  }

  export type RoleMenuCreateNestedManyWithoutMenuInput = {
    create?: XOR<RoleMenuCreateWithoutMenuInput, RoleMenuUncheckedCreateWithoutMenuInput> | RoleMenuCreateWithoutMenuInput[] | RoleMenuUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: RoleMenuCreateOrConnectWithoutMenuInput | RoleMenuCreateOrConnectWithoutMenuInput[]
    createMany?: RoleMenuCreateManyMenuInputEnvelope
    connect?: RoleMenuWhereUniqueInput | RoleMenuWhereUniqueInput[]
  }

  export type MenuMetaUncheckedCreateNestedOneWithoutMenuInput = {
    create?: XOR<MenuMetaCreateWithoutMenuInput, MenuMetaUncheckedCreateWithoutMenuInput>
    connectOrCreate?: MenuMetaCreateOrConnectWithoutMenuInput
    connect?: MenuMetaWhereUniqueInput
  }

  export type MenuUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<MenuCreateWithoutParentInput, MenuUncheckedCreateWithoutParentInput> | MenuCreateWithoutParentInput[] | MenuUncheckedCreateWithoutParentInput[]
    connectOrCreate?: MenuCreateOrConnectWithoutParentInput | MenuCreateOrConnectWithoutParentInput[]
    createMany?: MenuCreateManyParentInputEnvelope
    connect?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
  }

  export type RoleMenuUncheckedCreateNestedManyWithoutMenuInput = {
    create?: XOR<RoleMenuCreateWithoutMenuInput, RoleMenuUncheckedCreateWithoutMenuInput> | RoleMenuCreateWithoutMenuInput[] | RoleMenuUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: RoleMenuCreateOrConnectWithoutMenuInput | RoleMenuCreateOrConnectWithoutMenuInput[]
    createMany?: RoleMenuCreateManyMenuInputEnvelope
    connect?: RoleMenuWhereUniqueInput | RoleMenuWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MenuMetaUpdateOneWithoutMenuNestedInput = {
    create?: XOR<MenuMetaCreateWithoutMenuInput, MenuMetaUncheckedCreateWithoutMenuInput>
    connectOrCreate?: MenuMetaCreateOrConnectWithoutMenuInput
    upsert?: MenuMetaUpsertWithoutMenuInput
    disconnect?: MenuMetaWhereInput | boolean
    delete?: MenuMetaWhereInput | boolean
    connect?: MenuMetaWhereUniqueInput
    update?: XOR<XOR<MenuMetaUpdateToOneWithWhereWithoutMenuInput, MenuMetaUpdateWithoutMenuInput>, MenuMetaUncheckedUpdateWithoutMenuInput>
  }

  export type MenuUpdateOneWithoutChildrenNestedInput = {
    create?: XOR<MenuCreateWithoutChildrenInput, MenuUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: MenuCreateOrConnectWithoutChildrenInput
    upsert?: MenuUpsertWithoutChildrenInput
    disconnect?: MenuWhereInput | boolean
    delete?: MenuWhereInput | boolean
    connect?: MenuWhereUniqueInput
    update?: XOR<XOR<MenuUpdateToOneWithWhereWithoutChildrenInput, MenuUpdateWithoutChildrenInput>, MenuUncheckedUpdateWithoutChildrenInput>
  }

  export type MenuUpdateManyWithoutParentNestedInput = {
    create?: XOR<MenuCreateWithoutParentInput, MenuUncheckedCreateWithoutParentInput> | MenuCreateWithoutParentInput[] | MenuUncheckedCreateWithoutParentInput[]
    connectOrCreate?: MenuCreateOrConnectWithoutParentInput | MenuCreateOrConnectWithoutParentInput[]
    upsert?: MenuUpsertWithWhereUniqueWithoutParentInput | MenuUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: MenuCreateManyParentInputEnvelope
    set?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
    disconnect?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
    delete?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
    connect?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
    update?: MenuUpdateWithWhereUniqueWithoutParentInput | MenuUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: MenuUpdateManyWithWhereWithoutParentInput | MenuUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: MenuScalarWhereInput | MenuScalarWhereInput[]
  }

  export type RoleMenuUpdateManyWithoutMenuNestedInput = {
    create?: XOR<RoleMenuCreateWithoutMenuInput, RoleMenuUncheckedCreateWithoutMenuInput> | RoleMenuCreateWithoutMenuInput[] | RoleMenuUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: RoleMenuCreateOrConnectWithoutMenuInput | RoleMenuCreateOrConnectWithoutMenuInput[]
    upsert?: RoleMenuUpsertWithWhereUniqueWithoutMenuInput | RoleMenuUpsertWithWhereUniqueWithoutMenuInput[]
    createMany?: RoleMenuCreateManyMenuInputEnvelope
    set?: RoleMenuWhereUniqueInput | RoleMenuWhereUniqueInput[]
    disconnect?: RoleMenuWhereUniqueInput | RoleMenuWhereUniqueInput[]
    delete?: RoleMenuWhereUniqueInput | RoleMenuWhereUniqueInput[]
    connect?: RoleMenuWhereUniqueInput | RoleMenuWhereUniqueInput[]
    update?: RoleMenuUpdateWithWhereUniqueWithoutMenuInput | RoleMenuUpdateWithWhereUniqueWithoutMenuInput[]
    updateMany?: RoleMenuUpdateManyWithWhereWithoutMenuInput | RoleMenuUpdateManyWithWhereWithoutMenuInput[]
    deleteMany?: RoleMenuScalarWhereInput | RoleMenuScalarWhereInput[]
  }

  export type MenuMetaUncheckedUpdateOneWithoutMenuNestedInput = {
    create?: XOR<MenuMetaCreateWithoutMenuInput, MenuMetaUncheckedCreateWithoutMenuInput>
    connectOrCreate?: MenuMetaCreateOrConnectWithoutMenuInput
    upsert?: MenuMetaUpsertWithoutMenuInput
    disconnect?: MenuMetaWhereInput | boolean
    delete?: MenuMetaWhereInput | boolean
    connect?: MenuMetaWhereUniqueInput
    update?: XOR<XOR<MenuMetaUpdateToOneWithWhereWithoutMenuInput, MenuMetaUpdateWithoutMenuInput>, MenuMetaUncheckedUpdateWithoutMenuInput>
  }

  export type MenuUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<MenuCreateWithoutParentInput, MenuUncheckedCreateWithoutParentInput> | MenuCreateWithoutParentInput[] | MenuUncheckedCreateWithoutParentInput[]
    connectOrCreate?: MenuCreateOrConnectWithoutParentInput | MenuCreateOrConnectWithoutParentInput[]
    upsert?: MenuUpsertWithWhereUniqueWithoutParentInput | MenuUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: MenuCreateManyParentInputEnvelope
    set?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
    disconnect?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
    delete?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
    connect?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
    update?: MenuUpdateWithWhereUniqueWithoutParentInput | MenuUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: MenuUpdateManyWithWhereWithoutParentInput | MenuUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: MenuScalarWhereInput | MenuScalarWhereInput[]
  }

  export type RoleMenuUncheckedUpdateManyWithoutMenuNestedInput = {
    create?: XOR<RoleMenuCreateWithoutMenuInput, RoleMenuUncheckedCreateWithoutMenuInput> | RoleMenuCreateWithoutMenuInput[] | RoleMenuUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: RoleMenuCreateOrConnectWithoutMenuInput | RoleMenuCreateOrConnectWithoutMenuInput[]
    upsert?: RoleMenuUpsertWithWhereUniqueWithoutMenuInput | RoleMenuUpsertWithWhereUniqueWithoutMenuInput[]
    createMany?: RoleMenuCreateManyMenuInputEnvelope
    set?: RoleMenuWhereUniqueInput | RoleMenuWhereUniqueInput[]
    disconnect?: RoleMenuWhereUniqueInput | RoleMenuWhereUniqueInput[]
    delete?: RoleMenuWhereUniqueInput | RoleMenuWhereUniqueInput[]
    connect?: RoleMenuWhereUniqueInput | RoleMenuWhereUniqueInput[]
    update?: RoleMenuUpdateWithWhereUniqueWithoutMenuInput | RoleMenuUpdateWithWhereUniqueWithoutMenuInput[]
    updateMany?: RoleMenuUpdateManyWithWhereWithoutMenuInput | RoleMenuUpdateManyWithWhereWithoutMenuInput[]
    deleteMany?: RoleMenuScalarWhereInput | RoleMenuScalarWhereInput[]
  }

  export type MenuCreateNestedOneWithoutMetaInput = {
    create?: XOR<MenuCreateWithoutMetaInput, MenuUncheckedCreateWithoutMetaInput>
    connectOrCreate?: MenuCreateOrConnectWithoutMetaInput
    connect?: MenuWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type MenuUpdateOneRequiredWithoutMetaNestedInput = {
    create?: XOR<MenuCreateWithoutMetaInput, MenuUncheckedCreateWithoutMetaInput>
    connectOrCreate?: MenuCreateOrConnectWithoutMetaInput
    upsert?: MenuUpsertWithoutMetaInput
    connect?: MenuWhereUniqueInput
    update?: XOR<XOR<MenuUpdateToOneWithWhereWithoutMetaInput, MenuUpdateWithoutMetaInput>, MenuUncheckedUpdateWithoutMetaInput>
  }

  export type RoleCreateNestedOneWithoutRoleMenuInput = {
    create?: XOR<RoleCreateWithoutRoleMenuInput, RoleUncheckedCreateWithoutRoleMenuInput>
    connectOrCreate?: RoleCreateOrConnectWithoutRoleMenuInput
    connect?: RoleWhereUniqueInput
  }

  export type MenuCreateNestedOneWithoutRoleMenusInput = {
    create?: XOR<MenuCreateWithoutRoleMenusInput, MenuUncheckedCreateWithoutRoleMenusInput>
    connectOrCreate?: MenuCreateOrConnectWithoutRoleMenusInput
    connect?: MenuWhereUniqueInput
  }

  export type RoleUpdateOneRequiredWithoutRoleMenuNestedInput = {
    create?: XOR<RoleCreateWithoutRoleMenuInput, RoleUncheckedCreateWithoutRoleMenuInput>
    connectOrCreate?: RoleCreateOrConnectWithoutRoleMenuInput
    upsert?: RoleUpsertWithoutRoleMenuInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutRoleMenuInput, RoleUpdateWithoutRoleMenuInput>, RoleUncheckedUpdateWithoutRoleMenuInput>
  }

  export type MenuUpdateOneRequiredWithoutRoleMenusNestedInput = {
    create?: XOR<MenuCreateWithoutRoleMenusInput, MenuUncheckedCreateWithoutRoleMenusInput>
    connectOrCreate?: MenuCreateOrConnectWithoutRoleMenusInput
    upsert?: MenuUpsertWithoutRoleMenusInput
    connect?: MenuWhereUniqueInput
    update?: XOR<XOR<MenuUpdateToOneWithWhereWithoutRoleMenusInput, MenuUpdateWithoutRoleMenusInput>, MenuUncheckedUpdateWithoutRoleMenusInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserRoleCreateWithoutUserInput = {
    role: RoleCreateNestedOneWithoutUsersInput
  }

  export type UserRoleUncheckedCreateWithoutUserInput = {
    roleId: number
  }

  export type UserRoleCreateOrConnectWithoutUserInput = {
    where: UserRoleWhereUniqueInput
    create: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput>
  }

  export type UserRoleCreateManyUserInputEnvelope = {
    data: UserRoleCreateManyUserInput | UserRoleCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserRoleUpsertWithWhereUniqueWithoutUserInput = {
    where: UserRoleWhereUniqueInput
    update: XOR<UserRoleUpdateWithoutUserInput, UserRoleUncheckedUpdateWithoutUserInput>
    create: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput>
  }

  export type UserRoleUpdateWithWhereUniqueWithoutUserInput = {
    where: UserRoleWhereUniqueInput
    data: XOR<UserRoleUpdateWithoutUserInput, UserRoleUncheckedUpdateWithoutUserInput>
  }

  export type UserRoleUpdateManyWithWhereWithoutUserInput = {
    where: UserRoleScalarWhereInput
    data: XOR<UserRoleUpdateManyMutationInput, UserRoleUncheckedUpdateManyWithoutUserInput>
  }

  export type UserRoleScalarWhereInput = {
    AND?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
    OR?: UserRoleScalarWhereInput[]
    NOT?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
    userId?: IntFilter<"UserRole"> | number
    roleId?: IntFilter<"UserRole"> | number
  }

  export type UserRoleCreateWithoutRoleInput = {
    user: UserCreateNestedOneWithoutUserRoleInput
  }

  export type UserRoleUncheckedCreateWithoutRoleInput = {
    userId: number
  }

  export type UserRoleCreateOrConnectWithoutRoleInput = {
    where: UserRoleWhereUniqueInput
    create: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput>
  }

  export type UserRoleCreateManyRoleInputEnvelope = {
    data: UserRoleCreateManyRoleInput | UserRoleCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type RolePermissionsCreateWithoutRoleInput = {
    permission: PermissionCreateNestedOneWithoutRolePermissionsInput
  }

  export type RolePermissionsUncheckedCreateWithoutRoleInput = {
    permissionId: number
  }

  export type RolePermissionsCreateOrConnectWithoutRoleInput = {
    where: RolePermissionsWhereUniqueInput
    create: XOR<RolePermissionsCreateWithoutRoleInput, RolePermissionsUncheckedCreateWithoutRoleInput>
  }

  export type RolePermissionsCreateManyRoleInputEnvelope = {
    data: RolePermissionsCreateManyRoleInput | RolePermissionsCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type RolePolicyCreateWithoutRoleInput = {
    policy: PolicyCreateNestedOneWithoutRolePolicyInput
  }

  export type RolePolicyUncheckedCreateWithoutRoleInput = {
    policyId: number
  }

  export type RolePolicyCreateOrConnectWithoutRoleInput = {
    where: RolePolicyWhereUniqueInput
    create: XOR<RolePolicyCreateWithoutRoleInput, RolePolicyUncheckedCreateWithoutRoleInput>
  }

  export type RolePolicyCreateManyRoleInputEnvelope = {
    data: RolePolicyCreateManyRoleInput | RolePolicyCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type RoleMenuCreateWithoutRoleInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    menu: MenuCreateNestedOneWithoutRoleMenusInput
  }

  export type RoleMenuUncheckedCreateWithoutRoleInput = {
    menuId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoleMenuCreateOrConnectWithoutRoleInput = {
    where: RoleMenuWhereUniqueInput
    create: XOR<RoleMenuCreateWithoutRoleInput, RoleMenuUncheckedCreateWithoutRoleInput>
  }

  export type RoleMenuCreateManyRoleInputEnvelope = {
    data: RoleMenuCreateManyRoleInput | RoleMenuCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type UserRoleUpsertWithWhereUniqueWithoutRoleInput = {
    where: UserRoleWhereUniqueInput
    update: XOR<UserRoleUpdateWithoutRoleInput, UserRoleUncheckedUpdateWithoutRoleInput>
    create: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput>
  }

  export type UserRoleUpdateWithWhereUniqueWithoutRoleInput = {
    where: UserRoleWhereUniqueInput
    data: XOR<UserRoleUpdateWithoutRoleInput, UserRoleUncheckedUpdateWithoutRoleInput>
  }

  export type UserRoleUpdateManyWithWhereWithoutRoleInput = {
    where: UserRoleScalarWhereInput
    data: XOR<UserRoleUpdateManyMutationInput, UserRoleUncheckedUpdateManyWithoutRoleInput>
  }

  export type RolePermissionsUpsertWithWhereUniqueWithoutRoleInput = {
    where: RolePermissionsWhereUniqueInput
    update: XOR<RolePermissionsUpdateWithoutRoleInput, RolePermissionsUncheckedUpdateWithoutRoleInput>
    create: XOR<RolePermissionsCreateWithoutRoleInput, RolePermissionsUncheckedCreateWithoutRoleInput>
  }

  export type RolePermissionsUpdateWithWhereUniqueWithoutRoleInput = {
    where: RolePermissionsWhereUniqueInput
    data: XOR<RolePermissionsUpdateWithoutRoleInput, RolePermissionsUncheckedUpdateWithoutRoleInput>
  }

  export type RolePermissionsUpdateManyWithWhereWithoutRoleInput = {
    where: RolePermissionsScalarWhereInput
    data: XOR<RolePermissionsUpdateManyMutationInput, RolePermissionsUncheckedUpdateManyWithoutRoleInput>
  }

  export type RolePermissionsScalarWhereInput = {
    AND?: RolePermissionsScalarWhereInput | RolePermissionsScalarWhereInput[]
    OR?: RolePermissionsScalarWhereInput[]
    NOT?: RolePermissionsScalarWhereInput | RolePermissionsScalarWhereInput[]
    roleId?: IntFilter<"RolePermissions"> | number
    permissionId?: IntFilter<"RolePermissions"> | number
  }

  export type RolePolicyUpsertWithWhereUniqueWithoutRoleInput = {
    where: RolePolicyWhereUniqueInput
    update: XOR<RolePolicyUpdateWithoutRoleInput, RolePolicyUncheckedUpdateWithoutRoleInput>
    create: XOR<RolePolicyCreateWithoutRoleInput, RolePolicyUncheckedCreateWithoutRoleInput>
  }

  export type RolePolicyUpdateWithWhereUniqueWithoutRoleInput = {
    where: RolePolicyWhereUniqueInput
    data: XOR<RolePolicyUpdateWithoutRoleInput, RolePolicyUncheckedUpdateWithoutRoleInput>
  }

  export type RolePolicyUpdateManyWithWhereWithoutRoleInput = {
    where: RolePolicyScalarWhereInput
    data: XOR<RolePolicyUpdateManyMutationInput, RolePolicyUncheckedUpdateManyWithoutRoleInput>
  }

  export type RolePolicyScalarWhereInput = {
    AND?: RolePolicyScalarWhereInput | RolePolicyScalarWhereInput[]
    OR?: RolePolicyScalarWhereInput[]
    NOT?: RolePolicyScalarWhereInput | RolePolicyScalarWhereInput[]
    roleId?: IntFilter<"RolePolicy"> | number
    policyId?: IntFilter<"RolePolicy"> | number
  }

  export type RoleMenuUpsertWithWhereUniqueWithoutRoleInput = {
    where: RoleMenuWhereUniqueInput
    update: XOR<RoleMenuUpdateWithoutRoleInput, RoleMenuUncheckedUpdateWithoutRoleInput>
    create: XOR<RoleMenuCreateWithoutRoleInput, RoleMenuUncheckedCreateWithoutRoleInput>
  }

  export type RoleMenuUpdateWithWhereUniqueWithoutRoleInput = {
    where: RoleMenuWhereUniqueInput
    data: XOR<RoleMenuUpdateWithoutRoleInput, RoleMenuUncheckedUpdateWithoutRoleInput>
  }

  export type RoleMenuUpdateManyWithWhereWithoutRoleInput = {
    where: RoleMenuScalarWhereInput
    data: XOR<RoleMenuUpdateManyMutationInput, RoleMenuUncheckedUpdateManyWithoutRoleInput>
  }

  export type RoleMenuScalarWhereInput = {
    AND?: RoleMenuScalarWhereInput | RoleMenuScalarWhereInput[]
    OR?: RoleMenuScalarWhereInput[]
    NOT?: RoleMenuScalarWhereInput | RoleMenuScalarWhereInput[]
    roleId?: IntFilter<"RoleMenu"> | number
    menuId?: IntFilter<"RoleMenu"> | number
    createdAt?: DateTimeFilter<"RoleMenu"> | Date | string
    updatedAt?: DateTimeFilter<"RoleMenu"> | Date | string
  }

  export type RoleCreateWithoutUsersInput = {
    name: string
    description?: string | null
    RolePermissions?: RolePermissionsCreateNestedManyWithoutRoleInput
    RolePolicy?: RolePolicyCreateNestedManyWithoutRoleInput
    RoleMenu?: RoleMenuCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    description?: string | null
    RolePermissions?: RolePermissionsUncheckedCreateNestedManyWithoutRoleInput
    RolePolicy?: RolePolicyUncheckedCreateNestedManyWithoutRoleInput
    RoleMenu?: RoleMenuUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleCreateOrConnectWithoutUsersInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
  }

  export type UserCreateWithoutUserRoleInput = {
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutUserRoleInput = {
    id?: number
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutUserRoleInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserRoleInput, UserUncheckedCreateWithoutUserRoleInput>
  }

  export type RoleUpsertWithoutUsersInput = {
    update: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutUsersInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type RoleUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    RolePermissions?: RolePermissionsUpdateManyWithoutRoleNestedInput
    RolePolicy?: RolePolicyUpdateManyWithoutRoleNestedInput
    RoleMenu?: RoleMenuUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    RolePermissions?: RolePermissionsUncheckedUpdateManyWithoutRoleNestedInput
    RolePolicy?: RolePolicyUncheckedUpdateManyWithoutRoleNestedInput
    RoleMenu?: RoleMenuUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type UserUpsertWithoutUserRoleInput = {
    update: XOR<UserUpdateWithoutUserRoleInput, UserUncheckedUpdateWithoutUserRoleInput>
    create: XOR<UserCreateWithoutUserRoleInput, UserUncheckedCreateWithoutUserRoleInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserRoleInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserRoleInput, UserUncheckedUpdateWithoutUserRoleInput>
  }

  export type UserUpdateWithoutUserRoleInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutUserRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolePermissionsCreateWithoutPermissionInput = {
    role: RoleCreateNestedOneWithoutRolePermissionsInput
  }

  export type RolePermissionsUncheckedCreateWithoutPermissionInput = {
    roleId: number
  }

  export type RolePermissionsCreateOrConnectWithoutPermissionInput = {
    where: RolePermissionsWhereUniqueInput
    create: XOR<RolePermissionsCreateWithoutPermissionInput, RolePermissionsUncheckedCreateWithoutPermissionInput>
  }

  export type RolePermissionsCreateManyPermissionInputEnvelope = {
    data: RolePermissionsCreateManyPermissionInput | RolePermissionsCreateManyPermissionInput[]
    skipDuplicates?: boolean
  }

  export type PermissionPolicyCreateWithoutPermissionInput = {
    policy: PolicyCreateNestedOneWithoutPermissionPolicyInput
  }

  export type PermissionPolicyUncheckedCreateWithoutPermissionInput = {
    policyId: number
  }

  export type PermissionPolicyCreateOrConnectWithoutPermissionInput = {
    where: PermissionPolicyWhereUniqueInput
    create: XOR<PermissionPolicyCreateWithoutPermissionInput, PermissionPolicyUncheckedCreateWithoutPermissionInput>
  }

  export type PermissionPolicyCreateManyPermissionInputEnvelope = {
    data: PermissionPolicyCreateManyPermissionInput | PermissionPolicyCreateManyPermissionInput[]
    skipDuplicates?: boolean
  }

  export type RolePermissionsUpsertWithWhereUniqueWithoutPermissionInput = {
    where: RolePermissionsWhereUniqueInput
    update: XOR<RolePermissionsUpdateWithoutPermissionInput, RolePermissionsUncheckedUpdateWithoutPermissionInput>
    create: XOR<RolePermissionsCreateWithoutPermissionInput, RolePermissionsUncheckedCreateWithoutPermissionInput>
  }

  export type RolePermissionsUpdateWithWhereUniqueWithoutPermissionInput = {
    where: RolePermissionsWhereUniqueInput
    data: XOR<RolePermissionsUpdateWithoutPermissionInput, RolePermissionsUncheckedUpdateWithoutPermissionInput>
  }

  export type RolePermissionsUpdateManyWithWhereWithoutPermissionInput = {
    where: RolePermissionsScalarWhereInput
    data: XOR<RolePermissionsUpdateManyMutationInput, RolePermissionsUncheckedUpdateManyWithoutPermissionInput>
  }

  export type PermissionPolicyUpsertWithWhereUniqueWithoutPermissionInput = {
    where: PermissionPolicyWhereUniqueInput
    update: XOR<PermissionPolicyUpdateWithoutPermissionInput, PermissionPolicyUncheckedUpdateWithoutPermissionInput>
    create: XOR<PermissionPolicyCreateWithoutPermissionInput, PermissionPolicyUncheckedCreateWithoutPermissionInput>
  }

  export type PermissionPolicyUpdateWithWhereUniqueWithoutPermissionInput = {
    where: PermissionPolicyWhereUniqueInput
    data: XOR<PermissionPolicyUpdateWithoutPermissionInput, PermissionPolicyUncheckedUpdateWithoutPermissionInput>
  }

  export type PermissionPolicyUpdateManyWithWhereWithoutPermissionInput = {
    where: PermissionPolicyScalarWhereInput
    data: XOR<PermissionPolicyUpdateManyMutationInput, PermissionPolicyUncheckedUpdateManyWithoutPermissionInput>
  }

  export type PermissionPolicyScalarWhereInput = {
    AND?: PermissionPolicyScalarWhereInput | PermissionPolicyScalarWhereInput[]
    OR?: PermissionPolicyScalarWhereInput[]
    NOT?: PermissionPolicyScalarWhereInput | PermissionPolicyScalarWhereInput[]
    permissionId?: IntFilter<"PermissionPolicy"> | number
    policyId?: IntFilter<"PermissionPolicy"> | number
  }

  export type RoleCreateWithoutRolePermissionsInput = {
    name: string
    description?: string | null
    users?: UserRoleCreateNestedManyWithoutRoleInput
    RolePolicy?: RolePolicyCreateNestedManyWithoutRoleInput
    RoleMenu?: RoleMenuCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateWithoutRolePermissionsInput = {
    id?: number
    name: string
    description?: string | null
    users?: UserRoleUncheckedCreateNestedManyWithoutRoleInput
    RolePolicy?: RolePolicyUncheckedCreateNestedManyWithoutRoleInput
    RoleMenu?: RoleMenuUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleCreateOrConnectWithoutRolePermissionsInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutRolePermissionsInput, RoleUncheckedCreateWithoutRolePermissionsInput>
  }

  export type PermissionCreateWithoutRolePermissionsInput = {
    name: string
    action: string
    description?: string | null
    PermissionPolicy?: PermissionPolicyCreateNestedManyWithoutPermissionInput
  }

  export type PermissionUncheckedCreateWithoutRolePermissionsInput = {
    id?: number
    name: string
    action: string
    description?: string | null
    PermissionPolicy?: PermissionPolicyUncheckedCreateNestedManyWithoutPermissionInput
  }

  export type PermissionCreateOrConnectWithoutRolePermissionsInput = {
    where: PermissionWhereUniqueInput
    create: XOR<PermissionCreateWithoutRolePermissionsInput, PermissionUncheckedCreateWithoutRolePermissionsInput>
  }

  export type RoleUpsertWithoutRolePermissionsInput = {
    update: XOR<RoleUpdateWithoutRolePermissionsInput, RoleUncheckedUpdateWithoutRolePermissionsInput>
    create: XOR<RoleCreateWithoutRolePermissionsInput, RoleUncheckedCreateWithoutRolePermissionsInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutRolePermissionsInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutRolePermissionsInput, RoleUncheckedUpdateWithoutRolePermissionsInput>
  }

  export type RoleUpdateWithoutRolePermissionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserRoleUpdateManyWithoutRoleNestedInput
    RolePolicy?: RolePolicyUpdateManyWithoutRoleNestedInput
    RoleMenu?: RoleMenuUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateWithoutRolePermissionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserRoleUncheckedUpdateManyWithoutRoleNestedInput
    RolePolicy?: RolePolicyUncheckedUpdateManyWithoutRoleNestedInput
    RoleMenu?: RoleMenuUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type PermissionUpsertWithoutRolePermissionsInput = {
    update: XOR<PermissionUpdateWithoutRolePermissionsInput, PermissionUncheckedUpdateWithoutRolePermissionsInput>
    create: XOR<PermissionCreateWithoutRolePermissionsInput, PermissionUncheckedCreateWithoutRolePermissionsInput>
    where?: PermissionWhereInput
  }

  export type PermissionUpdateToOneWithWhereWithoutRolePermissionsInput = {
    where?: PermissionWhereInput
    data: XOR<PermissionUpdateWithoutRolePermissionsInput, PermissionUncheckedUpdateWithoutRolePermissionsInput>
  }

  export type PermissionUpdateWithoutRolePermissionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    PermissionPolicy?: PermissionPolicyUpdateManyWithoutPermissionNestedInput
  }

  export type PermissionUncheckedUpdateWithoutRolePermissionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    PermissionPolicy?: PermissionPolicyUncheckedUpdateManyWithoutPermissionNestedInput
  }

  export type RolePolicyCreateWithoutPolicyInput = {
    role: RoleCreateNestedOneWithoutRolePolicyInput
  }

  export type RolePolicyUncheckedCreateWithoutPolicyInput = {
    roleId: number
  }

  export type RolePolicyCreateOrConnectWithoutPolicyInput = {
    where: RolePolicyWhereUniqueInput
    create: XOR<RolePolicyCreateWithoutPolicyInput, RolePolicyUncheckedCreateWithoutPolicyInput>
  }

  export type RolePolicyCreateManyPolicyInputEnvelope = {
    data: RolePolicyCreateManyPolicyInput | RolePolicyCreateManyPolicyInput[]
    skipDuplicates?: boolean
  }

  export type PermissionPolicyCreateWithoutPolicyInput = {
    permission: PermissionCreateNestedOneWithoutPermissionPolicyInput
  }

  export type PermissionPolicyUncheckedCreateWithoutPolicyInput = {
    permissionId: number
  }

  export type PermissionPolicyCreateOrConnectWithoutPolicyInput = {
    where: PermissionPolicyWhereUniqueInput
    create: XOR<PermissionPolicyCreateWithoutPolicyInput, PermissionPolicyUncheckedCreateWithoutPolicyInput>
  }

  export type PermissionPolicyCreateManyPolicyInputEnvelope = {
    data: PermissionPolicyCreateManyPolicyInput | PermissionPolicyCreateManyPolicyInput[]
    skipDuplicates?: boolean
  }

  export type RolePolicyUpsertWithWhereUniqueWithoutPolicyInput = {
    where: RolePolicyWhereUniqueInput
    update: XOR<RolePolicyUpdateWithoutPolicyInput, RolePolicyUncheckedUpdateWithoutPolicyInput>
    create: XOR<RolePolicyCreateWithoutPolicyInput, RolePolicyUncheckedCreateWithoutPolicyInput>
  }

  export type RolePolicyUpdateWithWhereUniqueWithoutPolicyInput = {
    where: RolePolicyWhereUniqueInput
    data: XOR<RolePolicyUpdateWithoutPolicyInput, RolePolicyUncheckedUpdateWithoutPolicyInput>
  }

  export type RolePolicyUpdateManyWithWhereWithoutPolicyInput = {
    where: RolePolicyScalarWhereInput
    data: XOR<RolePolicyUpdateManyMutationInput, RolePolicyUncheckedUpdateManyWithoutPolicyInput>
  }

  export type PermissionPolicyUpsertWithWhereUniqueWithoutPolicyInput = {
    where: PermissionPolicyWhereUniqueInput
    update: XOR<PermissionPolicyUpdateWithoutPolicyInput, PermissionPolicyUncheckedUpdateWithoutPolicyInput>
    create: XOR<PermissionPolicyCreateWithoutPolicyInput, PermissionPolicyUncheckedCreateWithoutPolicyInput>
  }

  export type PermissionPolicyUpdateWithWhereUniqueWithoutPolicyInput = {
    where: PermissionPolicyWhereUniqueInput
    data: XOR<PermissionPolicyUpdateWithoutPolicyInput, PermissionPolicyUncheckedUpdateWithoutPolicyInput>
  }

  export type PermissionPolicyUpdateManyWithWhereWithoutPolicyInput = {
    where: PermissionPolicyScalarWhereInput
    data: XOR<PermissionPolicyUpdateManyMutationInput, PermissionPolicyUncheckedUpdateManyWithoutPolicyInput>
  }

  export type RoleCreateWithoutRolePolicyInput = {
    name: string
    description?: string | null
    users?: UserRoleCreateNestedManyWithoutRoleInput
    RolePermissions?: RolePermissionsCreateNestedManyWithoutRoleInput
    RoleMenu?: RoleMenuCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateWithoutRolePolicyInput = {
    id?: number
    name: string
    description?: string | null
    users?: UserRoleUncheckedCreateNestedManyWithoutRoleInput
    RolePermissions?: RolePermissionsUncheckedCreateNestedManyWithoutRoleInput
    RoleMenu?: RoleMenuUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleCreateOrConnectWithoutRolePolicyInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutRolePolicyInput, RoleUncheckedCreateWithoutRolePolicyInput>
  }

  export type PolicyCreateWithoutRolePolicyInput = {
    type: number
    effect: string
    action: string
    subject: string
    fields?: NullableJsonNullValueInput | InputJsonValue
    conditions?: NullableJsonNullValueInput | InputJsonValue
    args?: NullableJsonNullValueInput | InputJsonValue
    encode: string
    PermissionPolicy?: PermissionPolicyCreateNestedManyWithoutPolicyInput
  }

  export type PolicyUncheckedCreateWithoutRolePolicyInput = {
    id?: number
    type: number
    effect: string
    action: string
    subject: string
    fields?: NullableJsonNullValueInput | InputJsonValue
    conditions?: NullableJsonNullValueInput | InputJsonValue
    args?: NullableJsonNullValueInput | InputJsonValue
    encode: string
    PermissionPolicy?: PermissionPolicyUncheckedCreateNestedManyWithoutPolicyInput
  }

  export type PolicyCreateOrConnectWithoutRolePolicyInput = {
    where: PolicyWhereUniqueInput
    create: XOR<PolicyCreateWithoutRolePolicyInput, PolicyUncheckedCreateWithoutRolePolicyInput>
  }

  export type RoleUpsertWithoutRolePolicyInput = {
    update: XOR<RoleUpdateWithoutRolePolicyInput, RoleUncheckedUpdateWithoutRolePolicyInput>
    create: XOR<RoleCreateWithoutRolePolicyInput, RoleUncheckedCreateWithoutRolePolicyInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutRolePolicyInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutRolePolicyInput, RoleUncheckedUpdateWithoutRolePolicyInput>
  }

  export type RoleUpdateWithoutRolePolicyInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserRoleUpdateManyWithoutRoleNestedInput
    RolePermissions?: RolePermissionsUpdateManyWithoutRoleNestedInput
    RoleMenu?: RoleMenuUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateWithoutRolePolicyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserRoleUncheckedUpdateManyWithoutRoleNestedInput
    RolePermissions?: RolePermissionsUncheckedUpdateManyWithoutRoleNestedInput
    RoleMenu?: RoleMenuUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type PolicyUpsertWithoutRolePolicyInput = {
    update: XOR<PolicyUpdateWithoutRolePolicyInput, PolicyUncheckedUpdateWithoutRolePolicyInput>
    create: XOR<PolicyCreateWithoutRolePolicyInput, PolicyUncheckedCreateWithoutRolePolicyInput>
    where?: PolicyWhereInput
  }

  export type PolicyUpdateToOneWithWhereWithoutRolePolicyInput = {
    where?: PolicyWhereInput
    data: XOR<PolicyUpdateWithoutRolePolicyInput, PolicyUncheckedUpdateWithoutRolePolicyInput>
  }

  export type PolicyUpdateWithoutRolePolicyInput = {
    type?: IntFieldUpdateOperationsInput | number
    effect?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    fields?: NullableJsonNullValueInput | InputJsonValue
    conditions?: NullableJsonNullValueInput | InputJsonValue
    args?: NullableJsonNullValueInput | InputJsonValue
    encode?: StringFieldUpdateOperationsInput | string
    PermissionPolicy?: PermissionPolicyUpdateManyWithoutPolicyNestedInput
  }

  export type PolicyUncheckedUpdateWithoutRolePolicyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: IntFieldUpdateOperationsInput | number
    effect?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    fields?: NullableJsonNullValueInput | InputJsonValue
    conditions?: NullableJsonNullValueInput | InputJsonValue
    args?: NullableJsonNullValueInput | InputJsonValue
    encode?: StringFieldUpdateOperationsInput | string
    PermissionPolicy?: PermissionPolicyUncheckedUpdateManyWithoutPolicyNestedInput
  }

  export type PermissionCreateWithoutPermissionPolicyInput = {
    name: string
    action: string
    description?: string | null
    RolePermissions?: RolePermissionsCreateNestedManyWithoutPermissionInput
  }

  export type PermissionUncheckedCreateWithoutPermissionPolicyInput = {
    id?: number
    name: string
    action: string
    description?: string | null
    RolePermissions?: RolePermissionsUncheckedCreateNestedManyWithoutPermissionInput
  }

  export type PermissionCreateOrConnectWithoutPermissionPolicyInput = {
    where: PermissionWhereUniqueInput
    create: XOR<PermissionCreateWithoutPermissionPolicyInput, PermissionUncheckedCreateWithoutPermissionPolicyInput>
  }

  export type PolicyCreateWithoutPermissionPolicyInput = {
    type: number
    effect: string
    action: string
    subject: string
    fields?: NullableJsonNullValueInput | InputJsonValue
    conditions?: NullableJsonNullValueInput | InputJsonValue
    args?: NullableJsonNullValueInput | InputJsonValue
    encode: string
    RolePolicy?: RolePolicyCreateNestedManyWithoutPolicyInput
  }

  export type PolicyUncheckedCreateWithoutPermissionPolicyInput = {
    id?: number
    type: number
    effect: string
    action: string
    subject: string
    fields?: NullableJsonNullValueInput | InputJsonValue
    conditions?: NullableJsonNullValueInput | InputJsonValue
    args?: NullableJsonNullValueInput | InputJsonValue
    encode: string
    RolePolicy?: RolePolicyUncheckedCreateNestedManyWithoutPolicyInput
  }

  export type PolicyCreateOrConnectWithoutPermissionPolicyInput = {
    where: PolicyWhereUniqueInput
    create: XOR<PolicyCreateWithoutPermissionPolicyInput, PolicyUncheckedCreateWithoutPermissionPolicyInput>
  }

  export type PermissionUpsertWithoutPermissionPolicyInput = {
    update: XOR<PermissionUpdateWithoutPermissionPolicyInput, PermissionUncheckedUpdateWithoutPermissionPolicyInput>
    create: XOR<PermissionCreateWithoutPermissionPolicyInput, PermissionUncheckedCreateWithoutPermissionPolicyInput>
    where?: PermissionWhereInput
  }

  export type PermissionUpdateToOneWithWhereWithoutPermissionPolicyInput = {
    where?: PermissionWhereInput
    data: XOR<PermissionUpdateWithoutPermissionPolicyInput, PermissionUncheckedUpdateWithoutPermissionPolicyInput>
  }

  export type PermissionUpdateWithoutPermissionPolicyInput = {
    name?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    RolePermissions?: RolePermissionsUpdateManyWithoutPermissionNestedInput
  }

  export type PermissionUncheckedUpdateWithoutPermissionPolicyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    RolePermissions?: RolePermissionsUncheckedUpdateManyWithoutPermissionNestedInput
  }

  export type PolicyUpsertWithoutPermissionPolicyInput = {
    update: XOR<PolicyUpdateWithoutPermissionPolicyInput, PolicyUncheckedUpdateWithoutPermissionPolicyInput>
    create: XOR<PolicyCreateWithoutPermissionPolicyInput, PolicyUncheckedCreateWithoutPermissionPolicyInput>
    where?: PolicyWhereInput
  }

  export type PolicyUpdateToOneWithWhereWithoutPermissionPolicyInput = {
    where?: PolicyWhereInput
    data: XOR<PolicyUpdateWithoutPermissionPolicyInput, PolicyUncheckedUpdateWithoutPermissionPolicyInput>
  }

  export type PolicyUpdateWithoutPermissionPolicyInput = {
    type?: IntFieldUpdateOperationsInput | number
    effect?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    fields?: NullableJsonNullValueInput | InputJsonValue
    conditions?: NullableJsonNullValueInput | InputJsonValue
    args?: NullableJsonNullValueInput | InputJsonValue
    encode?: StringFieldUpdateOperationsInput | string
    RolePolicy?: RolePolicyUpdateManyWithoutPolicyNestedInput
  }

  export type PolicyUncheckedUpdateWithoutPermissionPolicyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: IntFieldUpdateOperationsInput | number
    effect?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    fields?: NullableJsonNullValueInput | InputJsonValue
    conditions?: NullableJsonNullValueInput | InputJsonValue
    args?: NullableJsonNullValueInput | InputJsonValue
    encode?: StringFieldUpdateOperationsInput | string
    RolePolicy?: RolePolicyUncheckedUpdateManyWithoutPolicyNestedInput
  }

  export type MenuMetaCreateWithoutMenuInput = {
    title?: string | null
    layout?: string | null
    order?: number | null
    hidden?: boolean
    disabled?: boolean
    icon?: string | null
    status?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MenuMetaUncheckedCreateWithoutMenuInput = {
    id?: number
    title?: string | null
    layout?: string | null
    order?: number | null
    hidden?: boolean
    disabled?: boolean
    icon?: string | null
    status?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MenuMetaCreateOrConnectWithoutMenuInput = {
    where: MenuMetaWhereUniqueInput
    create: XOR<MenuMetaCreateWithoutMenuInput, MenuMetaUncheckedCreateWithoutMenuInput>
  }

  export type MenuCreateWithoutChildrenInput = {
    name: string
    path: string
    label: string
    component?: string | null
    redirect?: string | null
    fullPath?: string | null
    alias?: string | null
    status?: number
    metaId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    meta?: MenuMetaCreateNestedOneWithoutMenuInput
    parent?: MenuCreateNestedOneWithoutChildrenInput
    roleMenus?: RoleMenuCreateNestedManyWithoutMenuInput
  }

  export type MenuUncheckedCreateWithoutChildrenInput = {
    id?: number
    name: string
    path: string
    label: string
    component?: string | null
    redirect?: string | null
    fullPath?: string | null
    alias?: string | null
    status?: number
    parentId?: number | null
    metaId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    meta?: MenuMetaUncheckedCreateNestedOneWithoutMenuInput
    roleMenus?: RoleMenuUncheckedCreateNestedManyWithoutMenuInput
  }

  export type MenuCreateOrConnectWithoutChildrenInput = {
    where: MenuWhereUniqueInput
    create: XOR<MenuCreateWithoutChildrenInput, MenuUncheckedCreateWithoutChildrenInput>
  }

  export type MenuCreateWithoutParentInput = {
    name: string
    path: string
    label: string
    component?: string | null
    redirect?: string | null
    fullPath?: string | null
    alias?: string | null
    status?: number
    metaId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    meta?: MenuMetaCreateNestedOneWithoutMenuInput
    children?: MenuCreateNestedManyWithoutParentInput
    roleMenus?: RoleMenuCreateNestedManyWithoutMenuInput
  }

  export type MenuUncheckedCreateWithoutParentInput = {
    id?: number
    name: string
    path: string
    label: string
    component?: string | null
    redirect?: string | null
    fullPath?: string | null
    alias?: string | null
    status?: number
    metaId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    meta?: MenuMetaUncheckedCreateNestedOneWithoutMenuInput
    children?: MenuUncheckedCreateNestedManyWithoutParentInput
    roleMenus?: RoleMenuUncheckedCreateNestedManyWithoutMenuInput
  }

  export type MenuCreateOrConnectWithoutParentInput = {
    where: MenuWhereUniqueInput
    create: XOR<MenuCreateWithoutParentInput, MenuUncheckedCreateWithoutParentInput>
  }

  export type MenuCreateManyParentInputEnvelope = {
    data: MenuCreateManyParentInput | MenuCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type RoleMenuCreateWithoutMenuInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    role: RoleCreateNestedOneWithoutRoleMenuInput
  }

  export type RoleMenuUncheckedCreateWithoutMenuInput = {
    roleId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoleMenuCreateOrConnectWithoutMenuInput = {
    where: RoleMenuWhereUniqueInput
    create: XOR<RoleMenuCreateWithoutMenuInput, RoleMenuUncheckedCreateWithoutMenuInput>
  }

  export type RoleMenuCreateManyMenuInputEnvelope = {
    data: RoleMenuCreateManyMenuInput | RoleMenuCreateManyMenuInput[]
    skipDuplicates?: boolean
  }

  export type MenuMetaUpsertWithoutMenuInput = {
    update: XOR<MenuMetaUpdateWithoutMenuInput, MenuMetaUncheckedUpdateWithoutMenuInput>
    create: XOR<MenuMetaCreateWithoutMenuInput, MenuMetaUncheckedCreateWithoutMenuInput>
    where?: MenuMetaWhereInput
  }

  export type MenuMetaUpdateToOneWithWhereWithoutMenuInput = {
    where?: MenuMetaWhereInput
    data: XOR<MenuMetaUpdateWithoutMenuInput, MenuMetaUncheckedUpdateWithoutMenuInput>
  }

  export type MenuMetaUpdateWithoutMenuInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    layout?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    hidden?: BoolFieldUpdateOperationsInput | boolean
    disabled?: BoolFieldUpdateOperationsInput | boolean
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuMetaUncheckedUpdateWithoutMenuInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    layout?: NullableStringFieldUpdateOperationsInput | string | null
    order?: NullableIntFieldUpdateOperationsInput | number | null
    hidden?: BoolFieldUpdateOperationsInput | boolean
    disabled?: BoolFieldUpdateOperationsInput | boolean
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuUpsertWithoutChildrenInput = {
    update: XOR<MenuUpdateWithoutChildrenInput, MenuUncheckedUpdateWithoutChildrenInput>
    create: XOR<MenuCreateWithoutChildrenInput, MenuUncheckedCreateWithoutChildrenInput>
    where?: MenuWhereInput
  }

  export type MenuUpdateToOneWithWhereWithoutChildrenInput = {
    where?: MenuWhereInput
    data: XOR<MenuUpdateWithoutChildrenInput, MenuUncheckedUpdateWithoutChildrenInput>
  }

  export type MenuUpdateWithoutChildrenInput = {
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    component?: NullableStringFieldUpdateOperationsInput | string | null
    redirect?: NullableStringFieldUpdateOperationsInput | string | null
    fullPath?: NullableStringFieldUpdateOperationsInput | string | null
    alias?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    metaId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meta?: MenuMetaUpdateOneWithoutMenuNestedInput
    parent?: MenuUpdateOneWithoutChildrenNestedInput
    roleMenus?: RoleMenuUpdateManyWithoutMenuNestedInput
  }

  export type MenuUncheckedUpdateWithoutChildrenInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    component?: NullableStringFieldUpdateOperationsInput | string | null
    redirect?: NullableStringFieldUpdateOperationsInput | string | null
    fullPath?: NullableStringFieldUpdateOperationsInput | string | null
    alias?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    metaId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meta?: MenuMetaUncheckedUpdateOneWithoutMenuNestedInput
    roleMenus?: RoleMenuUncheckedUpdateManyWithoutMenuNestedInput
  }

  export type MenuUpsertWithWhereUniqueWithoutParentInput = {
    where: MenuWhereUniqueInput
    update: XOR<MenuUpdateWithoutParentInput, MenuUncheckedUpdateWithoutParentInput>
    create: XOR<MenuCreateWithoutParentInput, MenuUncheckedCreateWithoutParentInput>
  }

  export type MenuUpdateWithWhereUniqueWithoutParentInput = {
    where: MenuWhereUniqueInput
    data: XOR<MenuUpdateWithoutParentInput, MenuUncheckedUpdateWithoutParentInput>
  }

  export type MenuUpdateManyWithWhereWithoutParentInput = {
    where: MenuScalarWhereInput
    data: XOR<MenuUpdateManyMutationInput, MenuUncheckedUpdateManyWithoutParentInput>
  }

  export type MenuScalarWhereInput = {
    AND?: MenuScalarWhereInput | MenuScalarWhereInput[]
    OR?: MenuScalarWhereInput[]
    NOT?: MenuScalarWhereInput | MenuScalarWhereInput[]
    id?: IntFilter<"Menu"> | number
    name?: StringFilter<"Menu"> | string
    path?: StringFilter<"Menu"> | string
    label?: StringFilter<"Menu"> | string
    component?: StringNullableFilter<"Menu"> | string | null
    redirect?: StringNullableFilter<"Menu"> | string | null
    fullPath?: StringNullableFilter<"Menu"> | string | null
    alias?: StringNullableFilter<"Menu"> | string | null
    status?: IntFilter<"Menu"> | number
    parentId?: IntNullableFilter<"Menu"> | number | null
    metaId?: IntNullableFilter<"Menu"> | number | null
    createdAt?: DateTimeFilter<"Menu"> | Date | string
    updatedAt?: DateTimeFilter<"Menu"> | Date | string
  }

  export type RoleMenuUpsertWithWhereUniqueWithoutMenuInput = {
    where: RoleMenuWhereUniqueInput
    update: XOR<RoleMenuUpdateWithoutMenuInput, RoleMenuUncheckedUpdateWithoutMenuInput>
    create: XOR<RoleMenuCreateWithoutMenuInput, RoleMenuUncheckedCreateWithoutMenuInput>
  }

  export type RoleMenuUpdateWithWhereUniqueWithoutMenuInput = {
    where: RoleMenuWhereUniqueInput
    data: XOR<RoleMenuUpdateWithoutMenuInput, RoleMenuUncheckedUpdateWithoutMenuInput>
  }

  export type RoleMenuUpdateManyWithWhereWithoutMenuInput = {
    where: RoleMenuScalarWhereInput
    data: XOR<RoleMenuUpdateManyMutationInput, RoleMenuUncheckedUpdateManyWithoutMenuInput>
  }

  export type MenuCreateWithoutMetaInput = {
    name: string
    path: string
    label: string
    component?: string | null
    redirect?: string | null
    fullPath?: string | null
    alias?: string | null
    status?: number
    metaId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: MenuCreateNestedOneWithoutChildrenInput
    children?: MenuCreateNestedManyWithoutParentInput
    roleMenus?: RoleMenuCreateNestedManyWithoutMenuInput
  }

  export type MenuUncheckedCreateWithoutMetaInput = {
    id?: number
    name: string
    path: string
    label: string
    component?: string | null
    redirect?: string | null
    fullPath?: string | null
    alias?: string | null
    status?: number
    parentId?: number | null
    metaId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: MenuUncheckedCreateNestedManyWithoutParentInput
    roleMenus?: RoleMenuUncheckedCreateNestedManyWithoutMenuInput
  }

  export type MenuCreateOrConnectWithoutMetaInput = {
    where: MenuWhereUniqueInput
    create: XOR<MenuCreateWithoutMetaInput, MenuUncheckedCreateWithoutMetaInput>
  }

  export type MenuUpsertWithoutMetaInput = {
    update: XOR<MenuUpdateWithoutMetaInput, MenuUncheckedUpdateWithoutMetaInput>
    create: XOR<MenuCreateWithoutMetaInput, MenuUncheckedCreateWithoutMetaInput>
    where?: MenuWhereInput
  }

  export type MenuUpdateToOneWithWhereWithoutMetaInput = {
    where?: MenuWhereInput
    data: XOR<MenuUpdateWithoutMetaInput, MenuUncheckedUpdateWithoutMetaInput>
  }

  export type MenuUpdateWithoutMetaInput = {
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    component?: NullableStringFieldUpdateOperationsInput | string | null
    redirect?: NullableStringFieldUpdateOperationsInput | string | null
    fullPath?: NullableStringFieldUpdateOperationsInput | string | null
    alias?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    metaId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: MenuUpdateOneWithoutChildrenNestedInput
    children?: MenuUpdateManyWithoutParentNestedInput
    roleMenus?: RoleMenuUpdateManyWithoutMenuNestedInput
  }

  export type MenuUncheckedUpdateWithoutMetaInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    component?: NullableStringFieldUpdateOperationsInput | string | null
    redirect?: NullableStringFieldUpdateOperationsInput | string | null
    fullPath?: NullableStringFieldUpdateOperationsInput | string | null
    alias?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    metaId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: MenuUncheckedUpdateManyWithoutParentNestedInput
    roleMenus?: RoleMenuUncheckedUpdateManyWithoutMenuNestedInput
  }

  export type RoleCreateWithoutRoleMenuInput = {
    name: string
    description?: string | null
    users?: UserRoleCreateNestedManyWithoutRoleInput
    RolePermissions?: RolePermissionsCreateNestedManyWithoutRoleInput
    RolePolicy?: RolePolicyCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateWithoutRoleMenuInput = {
    id?: number
    name: string
    description?: string | null
    users?: UserRoleUncheckedCreateNestedManyWithoutRoleInput
    RolePermissions?: RolePermissionsUncheckedCreateNestedManyWithoutRoleInput
    RolePolicy?: RolePolicyUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleCreateOrConnectWithoutRoleMenuInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutRoleMenuInput, RoleUncheckedCreateWithoutRoleMenuInput>
  }

  export type MenuCreateWithoutRoleMenusInput = {
    name: string
    path: string
    label: string
    component?: string | null
    redirect?: string | null
    fullPath?: string | null
    alias?: string | null
    status?: number
    metaId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    meta?: MenuMetaCreateNestedOneWithoutMenuInput
    parent?: MenuCreateNestedOneWithoutChildrenInput
    children?: MenuCreateNestedManyWithoutParentInput
  }

  export type MenuUncheckedCreateWithoutRoleMenusInput = {
    id?: number
    name: string
    path: string
    label: string
    component?: string | null
    redirect?: string | null
    fullPath?: string | null
    alias?: string | null
    status?: number
    parentId?: number | null
    metaId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    meta?: MenuMetaUncheckedCreateNestedOneWithoutMenuInput
    children?: MenuUncheckedCreateNestedManyWithoutParentInput
  }

  export type MenuCreateOrConnectWithoutRoleMenusInput = {
    where: MenuWhereUniqueInput
    create: XOR<MenuCreateWithoutRoleMenusInput, MenuUncheckedCreateWithoutRoleMenusInput>
  }

  export type RoleUpsertWithoutRoleMenuInput = {
    update: XOR<RoleUpdateWithoutRoleMenuInput, RoleUncheckedUpdateWithoutRoleMenuInput>
    create: XOR<RoleCreateWithoutRoleMenuInput, RoleUncheckedCreateWithoutRoleMenuInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutRoleMenuInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutRoleMenuInput, RoleUncheckedUpdateWithoutRoleMenuInput>
  }

  export type RoleUpdateWithoutRoleMenuInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserRoleUpdateManyWithoutRoleNestedInput
    RolePermissions?: RolePermissionsUpdateManyWithoutRoleNestedInput
    RolePolicy?: RolePolicyUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateWithoutRoleMenuInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserRoleUncheckedUpdateManyWithoutRoleNestedInput
    RolePermissions?: RolePermissionsUncheckedUpdateManyWithoutRoleNestedInput
    RolePolicy?: RolePolicyUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type MenuUpsertWithoutRoleMenusInput = {
    update: XOR<MenuUpdateWithoutRoleMenusInput, MenuUncheckedUpdateWithoutRoleMenusInput>
    create: XOR<MenuCreateWithoutRoleMenusInput, MenuUncheckedCreateWithoutRoleMenusInput>
    where?: MenuWhereInput
  }

  export type MenuUpdateToOneWithWhereWithoutRoleMenusInput = {
    where?: MenuWhereInput
    data: XOR<MenuUpdateWithoutRoleMenusInput, MenuUncheckedUpdateWithoutRoleMenusInput>
  }

  export type MenuUpdateWithoutRoleMenusInput = {
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    component?: NullableStringFieldUpdateOperationsInput | string | null
    redirect?: NullableStringFieldUpdateOperationsInput | string | null
    fullPath?: NullableStringFieldUpdateOperationsInput | string | null
    alias?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    metaId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meta?: MenuMetaUpdateOneWithoutMenuNestedInput
    parent?: MenuUpdateOneWithoutChildrenNestedInput
    children?: MenuUpdateManyWithoutParentNestedInput
  }

  export type MenuUncheckedUpdateWithoutRoleMenusInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    component?: NullableStringFieldUpdateOperationsInput | string | null
    redirect?: NullableStringFieldUpdateOperationsInput | string | null
    fullPath?: NullableStringFieldUpdateOperationsInput | string | null
    alias?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    metaId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meta?: MenuMetaUncheckedUpdateOneWithoutMenuNestedInput
    children?: MenuUncheckedUpdateManyWithoutParentNestedInput
  }

  export type UserRoleCreateManyUserInput = {
    roleId: number
  }

  export type UserRoleUpdateWithoutUserInput = {
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserRoleUncheckedUpdateWithoutUserInput = {
    roleId?: IntFieldUpdateOperationsInput | number
  }

  export type UserRoleUncheckedUpdateManyWithoutUserInput = {
    roleId?: IntFieldUpdateOperationsInput | number
  }

  export type UserRoleCreateManyRoleInput = {
    userId: number
  }

  export type RolePermissionsCreateManyRoleInput = {
    permissionId: number
  }

  export type RolePolicyCreateManyRoleInput = {
    policyId: number
  }

  export type RoleMenuCreateManyRoleInput = {
    menuId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserRoleUpdateWithoutRoleInput = {
    user?: UserUpdateOneRequiredWithoutUserRoleNestedInput
  }

  export type UserRoleUncheckedUpdateWithoutRoleInput = {
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UserRoleUncheckedUpdateManyWithoutRoleInput = {
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type RolePermissionsUpdateWithoutRoleInput = {
    permission?: PermissionUpdateOneRequiredWithoutRolePermissionsNestedInput
  }

  export type RolePermissionsUncheckedUpdateWithoutRoleInput = {
    permissionId?: IntFieldUpdateOperationsInput | number
  }

  export type RolePermissionsUncheckedUpdateManyWithoutRoleInput = {
    permissionId?: IntFieldUpdateOperationsInput | number
  }

  export type RolePolicyUpdateWithoutRoleInput = {
    policy?: PolicyUpdateOneRequiredWithoutRolePolicyNestedInput
  }

  export type RolePolicyUncheckedUpdateWithoutRoleInput = {
    policyId?: IntFieldUpdateOperationsInput | number
  }

  export type RolePolicyUncheckedUpdateManyWithoutRoleInput = {
    policyId?: IntFieldUpdateOperationsInput | number
  }

  export type RoleMenuUpdateWithoutRoleInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    menu?: MenuUpdateOneRequiredWithoutRoleMenusNestedInput
  }

  export type RoleMenuUncheckedUpdateWithoutRoleInput = {
    menuId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleMenuUncheckedUpdateManyWithoutRoleInput = {
    menuId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolePermissionsCreateManyPermissionInput = {
    roleId: number
  }

  export type PermissionPolicyCreateManyPermissionInput = {
    policyId: number
  }

  export type RolePermissionsUpdateWithoutPermissionInput = {
    role?: RoleUpdateOneRequiredWithoutRolePermissionsNestedInput
  }

  export type RolePermissionsUncheckedUpdateWithoutPermissionInput = {
    roleId?: IntFieldUpdateOperationsInput | number
  }

  export type RolePermissionsUncheckedUpdateManyWithoutPermissionInput = {
    roleId?: IntFieldUpdateOperationsInput | number
  }

  export type PermissionPolicyUpdateWithoutPermissionInput = {
    policy?: PolicyUpdateOneRequiredWithoutPermissionPolicyNestedInput
  }

  export type PermissionPolicyUncheckedUpdateWithoutPermissionInput = {
    policyId?: IntFieldUpdateOperationsInput | number
  }

  export type PermissionPolicyUncheckedUpdateManyWithoutPermissionInput = {
    policyId?: IntFieldUpdateOperationsInput | number
  }

  export type RolePolicyCreateManyPolicyInput = {
    roleId: number
  }

  export type PermissionPolicyCreateManyPolicyInput = {
    permissionId: number
  }

  export type RolePolicyUpdateWithoutPolicyInput = {
    role?: RoleUpdateOneRequiredWithoutRolePolicyNestedInput
  }

  export type RolePolicyUncheckedUpdateWithoutPolicyInput = {
    roleId?: IntFieldUpdateOperationsInput | number
  }

  export type RolePolicyUncheckedUpdateManyWithoutPolicyInput = {
    roleId?: IntFieldUpdateOperationsInput | number
  }

  export type PermissionPolicyUpdateWithoutPolicyInput = {
    permission?: PermissionUpdateOneRequiredWithoutPermissionPolicyNestedInput
  }

  export type PermissionPolicyUncheckedUpdateWithoutPolicyInput = {
    permissionId?: IntFieldUpdateOperationsInput | number
  }

  export type PermissionPolicyUncheckedUpdateManyWithoutPolicyInput = {
    permissionId?: IntFieldUpdateOperationsInput | number
  }

  export type MenuCreateManyParentInput = {
    id?: number
    name: string
    path: string
    label: string
    component?: string | null
    redirect?: string | null
    fullPath?: string | null
    alias?: string | null
    status?: number
    metaId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoleMenuCreateManyMenuInput = {
    roleId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MenuUpdateWithoutParentInput = {
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    component?: NullableStringFieldUpdateOperationsInput | string | null
    redirect?: NullableStringFieldUpdateOperationsInput | string | null
    fullPath?: NullableStringFieldUpdateOperationsInput | string | null
    alias?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    metaId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meta?: MenuMetaUpdateOneWithoutMenuNestedInput
    children?: MenuUpdateManyWithoutParentNestedInput
    roleMenus?: RoleMenuUpdateManyWithoutMenuNestedInput
  }

  export type MenuUncheckedUpdateWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    component?: NullableStringFieldUpdateOperationsInput | string | null
    redirect?: NullableStringFieldUpdateOperationsInput | string | null
    fullPath?: NullableStringFieldUpdateOperationsInput | string | null
    alias?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    metaId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meta?: MenuMetaUncheckedUpdateOneWithoutMenuNestedInput
    children?: MenuUncheckedUpdateManyWithoutParentNestedInput
    roleMenus?: RoleMenuUncheckedUpdateManyWithoutMenuNestedInput
  }

  export type MenuUncheckedUpdateManyWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    component?: NullableStringFieldUpdateOperationsInput | string | null
    redirect?: NullableStringFieldUpdateOperationsInput | string | null
    fullPath?: NullableStringFieldUpdateOperationsInput | string | null
    alias?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    metaId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleMenuUpdateWithoutMenuInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutRoleMenuNestedInput
  }

  export type RoleMenuUncheckedUpdateWithoutMenuInput = {
    roleId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleMenuUncheckedUpdateManyWithoutMenuInput = {
    roleId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RoleCountOutputTypeDefaultArgs instead
     */
    export type RoleCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RoleCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PermissionCountOutputTypeDefaultArgs instead
     */
    export type PermissionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PermissionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PolicyCountOutputTypeDefaultArgs instead
     */
    export type PolicyCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PolicyCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MenuCountOutputTypeDefaultArgs instead
     */
    export type MenuCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MenuCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RoleDefaultArgs instead
     */
    export type RoleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RoleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserRoleDefaultArgs instead
     */
    export type UserRoleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserRoleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PermissionDefaultArgs instead
     */
    export type PermissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PermissionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RolePermissionsDefaultArgs instead
     */
    export type RolePermissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RolePermissionsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PolicyDefaultArgs instead
     */
    export type PolicyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PolicyDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RolePolicyDefaultArgs instead
     */
    export type RolePolicyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RolePolicyDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PermissionPolicyDefaultArgs instead
     */
    export type PermissionPolicyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PermissionPolicyDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MenuDefaultArgs instead
     */
    export type MenuArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MenuDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MenuMetaDefaultArgs instead
     */
    export type MenuMetaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MenuMetaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RoleMenuDefaultArgs instead
     */
    export type RoleMenuArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RoleMenuDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}