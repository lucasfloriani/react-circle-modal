# react-circle-modal

> Modal component with circle animation with many options

[![NPM](https://img.shields.io/npm/v/react-circle-modal.svg)](https://www.npmjs.com/package/react-circle-modal) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm i react-circle-modal
yarn add react-circle-modal
```

## Usage

```tsx
import React from 'react'
import ReactCircleModal from 'react-circle-modal'

const Example = () => {
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

export default Example
```

## License

MIT © [lucasfloriani](https://github.com/lucasfloriani)
