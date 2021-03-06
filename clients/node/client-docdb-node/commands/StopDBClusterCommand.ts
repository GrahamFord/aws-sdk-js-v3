import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { StopDBCluster } from "../model/operations/StopDBCluster";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StopDBClusterInput } from "../types/StopDBClusterInput";
import { StopDBClusterOutput } from "../types/StopDBClusterOutput";
import { DocDBResolvedConfiguration } from "../DocDBConfiguration";
export * from "../types/StopDBClusterInput";
export * from "../types/StopDBClusterOutput";
export * from "../types/StopDBClusterExceptionsUnion";

export class StopDBClusterCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StopDBClusterInput,
      OutputTypesUnion,
      StopDBClusterOutput,
      DocDBResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = StopDBCluster;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StopDBClusterInput,
    StopDBClusterOutput,
    _stream.Readable
  >();

  constructor(readonly input: StopDBClusterInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DocDBResolvedConfiguration
  ): __aws_sdk_types.Handler<StopDBClusterInput, StopDBClusterOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StopDBClusterInput, StopDBClusterOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
