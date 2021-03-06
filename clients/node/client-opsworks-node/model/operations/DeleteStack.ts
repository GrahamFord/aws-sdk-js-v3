import { DeleteStackInput } from "../shapes/DeleteStackInput";
import { DeleteStackOutput } from "../shapes/DeleteStackOutput";
import { ValidationException } from "../shapes/ValidationException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteStack: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteStack",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteStackInput
  },
  output: {
    shape: DeleteStackOutput
  },
  errors: [
    {
      shape: ValidationException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
