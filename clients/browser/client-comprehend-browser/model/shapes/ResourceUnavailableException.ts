import { Structure as _Structure_ } from "@aws-sdk/types";

export const ResourceUnavailableException: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Message: {
      shape: {
        type: "string",
        min: 1
      }
    }
  },
  exceptionType: "ResourceUnavailableException"
};
