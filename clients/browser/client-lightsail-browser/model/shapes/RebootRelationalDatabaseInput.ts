import { Structure as _Structure_ } from "@aws-sdk/types";

export const RebootRelationalDatabaseInput: _Structure_ = {
  type: "structure",
  required: ["relationalDatabaseName"],
  members: {
    relationalDatabaseName: {
      shape: {
        type: "string"
      }
    }
  }
};
