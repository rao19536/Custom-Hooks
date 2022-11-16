import React from 'react'
import * as Style from './style'

const ParentContainer = ({children}) => {
  return (
    <Style.StyledParentContainer>
        {children}
    </Style.StyledParentContainer>
  )
}

export default ParentContainer