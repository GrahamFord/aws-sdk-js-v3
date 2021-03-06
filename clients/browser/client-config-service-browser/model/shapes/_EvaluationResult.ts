import { _EvaluationResultIdentifier } from "./_EvaluationResultIdentifier";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EvaluationResult: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    EvaluationResultIdentifier: {
      shape: _EvaluationResultIdentifier
    },
    ComplianceType: {
      shape: {
        type: "string"
      }
    },
    ResultRecordedTime: {
      shape: {
        type: "timestamp"
      }
    },
    ConfigRuleInvokedTime: {
      shape: {
        type: "timestamp"
      }
    },
    Annotation: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ResultToken: {
      shape: {
        type: "string"
      }
    }
  }
};
