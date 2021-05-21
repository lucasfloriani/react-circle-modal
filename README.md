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
      backgroundColor="#97349a"
      toogleComponent={onClick => (
        <button onClick={onClick}>
          Click here to open modal
        </button>
      )}
      // Optional fields and their default values
      offsetX={0}
      offsetY={0}
    >
      {(onClick) => (
        <div style={{ backgroundColor: '#fff', padding: '1em' }}>
          <p>
            Content inside of modal
          </p>
          <button onClick={onClick}>
            Click here to close modal
          </button>
        </div>
      )}
    </ReactCircleModal>
  )
}

export default Example
```

## License

MIT © [lucasfloriani](https://github.com/lucasfloriani)
