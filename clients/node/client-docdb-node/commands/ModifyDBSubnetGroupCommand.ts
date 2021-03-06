import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ModifyDBSubnetGroup } from "../model/operations/ModifyDBSubnetGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ModifyDBSubnetGroupInput } from "../types/ModifyDBSubnetGroupInput";
import { ModifyDBSubnetGroupOutput } from "../types/ModifyDBSubnetGroupOutput";
import { DocDBResolvedConfiguration } from "../DocDBConfiguration";
export * from "../types/ModifyDBSubnetGroupInput";
export * from "../types/ModifyDBSubnetGroupOutput";
export * from "../types/ModifyDBSubnetGroupExceptionsUnion";

export class ModifyDBSubnetGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ModifyDBSubnetGroupInput,
      OutputTypesUnion,
      ModifyDBSubnetGroupOutput,
      DocDBResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ModifyDBSubnetGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ModifyDBSubnetGroupInput,
    ModifyDBSubnetGroupOutput,
    _stream.Readable
  >();

  constructor(readonly input: ModifyDBSubnetGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DocDBResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ModifyDBSubnetGroupInput,
    ModifyDBSubnetGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ModifyDBSubnetGroupInput, ModifyDBSubnetGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
