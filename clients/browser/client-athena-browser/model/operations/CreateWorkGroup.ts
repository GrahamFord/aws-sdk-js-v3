import { CreateWorkGroupInput } from "../shapes/CreateWorkGroupInput";
import { CreateWorkGroupOutput } from "../shapes/CreateWorkGroupOutput";
import { InternalServerException } from "../shapes/InternalServerException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateWorkGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateWorkGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateWorkGroupInput
  },
  output: {
    shape: CreateWorkGroupOutput
  },
  errors: [
    {
      shape: InternalServerException
    },
    {
      shape: InvalidRequestException
    }
  ]
};
