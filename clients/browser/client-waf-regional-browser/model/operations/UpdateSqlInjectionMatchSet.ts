import { UpdateSqlInjectionMatchSetInput } from "../shapes/UpdateSqlInjectionMatchSetInput";
import { UpdateSqlInjectionMatchSetOutput } from "../shapes/UpdateSqlInjectionMatchSetOutput";
import { WAFInternalErrorException } from "../shapes/WAFInternalErrorException";
import { WAFInvalidAccountException } from "../shapes/WAFInvalidAccountException";
import { WAFInvalidOperationException } from "../shapes/WAFInvalidOperationException";
import { WAFInvalidParameterException } from "../shapes/WAFInvalidParameterException";
import { WAFNonexistentContainerException } from "../shapes/WAFNonexistentContainerException";
import { WAFNonexistentItemException } from "../shapes/WAFNonexistentItemException";
import { WAFStaleDataException } from "../shapes/WAFStaleDataException";
import { WAFLimitsExceededException } from "../shapes/WAFLimitsExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateSqlInjectionMatchSet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateSqlInjectionMatchSet",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateSqlInjectionMatchSetInput
  },
  output: {
    shape: UpdateSqlInjectionMatchSetOutput
  },
  errors: [
    {
      shape: WAFInternalErrorException
    },
    {
      shape: WAFInvalidAccountException
    },
    {
      shape: WAFInvalidOperationException
    },
    {
      shape: WAFInvalidParameterException
    },
    {
      shape: WAFNonexistentContainerException
    },
    {
      shape: WAFNonexistentItemException
    },
    {
      shape: WAFStaleDataException
    },
    {
      shape: WAFLimitsExceededException
    }
  ]
};
