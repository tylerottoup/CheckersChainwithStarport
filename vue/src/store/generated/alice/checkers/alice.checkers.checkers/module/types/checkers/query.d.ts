import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../checkers/params";
import { NextGame } from "../checkers/next_game";
import { StoredGame } from "../checkers/stored_game";
import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
export declare const protobufPackage = "alice.checkers.checkers";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params: Params | undefined;
}
export interface QueryGetNextGameRequest {
}
export interface QueryGetNextGameResponse {
    NextGame: NextGame | undefined;
}
export interface QueryGetStoredGameRequest {
    index: string;
}
export interface QueryGetStoredGameResponse {
    storedGame: StoredGame | undefined;
}
export interface QueryAllStoredGameRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllStoredGameResponse {
    storedGame: StoredGame[];
    pagination: PageResponse | undefined;
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryGetNextGameRequest: {
    encode(_: QueryGetNextGameRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetNextGameRequest;
    fromJSON(_: any): QueryGetNextGameRequest;
    toJSON(_: QueryGetNextGameRequest): unknown;
    fromPartial(_: DeepPartial<QueryGetNextGameRequest>): QueryGetNextGameRequest;
};
export declare const QueryGetNextGameResponse: {
    encode(message: QueryGetNextGameResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetNextGameResponse;
    fromJSON(object: any): QueryGetNextGameResponse;
    toJSON(message: QueryGetNextGameResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetNextGameResponse>): QueryGetNextGameResponse;
};
export declare const QueryGetStoredGameRequest: {
    encode(message: QueryGetStoredGameRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetStoredGameRequest;
    fromJSON(object: any): QueryGetStoredGameRequest;
    toJSON(message: QueryGetStoredGameRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetStoredGameRequest>): QueryGetStoredGameRequest;
};
export declare const QueryGetStoredGameResponse: {
    encode(message: QueryGetStoredGameResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetStoredGameResponse;
    fromJSON(object: any): QueryGetStoredGameResponse;
    toJSON(message: QueryGetStoredGameResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetStoredGameResponse>): QueryGetStoredGameResponse;
};
export declare const QueryAllStoredGameRequest: {
    encode(message: QueryAllStoredGameRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllStoredGameRequest;
    fromJSON(object: any): QueryAllStoredGameRequest;
    toJSON(message: QueryAllStoredGameRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllStoredGameRequest>): QueryAllStoredGameRequest;
};
export declare const QueryAllStoredGameResponse: {
    encode(message: QueryAllStoredGameResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllStoredGameResponse;
    fromJSON(object: any): QueryAllStoredGameResponse;
    toJSON(message: QueryAllStoredGameResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllStoredGameResponse>): QueryAllStoredGameResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Queries a NextGame by index. */
    NextGame(request: QueryGetNextGameRequest): Promise<QueryGetNextGameResponse>;
    /** Queries a StoredGame by index. */
    StoredGame(request: QueryGetStoredGameRequest): Promise<QueryGetStoredGameResponse>;
    /** Queries a list of StoredGame items. */
    StoredGameAll(request: QueryAllStoredGameRequest): Promise<QueryAllStoredGameResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    NextGame(request: QueryGetNextGameRequest): Promise<QueryGetNextGameResponse>;
    StoredGame(request: QueryGetStoredGameRequest): Promise<QueryGetStoredGameResponse>;
    StoredGameAll(request: QueryAllStoredGameRequest): Promise<QueryAllStoredGameResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
