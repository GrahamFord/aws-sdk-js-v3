import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreatePatchBaselineOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    BaselineId: {
      shape: {
        type: "string",
        min: 20
      }
    }
  }
};
