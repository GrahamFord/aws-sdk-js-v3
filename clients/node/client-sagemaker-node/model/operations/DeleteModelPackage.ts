import { DeleteModelPackageInput } from "../shapes/DeleteModelPackageInput";
import { DeleteModelPackageOutput } from "../shapes/DeleteModelPackageOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteModelPackage: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteModelPackage",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteModelPackageInput
  },
  output: {
    shape: DeleteModelPackageOutput
  },
  errors: []
};
