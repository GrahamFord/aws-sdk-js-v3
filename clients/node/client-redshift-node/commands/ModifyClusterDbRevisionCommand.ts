import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ModifyClusterDbRevision } from "../model/operations/ModifyClusterDbRevision";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ModifyClusterDbRevisionInput } from "../types/ModifyClusterDbRevisionInput";
import { ModifyClusterDbRevisionOutput } from "../types/ModifyClusterDbRevisionOutput";
import { RedshiftResolvedConfiguration } from "../RedshiftConfiguration";
export * from "../types/ModifyClusterDbRevisionInput";
export * from "../types/ModifyClusterDbRevisionOutput";
export * from "../types/ModifyClusterDbRevisionExceptionsUnion";

export class ModifyClusterDbRevisionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ModifyClusterDbRevisionInput,
      OutputTypesUnion,
      ModifyClusterDbRevisionOutput,
      RedshiftResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ModifyClusterDbRevision;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ModifyClusterDbRevisionInput,
    ModifyClusterDbRevisionOutput,
    _stream.Readable
  >();

  constructor(readonly input: ModifyClusterDbRevisionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RedshiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ModifyClusterDbRevisionInput,
    ModifyClusterDbRevisionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ModifyClusterDbRevisionInput, ModifyClusterDbRevisionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
