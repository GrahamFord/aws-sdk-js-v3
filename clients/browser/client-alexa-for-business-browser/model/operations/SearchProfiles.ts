import { SearchProfilesInput } from "../shapes/SearchProfilesInput";
import { SearchProfilesOutput } from "../shapes/SearchProfilesOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const SearchProfiles: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SearchProfiles",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SearchProfilesInput
  },
  output: {
    shape: SearchProfilesOutput
  },
  errors: []
};
