import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeAnalysisSchemes } from "../model/operations/DescribeAnalysisSchemes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeAnalysisSchemesInput } from "../types/DescribeAnalysisSchemesInput";
import { DescribeAnalysisSchemesOutput } from "../types/DescribeAnalysisSchemesOutput";
import { CloudSearchResolvedConfiguration } from "../CloudSearchConfiguration";
export * from "../types/DescribeAnalysisSchemesInput";
export * from "../types/DescribeAnalysisSchemesOutput";
export * from "../types/DescribeAnalysisSchemesExceptionsUnion";

export class DescribeAnalysisSchemesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeAnalysisSchemesInput,
      OutputTypesUnion,
      DescribeAnalysisSchemesOutput,
      CloudSearchResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeAnalysisSchemes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeAnalysisSchemesInput,
    DescribeAnalysisSchemesOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeAnalysisSchemesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudSearchResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeAnalysisSchemesInput,
    DescribeAnalysisSchemesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeAnalysisSchemesInput, DescribeAnalysisSchemesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
