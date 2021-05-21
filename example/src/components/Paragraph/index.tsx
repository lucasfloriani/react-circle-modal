import React from 'react'
import clsx from 'clsx'

interface ParagraphProps {
  classNames?: string
  children: string
}

const Paragraph: React.FC<ParagraphProps> = ({ children, classNames }) => {
  return (
    <p className={clsx("font-sans font-semibold text-sm text-gray-700", classNames)}>
      {children}
    </p>
  )
}

export default Paragraph
