import png from "/react.png"
import Button from "./Button"
import Create from "./Create"
import List from "./List"

function App() {
  return (
    <div>
      <img src={png} alt="" />
      <h1>React</h1>
      <p>A blibioteca para interfaces de usuário web e nativas</p>
      <Button/>
      <hr />
      <Create/>
      <hr />
      <h2>Escreva componentes com código de marcação</h2>
      <p>componentes React são funções javascript. A sintaxe de marcação é chamada de JSX. É uma extensão da sintaxe do javascript popularizada pelo React</p>
      <hr />
      <List/>
    </div>
  )
}

export default App
