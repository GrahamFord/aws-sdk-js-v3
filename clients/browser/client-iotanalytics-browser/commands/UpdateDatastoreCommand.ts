import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateDatastore } from "../model/operations/UpdateDatastore";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateDatastoreInput } from "../types/UpdateDatastoreInput";
import { UpdateDatastoreOutput } from "../types/UpdateDatastoreOutput";
import { IoTAnalyticsResolvedConfiguration } from "../IoTAnalyticsConfiguration";
export * from "../types/UpdateDatastoreInput";
export * from "../types/UpdateDatastoreOutput";
export * from "../types/UpdateDatastoreExceptionsUnion";

export class UpdateDatastoreCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateDatastoreInput,
      OutputTypesUnion,
      UpdateDatastoreOutput,
      IoTAnalyticsResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateDatastore;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateDatastoreInput,
    UpdateDatastoreOutput,
    Blob
  >();

  constructor(readonly input: UpdateDatastoreInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IoTAnalyticsResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateDatastoreInput, UpdateDatastoreOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateDatastoreInput, UpdateDatastoreOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
