import "./styles/App.css";
import { Card } from "./components/Card";
import { data } from "./helpers/Data";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="container mx-auto mt-4">
      <div className="mt-4" style={ {color: "#fff", width: "100%", display: "flex", justifyContent: "center"} }>
        <h3> { `Contador => ${ counter }` } </h3>
      </div>
      <div style={ {color: "#fff", width: "100%", display: "flex", justifyContent: "space-between"} }>
        <button type="button" class="btn btn-danger" onClick={ () => { setCounter( counter - 1 ) } }>Decrementar</button>
        <button type="button" class="btn btn-primary" onClick={ () => { setCounter( 0 ) } }>Reset</button>
        <button type="button" class="btn btn-success" onClick={ () => { setCounter( counter + 1 ) } }>Incrementar</button>
      </div>
      <div className="row mt-4">
        {data.map((element) => (
          <Card
            title={element.title}
            image={element.image}
            text={element.text}
            counterValue={counter}
            key={ element.id }
          ></Card>
        ))}
      </div>
    </div>
  );
}

export default App;
