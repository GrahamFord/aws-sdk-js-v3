import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListObjectAttributes } from "../model/operations/ListObjectAttributes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListObjectAttributesInput } from "../types/ListObjectAttributesInput";
import { ListObjectAttributesOutput } from "../types/ListObjectAttributesOutput";
import { CloudDirectoryResolvedConfiguration } from "../CloudDirectoryConfiguration";
export * from "../types/ListObjectAttributesInput";
export * from "../types/ListObjectAttributesOutput";
export * from "../types/ListObjectAttributesExceptionsUnion";

export class ListObjectAttributesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListObjectAttributesInput,
      OutputTypesUnion,
      ListObjectAttributesOutput,
      CloudDirectoryResolvedConfiguration,
      Blob
    > {
  readonly model = ListObjectAttributes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListObjectAttributesInput,
    ListObjectAttributesOutput,
    Blob
  >();

  constructor(readonly input: ListObjectAttributesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudDirectoryResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListObjectAttributesInput,
    ListObjectAttributesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListObjectAttributesInput, ListObjectAttributesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
