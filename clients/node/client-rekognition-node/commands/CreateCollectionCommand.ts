import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateCollection } from "../model/operations/CreateCollection";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateCollectionInput } from "../types/CreateCollectionInput";
import { CreateCollectionOutput } from "../types/CreateCollectionOutput";
import { RekognitionResolvedConfiguration } from "../RekognitionConfiguration";
export * from "../types/CreateCollectionInput";
export * from "../types/CreateCollectionOutput";
export * from "../types/CreateCollectionExceptionsUnion";

export class CreateCollectionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateCollectionInput,
      OutputTypesUnion,
      CreateCollectionOutput,
      RekognitionResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateCollection;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateCollectionInput,
    CreateCollectionOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateCollectionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RekognitionResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateCollectionInput, CreateCollectionOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateCollectionInput, CreateCollectionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
