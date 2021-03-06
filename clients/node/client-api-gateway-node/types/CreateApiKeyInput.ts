import { _StageKey } from "./_StageKey";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Request to create an <a>ApiKey</a> resource.</p>
 */
export interface CreateApiKeyInput {
  /**
   * <p>The name of the <a>ApiKey</a>.</p>
   */
  name?: string;

  /**
   * <p>The description of the <a>ApiKey</a>.</p>
   */
  description?: string;

  /**
   * <p>Specifies whether the <a>ApiKey</a> can be used by callers.</p>
   */
  enabled?: boolean;

  /**
   * <p>Specifies whether (<code>true</code>) or not (<code>false</code>) the key identifier is distinct from the created API key value.</p>
   */
  generateDistinctId?: boolean;

  /**
   * <p>Specifies a value of the API key.</p>
   */
  value?: string;

  /**
   * <p>DEPRECATED FOR USAGE PLANS - Specifies stages associated with the API key.</p>
   */
  stageKeys?: Array<_StageKey> | Iterable<_StageKey>;

  /**
   * <p>An AWS Marketplace customer identifier , when integrating with the AWS SaaS Marketplace.</p>
   */
  customerId?: string;

  /**
   * <p>The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with <code>aws:</code>. The tag value can be up to 256 characters.</p>
   */
  tags?: { [key: string]: string } | Iterable<[string, string]>;

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
