/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class C1ApiDirectoryV1DirectoryServiceGetRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=app_id" })
    appId: string;
}

export class C1ApiDirectoryV1DirectoryServiceGetResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * The Directory Service Get Response returns a directory view with a directory and JSONPATHs indicating the
     *
     * @remarks
     *  location in the expanded array that items are expanded as indicated by the expand mask in the request.
     */
    @SpeakeasyMetadata()
    directoryServiceGetResponse?: shared.DirectoryServiceGetResponse;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
