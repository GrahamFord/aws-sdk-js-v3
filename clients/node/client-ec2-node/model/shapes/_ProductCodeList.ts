import { List as _List_ } from "@aws-sdk/types";
import { _ProductCode } from "./_ProductCode";

export const _ProductCodeList: _List_ = {
  type: "list",
  member: {
    shape: _ProductCode,
    locationName: "item"
  }
};
