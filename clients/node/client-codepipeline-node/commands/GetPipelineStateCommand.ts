import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetPipelineState } from "../model/operations/GetPipelineState";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetPipelineStateInput } from "../types/GetPipelineStateInput";
import { GetPipelineStateOutput } from "../types/GetPipelineStateOutput";
import { CodePipelineResolvedConfiguration } from "../CodePipelineConfiguration";
export * from "../types/GetPipelineStateInput";
export * from "../types/GetPipelineStateOutput";
export * from "../types/GetPipelineStateExceptionsUnion";

export class GetPipelineStateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetPipelineStateInput,
      OutputTypesUnion,
      GetPipelineStateOutput,
      CodePipelineResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetPipelineState;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetPipelineStateInput,
    GetPipelineStateOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetPipelineStateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CodePipelineResolvedConfiguration
  ): __aws_sdk_types.Handler<GetPipelineStateInput, GetPipelineStateOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetPipelineStateInput, GetPipelineStateOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
