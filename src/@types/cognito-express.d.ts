declare module 'cognito-express' {
  export default class CognitoExpress {
    constructor(...args: unknown[]);

    init(...args: unknown[]): unknown;

    validate(...args: unknown[]): unknown;

    static Strategy: unknown;
  }
}
