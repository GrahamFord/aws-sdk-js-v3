import { Structure as _Structure_ } from "@aws-sdk/types";

export const InvalidSNSDestinationException: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ConfigurationSetName: {
      shape: {
        type: "string"
      }
    },
    EventDestinationName: {
      shape: {
        type: "string"
      }
    }
  },
  exceptionType: "InvalidSNSDestinationException",
  exceptionCode: "InvalidSNSDestination"
};
