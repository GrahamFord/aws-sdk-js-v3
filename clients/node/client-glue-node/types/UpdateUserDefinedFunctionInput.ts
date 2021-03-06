import { _UserDefinedFunctionInput } from "./_UserDefinedFunctionInput";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateUserDefinedFunctionInput shape
 */
export interface UpdateUserDefinedFunctionInput {
  /**
   * <p>The ID of the Data Catalog where the function to be updated is located. If none is supplied, the AWS account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The name of the catalog database where the function to be updated is located.</p>
   */
  DatabaseName: string;

  /**
   * <p>The name of the function.</p>
   */
  FunctionName: string;

  /**
   * <p>A <code>FunctionInput</code> object that re-defines the function in the Data Catalog.</p>
   */
  FunctionInput: _UserDefinedFunctionInput;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
