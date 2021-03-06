import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListNotebookInstances } from "../model/operations/ListNotebookInstances";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListNotebookInstancesInput } from "../types/ListNotebookInstancesInput";
import { ListNotebookInstancesOutput } from "../types/ListNotebookInstancesOutput";
import { SageMakerResolvedConfiguration } from "../SageMakerConfiguration";
export * from "../types/ListNotebookInstancesInput";
export * from "../types/ListNotebookInstancesOutput";
export * from "../types/ListNotebookInstancesExceptionsUnion";

export class ListNotebookInstancesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListNotebookInstancesInput,
      OutputTypesUnion,
      ListNotebookInstancesOutput,
      SageMakerResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListNotebookInstances;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListNotebookInstancesInput,
    ListNotebookInstancesOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListNotebookInstancesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SageMakerResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListNotebookInstancesInput,
    ListNotebookInstancesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListNotebookInstancesInput, ListNotebookInstancesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
