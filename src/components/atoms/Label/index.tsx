import React from 'react'

type Props = React.ComponentProps<'label'>

export const Label = ({
  children,
  ...props
}: React.PropsWithChildren<Props>) => {
  return <label {...props}>{children}</label>
}
