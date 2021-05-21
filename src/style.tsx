import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Circle } from './circle.svg'

interface ModalStatus {
  status: boolean
}

interface ModalBgColor {
  bgColor: string
}

export const Content = styled.div<ModalStatus>`
  box-sizing: border-box;
  display: flex;
  height: 100vh;
  left: 0;
  max-height: 100vh;
  max-width: 100vw;
  opacity: ${({ status }) => (status ? 1 : 0)};
  overflow: auto;
  padding: 50px 10px;
  pointer-events: ${({ status }) => (status ? 'auto' : 'none')};
  position: fixed;
  top: 0;
  transform: ${({ status }) => (status ? 'none' : 'translateY(20px)')};
  transition: opacity 0.5s, transform 0.3s;
  width: 100%;
  z-index: 1000;
`

export const IconWrapper = styled.div<ModalStatus>`
  height: 100vh;
  left: 0;
  max-height: 100vh;
  max-width: 100vw;
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: ${({ status }) => (status ? 999 : -1)};
`

export const IconPositionWrapper = styled.div`
  pointer-events: none;
  position: absolute;
  transform: translate(-50%, -50%);
`

export const CircleSVG = styled(
  ({ bgColor, status, ...props }: ModalStatus & ModalBgColor) => (
    <Circle {...props} />
  )
)`
  fill: ${({ bgColor }) => bgColor};
  height: 60px;
  transform: ${({ status }) =>
    status ? 'scale(100) translate3d(1%, 1%, 0)' : 'scale(0)'};
  transform-origin: center;
  transition: transform 0.5s;
  width: 60px;
`
