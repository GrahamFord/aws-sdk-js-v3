import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The token provided is not valid.</p>
 */
export interface InvalidNextTokenException
  extends __ServiceException__<_InvalidNextTokenExceptionDetails> {
  name: "InvalidNextTokenException";
}

export interface _InvalidNextTokenExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
