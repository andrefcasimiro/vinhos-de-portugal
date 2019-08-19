// @flow
import React, { useGlobal } from "reactn"
import { Mutation } from "react-apollo"
import Modal from "modals/_Modal"
import Input from "componentsStyled/Forms/Input"
import Submit from "componentsStyled/Forms/Submit"
import { getText } from "data/dictionary/helpers"
import { sanitizeString } from "data/validators/helpers"
import { dictionaryKeys } from "data/dictionary/constants"
import { addCountryMutation } from "data/countries/mutations"
import type { Country }from "data/countries/types"
import withQuery from "hocs/withQuery"
import { listCountries } from "data/countries/queries"

type Props = {
  close: Function,
  onChange: Function,
  values: {
    name: string,
  },
  data: Country[],
}

const getErrorMessage = (errors: [], key: string) => {
  const error = errors.filter(error => error.hasOwnProperty(key))

  if (error.length) {
    return error[0][key]
  }
}

// We use this functional component so we can have access to hooks in our modals
const Form = ({ close, data, onChange, values }: Props) => {
  const [language] = useGlobal("language")

  if (!data) {
    return null
  }

  const countriesList = data.map(country => sanitizeString(country.name))

  let errors = []

  // Country name already exists
  if (values && values.name && countriesList.includes(sanitizeString(values.name))) {
    errors.push({
      name: getText(language, dictionaryKeys.COUNTRY_ALREADY_EXISTS),
    })
  }

  // Country name is empty
  if (values && !values.name) {
    errors.push({ name: "" })
  }

  return (
    <Modal
      close={close}
      title={getText(language, dictionaryKeys.ADD_COUNTRY)}
    >
      <Input
        type="text"
        name="name"
        label={getText(language, dictionaryKeys.COUNTRY_NAME)}
        onChange={onChange}
        errorMessage={getErrorMessage(errors, "name")}
      />
      <Mutation
        mutation={addCountryMutation}
        variables={{
          input: {
            ...values,
          },
        }}
        onCompleted={data => close()}
        onError={errors => {
          const err = errors.graphQLErrors.map(m => m.message)

          return err.map(error => console.log(error))
        }}
        refetchQueries={[{
          query: listCountries,
          variables: {},
        }]}
      >
        {postMutation => (
          <Submit onClick={postMutation} disabled={errors.length}>
            {getText(language, dictionaryKeys.ADD_COUNTRY)}
          </Submit>
        )}
      </Mutation>
    </Modal>
  )
}

export default withQuery(listCountries)(Form)
