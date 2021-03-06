import { AlreadyExistsException } from "./AlreadyExistsException";
import { InvalidInputException } from "./InvalidInputException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { ResourceNumberLimitExceededException } from "./ResourceNumberLimitExceededException";
export type CreateSecurityConfigurationExceptionsUnion =
  | AlreadyExistsException
  | InvalidInputException
  | InternalServiceException
  | OperationTimeoutException
  | ResourceNumberLimitExceededException;
