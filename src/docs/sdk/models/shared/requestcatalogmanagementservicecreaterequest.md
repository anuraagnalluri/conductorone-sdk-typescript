# RequestCatalogManagementServiceCreateRequest

Create a request catalog.


## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `requestCatalogExpandMask`                                                                                                  | [shared.RequestCatalogExpandMask](../../../sdk/models/shared/requestcatalogexpandmask.md)                                   | :heavy_minus_sign:                                                                                                          | The RequestCatalogExpandMask includes the paths in the catalog view to expand in the return value of this call.             |
| `description`                                                                                                               | *string*                                                                                                                    | :heavy_minus_sign:                                                                                                          | The description of the new request catalog.                                                                                 |
| `displayName`                                                                                                               | *string*                                                                                                                    | :heavy_minus_sign:                                                                                                          | The display name of the new request catalog.                                                                                |
| `published`                                                                                                                 | *boolean*                                                                                                                   | :heavy_minus_sign:                                                                                                          | Whether or not the new catalog should be created as published.                                                              |
| `requestBundle`                                                                                                             | *boolean*                                                                                                                   | :heavy_minus_sign:                                                                                                          | Whether all the entitlements in the catalog can be requests at once. Your tenant must have the bundles feature to use this. |
| `visibleToEveryone`                                                                                                         | *boolean*                                                                                                                   | :heavy_minus_sign:                                                                                                          | Whether or not the new catalog is visible to everyone by default.                                                           |