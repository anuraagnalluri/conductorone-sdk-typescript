# RequestCatalogManagementServiceUpdateRequest

Update a request catalog object by ID.


## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `requestCatalog`                                                                                                | [shared.RequestCatalogInput](../../../sdk/models/shared/requestcataloginput.md)                                 | :heavy_minus_sign:                                                                                              | The RequestCatalog is used for managing which entitlements are requestable, and who can request them.           |
| `requestCatalogExpandMask`                                                                                      | [shared.RequestCatalogExpandMask](../../../sdk/models/shared/requestcatalogexpandmask.md)                       | :heavy_minus_sign:                                                                                              | The RequestCatalogExpandMask includes the paths in the catalog view to expand in the return value of this call. |
| `updateMask`                                                                                                    | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | N/A                                                                                                             |