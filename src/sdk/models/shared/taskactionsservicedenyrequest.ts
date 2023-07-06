/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { TaskExpandMask } from "./taskexpandmask";
import { Expose, Type } from "class-transformer";

/**
 * The TaskActionsServiceDenyRequest message.
 */
export class TaskActionsServiceDenyRequest extends SpeakeasyBase {
    /**
     *  Make sure to update the TicketExpandMask
     *
     * @remarks
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "expandMask" })
    @Type(() => TaskExpandMask)
    taskExpandMask?: TaskExpandMask;

    /**
     * The comment field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "comment" })
    comment?: string;

    /**
     * The policyStepId field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "policyStepId" })
    policyStepId?: string;
}