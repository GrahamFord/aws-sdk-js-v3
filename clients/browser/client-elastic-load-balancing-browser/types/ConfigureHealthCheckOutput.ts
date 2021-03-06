import { _UnmarshalledHealthCheck } from "./_HealthCheck";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the output of ConfigureHealthCheck.</p>
 */
export interface ConfigureHealthCheckOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The updated health check.</p>
   */
  HealthCheck?: _UnmarshalledHealthCheck;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
