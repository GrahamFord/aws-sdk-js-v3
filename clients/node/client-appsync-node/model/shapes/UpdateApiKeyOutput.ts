import { _ApiKey } from "./_ApiKey";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateApiKeyOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    apiKey: {
      shape: _ApiKey
    }
  }
};
