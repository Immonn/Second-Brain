import { Types, Schema } from "mongoose";
export declare const userModel: import("mongoose").Model<{
    username: string;
    password: string;
}, {}, {}, {
    id: string;
}, import("mongoose").Document<unknown, {}, {
    username: string;
    password: string;
}, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<{
    username: string;
    password: string;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, Schema<any, import("mongoose").Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    username: string;
    password: string;
}, import("mongoose").Document<unknown, {}, {
    username: string;
    password: string;
}, {
    id: string;
}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<{
    username: string;
    password: string;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    [path: string]: import("mongoose").SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: import("mongoose").SchemaDefinitionProperty<any, any, import("mongoose").Document<unknown, {}, {
        username: string;
        password: string;
    }, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<{
        username: string;
        password: string;
    } & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    username: string;
    password: string;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>, {
    username: string;
    password: string;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
export declare const contentModel: import("mongoose").Model<{
    tags: Types.ObjectId[];
    userId: Types.ObjectId[];
    type?: string | null;
    link?: string | null;
    title?: string | null;
}, {}, {}, {
    id: string;
}, import("mongoose").Document<unknown, {}, {
    tags: Types.ObjectId[];
    userId: Types.ObjectId[];
    type?: string | null;
    link?: string | null;
    title?: string | null;
}, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<{
    tags: Types.ObjectId[];
    userId: Types.ObjectId[];
    type?: string | null;
    link?: string | null;
    title?: string | null;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, Schema<any, import("mongoose").Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    tags: Types.ObjectId[];
    userId: Types.ObjectId[];
    type?: string | null;
    link?: string | null;
    title?: string | null;
}, import("mongoose").Document<unknown, {}, {
    tags: Types.ObjectId[];
    userId: Types.ObjectId[];
    type?: string | null;
    link?: string | null;
    title?: string | null;
}, {
    id: string;
}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<{
    tags: Types.ObjectId[];
    userId: Types.ObjectId[];
    type?: string | null;
    link?: string | null;
    title?: string | null;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    [path: string]: import("mongoose").SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: import("mongoose").SchemaDefinitionProperty<any, any, import("mongoose").Document<unknown, {}, {
        tags: Types.ObjectId[];
        userId: Types.ObjectId[];
        type?: string | null;
        link?: string | null;
        title?: string | null;
    }, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<{
        tags: Types.ObjectId[];
        userId: Types.ObjectId[];
        type?: string | null;
        link?: string | null;
        title?: string | null;
    } & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    tags: Types.ObjectId[];
    userId: Types.ObjectId[];
    type?: string | null;
    link?: string | null;
    title?: string | null;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>, {
    tags: Types.ObjectId[];
    userId: Types.ObjectId[];
    type?: string | null;
    link?: string | null;
    title?: string | null;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
export declare const linkModel: import("mongoose").Model<{
    userId: Types.ObjectId[];
    hash?: string | null;
}, {}, {}, {
    id: string;
}, import("mongoose").Document<unknown, {}, {
    userId: Types.ObjectId[];
    hash?: string | null;
}, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<{
    userId: Types.ObjectId[];
    hash?: string | null;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, Schema<any, import("mongoose").Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    userId: Types.ObjectId[];
    hash?: string | null;
}, import("mongoose").Document<unknown, {}, {
    userId: Types.ObjectId[];
    hash?: string | null;
}, {
    id: string;
}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<{
    userId: Types.ObjectId[];
    hash?: string | null;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    [path: string]: import("mongoose").SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: import("mongoose").SchemaDefinitionProperty<any, any, import("mongoose").Document<unknown, {}, {
        userId: Types.ObjectId[];
        hash?: string | null;
    }, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<{
        userId: Types.ObjectId[];
        hash?: string | null;
    } & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    userId: Types.ObjectId[];
    hash?: string | null;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>, {
    userId: Types.ObjectId[];
    hash?: string | null;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=db.d.ts.map