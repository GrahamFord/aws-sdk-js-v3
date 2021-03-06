import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeAlarms } from "../model/operations/DescribeAlarms";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeAlarmsInput } from "../types/DescribeAlarmsInput";
import { DescribeAlarmsOutput } from "../types/DescribeAlarmsOutput";
import { CloudWatchResolvedConfiguration } from "../CloudWatchConfiguration";
export * from "../types/DescribeAlarmsInput";
export * from "../types/DescribeAlarmsOutput";
export * from "../types/DescribeAlarmsExceptionsUnion";

export class DescribeAlarmsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeAlarmsInput,
      OutputTypesUnion,
      DescribeAlarmsOutput,
      CloudWatchResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeAlarms;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeAlarmsInput,
    DescribeAlarmsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeAlarmsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudWatchResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeAlarmsInput, DescribeAlarmsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeAlarmsInput, DescribeAlarmsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
