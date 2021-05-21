import React from 'react'
import clsx from 'clsx'

interface ContainerProps {
  classNames?: string
}

const Container: React.FC<ContainerProps> = ({ children, classNames }) => {
  return (
    <div className={clsx("m-auto w-5/6", classNames)}>
      {children}
    </div>
  )
}

export default Container
