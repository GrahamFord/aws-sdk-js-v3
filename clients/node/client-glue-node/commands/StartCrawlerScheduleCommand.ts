import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { StartCrawlerSchedule } from "../model/operations/StartCrawlerSchedule";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StartCrawlerScheduleInput } from "../types/StartCrawlerScheduleInput";
import { StartCrawlerScheduleOutput } from "../types/StartCrawlerScheduleOutput";
import { GlueResolvedConfiguration } from "../GlueConfiguration";
export * from "../types/StartCrawlerScheduleInput";
export * from "../types/StartCrawlerScheduleOutput";
export * from "../types/StartCrawlerScheduleExceptionsUnion";

export class StartCrawlerScheduleCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StartCrawlerScheduleInput,
      OutputTypesUnion,
      StartCrawlerScheduleOutput,
      GlueResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = StartCrawlerSchedule;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StartCrawlerScheduleInput,
    StartCrawlerScheduleOutput,
    _stream.Readable
  >();

  constructor(readonly input: StartCrawlerScheduleInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GlueResolvedConfiguration
  ): __aws_sdk_types.Handler<
    StartCrawlerScheduleInput,
    StartCrawlerScheduleOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StartCrawlerScheduleInput, StartCrawlerScheduleOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
