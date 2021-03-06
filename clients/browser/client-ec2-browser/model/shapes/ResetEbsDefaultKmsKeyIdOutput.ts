import { Structure as _Structure_ } from "@aws-sdk/types";

export const ResetEbsDefaultKmsKeyIdOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    KmsKeyId: {
      shape: {
        type: "string"
      },
      locationName: "kmsKeyId"
    }
  }
};
