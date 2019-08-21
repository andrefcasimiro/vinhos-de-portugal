// @flow
import React from "react"
import { compose, type HOC } from "recompose"
import withQuery from "hocs/withQuery"
import { connect } from "react-redux"
import { listWinesQuery } from "data/wines/queries"
import { selectSearchParameters } from "data/search/selectors"
import red_bottle from "assets/images/red_bottle.jpg"
import white_bottle from "assets/images/white_bottle.jpg"
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
              <Image><img src={wine.grape === "White" ? white_bottle : red_bottle } alt="" /></Image>
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
  withQuery(listWinesQuery,
    {
      variables: props => ({ filter: props.searchParameters }),
    },
  ),
)

export default enhancer(WinesList)
