import { TooManyRequestsException } from "./TooManyRequestsException";
import { NotFoundException } from "./NotFoundException";
import { BadRequestException } from "./BadRequestException";
export type GetDedicatedIpsExceptionsUnion =
  | TooManyRequestsException
  | NotFoundException
  | BadRequestException;
