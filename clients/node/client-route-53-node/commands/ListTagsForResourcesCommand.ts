import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListTagsForResources } from "../model/operations/ListTagsForResources";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListTagsForResourcesInput } from "../types/ListTagsForResourcesInput";
import { ListTagsForResourcesOutput } from "../types/ListTagsForResourcesOutput";
import { Route53ResolvedConfiguration } from "../Route53Configuration";
export * from "../types/ListTagsForResourcesInput";
export * from "../types/ListTagsForResourcesOutput";
export * from "../types/ListTagsForResourcesExceptionsUnion";

export class ListTagsForResourcesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListTagsForResourcesInput,
      OutputTypesUnion,
      ListTagsForResourcesOutput,
      Route53ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListTagsForResources;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListTagsForResourcesInput,
    ListTagsForResourcesOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListTagsForResourcesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: Route53ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListTagsForResourcesInput,
    ListTagsForResourcesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListTagsForResourcesInput, ListTagsForResourcesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
