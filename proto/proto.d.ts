import * as $protobuf from "protobufjs";
/** Namespace proto. */
export namespace proto {

    /** Properties of a GoodsInfo. */
    interface IGoodsInfo {

        /** ��ƷID */
        goodsId?: (number|null);

        /** ��Ʒ�� */
        name?: (string|null);

        /**
         * �Ա�
         * �����ƣ�100
         * male��101
         * female��102
         */
        sex?: (number|null);

        /** �ȼ����� */
        levelLimit?: (number|null);

        /** ���˾��ֲ��ȼ����ƣ���ͨ��Ʒ�������û�����0�� */
        clubVipLevel?: (number|null);

        /** 2Q��ר������ͨ��Ʒ�������û�����0�� */
        qb_2?: (number|null);

        /** GoodsInfo consumeType */
        consumeType?: (number|null);

        /**
         * ��ʱ��λ
         * 0 Ĭ��(��)
         * 1 ����
         * 2 Сʱ
         * 3 ��
         * 4 ��
         * 5 ��
         */
        timeUnit?: (number|null);

        /**
         * �Ƿ��̳��ϼ���ʾ��������Ҫ�������¼�ʱ�䣩
         * 0 ��
         * 1 ��
         */
        isOnline?: (number|null);

        /**
         * �ܷ������ϼ���Ʒ��Ȼ���򣬸�����Ҫ�������¼�ʱ�䣩
         * 0 ��
         * 1 ��
         */
        canBuy?: (number|null);

        /**
         * �ɷ�����
         * 0 ��
         * 1 ��
         */
        canRecharge?: (number|null);

        /** GoodsInfo onlineTime */
        onlineTime?: (string|null);

        /**
         * �¼�ʱ��
         * (YYYY-MM-DD HH:MM:SS)
         *
         * 1.�����ʾ�ò��¼�
         * 2.�¼ܵ�����ȷ�����ϡ���Чʱ�䡱�����Ƿ��ϼܡ�
         */
        offlineTime?: (string|null);

        /** GoodsInfo privilegedPlatIdList */
        privilegedPlatIdList?: (number[]|null);

        /**
         * �Ƿ��̳��ϼ���ʾ
         * ��������Ҫ�������¼�ʱ�䣩
         * 0 ��
         * 1 ��
         */
        privilegedPlatIsOnline?: (number|null);

        /**
         * �ܷ���
         * �����ϼ���Ʒ��Ȼ���򣬸�����Ҫ�������¼�ʱ�䣩
         * 0 ��
         * 1 ��
         */
        privilegedPlatCanBuy?: (number|null);

        /**
         * �ɷ�����
         * 0 ��
         * 1 ��
         */
        privilegedPlatCanRecharge?: (number|null);

        /**
         * ֧����ʽ
         * 0 Ĭ�ϲ���
         * 1 ֻ��QB
         * 2 ֻ�޵�ȯ
         */
        paymentTerms?: (number|null);

        /**
         * ��Чʱ��
         * �����ڻ�ӱ���ɾ����
         * ��Ҫ������
         * ��ʽ���£����ں�ʱ���м��ǿո񣬲��ǻ��У�
         * 2011-10-10 00:00:00
         */
        validTime?: (string|null);

        /**
         * �������ȼ�
         *
         * 1~? ���ȼ��ݼ�
         * 0 ������ȼ�
         */
        sortPriority?: (number|null);

        /**
         * ���ױ��
         *
         * -1 ɢװ
         * 0 ��id��ͬĬ�ϳ���
         * 1~9999 ���ױ�ţ�������ͬ��id��
         */
        suitNumber?: (number|null);

        /**
         * �����������ȼ�
         *
         * 0~�������ȼ�����
         *
         * ���������нϸ��ӵľ��������߼�������ֵֻ���ڱ����еġ���������Ʒ������
         */
        bagSortPriority?: (number|null);

        /** GoodsInfo status */
        status?: (string|null);

        /** GoodsInfo rank */
        rank?: (number|null);

        /** �ۿۣ�1-100�� */
        priceDiscount?: (number|null);

        /** VIP�ۿۣ�1-100�� */
        vipDiscount?: (number|null);

        /** GoodsInfo priceTable */
        priceTable?: (proto.GoodsInfo.IPrice[]|null);

        /** GoodsInfo goodsAttr */
        goodsAttr?: (proto.GoodsInfo.IGoodsAttr[]|null);

        /** ��Ʒ���� */
        description?: (string|null);

        /**
         * �̳ǹ��������id
         * ��ϸ������
         * limitation��
         */
        limitId?: (number|null);

