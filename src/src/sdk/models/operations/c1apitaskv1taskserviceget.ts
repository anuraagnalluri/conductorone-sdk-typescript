/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class C1ApiTaskV1TaskServiceGetRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
    id: string;
}

export class C1ApiTaskV1TaskServiceGetResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;

    /**
     * The TaskServiceGetResponse returns a task view which has a task including JSONPATHs to the expanded items in the expanded array.
     */
    @SpeakeasyMetadata()
    taskServiceGetResponse?: shared.TaskServiceGetResponse;
}
