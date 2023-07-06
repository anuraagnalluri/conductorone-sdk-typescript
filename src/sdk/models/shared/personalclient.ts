/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";

/**
 * The PersonalClient message.
 */
export class PersonalClient extends SpeakeasyBase {
    /**
     * The allowSourceCidr field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "allowSourceCidr" })
    allowSourceCidr?: string[];

    /**
     * The clientId field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "clientId" })
    clientId?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "createdAt" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    createdAt?: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "deletedAt" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    deletedAt?: Date;

    /**
     * The displayName field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "displayName" })
    displayName?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "expiresTime" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    expiresTime?: Date;

    /**
     * The id field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "lastUsedAt" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    lastUsedAt?: Date;

    /**
     *  scoped_roles provides a list of IAM Roles
     *
     * @remarks
     *  that this OAuth2 Client's API permissions
     *  are reduced to. The permissions granted to OAuth2 Client
     *  are AND'ed against the owning User's own permissions.
     *
     */
    @SpeakeasyMetadata()
    @Expose({ name: "scopedRoles" })
    scopedRoles?: string[];

    @SpeakeasyMetadata()
    @Expose({ name: "updatedAt" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    updatedAt?: Date;

    /**
     * The userId field.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "userId" })
    userId?: string;
}