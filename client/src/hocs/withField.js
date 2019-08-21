// @flow
import React from "react"
import type { Component } from "recompose"
import { Field } from "formik"

const onBlur = props => () =>
  props.form.setFieldTouched(props.field.name, true)


const onChange = props => event => {
  const value = !!(event.stopPropagation && event.preventDefault)
    ? event.target.value
    : event

  props.form.setFieldValue(props.field.name, value)
  props.form.setStatus({ ...props.form.status, error: null })

  if (typeof props.onChange === "function") {
    props.onChange(event)
  }
}

type Added<T> = {
  value: T,
  onChange: T => mixed,
}

export type Props = {
  name: string,
  label: string,
}

function withField(
  C: Component<{|
    ...$Exact<Outter, ReqOutter>,
    ...$Exact<Added>,
  |}>,
): Component<Outter> {
  return props => (
    <Field
      {...props}
      render={fieldProps => {
        const error = fieldProps.form.errors[fieldProps.field.name]

        return (
          <C
            {...props}
            {...fieldProps.field}
            onChange={onChange({ ...props, ...fieldProps })}
            onBlur={onBlur({ ...props, ...fieldProps })}
            error={error}
          />
        )
      }}
    />
  )
}

export default withField
