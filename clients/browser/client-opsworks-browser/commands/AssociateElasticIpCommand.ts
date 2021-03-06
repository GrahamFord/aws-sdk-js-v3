import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AssociateElasticIp } from "../model/operations/AssociateElasticIp";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AssociateElasticIpInput } from "../types/AssociateElasticIpInput";
import { AssociateElasticIpOutput } from "../types/AssociateElasticIpOutput";
import { OpsWorksResolvedConfiguration } from "../OpsWorksConfiguration";
export * from "../types/AssociateElasticIpInput";
export * from "../types/AssociateElasticIpOutput";
export * from "../types/AssociateElasticIpExceptionsUnion";

export class AssociateElasticIpCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AssociateElasticIpInput,
      OutputTypesUnion,
      AssociateElasticIpOutput,
      OpsWorksResolvedConfiguration,
      Blob
    > {
  readonly model = AssociateElasticIp;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AssociateElasticIpInput,
    AssociateElasticIpOutput,
    Blob
  >();

  constructor(readonly input: AssociateElasticIpInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: OpsWorksResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AssociateElasticIpInput,
    AssociateElasticIpOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AssociateElasticIpInput, AssociateElasticIpOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
