import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeLoggingStatusInput: _Structure_ = {
  type: "structure",
  required: ["ClusterIdentifier"],
  members: {
    ClusterIdentifier: {
      shape: {
        type: "string"
      }
    }
  }
};
