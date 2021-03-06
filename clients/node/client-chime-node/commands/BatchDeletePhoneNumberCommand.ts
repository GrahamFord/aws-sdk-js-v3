import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { BatchDeletePhoneNumber } from "../model/operations/BatchDeletePhoneNumber";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { BatchDeletePhoneNumberInput } from "../types/BatchDeletePhoneNumberInput";
import { BatchDeletePhoneNumberOutput } from "../types/BatchDeletePhoneNumberOutput";
import { ChimeResolvedConfiguration } from "../ChimeConfiguration";
export * from "../types/BatchDeletePhoneNumberInput";
export * from "../types/BatchDeletePhoneNumberOutput";
export * from "../types/BatchDeletePhoneNumberExceptionsUnion";

export class BatchDeletePhoneNumberCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      BatchDeletePhoneNumberInput,
      OutputTypesUnion,
      BatchDeletePhoneNumberOutput,
      ChimeResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = BatchDeletePhoneNumber;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    BatchDeletePhoneNumberInput,
    BatchDeletePhoneNumberOutput,
    _stream.Readable
  >();

  constructor(readonly input: BatchDeletePhoneNumberInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ChimeResolvedConfiguration
  ): __aws_sdk_types.Handler<
    BatchDeletePhoneNumberInput,
    BatchDeletePhoneNumberOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<BatchDeletePhoneNumberInput, BatchDeletePhoneNumberOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
