import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListTagsForResource } from "../model/operations/ListTagsForResource";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListTagsForResourceInput } from "../types/ListTagsForResourceInput";
import { ListTagsForResourceOutput } from "../types/ListTagsForResourceOutput";
import { MediaLiveResolvedConfiguration } from "../MediaLiveConfiguration";
export * from "../types/ListTagsForResourceInput";
export * from "../types/ListTagsForResourceOutput";
export * from "../types/ListTagsForResourceExceptionsUnion";

export class ListTagsForResourceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListTagsForResourceInput,
      OutputTypesUnion,
      ListTagsForResourceOutput,
      MediaLiveResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListTagsForResource;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListTagsForResourceInput,
    ListTagsForResourceOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListTagsForResourceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: MediaLiveResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListTagsForResourceInput,
    ListTagsForResourceOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListTagsForResourceInput, ListTagsForResourceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
