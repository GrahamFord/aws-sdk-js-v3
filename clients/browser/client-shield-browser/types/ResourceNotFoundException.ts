import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Exception indicating the specified resource does not exist.</p>
 */
export interface ResourceNotFoundException
  extends __ServiceException__<_ResourceNotFoundExceptionDetails> {
  name: "ResourceNotFoundException";
}

export interface _ResourceNotFoundExceptionDetails {
  /**
   * _errorMessage shape
   */
  message?: string;
}
