import { _PipelineDeclaration } from "./_PipelineDeclaration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdatePipelineOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    pipeline: {
      shape: _PipelineDeclaration
    }
  }
};
