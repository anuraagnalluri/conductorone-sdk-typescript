/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class C1ApiTaskV1TaskServiceCreateGrantTaskResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * The TaskServiceCreateGrantResponse returns a task view which has a task including JSONPATHs to the expanded items in the expanded array.
     */
    @SpeakeasyMetadata()
    taskServiceCreateGrantResponse?: shared.TaskServiceCreateGrantResponse;
}
