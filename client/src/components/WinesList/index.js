// @flow
import React, { useGlobal } from "reactn"
import { compose } from "recompose"
import { graphql } from "react-apollo"
import { listWinesQuery } from "data/wines/queries"
import withData from "hocs/withData"
import Button from "componentsStyled/Button"
import { getText } from "data/dictionary/helpers"
import { dictionaryKeys } from "data/dictionary/constants"
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
  // const [language] = useGlobal("language")
  const { listWines } = data

  if (!listWines) {
    return <p>Failed to load data.</p>
  }

  return (
    <Wrap>
      <TableWrap>
        {listWines.map((wine, index) =>
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

const enhancer = compose(
  graphql(listWinesQuery),
  withData,
)

export default enhancer(WinesList)
