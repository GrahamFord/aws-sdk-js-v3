import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteConferenceProvider } from "../model/operations/DeleteConferenceProvider";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteConferenceProviderInput } from "../types/DeleteConferenceProviderInput";
import { DeleteConferenceProviderOutput } from "../types/DeleteConferenceProviderOutput";
import { AlexaForBusinessResolvedConfiguration } from "../AlexaForBusinessConfiguration";
export * from "../types/DeleteConferenceProviderInput";
export * from "../types/DeleteConferenceProviderOutput";
export * from "../types/DeleteConferenceProviderExceptionsUnion";

export class DeleteConferenceProviderCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteConferenceProviderInput,
      OutputTypesUnion,
      DeleteConferenceProviderOutput,
      AlexaForBusinessResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteConferenceProvider;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteConferenceProviderInput,
    DeleteConferenceProviderOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteConferenceProviderInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AlexaForBusinessResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteConferenceProviderInput,
    DeleteConferenceProviderOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteConferenceProviderInput, DeleteConferenceProviderOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
