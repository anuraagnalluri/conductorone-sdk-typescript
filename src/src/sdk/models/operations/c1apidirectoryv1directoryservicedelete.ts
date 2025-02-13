/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class C1ApiDirectoryV1DirectoryServiceDeleteRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    directoryServiceDeleteRequest?: shared.DirectoryServiceDeleteRequest;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=app_id" })
    appId: string;
}

export class C1ApiDirectoryV1DirectoryServiceDeleteResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Empty response with a status code indicating success.
     */
    @SpeakeasyMetadata()
    directoryServiceDeleteResponse?: shared.DirectoryServiceDeleteResponse;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
