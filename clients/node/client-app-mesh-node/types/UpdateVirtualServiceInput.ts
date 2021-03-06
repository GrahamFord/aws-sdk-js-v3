import { _VirtualServiceSpec } from "./_VirtualServiceSpec";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateVirtualServiceInput shape
 */
export interface UpdateVirtualServiceInput {
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the
   * request. Up to 36 letters, numbers, hyphens, and underscores are allowed.</p>
   */
  clientToken?: string;

  /**
   * <p>The name of the service mesh that the virtual service resides in.</p>
   */
  meshName: string;

  /**
   * <p>The new virtual service specification to apply. This overwrites the existing
   *          data.</p>
   */
  spec: _VirtualServiceSpec;

  /**
   * <p>The name of the virtual service to update.</p>
   */
  virtualServiceName: string;

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
