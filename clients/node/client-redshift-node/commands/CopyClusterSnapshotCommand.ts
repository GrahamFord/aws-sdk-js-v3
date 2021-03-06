import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CopyClusterSnapshot } from "../model/operations/CopyClusterSnapshot";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CopyClusterSnapshotInput } from "../types/CopyClusterSnapshotInput";
import { CopyClusterSnapshotOutput } from "../types/CopyClusterSnapshotOutput";
import { RedshiftResolvedConfiguration } from "../RedshiftConfiguration";
export * from "../types/CopyClusterSnapshotInput";
export * from "../types/CopyClusterSnapshotOutput";
export * from "../types/CopyClusterSnapshotExceptionsUnion";

export class CopyClusterSnapshotCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CopyClusterSnapshotInput,
      OutputTypesUnion,
      CopyClusterSnapshotOutput,
      RedshiftResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CopyClusterSnapshot;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CopyClusterSnapshotInput,
    CopyClusterSnapshotOutput,
    _stream.Readable
  >();

  constructor(readonly input: CopyClusterSnapshotInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RedshiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CopyClusterSnapshotInput,
    CopyClusterSnapshotOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CopyClusterSnapshotInput, CopyClusterSnapshotOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
