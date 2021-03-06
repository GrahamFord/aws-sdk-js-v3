import { _UnmarshalledAccount } from "./_Account";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeAccountOutput shape
 */
export interface DescribeAccountOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A structure that contains information about the requested account.</p>
   */
  Account?: _UnmarshalledAccount;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
