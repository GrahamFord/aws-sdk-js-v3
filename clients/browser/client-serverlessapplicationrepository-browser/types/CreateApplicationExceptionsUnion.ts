import { TooManyRequestsException } from "./TooManyRequestsException";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ConflictException } from "./ConflictException";
import { ForbiddenException } from "./ForbiddenException";
export type CreateApplicationExceptionsUnion =
  | TooManyRequestsException
  | BadRequestException
  | InternalServerErrorException
  | ConflictException
  | ForbiddenException;
