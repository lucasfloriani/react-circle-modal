import { useState } from 'react'
import ReactCircleModal from 'react-circle-modal'
import { SketchPicker, ColorResult } from 'react-color';
import './index.css';

import Button from './components/Button';
import Container from './components/Container';
import Paragraph from './components/Paragraph';

const App = () => {
  const [selectedColor, setSelectedColor] = useState('#97349a');

  const handleChangeComplete = (color: ColorResult) => {
    setSelectedColor(color.hex);
  };

  return (
    <Container classNames="py-4 h-screen grid place-content-center gap-6">
      <SketchPicker
        color={selectedColor}
        onChangeComplete={handleChangeComplete}
      />
      <ReactCircleModal
        backgroundColor={selectedColor}
        toogleComponent={onClick => (
          <Button onClick={onClick} classNames="border-none" style={{ backgroundColor: selectedColor }}>
            Click here to open modal
          </Button>
        )}
      >
        {(onClick) => (
          <Container classNames="bg-white py-4 px-2 rounded grid gap-4">
            <Paragraph classNames="text-xl">
              Content inside of modal
            </Paragraph>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima voluptas repellendus, cupiditate suscipit nisi corporis nam est eveniet dolores distinctio nihil a iure dolorem deserunt qui voluptatum excepturi vel veniam.
              Earum quibusdam illum labore deserunt eaque voluptates sed quaerat iure culpa mollitia, aliquam magnam atque enim corporis nisi quas, voluptatem harum officiis perspiciatis natus dolorum sapiente tenetur repellat! Debitis, rem.
              Quo modi eius nostrum vel harum! Optio nulla nihil facilis, velit voluptatum cum dolore sequi enim, ad vel debitis iste libero similique earum commodi, at pariatur. Eveniet, ut. Architecto, ut.
              Modi incidunt numquam illo fuga aliquid molestiae sed placeat, sunt animi. Totam, repellat aliquam? Debitis vero obcaecati quas incidunt dolorem ipsa consequatur, odio autem, sequi accusamus eveniet velit, dignissimos consectetur.
              Optio eos dolore iste possimus assumenda soluta exercitationem cumque quidem? Voluptate alias fuga dignissimos! Consequuntur dolorem sunt consectetur officia alias! Ad repudiandae repellat ducimus optio magnam ut impedit voluptatum assumenda!
              Iure aperiam odio nisi molestiae deleniti, dolor id quo molestias, dolore consequatur minus tempore in ipsum quis eum nemo iste quisquam accusantium temporibus, quaerat fuga atque nostrum maxime? Eaque, repellat?
              Nesciunt eveniet quod quae earum nobis aliquid voluptatibus nulla illum provident similique nam beatae nostrum fugiat possimus vel officia dicta magni labore debitis omnis, ratione laboriosam atque error. Doloremque, consectetur?
              Blanditiis doloribus assumenda labore nesciunt iste repudiandae, esse ratione possimus voluptate tempore minus voluptatibus nemo quos. Culpa explicabo odio error, reiciendis dolor provident asperiores doloremque quos non, tempore, odit commodi.
              Laboriosam aliquid nesciunt illo quam minima dicta perspiciatis, sunt nam minus reiciendis eos quaerat necessitatibus nulla recusandae tenetur mollitia! Illo est voluptates repellat delectus excepturi sit, aliquid laudantium natus sint?
              Quasi tempore sequi ipsum, unde omnis fugiat quibusdam itaque quaerat necessitatibus at rerum modi nulla accusamus, corporis consectetur, tempora sint ut eum quisquam. Consectetur fugiat tempore expedita doloremque dolor ipsum!
            </Paragraph>
            <Button onClick={onClick}>
              Click to close modal
            </Button>
          </Container>
        )}
      </ReactCircleModal>
    </Container>
  )
}

export default App
