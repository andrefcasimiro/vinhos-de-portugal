// @flow
import React from "react"
import { compose, type HOC } from "recompose"
import * as yup from "yup"
import withMutation from "hocs/withMutation"
import withForm from "hocs/withForm"
import Input from "componentsStyled/Forms/Input"
import Submit from "componentsStyled/Forms/Submit"
import { addCountryMutation } from "data/countries/mutations"
import { stringRequiredText } from "data/validators/texts"
import Modal from "modals/_Modal"

type Props = {
  isOpen: boolean,
  close: Function,
}

const AddCountry = ({ isOpen, close, isSubmitting, onSubmit }) => (
  <Modal close={close} title={"add country"}>
    <Input
      name="countryName"
      placeholder="Enter a country name"
      label="Country Name"
    />
    <Submit loading={isSubmitting}>Add Country</Submit>
  </Modal>
)

const schema = {
  countryName: yup.string().required(stringRequiredText).min(3),
}

const enhancer: HOC<*, Props> = compose(
  withMutation(addCountryMutation),
  withForm({
    schema,
    onSubmit: props => values => {
      const input = {
        name: values.countryName,
      }

      return props.submitMutation({ input })
    },
    onSuccess: props => props.close,
  }),
)

export default enhancer(AddCountry)
