import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetInstancePortStatesInput: _Structure_ = {
  type: "structure",
  required: ["instanceName"],
  members: {
    instanceName: {
      shape: {
        type: "string"
      }
    }
  }
};
