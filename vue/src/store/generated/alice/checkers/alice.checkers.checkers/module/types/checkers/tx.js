/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
export const protobufPackage = "alice.checkers.checkers";
const baseMsgCreatePost = { creator: "", title: "", body: "" };
export const MsgCreatePost = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.title !== "") {
            writer.uint32(18).string(message.title);
        }
        if (message.body !== "") {
            writer.uint32(26).string(message.body);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreatePost };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.title = reader.string();
                    break;
                case 3:
                    message.body = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreatePost };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.title !== undefined && object.title !== null) {
            message.title = String(object.title);
        }
        else {
            message.title = "";
        }
        if (object.body !== undefined && object.body !== null) {
            message.body = String(object.body);
        }
        else {
            message.body = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.title !== undefined && (obj.title = message.title);
        message.body !== undefined && (obj.body = message.body);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreatePost };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        else {
            message.title = "";
        }
        if (object.body !== undefined && object.body !== null) {
            message.body = object.body;
        }
        else {
            message.body = "";
        }
        return message;
    },
};
const baseMsgCreatePostResponse = {};
export const MsgCreatePostResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreatePostResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgCreatePostResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgCreatePostResponse };
        return message;
    },
};
const baseMsgCreateGame = { creator: "", red: "", black: "" };
export const MsgCreateGame = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.red !== "") {
            writer.uint32(18).string(message.red);
        }
        if (message.black !== "") {
            writer.uint32(26).string(message.black);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateGame };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.red = reader.string();
                    break;
                case 3:
                    message.black = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateGame };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.red !== undefined && object.red !== null) {
            message.red = String(object.red);
        }
        else {
            message.red = "";
        }
        if (object.black !== undefined && object.black !== null) {
            message.black = String(object.black);
        }
        else {
            message.black = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.red !== undefined && (obj.red = message.red);
        message.black !== undefined && (obj.black = message.black);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateGame };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.red !== undefined && object.red !== null) {
            message.red = object.red;
        }
        else {
            message.red = "";
        }
        if (object.black !== undefined && object.black !== null) {
            message.black = object.black;
        }
        else {
            message.black = "";
        }
        return message;
    },
};
const baseMsgCreateGameResponse = { idValue: "" };
export const MsgCreateGameResponse = {
    encode(message, writer = Writer.create()) {
        if (message.idValue !== "") {
            writer.uint32(10).string(message.idValue);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateGameResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.idValue = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateGameResponse };
        if (object.idValue !== undefined && object.idValue !== null) {
            message.idValue = String(object.idValue);
        }
        else {
            message.idValue = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.idValue !== undefined && (obj.idValue = message.idValue);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateGameResponse };
        if (object.idValue !== undefined && object.idValue !== null) {
            message.idValue = object.idValue;
        }
        else {
            message.idValue = "";
        }
        return message;
    },
};
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    CreatePost(request) {
        const data = MsgCreatePost.encode(request).finish();
        const promise = this.rpc.request("alice.checkers.checkers.Msg", "CreatePost", data);
        return promise.then((data) => MsgCreatePostResponse.decode(new Reader(data)));
    }
    CreateGame(request) {
        const data = MsgCreateGame.encode(request).finish();
        const promise = this.rpc.request("alice.checkers.checkers.Msg", "CreateGame", data);
        return promise.then((data) => MsgCreateGameResponse.decode(new Reader(data)));
    }
}
