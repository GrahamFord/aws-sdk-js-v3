import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ExportBundle } from "../model/operations/ExportBundle";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ExportBundleInput } from "../types/ExportBundleInput";
import { ExportBundleOutput } from "../types/ExportBundleOutput";
import { MobileResolvedConfiguration } from "../MobileConfiguration";
export * from "../types/ExportBundleInput";
export * from "../types/ExportBundleOutput";
export * from "../types/ExportBundleExceptionsUnion";

export class ExportBundleCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ExportBundleInput,
      OutputTypesUnion,
      ExportBundleOutput,
      MobileResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ExportBundle;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ExportBundleInput,
    ExportBundleOutput,
    _stream.Readable
  >();

  constructor(readonly input: ExportBundleInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: MobileResolvedConfiguration
  ): __aws_sdk_types.Handler<ExportBundleInput, ExportBundleOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ExportBundleInput, ExportBundleOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
