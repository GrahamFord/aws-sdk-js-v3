import { ListTablesInput } from "../shapes/ListTablesInput";
import { ListTablesOutput } from "../shapes/ListTablesOutput";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListTables: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListTables",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListTablesInput
  },
  output: {
    shape: ListTablesOutput
  },
  errors: [
    {
      shape: InternalServerError
    }
  ]
};
