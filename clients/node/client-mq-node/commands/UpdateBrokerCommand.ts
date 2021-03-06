import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateBroker } from "../model/operations/UpdateBroker";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateBrokerInput } from "../types/UpdateBrokerInput";
import { UpdateBrokerOutput } from "../types/UpdateBrokerOutput";
import { mqResolvedConfiguration } from "../mqConfiguration";
export * from "../types/UpdateBrokerInput";
export * from "../types/UpdateBrokerOutput";
export * from "../types/UpdateBrokerExceptionsUnion";

export class UpdateBrokerCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateBrokerInput,
      OutputTypesUnion,
      UpdateBrokerOutput,
      mqResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateBroker;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateBrokerInput,
    UpdateBrokerOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateBrokerInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: mqResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateBrokerInput, UpdateBrokerOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateBrokerInput, UpdateBrokerOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
