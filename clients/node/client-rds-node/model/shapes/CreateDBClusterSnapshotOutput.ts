import { _DBClusterSnapshot } from "./_DBClusterSnapshot";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateDBClusterSnapshotOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DBClusterSnapshot: {
      shape: _DBClusterSnapshot
    }
  }
};
