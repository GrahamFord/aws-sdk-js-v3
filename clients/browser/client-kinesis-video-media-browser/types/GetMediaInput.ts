import { _StartSelector } from "./_StartSelector";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetMediaInput shape
 */
export interface GetMediaInput {
  /**
   * <p>The Kinesis video stream name from where you want to get the media content. If you don't specify the <code>streamName</code>, you must specify the <code>streamARN</code>.</p>
   */
  StreamName?: string;

  /**
   * <p>The ARN of the stream from where you want to get the media content. If you don't specify the <code>streamARN</code>, you must specify the <code>streamName</code>.</p>
   */
  StreamARN?: string;

  /**
   * <p>Identifies the starting chunk to get from the specified stream. </p>
   */
  StartSelector: _StartSelector;

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
