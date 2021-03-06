import { RenderUiTemplateInput } from "../shapes/RenderUiTemplateInput";
import { RenderUiTemplateOutput } from "../shapes/RenderUiTemplateOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const RenderUiTemplate: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RenderUiTemplate",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RenderUiTemplateInput
  },
  output: {
    shape: RenderUiTemplateOutput
  },
  errors: []
};
