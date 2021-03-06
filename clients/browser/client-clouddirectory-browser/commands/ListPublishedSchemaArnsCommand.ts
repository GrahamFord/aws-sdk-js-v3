import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListPublishedSchemaArns } from "../model/operations/ListPublishedSchemaArns";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListPublishedSchemaArnsInput } from "../types/ListPublishedSchemaArnsInput";
import { ListPublishedSchemaArnsOutput } from "../types/ListPublishedSchemaArnsOutput";
import { CloudDirectoryResolvedConfiguration } from "../CloudDirectoryConfiguration";
export * from "../types/ListPublishedSchemaArnsInput";
export * from "../types/ListPublishedSchemaArnsOutput";
export * from "../types/ListPublishedSchemaArnsExceptionsUnion";

export class ListPublishedSchemaArnsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListPublishedSchemaArnsInput,
      OutputTypesUnion,
      ListPublishedSchemaArnsOutput,
      CloudDirectoryResolvedConfiguration,
      Blob
    > {
  readonly model = ListPublishedSchemaArns;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListPublishedSchemaArnsInput,
    ListPublishedSchemaArnsOutput,
    Blob
  >();

  constructor(readonly input: ListPublishedSchemaArnsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudDirectoryResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListPublishedSchemaArnsInput,
    ListPublishedSchemaArnsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListPublishedSchemaArnsInput, ListPublishedSchemaArnsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
