import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateStreamingURL } from "../model/operations/CreateStreamingURL";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateStreamingURLInput } from "../types/CreateStreamingURLInput";
import { CreateStreamingURLOutput } from "../types/CreateStreamingURLOutput";
import { AppStreamResolvedConfiguration } from "../AppStreamConfiguration";
export * from "../types/CreateStreamingURLInput";
export * from "../types/CreateStreamingURLOutput";
export * from "../types/CreateStreamingURLExceptionsUnion";

export class CreateStreamingURLCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateStreamingURLInput,
      OutputTypesUnion,
      CreateStreamingURLOutput,
      AppStreamResolvedConfiguration,
      Blob
    > {
  readonly model = CreateStreamingURL;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateStreamingURLInput,
    CreateStreamingURLOutput,
    Blob
  >();

  constructor(readonly input: CreateStreamingURLInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AppStreamResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateStreamingURLInput,
    CreateStreamingURLOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateStreamingURLInput, CreateStreamingURLOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