        /** ʹ�� ��תid */
        subSystemId?: (string|null);
    }

    /** Represents a GoodsInfo. */
    class GoodsInfo implements IGoodsInfo {

        /**
         * Constructs a new GoodsInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IGoodsInfo);

        /** ��ƷID */
        public goodsId: number;

        /** ��Ʒ�� */
        public name: string;

        /**
         * �Ա�
         * �����ƣ�100
         * male��101
         * female��102
         */
        public sex: number;

        /** �ȼ����� */
        public levelLimit: number;

        /** ���˾��ֲ��ȼ����ƣ���ͨ��Ʒ�������û�����0�� */
        public clubVipLevel: number;

        /** 2Q��ר������ͨ��Ʒ�������û�����0�� */
        public qb_2: number;

        /** GoodsInfo consumeType. */
        public consumeType: number;

        /**
         * ��ʱ��λ
         * 0 Ĭ��(��)
         * 1 ����
         * 2 Сʱ
         * 3 ��
         * 4 ��
         * 5 ��
         */
        public timeUnit: number;

        /**
         * �Ƿ��̳��ϼ���ʾ��������Ҫ�������¼�ʱ�䣩
         * 0 ��
         * 1 ��
         */
        public isOnline: number;

        /**
         * �ܷ������ϼ���Ʒ��Ȼ���򣬸�����Ҫ�������¼�ʱ�䣩
         * 0 ��
         * 1 ��
         */
        public canBuy: number;

        /**
         * �ɷ�����
         * 0 ��
         * 1 ��
         */
        public canRecharge: number;

        /** GoodsInfo onlineTime. */
        public onlineTime: string;

        /**
         * �¼�ʱ��
         * (YYYY-MM-DD HH:MM:SS)
         *
         * 1.�����ʾ�ò��¼�
         * 2.�¼ܵ�����ȷ�����ϡ���Чʱ�䡱�����Ƿ��ϼܡ�
         */
        public offlineTime: string;

        /** GoodsInfo privilegedPlatIdList. */
        public privilegedPlatIdList: number[];

        /**
         * �Ƿ��̳��ϼ���ʾ
         * ��������Ҫ�������¼�ʱ�䣩
         * 0 ��
         * 1 ��
         */
        public privilegedPlatIsOnline: number;

        /**
         * �ܷ���
         * �����ϼ���Ʒ��Ȼ���򣬸�����Ҫ�������¼�ʱ�䣩
         * 0 ��
         * 1 ��
         */
        public privilegedPlatCanBuy: number;

        /**
         * �ɷ�����
         * 0 ��
         * 1 ��
         */
        public privilegedPlatCanRecharge: number;

        /**
         * ֧����ʽ
         * 0 Ĭ�ϲ���
         * 1 ֻ��QB
         * 2 ֻ�޵�ȯ
         */
        public paymentTerms: number;

        /**
         * ��Чʱ��
         * �����ڻ�ӱ���ɾ����
         * ��Ҫ������
         * ��ʽ���£����ں�ʱ���м��ǿո񣬲��ǻ��У�
         * 2011-10-10 00:00:00
         */
        public validTime: string;

        /**
         * �������ȼ�
         *
         * 1~? ���ȼ��ݼ�
         * 0 ������ȼ�
         */
        public sortPriority: number;

        /**
         * ���ױ��
         *
         * -1 ɢװ
         * 0 ��id��ͬĬ�ϳ���
         * 1~9999 ���ױ�ţ�������ͬ��id��
         */
        public suitNumber: number;

        /**
         * �����������ȼ�
         *
         * 0~�������ȼ�����
         *
         * ���������нϸ��ӵľ��������߼�������ֵֻ���ڱ����еġ���������Ʒ������
         */
        public bagSortPriority: number;

        /** GoodsInfo status. */
        public status: string;

        /** GoodsInfo rank. */
        public rank: number;

        /** �ۿۣ�1-100�� */
        public priceDiscount: number;

        /** VIP�ۿۣ�1-100�� */
        public vipDiscount: number;

        /** GoodsInfo priceTable. */
        public priceTable: proto.GoodsInfo.IPrice[];

        /** GoodsInfo goodsAttr. */
        public goodsAttr: proto.GoodsInfo.IGoodsAttr[];

        /** ��Ʒ���� */
        public description: string;

        /**
         * �̳ǹ��������id
         * ��ϸ������
         * limitation��
         */
        public limitId: number;

        /** ʹ�� ��תid */
        public subSystemId: string;

