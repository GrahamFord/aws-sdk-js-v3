import { DirectConnectServerException } from "./DirectConnectServerException";
import { DirectConnectClientException } from "./DirectConnectClientException";
export type AssociateHostedConnectionExceptionsUnion =
  | DirectConnectServerException
  | DirectConnectClientException;
