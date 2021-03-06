import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Message: _Structure_ = {
  type: "structure",
  required: ["messageId", "inputName", "payload"],
  members: {
    messageId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    inputName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    payload: {
      shape: {
        type: "blob"
      }
    }
  }
};
