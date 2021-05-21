import { useState } from 'react'

const useModal = (initialStatus = false) => {
  const [status, setStatus] = useState(initialStatus)

  return {
    modalStatus: status,
    closeModal: () => setStatus(false),
    openModal: () => setStatus(true)
  }
}

export default useModal
