import { DeleteObjectInput } from "../shapes/DeleteObjectInput";
import { DeleteObjectOutput } from "../shapes/DeleteObjectOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteObject: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteObject",
  http: {
    method: "DELETE",
    requestUri: "/{Bucket}/{Key+}"
  },
  input: {
    shape: DeleteObjectInput
  },
  output: {
    shape: DeleteObjectOutput
  },
  errors: []
};
