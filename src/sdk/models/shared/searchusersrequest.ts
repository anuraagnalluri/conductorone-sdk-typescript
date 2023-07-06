/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { UserExpandMask } from "./userexpandmask";
import { UserRef } from "./userref";
import { Expose, Type } from "class-transformer";

export enum SearchUsersRequestUserStatuses {
    Unknown = "UNKNOWN",
    Enabled = "ENABLED",
    Disabled = "DISABLED",
    Deleted = "DELETED",
}

/**
 * The SearchUsersRequest message.
 */
export class SearchUsersRequest extends SpeakeasyBase {
    /**
     * The UserExpandMask message.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "expandMask" })
    @Type(() => UserExpandMask)
    userExpandMask?: UserExpandMask;

    /**
     * The excludeIds field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "excludeIds" })
    excludeIds?: string[];

    /**
     * The ids field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "ids" })
    ids?: string[];

    /**
     * The pageSize field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "pageSize" })
    pageSize?: number;

    /**
     * The pageToken field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "pageToken" })
    pageToken?: string;

    /**
     * The query field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "query" })
    query?: string;

    /**
     * The refs field.
     */
    @SpeakeasyMetadata({ elemType: UserRef })
    @Expose({ name: "refs" })
    @Type(() => UserRef)
    refs?: UserRef[];

    /**
     * The roleIds field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "roleIds" })
    roleIds?: string[];

    /**
     * The userStatuses field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "userStatuses" })
    userStatuses?: SearchUsersRequestUserStatuses[];
}