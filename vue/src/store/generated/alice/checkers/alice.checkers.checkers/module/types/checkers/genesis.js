/* eslint-disable */
import { Params } from "../checkers/params";
import { NextGame } from "../checkers/next_game";
import { StoredGame } from "../checkers/stored_game";
import { Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "alice.checkers.checkers";
const baseGenesisState = {};
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextGame !== undefined) {
            NextGame.encode(message.nextGame, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.storedGameList) {
            StoredGame.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.storedGameList = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.nextGame = NextGame.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.storedGameList.push(StoredGame.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGenesisState };
        message.storedGameList = [];
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromJSON(object.params);
        }
        else {
            message.params = undefined;
        }
        if (object.nextGame !== undefined && object.nextGame !== null) {
            message.nextGame = NextGame.fromJSON(object.nextGame);
        }
        else {
            message.nextGame = undefined;
        }
        if (object.storedGameList !== undefined && object.storedGameList !== null) {
            for (const e of object.storedGameList) {
                message.storedGameList.push(StoredGame.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        message.nextGame !== undefined &&
            (obj.nextGame = message.nextGame
                ? NextGame.toJSON(message.nextGame)
                : undefined);
        if (message.storedGameList) {
            obj.storedGameList = message.storedGameList.map((e) => e ? StoredGame.toJSON(e) : undefined);
        }
        else {
            obj.storedGameList = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.storedGameList = [];
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromPartial(object.params);
        }
        else {
            message.params = undefined;
        }
        if (object.nextGame !== undefined && object.nextGame !== null) {
            message.nextGame = NextGame.fromPartial(object.nextGame);
        }
        else {
            message.nextGame = undefined;
        }
        if (object.storedGameList !== undefined && object.storedGameList !== null) {
            for (const e of object.storedGameList) {
                message.storedGameList.push(StoredGame.fromPartial(e));
            }
        }
        return message;
    },
};
