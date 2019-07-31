import React, { Component } from "reactn"
import Form from "./Form"
import ListCountries from "queryComponents/ListCountries"

type Props = {
  isOpen: boolean,
  toggleOpen: Function,
}

// We should first query our back end for a list of countries
// and use the data for validation in our form to avoid hitting the back end
// if the country the person is trying to insert already exists.
class AddCountry extends Component <Props, *> {
  constructor(props) {
    super(props)

    this.state = {
      values: {
        name: undefined,
      },
    }
  }

  handleChange = event => {
    const { value, name } = event.target

    this.setState({
      values: {
        ...this.state.values,
        [name]: value,
      },
    })
  }

  render() {
    return (
      <ListCountries>
        <Form
          close={this.props.close}
          onChange={this.handleChange}
          values={this.state.values}
        />
      </ListCountries>
    )
  }
}

export default AddCountry
