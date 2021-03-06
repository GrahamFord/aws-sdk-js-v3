import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateNumberOfDomainControllers } from "../model/operations/UpdateNumberOfDomainControllers";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateNumberOfDomainControllersInput } from "../types/UpdateNumberOfDomainControllersInput";
import { UpdateNumberOfDomainControllersOutput } from "../types/UpdateNumberOfDomainControllersOutput";
import { DirectoryServiceResolvedConfiguration } from "../DirectoryServiceConfiguration";
export * from "../types/UpdateNumberOfDomainControllersInput";
export * from "../types/UpdateNumberOfDomainControllersOutput";
export * from "../types/UpdateNumberOfDomainControllersExceptionsUnion";

export class UpdateNumberOfDomainControllersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateNumberOfDomainControllersInput,
      OutputTypesUnion,
      UpdateNumberOfDomainControllersOutput,
      DirectoryServiceResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateNumberOfDomainControllers;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateNumberOfDomainControllersInput,
    UpdateNumberOfDomainControllersOutput,
    Blob
  >();

  constructor(readonly input: UpdateNumberOfDomainControllersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: DirectoryServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateNumberOfDomainControllersInput,
    UpdateNumberOfDomainControllersOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        UpdateNumberOfDomainControllersInput,
        UpdateNumberOfDomainControllersOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
