import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateConfigurationSetEventDestination } from "../model/operations/UpdateConfigurationSetEventDestination";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateConfigurationSetEventDestinationInput } from "../types/UpdateConfigurationSetEventDestinationInput";
import { UpdateConfigurationSetEventDestinationOutput } from "../types/UpdateConfigurationSetEventDestinationOutput";
import { PinpointEmailResolvedConfiguration } from "../PinpointEmailConfiguration";
export * from "../types/UpdateConfigurationSetEventDestinationInput";
export * from "../types/UpdateConfigurationSetEventDestinationOutput";
export * from "../types/UpdateConfigurationSetEventDestinationExceptionsUnion";

export class UpdateConfigurationSetEventDestinationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateConfigurationSetEventDestinationInput,
      OutputTypesUnion,
      UpdateConfigurationSetEventDestinationOutput,
      PinpointEmailResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateConfigurationSetEventDestination;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateConfigurationSetEventDestinationInput,
    UpdateConfigurationSetEventDestinationOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateConfigurationSetEventDestinationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: PinpointEmailResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateConfigurationSetEventDestinationInput,
    UpdateConfigurationSetEventDestinationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        UpdateConfigurationSetEventDestinationInput,
        UpdateConfigurationSetEventDestinationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
