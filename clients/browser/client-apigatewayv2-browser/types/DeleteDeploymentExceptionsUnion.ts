import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
export type DeleteDeploymentExceptionsUnion =
  | NotFoundException
  | TooManyRequestsException;
