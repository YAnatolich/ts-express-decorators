import {ISocketHandlerMetadata} from "./ISocketHandlerMetadata";

/**
 *
 */
export enum SocketProviderTypes {
  SERVICE = "service",
  MIDDLEWARE = "middleware"
}

/**
 *
 */
export interface ISocketProviderMetadata {
  type: SocketProviderTypes;
  namespace?: string;
  injectNamespaces?: {propertyKey: string; nsp: string}[];
  useBefore?: any[];
  useAfter?: any[];
  handlers: {
    [propertyKey: string]: ISocketHandlerMetadata;
  };
}
