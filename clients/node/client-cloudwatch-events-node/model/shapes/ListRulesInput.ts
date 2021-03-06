import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListRulesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NamePrefix: {
      shape: {
        type: "string",
        min: 1
      }
    },
    EventBusName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Limit: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
