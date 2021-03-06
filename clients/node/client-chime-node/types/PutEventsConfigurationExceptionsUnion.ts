import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ServiceFailureException } from "./ServiceFailureException";
import { ForbiddenException } from "./ForbiddenException";
import { BadRequestException } from "./BadRequestException";
import { UnauthorizedClientException } from "./UnauthorizedClientException";
import { ResourceLimitExceededException } from "./ResourceLimitExceededException";
import { NotFoundException } from "./NotFoundException";
export type PutEventsConfigurationExceptionsUnion =
  | ServiceUnavailableException
  | ServiceFailureException
  | ForbiddenException
  | BadRequestException
  | UnauthorizedClientException
  | ResourceLimitExceededException
  | NotFoundException;
