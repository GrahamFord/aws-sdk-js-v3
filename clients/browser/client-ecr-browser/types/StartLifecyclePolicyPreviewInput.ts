import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * StartLifecyclePolicyPreviewInput shape
 */
export interface StartLifecyclePolicyPreviewInput {
  /**
   * <p>The AWS account ID associated with the registry that contains the repository. If you do not specify a registry, the default registry is assumed.</p>
   */
  registryId?: string;

  /**
   * <p>The name of the repository to be evaluated.</p>
   */
  repositoryName: string;

  /**
   * <p>The policy to be evaluated against. If you do not specify a policy, the current policy for the repository is used.</p>
   */
  lifecyclePolicyText?: string;

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
