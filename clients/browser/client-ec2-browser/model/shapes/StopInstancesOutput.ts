import { _InstanceStateChangeList } from "./_InstanceStateChangeList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const StopInstancesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    StoppingInstances: {
      shape: _InstanceStateChangeList,
      locationName: "instancesSet"
    }
  }
};
