import React from "react";
import { Header } from "./components";
import { Home, Cart } from "./pages/index";
import { Route } from "react-router-dom";

import {connect} from 'react-redux';
import axios from "axios";
// import store from "./redux/store";
import { setPizzas as setPizzasAction} from "./redux/actions/pizzas";

// function App() {
//   const [pizzas, setPizzas] = React.useState([]);
//   React.useEffect(() => {
//     axios.get('http://localhost:3000/db.json')
//       .then(({data}) => setPizzas(data.pizzas));
//   }, [setPizzas]);
//   console.log(pizzas);
//   return (
//     <div className="wrapper">
//       <Header />
//       <div className="content">
//         <Route path="/" render={() => <Home items={pizzas} />} exact />
//         <Route path="/cart" component={Cart} exact />
//       </div>
//     </div>
//   );
// }
class App extends React.Component {
  componentDidMount() {
    axios
      .get("http://localhost:3000/db.json")
      .then(({ data }) => this.props.savePizzas(data.pizzas));
  }
  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route path="/" render={() => <Home items={this.props.items} />} exact />
          <Route path="/cart" component={Cart} exact />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.pizzas.items
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    savePizzas: (items) => dispatch(setPizzasAction(items)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
