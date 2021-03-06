import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { StartSupportDataExport } from "../model/operations/StartSupportDataExport";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StartSupportDataExportInput } from "../types/StartSupportDataExportInput";
import { StartSupportDataExportOutput } from "../types/StartSupportDataExportOutput";
import { MarketplaceCommerceAnalyticsResolvedConfiguration } from "../MarketplaceCommerceAnalyticsConfiguration";
export * from "../types/StartSupportDataExportInput";
export * from "../types/StartSupportDataExportOutput";
export * from "../types/StartSupportDataExportExceptionsUnion";

export class StartSupportDataExportCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StartSupportDataExportInput,
      OutputTypesUnion,
      StartSupportDataExportOutput,
      MarketplaceCommerceAnalyticsResolvedConfiguration,
      Blob
    > {
  readonly model = StartSupportDataExport;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StartSupportDataExportInput,
    StartSupportDataExportOutput,
    Blob
  >();

  constructor(readonly input: StartSupportDataExportInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: MarketplaceCommerceAnalyticsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    StartSupportDataExportInput,
    StartSupportDataExportOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StartSupportDataExportInput, StartSupportDataExportOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
