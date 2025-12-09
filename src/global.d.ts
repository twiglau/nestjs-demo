import 'express'; // 这很重要！先导入原始类型

// 1. 使用 declare global 来增强
declare global {
  namespace Express {
    interface Request {
      user: {
        username: string;
        password?: string;
        id: number;
        roles?: any[];
      };
      i18nLang?: string;
    }
  }
}

/*
// 2. 这种类型，会覆盖原有类型
declare module 'express' {
  interface Request {
    user: {
      username: string;
      password?: string;
      id: number;
      roles?: any[];
    };
    i18nLang?: string;
  }

  // 确保导出 Response 和其他必要类型
  export interface Response {
    // 保持原有类型，这里只是声明
  }

  // 或者直接重新导出所有类型
  export * from 'express-serve-static-core';
}
*/
