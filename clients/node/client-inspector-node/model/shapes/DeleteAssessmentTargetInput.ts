import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteAssessmentTargetInput: _Structure_ = {
  type: "structure",
  required: ["assessmentTargetArn"],
  members: {
    assessmentTargetArn: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
