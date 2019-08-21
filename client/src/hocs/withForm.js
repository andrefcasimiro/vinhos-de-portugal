// @flow
import React from "react"
import { pick } from "ramda"
import { withFormik } from "formik"
import * as yup from "yup"
import type { HOC } from "recompose"
import styled from "styled-components"

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`

type Added = {
  hasSubmitted: boolean,
  isSubmitting: boolean,
  error?: string,
  values: $ObjMap<Schema>,
}

type Configuration = {
  schema: Schema,
  onSubmit: ({ ...$Exact<Props>, ...$Exact<Added> }) => ($ObjMap<Schema>) => Promise<Response>,
  onSuccess?: ({ ...$Exact<Props>, ...$Exact<Added> }) => Response => mixed,
  onError?: ({ ...$Exact<Props>, ...$Exact<Added> }) => (error: string) => mixed,
}

function withForm(
  configuration: Configuration,
): HOC<{ ...$Exact<Outter>, ...$Exact<Added> }, Outter> {
  const {
    schema,
    onSubmit,
    onSuccess,
    onError,
  } = configuration

  return C =>
    withFormik({
      mapPropsToValues: props => props.formData
        ? pick(Object.keys(schema))(props.formData)
        : {},
      validationSchema: yup.object().shape(schema),
      handleSubmit: (values, form) => {
        form.setStatus({ ...form.status, error: null })

        return onSubmit(form.props)(values)
          .then(result => {
            form.setStatus({ ...form.status, hasSubmitted: true })
            form.setSubmitting(false)

            if (onSuccess) {
              onSuccess({ ...form, ...form.props, values })(result)
            }
          })
          .catch(error => {
            form.setStatus({ ...form.status, error })
            form.setSubmitting(false)

            if (onError) {
              onError({ ...form, ...form.props })(error)
            }
          })
      }
    })(props => (
      <Form onSubmit={event => {
          props.setStatus({ ...props.status, submitted: true })

          return props.handleSubmit(event)
        }}
      >
        <C {...props} />
      </Form>
    ))
}

export default withForm
