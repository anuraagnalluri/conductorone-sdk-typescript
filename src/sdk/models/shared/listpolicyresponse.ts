/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Policy } from "./policy";
import { Expose, Type } from "class-transformer";

/**
 * The ListPolicyResponse message.
 */
export class ListPolicyResponse extends SpeakeasyBase {
    /**
     * The list field.
     */
    @SpeakeasyMetadata({ elemType: Policy })
    @Expose({ name: "list" })
    @Type(() => Policy)
    list?: Policy[];

    /**
     * The nextPageToken field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "nextPageToken" })
    nextPageToken?: string;

    /**
     * The notificationToken field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "notificationToken" })
    notificationToken?: string;
}