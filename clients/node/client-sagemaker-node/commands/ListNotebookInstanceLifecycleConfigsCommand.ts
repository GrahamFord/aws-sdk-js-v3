import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListNotebookInstanceLifecycleConfigs } from "../model/operations/ListNotebookInstanceLifecycleConfigs";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListNotebookInstanceLifecycleConfigsInput } from "../types/ListNotebookInstanceLifecycleConfigsInput";
import { ListNotebookInstanceLifecycleConfigsOutput } from "../types/ListNotebookInstanceLifecycleConfigsOutput";
import { SageMakerResolvedConfiguration } from "../SageMakerConfiguration";
export * from "../types/ListNotebookInstanceLifecycleConfigsInput";
export * from "../types/ListNotebookInstanceLifecycleConfigsOutput";
export * from "../types/ListNotebookInstanceLifecycleConfigsExceptionsUnion";

export class ListNotebookInstanceLifecycleConfigsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListNotebookInstanceLifecycleConfigsInput,
      OutputTypesUnion,
      ListNotebookInstanceLifecycleConfigsOutput,
      SageMakerResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListNotebookInstanceLifecycleConfigs;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListNotebookInstanceLifecycleConfigsInput,
    ListNotebookInstanceLifecycleConfigsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListNotebookInstanceLifecycleConfigsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SageMakerResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListNotebookInstanceLifecycleConfigsInput,
    ListNotebookInstanceLifecycleConfigsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListNotebookInstanceLifecycleConfigsInput,
        ListNotebookInstanceLifecycleConfigsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
