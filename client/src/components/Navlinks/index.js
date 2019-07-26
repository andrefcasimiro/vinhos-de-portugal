// @flow
import React, { useGlobal } from "reactn"
import { getText } from "data/dictionary/helpers"
import Navlink from "./Navlink"
import Group from "componentsStyled/Group"

type Props = {|
  menu: Array<Object>,
|}

const Navlinks = ({ menu }: Props) => {
  const [language] = useGlobal("language")

  return (
    <Group>
      {Object.values(menu).map((option, index) => {
        return (
          <Navlink to={option.path}>
            {getText(language, option.key, option.subkey)}
          </Navlink>
        )
      })}
    </Group>
  )
}

export default Navlinks
