import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ConnectCustomKeyStore } from "../model/operations/ConnectCustomKeyStore";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ConnectCustomKeyStoreInput } from "../types/ConnectCustomKeyStoreInput";
import { ConnectCustomKeyStoreOutput } from "../types/ConnectCustomKeyStoreOutput";
import { KMSResolvedConfiguration } from "../KMSConfiguration";
export * from "../types/ConnectCustomKeyStoreInput";
export * from "../types/ConnectCustomKeyStoreOutput";
export * from "../types/ConnectCustomKeyStoreExceptionsUnion";

export class ConnectCustomKeyStoreCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ConnectCustomKeyStoreInput,
      OutputTypesUnion,
      ConnectCustomKeyStoreOutput,
      KMSResolvedConfiguration,
      Blob
    > {
  readonly model = ConnectCustomKeyStore;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ConnectCustomKeyStoreInput,
    ConnectCustomKeyStoreOutput,
    Blob
  >();

  constructor(readonly input: ConnectCustomKeyStoreInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: KMSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ConnectCustomKeyStoreInput,
    ConnectCustomKeyStoreOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ConnectCustomKeyStoreInput, ConnectCustomKeyStoreOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
