import { UpdateVpcLinkInput } from "../shapes/UpdateVpcLinkInput";
import { UpdateVpcLinkOutput } from "../shapes/UpdateVpcLinkOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { BadRequestException } from "../shapes/BadRequestException";
import { ConflictException } from "../shapes/ConflictException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateVpcLink: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateVpcLink",
  http: {
    method: "PATCH",
    requestUri: "/vpclinks/{vpclink_id}"
  },
  input: {
    shape: UpdateVpcLinkInput
  },
  output: {
    shape: UpdateVpcLinkOutput
  },
  errors: [
    {
      shape: UnauthorizedException
    },
    {
      shape: NotFoundException
    },
    {
      shape: BadRequestException
    },
    {
      shape: ConflictException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
