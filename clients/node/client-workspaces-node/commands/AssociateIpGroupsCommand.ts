import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { AssociateIpGroups } from "../model/operations/AssociateIpGroups";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AssociateIpGroupsInput } from "../types/AssociateIpGroupsInput";
import { AssociateIpGroupsOutput } from "../types/AssociateIpGroupsOutput";
import { WorkSpacesResolvedConfiguration } from "../WorkSpacesConfiguration";
export * from "../types/AssociateIpGroupsInput";
export * from "../types/AssociateIpGroupsOutput";
export * from "../types/AssociateIpGroupsExceptionsUnion";

export class AssociateIpGroupsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AssociateIpGroupsInput,
      OutputTypesUnion,
      AssociateIpGroupsOutput,
      WorkSpacesResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = AssociateIpGroups;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AssociateIpGroupsInput,
    AssociateIpGroupsOutput,
    _stream.Readable
  >();

  constructor(readonly input: AssociateIpGroupsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: WorkSpacesResolvedConfiguration
  ): __aws_sdk_types.Handler<AssociateIpGroupsInput, AssociateIpGroupsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AssociateIpGroupsInput, AssociateIpGroupsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
