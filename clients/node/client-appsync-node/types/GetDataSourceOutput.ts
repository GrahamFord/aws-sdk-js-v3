import { _UnmarshalledDataSource } from "./_DataSource";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetDataSourceOutput shape
 */
export interface GetDataSourceOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The <code>DataSource</code> object.</p>
   */
  dataSource?: _UnmarshalledDataSource;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
