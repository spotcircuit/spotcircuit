/// <reference types="next" />
/// <reference types="next/navigation-types/compat/navigation" />

// For Next.js App Router support
declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test';
  }
}

// App Router Page Props
declare module 'next/dist/server/future/route-modules/app-page/module' {
  interface AppPageRouteModule {
    readonly page: {
      readonly default: React.ComponentType<any>;
    };
  }
}