        /**
         * Creates a new GoodsInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GoodsInfo instance
         */
        public static create(properties?: proto.IGoodsInfo): proto.GoodsInfo;

        /**
         * Encodes the specified GoodsInfo message. Does not implicitly {@link proto.GoodsInfo.verify|verify} messages.
         * @param message GoodsInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IGoodsInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GoodsInfo message, length delimited. Does not implicitly {@link proto.GoodsInfo.verify|verify} messages.
         * @param message GoodsInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IGoodsInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GoodsInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GoodsInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.GoodsInfo;

        /**
         * Decodes a GoodsInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GoodsInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.GoodsInfo;

        /**
         * Verifies a GoodsInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GoodsInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GoodsInfo
         */
        public static fromObject(object: { [k: string]: any }): proto.GoodsInfo;

        /**
         * Creates a plain object from a GoodsInfo message. Also converts values to other types if specified.
         * @param message GoodsInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.GoodsInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GoodsInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace GoodsInfo {

        /** Properties of a Price. */
        interface IPrice {

            /** ��ȯ�۸� */
            priceDq?: (number|null);

            /** ��Ҽ۸� */
            priceGold?: (number|null);

            /** ���������� */
            priceValue?: (number|null);
        }

        /** Represents a Price. */
        class Price implements IPrice {

            /**
             * Constructs a new Price.
             * @param [properties] Properties to set
             */
            constructor(properties?: proto.GoodsInfo.IPrice);

            /** ��ȯ�۸� */
            public priceDq: number;

            /** ��Ҽ۸� */
            public priceGold: number;

            /** ���������� */
            public priceValue: number;

            /**
             * Creates a new Price instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Price instance
             */
            public static create(properties?: proto.GoodsInfo.IPrice): proto.GoodsInfo.Price;

            /**
             * Encodes the specified Price message. Does not implicitly {@link proto.GoodsInfo.Price.verify|verify} messages.
             * @param message Price message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: proto.GoodsInfo.IPrice, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Price message, length delimited. Does not implicitly {@link proto.GoodsInfo.Price.verify|verify} messages.
             * @param message Price message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: proto.GoodsInfo.IPrice, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Price message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Price
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.GoodsInfo.Price;

            /**
             * Decodes a Price message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Price
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.GoodsInfo.Price;

            /**
             * Verifies a Price message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Price message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Price
             */
            public static fromObject(object: { [k: string]: any }): proto.GoodsInfo.Price;

            /**
             * Creates a plain object from a Price message. Also converts values to other types if specified.
             * @param message Price
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: proto.GoodsInfo.Price, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Price to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GoodsAttr. */
        interface IGoodsAttr {

            /**
             * ��������
             * 1 HP
             * 2 ����
             * 3 ŭ��
             * 4 ������
             * 5 ����
             */
            attrType?: (number|null);

            /**
             * ����ֵ
             * (HP
             * ͷ����150
             * ������150
             * ������100
             * ���飺50
             * )
             */
            attrValue?: (number|null);
        }

        /** Represents a GoodsAttr. */
        class GoodsAttr implements IGoodsAttr {

            /**
             * Constructs a new GoodsAttr.
             * @param [properties] Properties to set
             */
            constructor(properties?: proto.GoodsInfo.IGoodsAttr);

            /**
             * ��������
             * 1 HP
             * 2 ����
             * 3 ŭ��
             * 4 ������
             * 5 ����
             */
            public attrType: number;

            /**
             * ����ֵ
             * (HP
             * ͷ����150
             * ������150
             * ������100
             * ���飺50
             * )
             */
            public attrValue: number;

            /**
             * Creates a new GoodsAttr instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GoodsAttr instance
             */
            public static create(properties?: proto.GoodsInfo.IGoodsAttr): proto.GoodsInfo.GoodsAttr;

            /**
             * Encodes the specified GoodsAttr message. Does not implicitly {@link proto.GoodsInfo.GoodsAttr.verify|verify} messages.
             * @param message GoodsAttr message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: proto.GoodsInfo.IGoodsAttr, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GoodsAttr message, length delimited. Does not implicitly {@link proto.GoodsInfo.GoodsAttr.verify|verify} messages.
             * @param message GoodsAttr message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: proto.GoodsInfo.IGoodsAttr, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GoodsAttr message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GoodsAttr
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.GoodsInfo.GoodsAttr;

            /**
             * Decodes a GoodsAttr message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GoodsAttr
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.GoodsInfo.GoodsAttr;

            /**
             * Verifies a GoodsAttr message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GoodsAttr message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GoodsAttr
             */
            public static fromObject(object: { [k: string]: any }): proto.GoodsInfo.GoodsAttr;

