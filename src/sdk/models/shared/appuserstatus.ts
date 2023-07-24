/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * The status field.
 */
export enum AppUserStatusStatus {
    StatusUnspecified = "STATUS_UNSPECIFIED",
    StatusEnabled = "STATUS_ENABLED",
    StatusDisabled = "STATUS_DISABLED",
    StatusDeleted = "STATUS_DELETED",
}

/**
 * The AppUserStatus message.
 */
export class AppUserStatus extends SpeakeasyBase {
    /**
     * The details field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "details" })
    details?: string;

    /**
     * The status field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status?: AppUserStatusStatus;
}