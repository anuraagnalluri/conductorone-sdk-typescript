/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AppEntitlementInput } from "./appentitlement";
import { AppEntitlementExpandMask } from "./appentitlementexpandmask";
import { Expose, Type } from "class-transformer";

/**
 * The UpdateAppEntitlementRequest message contains the app entitlement and the fields to be updated.
 */
export class UpdateAppEntitlementRequestInput extends SpeakeasyBase {
    /**
     * The app entitlement represents one permission in a downstream App (SAAS) that can be granted. For example, GitHub Read vs GitHub Write.
     *
     * @remarks
     *
     * This message contains a oneof named max_grant_duration. Only a single field of the following list may be set at a time:
     *   - durationUnset
     *   - durationGrant
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "entitlement" })
    @Type(() => AppEntitlementInput)
    appEntitlement?: AppEntitlementInput;

    /**
     * The app entitlement expand mask allows the user to get additional information when getting responses containing app entitlement views.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "expandMask" })
    @Type(() => AppEntitlementExpandMask)
    appEntitlementExpandMask?: AppEntitlementExpandMask;

    @SpeakeasyMetadata()
    @Expose({ name: "updateMask" })
    updateMask?: string;
}
