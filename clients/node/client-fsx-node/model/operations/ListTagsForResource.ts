import { ListTagsForResourceInput } from "../shapes/ListTagsForResourceInput";
import { ListTagsForResourceOutput } from "../shapes/ListTagsForResourceOutput";
import { BadRequest } from "../shapes/BadRequest";
import { InternalServerError } from "../shapes/InternalServerError";
import { ResourceNotFound } from "../shapes/ResourceNotFound";
import { NotServiceResourceError } from "../shapes/NotServiceResourceError";
import { ResourceDoesNotSupportTagging } from "../shapes/ResourceDoesNotSupportTagging";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListTagsForResource: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListTagsForResource",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListTagsForResourceInput
  },
  output: {
    shape: ListTagsForResourceOutput
  },
  errors: [
    {
      shape: BadRequest
    },
    {
      shape: InternalServerError
    },
    {
      shape: ResourceNotFound
    },
    {
      shape: NotServiceResourceError
    },
    {
      shape: ResourceDoesNotSupportTagging
    }
  ]
};
