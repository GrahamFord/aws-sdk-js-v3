import { _FpgaImageAttribute } from "./_FpgaImageAttribute";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifyFpgaImageAttributeOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FpgaImageAttribute: {
      shape: _FpgaImageAttribute,
      locationName: "fpgaImageAttribute"
    }
  }
};
