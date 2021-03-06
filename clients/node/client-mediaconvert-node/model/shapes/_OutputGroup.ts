import { _OutputGroupSettings } from "./_OutputGroupSettings";
import { ___listOfOutput } from "./___listOfOutput";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _OutputGroup: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CustomName: {
      shape: {
        type: "string"
      },
      locationName: "customName"
    },
    Name: {
      shape: {
        type: "string"
      },
      locationName: "name"
    },
    OutputGroupSettings: {
      shape: _OutputGroupSettings,
      locationName: "outputGroupSettings"
    },
    Outputs: {
      shape: ___listOfOutput,
      locationName: "outputs"
    }
  }
};
