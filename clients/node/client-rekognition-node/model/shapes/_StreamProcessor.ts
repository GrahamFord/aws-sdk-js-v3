import { Structure as _Structure_ } from "@aws-sdk/types";

export const _StreamProcessor: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    }
  }
};
