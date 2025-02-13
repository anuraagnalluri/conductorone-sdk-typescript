# appEntitlementUserBinding

### Available Operations

* [listAppUsersForIdentityWithGrant](#listappusersforidentitywithgrant) - List App Users For Identity With Grant

## listAppUsersForIdentityWithGrant

Returns a list of app users for the identity in the app. If that app user also has a grant to the entitlement from the request, data about the grant is also returned. It will always return ALL app users for this identity, but only SOME may have grant data.

### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import {
  C1ApiAppV1AppEntitlementUserBindingServiceListAppUsersForIdentityWithGrantResponse,
} from "conductorone-sdk-typescript/dist/sdk/models/operations";

const sdk = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "",
    oauth: "",
  },
});

sdk.appEntitlementUserBinding.listAppUsersForIdentityWithGrant({
  appEntitlementId: "quis",
  appId: "veritatis",
  identityUserId: "deserunt",
}).then((res: C1ApiAppV1AppEntitlementUserBindingServiceListAppUsersForIdentityWithGrantResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                                                                    | Type                                                                                                                                                                                                         | Required                                                                                                                                                                                                     | Description                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                                    | [operations.C1ApiAppV1AppEntitlementUserBindingServiceListAppUsersForIdentityWithGrantRequest](../../models/operations/c1apiappv1appentitlementuserbindingservicelistappusersforidentitywithgrantrequest.md) | :heavy_check_mark:                                                                                                                                                                                           | The request object to use for the request.                                                                                                                                                                   |
| `config`                                                                                                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                           | Available config options for making requests.                                                                                                                                                                |


### Response

**Promise<[operations.C1ApiAppV1AppEntitlementUserBindingServiceListAppUsersForIdentityWithGrantResponse](../../models/operations/c1apiappv1appentitlementuserbindingservicelistappusersforidentitywithgrantresponse.md)>**

