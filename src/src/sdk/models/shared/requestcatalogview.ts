/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { RequestCatalog } from "./requestcatalog";
import { Expose, Type } from "class-transformer";

/**
 * The request catalog view contains the serialized request catalog and paths to objects referenced by the request catalog.
 */
export class RequestCatalogView extends SpeakeasyBase {
    /**
     * The RequestCatalog is used for managing which entitlements are requestable, and who can request them.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "requestCatalog" })
    @Type(() => RequestCatalog)
    requestCatalog?: RequestCatalog;

    /**
     * JSONPATH expression indicating the location of the access entitlement objects, that the request catalog allows users to request, in the array.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "accessEntitlementsPath" })
    accessEntitlementsPath?: string;

    /**
     * JSONPATH expression indicating the location of the App object in the array.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "appPaths" })
    appPaths?: string;

    /**
     * JSONPATH expression indicating the location of the User object, that created the request catalog, in the array.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "createdByUserPath" })
    createdByUserPath?: string;
}