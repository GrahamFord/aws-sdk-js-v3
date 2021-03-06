import { _ListParentArnList } from "./_ListParentArnList";
import { _AssessmentTemplateFilter } from "./_AssessmentTemplateFilter";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListAssessmentTemplatesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    assessmentTargetArns: {
      shape: _ListParentArnList
    },
    filter: {
      shape: _AssessmentTemplateFilter
    },
    nextToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    maxResults: {
      shape: {
        type: "integer"
      }
    }
  }
};
