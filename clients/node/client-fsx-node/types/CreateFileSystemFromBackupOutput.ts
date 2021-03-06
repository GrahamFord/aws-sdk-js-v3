import { _UnmarshalledFileSystem } from "./_FileSystem";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The response object for the <code>CreateFileSystemFromBackup</code> operation.</p>
 */
export interface CreateFileSystemFromBackupOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A description of the file system.</p>
   */
  FileSystem?: _UnmarshalledFileSystem;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
