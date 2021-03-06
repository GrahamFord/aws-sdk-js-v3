import { DeleteImageBuilderInput } from "../shapes/DeleteImageBuilderInput";
import { DeleteImageBuilderOutput } from "../shapes/DeleteImageBuilderOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationNotPermittedException } from "../shapes/OperationNotPermittedException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteImageBuilder: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteImageBuilder",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteImageBuilderInput
  },
  output: {
    shape: DeleteImageBuilderOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: OperationNotPermittedException
    },
    {
      shape: ConcurrentModificationException
    }
  ]
};
