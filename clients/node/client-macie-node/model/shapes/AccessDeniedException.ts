import { Structure as _Structure_ } from "@aws-sdk/types";

export const AccessDeniedException: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    message: {
      shape: {
        type: "string"
      }
    },
    resourceType: {
      shape: {
        type: "string"
      }
    }
  },
  exceptionType: "AccessDeniedException"
};
