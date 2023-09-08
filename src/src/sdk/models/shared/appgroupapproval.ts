/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * The AppGroupApproval object provides the configuration for setting a group as the approvers of an approval policy step.
 */
export class AppGroupApproval extends SpeakeasyBase {
    /**
     * Configuration to allow self approval if the target user is a member of the group during this step.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "allowSelfApproval" })
    allowSelfApproval?: boolean;

    /**
     * The ID of the group specified for approval.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "appGroupId" })
    appGroupId?: string;

    /**
     * The ID of the app that conatins the group specified for approval.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "appId" })
    appId?: string;

    /**
     * Configuration to allow a fallback if the group is empty.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "fallback" })
    fallback?: boolean;

    /**
     * Configuration to specific which users to fallback to if fallback is enabled and the group is empty.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "fallbackUserIds" })
    fallbackUserIds?: string[];
}

/**
 * The AppGroupApproval object provides the configuration for setting a group as the approvers of an approval policy step.
 */
export class AppGroupApprovalInput extends SpeakeasyBase {}