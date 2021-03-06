import { _RouteFilterPrefix } from "./_RouteFilterPrefix";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * AcceptDirectConnectGatewayAssociationProposalInput shape
 */
export interface AcceptDirectConnectGatewayAssociationProposalInput {
  /**
   * <p>The ID of the Direct Connect gateway.</p>
   */
  directConnectGatewayId: string;

  /**
   * <p>The ID of the request proposal.</p>
   */
  proposalId: string;

  /**
   * <p>The ID of the AWS account that owns the virtual private gateway or transit gateway.</p>
   */
  associatedGatewayOwnerAccount: string;

  /**
   * <p>Overrides the Amazon VPC prefixes advertised to the Direct Connect gateway.</p> <p>For information about how to set the prefixes, see <a href="https://docs.aws.amazon.com/directconnect/latest/UserGuide/multi-account-associate-vgw.html#allowed-prefixes">Allowed Prefixes</a> in the <i>AWS Direct Connect User Guide</i>.</p>
   */
  overrideAllowedPrefixesToDirectConnectGateway?:
    | Array<_RouteFilterPrefix>
    | Iterable<_RouteFilterPrefix>;

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
