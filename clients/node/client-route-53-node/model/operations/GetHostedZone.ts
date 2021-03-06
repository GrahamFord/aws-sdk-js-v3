import { GetHostedZoneInput } from "../shapes/GetHostedZoneInput";
import { GetHostedZoneOutput } from "../shapes/GetHostedZoneOutput";
import { NoSuchHostedZone } from "../shapes/NoSuchHostedZone";
import { InvalidInput } from "../shapes/InvalidInput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetHostedZone: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetHostedZone",
  http: {
    method: "GET",
    requestUri: "/2013-04-01/hostedzone/{Id}"
  },
  input: {
    shape: GetHostedZoneInput
  },
  output: {
    shape: GetHostedZoneOutput
  },
  errors: [
    {
      shape: NoSuchHostedZone
    },
    {
      shape: InvalidInput
    }
  ]
};
