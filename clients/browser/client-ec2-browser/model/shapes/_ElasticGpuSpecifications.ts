import { List as _List_ } from "@aws-sdk/types";
import { _ElasticGpuSpecification } from "./_ElasticGpuSpecification";

export const _ElasticGpuSpecifications: _List_ = {
  type: "list",
  member: {
    shape: _ElasticGpuSpecification,
    locationName: "item"
  }
};
