import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottledException } from "./ThrottledException";
export type UpdateGroupExceptionsUnion =
  | InvalidRequestException
  | ThrottledException;
