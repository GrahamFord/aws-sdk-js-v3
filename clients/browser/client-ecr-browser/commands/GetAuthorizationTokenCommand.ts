import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetAuthorizationToken } from "../model/operations/GetAuthorizationToken";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetAuthorizationTokenInput } from "../types/GetAuthorizationTokenInput";
import { GetAuthorizationTokenOutput } from "../types/GetAuthorizationTokenOutput";
import { ECRResolvedConfiguration } from "../ECRConfiguration";
export * from "../types/GetAuthorizationTokenInput";
export * from "../types/GetAuthorizationTokenOutput";
export * from "../types/GetAuthorizationTokenExceptionsUnion";

export class GetAuthorizationTokenCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetAuthorizationTokenInput,
      OutputTypesUnion,
      GetAuthorizationTokenOutput,
      ECRResolvedConfiguration,
      Blob
    > {
  readonly model = GetAuthorizationToken;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetAuthorizationTokenInput,
    GetAuthorizationTokenOutput,
    Blob
  >();

  constructor(readonly input: GetAuthorizationTokenInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ECRResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetAuthorizationTokenInput,
    GetAuthorizationTokenOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetAuthorizationTokenInput, GetAuthorizationTokenOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
