import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { AllocateHosts } from "../model/operations/AllocateHosts";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AllocateHostsInput } from "../types/AllocateHostsInput";
import { AllocateHostsOutput } from "../types/AllocateHostsOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/AllocateHostsInput";
export * from "../types/AllocateHostsOutput";
export * from "../types/AllocateHostsExceptionsUnion";

export class AllocateHostsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AllocateHostsInput,
      OutputTypesUnion,
      AllocateHostsOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = AllocateHosts;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AllocateHostsInput,
    AllocateHostsOutput,
    _stream.Readable
  >();

  constructor(readonly input: AllocateHostsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<AllocateHostsInput, AllocateHostsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AllocateHostsInput, AllocateHostsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
