import React from "react";
import {Header} from "./components";
import {Home, Cart} from "./pages/index";
import {Route} from "react-router-dom";
import {useDispatch} from "react-redux";
import axios from "axios";
import {setPizzas} from "./redux/actions/pizzas";

export default function App() {
    const dispatch = useDispatch()
    React.useEffect(() => {
        axios
            .get("http://localhost:3004/pizzas")
            .then(({data}) => {
                dispatch(setPizzas(data));
            })
    }, [])

    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Route path="/" component={Home} exact/>
                <Route path="/cart" component={Cart} exact/>
            </div>
        </div>
    );
}
// class App extends React.Component {
//   componentDidMount() {
//
//   render() {
//
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     items: state.pizzas.items,
//     filters: state.filters,
//   }
// }
//
// const mapDispatchToProps = (dispatch) => {
//   return{
//     savePizzas: (items) => dispatch(setPizzasAction(items)),
//   }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(App);
