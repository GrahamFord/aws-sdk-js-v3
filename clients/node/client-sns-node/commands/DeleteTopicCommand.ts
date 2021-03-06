import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteTopic } from "../model/operations/DeleteTopic";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteTopicInput } from "../types/DeleteTopicInput";
import { DeleteTopicOutput } from "../types/DeleteTopicOutput";
import { SNSResolvedConfiguration } from "../SNSConfiguration";
export * from "../types/DeleteTopicInput";
export * from "../types/DeleteTopicOutput";
export * from "../types/DeleteTopicExceptionsUnion";

export class DeleteTopicCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteTopicInput,
      OutputTypesUnion,
      DeleteTopicOutput,
      SNSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteTopic;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteTopicInput,
    DeleteTopicOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteTopicInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SNSResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteTopicInput, DeleteTopicOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteTopicInput, DeleteTopicOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
