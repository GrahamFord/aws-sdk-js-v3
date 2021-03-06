import { _OpsItemDataValue } from "./_OpsItemDataValue";
import { _OpsItemNotification } from "./_OpsItemNotification";
import { _RelatedOpsItem } from "./_RelatedOpsItem";
import { _Tag } from "./_Tag";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateOpsItemInput shape
 */
export interface CreateOpsItemInput {
  /**
   * <p>Information about the OpsItem. </p>
   */
  Description: string;

  /**
   * <p>Operational data is custom data that provides useful reference details about the OpsItem. For example, you can specify log files, error strings, license keys, troubleshooting tips, or other relevant data. You enter operational data as key-value pairs. The key has a maximum length of 128 characters. The value has a maximum size of 20 KB.</p> <important> <p>Operational data keys <i>can't</i> begin with the following: amazon, aws, amzn, ssm, /amazon, /aws, /amzn, /ssm.</p> </important> <p>You can choose to make the data searchable by other users in the account or you can restrict search access. Searchable data means that all users with access to the OpsItem Overview page (as provided by the <a>DescribeOpsItems</a> API action) can view and search on the specified data. Operational data that is not searchable is only viewable by users who have access to the OpsItem (as provided by the <a>GetOpsItem</a> API action).</p> <p>Use the <code>/aws/resources</code> key in OperationalData to specify a related resource in the request. Use the <code>/aws/automations</code> key in OperationalData to associate an Automation runbook with the OpsItem. To view AWS CLI example commands that use these keys, see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-creating-OpsItems.html#OpsCenter-manually-create-OpsItems">Creating OpsItems Manually</a> in the <i>AWS Systems Manager User Guide</i>.</p>
   */
  OperationalData?:
    | { [key: string]: _OpsItemDataValue }
    | Iterable<[string, _OpsItemDataValue]>;

  /**
   * <p>The Amazon Resource Name (ARN) of an SNS topic where notifications are sent when this OpsItem is edited or changed.</p>
   */
  Notifications?: Array<_OpsItemNotification> | Iterable<_OpsItemNotification>;

  /**
   * <p>The importance of this OpsItem in relation to other OpsItems in the system.</p>
   */
  Priority?: number;

  /**
   * <p>One or more OpsItems that share something in common with the current OpsItems. For example, related OpsItems can include OpsItems with similar error messages, impacted resources, or statuses for the impacted resource.</p>
   */
  RelatedOpsItems?: Array<_RelatedOpsItem> | Iterable<_RelatedOpsItem>;

  /**
   * <p>The origin of the OpsItem, such as Amazon EC2 or AWS Systems Manager.</p>
   */
  Source: string;

  /**
   * <p>A short heading that describes the nature of the OpsItem and the impacted resource.</p>
   */
  Title: string;

  /**
   * <p>Optional metadata that you assign to a resource. You can restrict access to OpsItems by using an inline IAM policy that specifies tags. For more information, see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-getting-started.html#OpsCenter-getting-started-user-permissions">Getting Started with OpsCenter</a> in the <i>AWS Systems Manager User Guide</i>.</p> <p>Tags use a key-value pair. For example:</p> <p> <code>Key=Department,Value=Finance</code> </p> <note> <p>To add tags to an existing OpsItem, use the <a>AddTagsToResource</a> action.</p> </note>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;

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
