import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListRequestedServiceQuotaChangeHistoryByQuota } from "../model/operations/ListRequestedServiceQuotaChangeHistoryByQuota";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListRequestedServiceQuotaChangeHistoryByQuotaInput } from "../types/ListRequestedServiceQuotaChangeHistoryByQuotaInput";
import { ListRequestedServiceQuotaChangeHistoryByQuotaOutput } from "../types/ListRequestedServiceQuotaChangeHistoryByQuotaOutput";
import { ServiceQuotasResolvedConfiguration } from "../ServiceQuotasConfiguration";
export * from "../types/ListRequestedServiceQuotaChangeHistoryByQuotaInput";
export * from "../types/ListRequestedServiceQuotaChangeHistoryByQuotaOutput";
export * from "../types/ListRequestedServiceQuotaChangeHistoryByQuotaExceptionsUnion";

export class ListRequestedServiceQuotaChangeHistoryByQuotaCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListRequestedServiceQuotaChangeHistoryByQuotaInput,
      OutputTypesUnion,
      ListRequestedServiceQuotaChangeHistoryByQuotaOutput,
      ServiceQuotasResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListRequestedServiceQuotaChangeHistoryByQuota;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListRequestedServiceQuotaChangeHistoryByQuotaInput,
    ListRequestedServiceQuotaChangeHistoryByQuotaOutput,
    _stream.Readable
  >();

  constructor(
    readonly input: ListRequestedServiceQuotaChangeHistoryByQuotaInput
  ) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ServiceQuotasResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListRequestedServiceQuotaChangeHistoryByQuotaInput,
    ListRequestedServiceQuotaChangeHistoryByQuotaOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListRequestedServiceQuotaChangeHistoryByQuotaInput,
        ListRequestedServiceQuotaChangeHistoryByQuotaOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
