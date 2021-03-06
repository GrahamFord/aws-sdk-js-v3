import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteLogGroupInput: _Structure_ = {
  type: "structure",
  required: ["logGroupName"],
  members: {
    logGroupName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
