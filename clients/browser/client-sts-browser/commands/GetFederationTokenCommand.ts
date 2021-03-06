import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetFederationToken } from "../model/operations/GetFederationToken";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetFederationTokenInput } from "../types/GetFederationTokenInput";
import { GetFederationTokenOutput } from "../types/GetFederationTokenOutput";
import { STSResolvedConfiguration } from "../STSConfiguration";
export * from "../types/GetFederationTokenInput";
export * from "../types/GetFederationTokenOutput";
export * from "../types/GetFederationTokenExceptionsUnion";

export class GetFederationTokenCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetFederationTokenInput,
      OutputTypesUnion,
      GetFederationTokenOutput,
      STSResolvedConfiguration,
      Blob
    > {
  readonly model = GetFederationToken;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetFederationTokenInput,
    GetFederationTokenOutput,
    Blob
  >();

  constructor(readonly input: GetFederationTokenInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: STSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetFederationTokenInput,
    GetFederationTokenOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetFederationTokenInput, GetFederationTokenOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
