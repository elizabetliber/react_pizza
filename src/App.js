import React from "react";
import { Header } from "./components";
import { Home, Cart } from "./pages/index";
import { Route } from "react-router-dom";
import axios from "axios";

function App() {
  const [pizzas, setPizzas] = React.useState([]);
  React.useEffect(() => {
    axios.get('http://localhost:3000/db.json')
      .then(({data}) => setPizzas(data.pizzas));
  }, [setPizzas]);
  console.log(pizzas);
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" render={() => <Home items={pizzas} />} exact />
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
  );
}

export default App;
