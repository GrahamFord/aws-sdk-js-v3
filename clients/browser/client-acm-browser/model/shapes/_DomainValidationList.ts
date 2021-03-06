import { List as _List_ } from "@aws-sdk/types";
import { _DomainValidation } from "./_DomainValidation";

export const _DomainValidationList: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _DomainValidation
  }
};
