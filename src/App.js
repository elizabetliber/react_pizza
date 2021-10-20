import React from "react";
import { Header } from "./components";
import { Home, Cart } from "./pages/index";
import { Route } from "react-router-dom";

function App() {
  const [pizzas, setPizzas] = React.useState([]);
  React.useEffect(() => {
    fetch("http://localhost:3000/db.json")
      .then((res) => res.json())
      .then((json) => setPizzas(json.pizzas));
  }, []);
  console.log(pizzas);
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" component={Home} exact />
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
  );
}

export default App;