            /**
             * Creates a plain object from a GoodsAttr message. Also converts values to other types if specified.
             * @param message GoodsAttr
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: proto.GoodsInfo.GoodsAttr, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GoodsAttr to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of a GoodsInfoMap. */
    interface IGoodsInfoMap {

        /** GoodsInfoMap items */
        items?: ({ [k: string]: proto.IGoodsInfo }|null);
    }

    /** Represents a GoodsInfoMap. */
    class GoodsInfoMap implements IGoodsInfoMap {

        /**
         * Constructs a new GoodsInfoMap.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IGoodsInfoMap);

        /** GoodsInfoMap items. */
        public items: { [k: string]: proto.IGoodsInfo };

        /**
         * Creates a new GoodsInfoMap instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GoodsInfoMap instance
         */
        public static create(properties?: proto.IGoodsInfoMap): proto.GoodsInfoMap;

        /**
         * Encodes the specified GoodsInfoMap message. Does not implicitly {@link proto.GoodsInfoMap.verify|verify} messages.
         * @param message GoodsInfoMap message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IGoodsInfoMap, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GoodsInfoMap message, length delimited. Does not implicitly {@link proto.GoodsInfoMap.verify|verify} messages.
         * @param message GoodsInfoMap message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IGoodsInfoMap, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GoodsInfoMap message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GoodsInfoMap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.GoodsInfoMap;

        /**
         * Decodes a GoodsInfoMap message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GoodsInfoMap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.GoodsInfoMap;

        /**
         * Verifies a GoodsInfoMap message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GoodsInfoMap message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GoodsInfoMap
         */
        public static fromObject(object: { [k: string]: any }): proto.GoodsInfoMap;

        /**
         * Creates a plain object from a GoodsInfoMap message. Also converts values to other types if specified.
         * @param message GoodsInfoMap
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.GoodsInfoMap, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GoodsInfoMap to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Person. */
    interface IPerson {

        /** Ψһ��ʶ */
        id?: (string|null);

        /** ���� */
        username?: (string|null);
    }

    /** Represents a Person. */
    class Person implements IPerson {

        /**
         * Constructs a new Person.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IPerson);

        /** Ψһ��ʶ */
        public id: string;

        /** ���� */
        public username: string;

        /**
         * Creates a new Person instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Person instance
         */
        public static create(properties?: proto.IPerson): proto.Person;

        /**
         * Encodes the specified Person message. Does not implicitly {@link proto.Person.verify|verify} messages.
         * @param message Person message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IPerson, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Person message, length delimited. Does not implicitly {@link proto.Person.verify|verify} messages.
         * @param message Person message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IPerson, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Person message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Person
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.Person;

        /**
         * Decodes a Person message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Person
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.Person;

        /**
         * Verifies a Person message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Person message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Person
         */
        public static fromObject(object: { [k: string]: any }): proto.Person;

        /**
         * Creates a plain object from a Person message. Also converts values to other types if specified.
         * @param message Person
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.Person, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Person to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PersonMap. */
    interface IPersonMap {

        /** PersonMap items */
        items?: ({ [k: string]: proto.IPerson }|null);
    }

    /** Represents a PersonMap. */
    class PersonMap implements IPersonMap {

        /**
         * Constructs a new PersonMap.
         * @param [properties] Properties to set
         */
        constructor(properties?: proto.IPersonMap);

        /** PersonMap items. */
        public items: { [k: string]: proto.IPerson };

        /**
         * Creates a new PersonMap instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PersonMap instance
         */
        public static create(properties?: proto.IPersonMap): proto.PersonMap;

        /**
         * Encodes the specified PersonMap message. Does not implicitly {@link proto.PersonMap.verify|verify} messages.
         * @param message PersonMap message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: proto.IPersonMap, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PersonMap message, length delimited. Does not implicitly {@link proto.PersonMap.verify|verify} messages.
         * @param message PersonMap message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: proto.IPersonMap, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PersonMap message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PersonMap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): proto.PersonMap;

        /**
         * Decodes a PersonMap message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PersonMap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): proto.PersonMap;

        /**
         * Verifies a PersonMap message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PersonMap message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PersonMap
         */
        public static fromObject(object: { [k: string]: any }): proto.PersonMap;

        /**
         * Creates a plain object from a PersonMap message. Also converts values to other types if specified.
         * @param message PersonMap
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: proto.PersonMap, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PersonMap to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
