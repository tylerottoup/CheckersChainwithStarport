import { Reader, Writer } from "protobufjs/minimal";
export declare const protobufPackage = "alice.checkers.checkers";
export interface MsgCreatePost {
    creator: string;
    title: string;
    body: string;
}
export interface MsgCreatePostResponse {
}
export interface MsgCreateGame {
    creator: string;
    red: string;
    black: string;
}
export interface MsgCreateGameResponse {
    idValue: string;
}
export declare const MsgCreatePost: {
    encode(message: MsgCreatePost, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreatePost;
    fromJSON(object: any): MsgCreatePost;
    toJSON(message: MsgCreatePost): unknown;
    fromPartial(object: DeepPartial<MsgCreatePost>): MsgCreatePost;
};
export declare const MsgCreatePostResponse: {
    encode(_: MsgCreatePostResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreatePostResponse;
    fromJSON(_: any): MsgCreatePostResponse;
    toJSON(_: MsgCreatePostResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreatePostResponse>): MsgCreatePostResponse;
};
export declare const MsgCreateGame: {
    encode(message: MsgCreateGame, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateGame;
    fromJSON(object: any): MsgCreateGame;
    toJSON(message: MsgCreateGame): unknown;
    fromPartial(object: DeepPartial<MsgCreateGame>): MsgCreateGame;
};
export declare const MsgCreateGameResponse: {
    encode(message: MsgCreateGameResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateGameResponse;
    fromJSON(object: any): MsgCreateGameResponse;
    toJSON(message: MsgCreateGameResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateGameResponse>): MsgCreateGameResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    CreatePost(request: MsgCreatePost): Promise<MsgCreatePostResponse>;
    /** this line is used by starport scaffolding # proto/tx/rpc */
    CreateGame(request: MsgCreateGame): Promise<MsgCreateGameResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreatePost(request: MsgCreatePost): Promise<MsgCreatePostResponse>;
    CreateGame(request: MsgCreateGame): Promise<MsgCreateGameResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
