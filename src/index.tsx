import React, { Fragment, useImperativeHandle, useState } from 'react'
import usePortal from 'react-useportal'
import { useLockBodyScroll } from 'react-use'
import useModal from './hooks/useModal'
import { CircleSVG, Content, IconWrapper, IconPositionWrapper } from './style'

type RefContent = {
  menuStatus: boolean
  closeMenu: () => void
  openMenu: () => void
}

interface Props {
  backgroundColor: string
  children: (
    onClick: (event: React.MouseEvent) => void
  ) => React.ReactNode
  toogleComponent: (
    onClick: (event: React.MouseEvent) => void,
    status: boolean
  ) => React.ReactNode
  offsetX?: number
  offsetY?: number
}

export const ReactCircleModal = React.forwardRef<RefContent | null, Props>(
  (
    {
      backgroundColor,
      children,
      offsetX = 0,
      offsetY = 0,
      toogleComponent,
    },
    ref
  ) => {
    const { Portal } = usePortal()
    const { modalStatus, closeModal, openModal } = useModal(false)
    const [wrapperStatus, setWrapperStatus] = useState(modalStatus)
    const [positions, setPositions] = useState({ left: 0, top: 0 })

    useLockBodyScroll(modalStatus)
    useImperativeHandle(ref, () => ({
      menuStatus: modalStatus,
      closeMenu: () => {
        setTimeout(() => setWrapperStatus(false), 500)
        closeModal()
      },
      openMenu: () => {
        setWrapperStatus(true)
        openModal()
      }
    }))

    return (
      <Fragment>
        {toogleComponent((event) => {
          setPositions({ left: event.clientX, top: event.clientY })
          openModal()
          setWrapperStatus(true)
        }, modalStatus)}
        <Portal>
          <IconWrapper status={wrapperStatus}>
            <IconPositionWrapper
              style={{
                top: `${positions.top + offsetY}px`,
                left: `${positions.left + offsetX}px`
              }}
            >
              <CircleSVG bgColor={backgroundColor} status={modalStatus} />
            </IconPositionWrapper>
          </IconWrapper>
          <Content status={modalStatus}>
            {children(() => {
              setTimeout(() => setWrapperStatus(false), 500)
              closeModal()
            })}
          </Content>
        </Portal>
      </Fragment>
    )
  }
)

export default ReactCircleModal
