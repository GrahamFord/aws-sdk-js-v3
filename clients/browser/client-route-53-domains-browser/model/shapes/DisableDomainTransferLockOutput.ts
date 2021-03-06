import { Structure as _Structure_ } from "@aws-sdk/types";

export const DisableDomainTransferLockOutput: _Structure_ = {
  type: "structure",
  required: ["OperationId"],
  members: {
    OperationId: {
      shape: {
        type: "string"
      }
    }
  }
};
