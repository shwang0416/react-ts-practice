interface ServiceInit {
    status: 'init';
  }
  interface ServiceLoading {
    status: 'loading';
  }
  interface ServiceLoaded {
    status: 'loaded';
    payload: any;
    // <T>(payload:T): T;
  }
  interface ServiceError {
    status: 'error';
    error: Error;
  }
  export type Service =
    | ServiceInit
    | ServiceLoading
    | ServiceLoaded
    | ServiceError;