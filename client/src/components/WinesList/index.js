// @flow
import React from "reactn"
import { compose, type HOC } from "recompose"
import withQuery from "hocs/withQuery"
import { connect } from "react-redux"
import { listWinesQuery } from "data/wines/queries"
import { selectSearchParameters } from "data/search/selectors"
import {
  Wrap,
  TableWrap,
  Tile,
  Section,
  Title,
  Subtitle,
  Image,
} from "./styled"

const WinesList = ({ children, data }) => {
  if (!data) {
    return <p>Failed to load data.</p>
  }

  return (
    <Wrap>
      <TableWrap>
        {data.map((wine, index) =>
          <Tile key={index}>
            <Section>
              <Title>{wine.name}</Title>
              <Subtitle>{wine.producer}</Subtitle>
              <Image></Image>
            </Section>
          </Tile>
        )}
      </TableWrap>
    </Wrap>
  )
}

const mapStateToProps = state => {

  return {
    searchParameters: selectSearchParameters(state),
  }
}

const mapDispatchToProps = {}

const enhancer: HOC<*, {}> = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withQuery(
    listWinesQuery,
    {
      variables: (props) => ({ filter: props.searchParameters }),
    },
  ),
)

export default enhancer(WinesList)
