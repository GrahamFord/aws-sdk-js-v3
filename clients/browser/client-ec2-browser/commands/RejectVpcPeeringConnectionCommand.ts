import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { RejectVpcPeeringConnection } from "../model/operations/RejectVpcPeeringConnection";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RejectVpcPeeringConnectionInput } from "../types/RejectVpcPeeringConnectionInput";
import { RejectVpcPeeringConnectionOutput } from "../types/RejectVpcPeeringConnectionOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/RejectVpcPeeringConnectionInput";
export * from "../types/RejectVpcPeeringConnectionOutput";
export * from "../types/RejectVpcPeeringConnectionExceptionsUnion";

export class RejectVpcPeeringConnectionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RejectVpcPeeringConnectionInput,
      OutputTypesUnion,
      RejectVpcPeeringConnectionOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = RejectVpcPeeringConnection;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RejectVpcPeeringConnectionInput,
    RejectVpcPeeringConnectionOutput,
    Blob
  >();

  constructor(readonly input: RejectVpcPeeringConnectionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RejectVpcPeeringConnectionInput,
    RejectVpcPeeringConnectionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        RejectVpcPeeringConnectionInput,
        RejectVpcPeeringConnectionOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
