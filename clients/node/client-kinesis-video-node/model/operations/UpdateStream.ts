import { UpdateStreamInput } from "../shapes/UpdateStreamInput";
import { UpdateStreamOutput } from "../shapes/UpdateStreamOutput";
import { ClientLimitExceededException } from "../shapes/ClientLimitExceededException";
import { InvalidArgumentException } from "../shapes/InvalidArgumentException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { VersionMismatchException } from "../shapes/VersionMismatchException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateStream: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateStream",
  http: {
    method: "POST",
    requestUri: "/updateStream"
  },
  input: {
    shape: UpdateStreamInput
  },
  output: {
    shape: UpdateStreamOutput
  },
  errors: [
    {
      shape: ClientLimitExceededException
    },
    {
      shape: InvalidArgumentException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ResourceInUseException
    },
    {
      shape: NotAuthorizedException
    },
    {
      shape: VersionMismatchException
    }
  ]
};
