import { RPCMethod, RPCErrorCode } from './blockchain/rpc';

export type ReqMiddleware = Map<string | RPCMethod | RegExp, any[]>;
export type ResMiddleware = Map<string | RPCMethod | RegExp, any[]>;

export const enum MiddlewareType {
  REQ,
  RES,
}

export interface Middleware {
  request: object;
  response: object;
}

export interface RPCRequestPayload<T> {
  id: number;
  jsonrpc: string;
  method: RPCMethod;
  params: T;
}

export interface RPCRequestOptions {
  headers: [];
  method: string;
}

export interface RPCRequest<T> {
  url: string;
  payload: RPCRequestPayload<T>;
  options: RPCRequestOptions;
}

export interface RPCResponseBase {
  jsonrpc: string;
  id: string;
}

export interface RPCResponseBody<R, E> extends RPCResponseBase {
  result: R;
  error: E;
}

export interface RPCError {
  code: RPCErrorCode;
  message: string;
  data: any;
}

export interface RPCResult {
  resultString: string;
  resultMap: Map<string, any>;
  resultList: any[];
  raw: any;
}
