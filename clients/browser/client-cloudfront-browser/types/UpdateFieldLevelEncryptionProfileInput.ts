import { _FieldLevelEncryptionProfileConfig } from "./_FieldLevelEncryptionProfileConfig";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateFieldLevelEncryptionProfileInput shape
 */
export interface UpdateFieldLevelEncryptionProfileInput {
  /**
   * <p>Request to update a field-level encryption profile. </p>
   */
  FieldLevelEncryptionProfileConfig: _FieldLevelEncryptionProfileConfig;

  /**
   * <p>The ID of the field-level encryption profile request. </p>
   */
  Id: string;

  /**
   * <p>The value of the <code>ETag</code> header that you received when retrieving the profile identity to update. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   */
  IfMatch?: string;

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
