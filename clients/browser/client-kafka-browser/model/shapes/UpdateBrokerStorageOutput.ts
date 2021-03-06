import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateBrokerStorageOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ClusterArn: {
      shape: {
        type: "string"
      },
      locationName: "clusterArn"
    },
    ClusterOperationArn: {
      shape: {
        type: "string"
      },
      locationName: "clusterOperationArn"
    }
  }
};
