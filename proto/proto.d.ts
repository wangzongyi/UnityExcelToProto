import * as $protobuf from "protobufjs";
export namespace proto {

    interface IGoodsInfo {
        goodsId?: (number|null);
        name?: (string|null);
        sex?: (number|null);
        levelLimit?: (number|null);
        clubVipLevel?: (number|null);
        qb_2?: (number|null);
        consumeType?: (number|null);
        timeUnit?: (number|null);
        isOnline?: (number|null);
        canBuy?: (number|null);
        canRecharge?: (number|null);
        onlineTime?: (string|null);
        offlineTime?: (string|null);
        privilegedPlatIdList?: (number[]|null);
        privilegedPlatIsOnline?: (number|null);
        privilegedPlatCanBuy?: (number|null);
        privilegedPlatCanRecharge?: (number|null);
        paymentTerms?: (number|null);
        validTime?: (string|null);
        sortPriority?: (number|null);
        suitNumber?: (number|null);
        bagSortPriority?: (number|null);
        status?: (string|null);
        rank?: (number|null);
        priceDiscount?: (number|null);
        vipDiscount?: (number|null);
        priceTable?: (proto.GoodsInfo.IPrice[]|null);
        goodsAttr?: (proto.GoodsInfo.IGoodsAttr[]|null);
        description?: (string|null);
        limitId?: (number|null);
        subSystemId?: (string|null);
    }

    class GoodsInfo implements IGoodsInfo {
        constructor(properties?: proto.IGoodsInfo);
        public goodsId: number;
        public name: string;
        public sex: number;
        public levelLimit: number;
        public clubVipLevel: number;
        public qb_2: number;
        public consumeType: number;
        public timeUnit: number;
        public isOnline: number;
        public canBuy: number;
        public canRecharge: number;
        public onlineTime: string;
        public offlineTime: string;
        public privilegedPlatIdList: number[];
        public privilegedPlatIsOnline: number;
        public privilegedPlatCanBuy: number;
        public privilegedPlatCanRecharge: number;
        public paymentTerms: number;
        public validTime: string;
        public sortPriority: number;
        public suitNumber: number;
        public bagSortPriority: number;
        public status: string;
        public rank: number;
        public priceDiscount: number;
        public vipDiscount: number;
        public priceTable: proto.GoodsInfo.IPrice[];
        public goodsAttr: proto.GoodsInfo.IGoodsAttr[];
        public description: string;
        public limitId: number;
        public subSystemId: string;
        public static create(properties?: proto.IGoodsInfo): proto.GoodsInfo;
        public static encode(message: proto.IGoodsInfo, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: proto.IGoodsInfo, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.GoodsInfo;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.GoodsInfo;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): proto.GoodsInfo;
        public static toObject(message: proto.GoodsInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    namespace GoodsInfo {

        interface IPrice {
            priceDq?: (number|null);
            priceGold?: (number|null);
            priceValue?: (number|null);
        }

        class Price implements IPrice {
            constructor(properties?: proto.GoodsInfo.IPrice);
            public priceDq: number;
            public priceGold: number;
            public priceValue: number;
            public static create(properties?: proto.GoodsInfo.IPrice): proto.GoodsInfo.Price;
            public static encode(message: proto.GoodsInfo.IPrice, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: proto.GoodsInfo.IPrice, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.GoodsInfo.Price;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.GoodsInfo.Price;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): proto.GoodsInfo.Price;
            public static toObject(message: proto.GoodsInfo.Price, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }

        interface IGoodsAttr {
            attrType?: (number|null);
            attrValue?: (number|null);
        }

        class GoodsAttr implements IGoodsAttr {
            constructor(properties?: proto.GoodsInfo.IGoodsAttr);
            public attrType: number;
            public attrValue: number;
            public static create(properties?: proto.GoodsInfo.IGoodsAttr): proto.GoodsInfo.GoodsAttr;
            public static encode(message: proto.GoodsInfo.IGoodsAttr, writer?: $protobuf.Writer): $protobuf.Writer;
            public static encodeDelimited(message: proto.GoodsInfo.IGoodsAttr, writer?: $protobuf.Writer): $protobuf.Writer;
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.GoodsInfo.GoodsAttr;
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.GoodsInfo.GoodsAttr;
            public static verify(message: { [k: string]: any }): (string|null);
            public static fromObject(object: { [k: string]: any }): proto.GoodsInfo.GoodsAttr;
            public static toObject(message: proto.GoodsInfo.GoodsAttr, options?: $protobuf.IConversionOptions): { [k: string]: any };
            public toJSON(): { [k: string]: any };
        }
    }

    interface IGoodsInfoMap {
        items?: ({ [k: string]: proto.IGoodsInfo }|null);
    }

    class GoodsInfoMap implements IGoodsInfoMap {
        constructor(properties?: proto.IGoodsInfoMap);
        public items: { [k: string]: proto.IGoodsInfo };
        public static create(properties?: proto.IGoodsInfoMap): proto.GoodsInfoMap;
        public static encode(message: proto.IGoodsInfoMap, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: proto.IGoodsInfoMap, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.GoodsInfoMap;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.GoodsInfoMap;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): proto.GoodsInfoMap;
        public static toObject(message: proto.GoodsInfoMap, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IPerson {
        id?: (number|null);
        username?: (string|null);
    }

    class Person implements IPerson {
        constructor(properties?: proto.IPerson);
        public id: number;
        public username: string;
        public static create(properties?: proto.IPerson): proto.Person;
        public static encode(message: proto.IPerson, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: proto.IPerson, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.Person;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.Person;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): proto.Person;
        public static toObject(message: proto.Person, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }

    interface IPersonMap {
        items?: ({ [k: string]: proto.IPerson }|null);
    }

    class PersonMap implements IPersonMap {
        constructor(properties?: proto.IPersonMap);
        public items: { [k: string]: proto.IPerson };
        public static create(properties?: proto.IPersonMap): proto.PersonMap;
        public static encode(message: proto.IPersonMap, writer?: $protobuf.Writer): $protobuf.Writer;
        public static encodeDelimited(message: proto.IPersonMap, writer?: $protobuf.Writer): $protobuf.Writer;
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.PersonMap;
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.PersonMap;
        public static verify(message: { [k: string]: any }): (string|null);
        public static fromObject(object: { [k: string]: any }): proto.PersonMap;
        public static toObject(message: proto.PersonMap, options?: $protobuf.IConversionOptions): { [k: string]: any };
        public toJSON(): { [k: string]: any };
    }
}
