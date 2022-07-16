import React from 'react'

const CardHalfLayoutContent = ({children, style}) => {
  return (
    <div className={`mx-auto mb-2 ${style}`}>{children}</div>
  )
}

export default CardHalfLayoutContent