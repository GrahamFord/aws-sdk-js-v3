import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListWebhooks } from "../model/operations/ListWebhooks";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListWebhooksInput } from "../types/ListWebhooksInput";
import { ListWebhooksOutput } from "../types/ListWebhooksOutput";
import { CodePipelineResolvedConfiguration } from "../CodePipelineConfiguration";
export * from "../types/ListWebhooksInput";
export * from "../types/ListWebhooksOutput";
export * from "../types/ListWebhooksExceptionsUnion";

export class ListWebhooksCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListWebhooksInput,
      OutputTypesUnion,
      ListWebhooksOutput,
      CodePipelineResolvedConfiguration,
      Blob
    > {
  readonly model = ListWebhooks;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListWebhooksInput,
    ListWebhooksOutput,
    Blob
  >();

  constructor(readonly input: ListWebhooksInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CodePipelineResolvedConfiguration
  ): __aws_sdk_types.Handler<ListWebhooksInput, ListWebhooksOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListWebhooksInput, ListWebhooksOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
