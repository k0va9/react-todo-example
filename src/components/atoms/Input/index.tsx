import React from 'react'

type Props = React.ComponentProps<'input'>

export const Input = (props: Props) => {
  return <input {...props} />
}
