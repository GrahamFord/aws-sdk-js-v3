import { Structure as _Structure_ } from "@aws-sdk/types";

export const _VirtualServiceStatus: _Structure_ = {
  type: "structure",
  required: ["status"],
  members: {
    status: {
      shape: {
        type: "string"
      }
    }
  }
};
