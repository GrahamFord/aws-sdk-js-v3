import { BadRequestException } from "./BadRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalFailureException } from "./InternalFailureException";
import { NotFoundException } from "./NotFoundException";
import { LimitExceededException } from "./LimitExceededException";
export type GetJobExceptionsUnion =
  | BadRequestException
  | UnauthorizedException
  | InternalFailureException
  | NotFoundException
  | LimitExceededException;
