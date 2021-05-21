import React from 'react'
import ReactCircleModal from 'react-circle-modal'

const App = () => {
  return (
    <ReactCircleModal
      backgroundColor="#ff0000"
      toogleComponent={onClick => (
        <button onClick={onClick}>
          Component that when clicked the modal opens
        </button>
      )}
      closeComponent={onClick => (
        <button onClick={onClick}>
          Component that when clicked closes the modal
        </button>
      )}
    >
      <p>
        Content inside of modal
      </p>
    </ReactCircleModal>
  )
}

export default App
