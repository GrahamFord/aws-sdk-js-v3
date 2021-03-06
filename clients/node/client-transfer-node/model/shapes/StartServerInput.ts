import { Structure as _Structure_ } from "@aws-sdk/types";

export const StartServerInput: _Structure_ = {
  type: "structure",
  required: ["ServerId"],
  members: {
    ServerId: {
      shape: {
        type: "string"
      }
    }
  }
};
