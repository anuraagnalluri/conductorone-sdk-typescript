/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class C1ApiTaskV1TaskActionsServiceDenyRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    taskActionsServiceDenyRequest?: shared.TaskActionsServiceDenyRequest;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=task_id" })
    taskId: string;
}

export class C1ApiTaskV1TaskActionsServiceDenyResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * The TaskActionsServiceDenyResponse returns a task view with paths indicating the location of expanded items in the array.
     */
    @SpeakeasyMetadata()
    taskActionsServiceDenyResponse?: shared.TaskActionsServiceDenyResponse;
}