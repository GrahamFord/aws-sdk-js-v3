import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateCustomKeyStore } from "../model/operations/CreateCustomKeyStore";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateCustomKeyStoreInput } from "../types/CreateCustomKeyStoreInput";
import { CreateCustomKeyStoreOutput } from "../types/CreateCustomKeyStoreOutput";
import { KMSResolvedConfiguration } from "../KMSConfiguration";
export * from "../types/CreateCustomKeyStoreInput";
export * from "../types/CreateCustomKeyStoreOutput";
export * from "../types/CreateCustomKeyStoreExceptionsUnion";

export class CreateCustomKeyStoreCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateCustomKeyStoreInput,
      OutputTypesUnion,
      CreateCustomKeyStoreOutput,
      KMSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateCustomKeyStore;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateCustomKeyStoreInput,
    CreateCustomKeyStoreOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateCustomKeyStoreInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: KMSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateCustomKeyStoreInput,
    CreateCustomKeyStoreOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateCustomKeyStoreInput, CreateCustomKeyStoreOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
