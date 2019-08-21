// @flow
// @flow
import * as yup from "yup"
import { stringRequiredText } from "./texts"

export const stringRequired: Validator<string> = yup.string()
  .required(stringRequiredText)
