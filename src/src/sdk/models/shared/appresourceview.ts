/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AppResource } from "./appresource";
import { Expose, Type } from "class-transformer";

/**
 * The app resource view returns an app resource with paths for items in the expand mask filled in when this response is returned and a request expand mask has "*" or "app_id" or "resource_type_id".
 */
export class AppResourceView extends SpeakeasyBase {
    /**
     * The app resource message is a single resource that can have entitlements.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "appResource" })
    @Type(() => AppResource)
    appResource?: AppResource;

    /**
     * JSONPATH expression indicating the location of the App object in the array
     */
    @SpeakeasyMetadata()
    @Expose({ name: "appPath" })
    appPath?: string;

    /**
     * JSONPATH expression indicating the location of the Resource Type object in the array
     */
    @SpeakeasyMetadata()
    @Expose({ name: "resourceTypePath" })
    resourceTypePath?: string;
}