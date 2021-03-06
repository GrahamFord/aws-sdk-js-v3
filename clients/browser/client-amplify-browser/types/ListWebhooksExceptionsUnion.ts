import { BadRequestException } from "./BadRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalFailureException } from "./InternalFailureException";
import { LimitExceededException } from "./LimitExceededException";
export type ListWebhooksExceptionsUnion =
  | BadRequestException
  | UnauthorizedException
  | InternalFailureException
  | LimitExceededException;
