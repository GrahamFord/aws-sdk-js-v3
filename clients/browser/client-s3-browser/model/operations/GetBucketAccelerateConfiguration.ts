import { GetBucketAccelerateConfigurationInput } from "../shapes/GetBucketAccelerateConfigurationInput";
import { GetBucketAccelerateConfigurationOutput } from "../shapes/GetBucketAccelerateConfigurationOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetBucketAccelerateConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetBucketAccelerateConfiguration",
  http: {
    method: "GET",
    requestUri: "/{Bucket}?accelerate"
  },
  input: {
    shape: GetBucketAccelerateConfigurationInput
  },
  output: {
    shape: GetBucketAccelerateConfigurationOutput
  },
  errors: []
};
