declare module 'prerender-node' {
  interface PrerenderOptions {
    prerenderToken?: string;
    prerenderServiceUrl?: string;
    protocol?: string;
  }

  interface PrerenderMiddleware {
    set(key: string, value: string): PrerenderMiddleware;
  }

  function prerender(options?: PrerenderOptions): PrerenderMiddleware;
  
  export = prerender;
}