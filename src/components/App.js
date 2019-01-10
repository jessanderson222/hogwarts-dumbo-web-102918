import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import Hog from "./Hog";
import SearchForm from "./SearchForm";

class App extends Component {
  state = {
    searchTerm: "",
    hogArr: hogs
  };

  changeHandler = e => {
    let search = e.target.value;
    let newArr = [...hogs].filter(hog =>
      hog.name.toUpperCase().includes(search.toUpperCase())
    );
    this.setState({
      hogArr: newArr
    });
  };
  hogComponentArray = () => {
    return this.state.hogArr.map(hog => {
      return <Hog key={hog.name} hog={hog} />;
    });
  };

  render() {
    console.log(this.state.hogArr);
    return (
      <div className="App">
        <Nav />
        <br />
        <SearchForm
          value={this.state.searchTerm}
          changeHandler={this.changeHandler}
        />
        <br />
        <br />
        <div className="ui grid container">{this.hogComponentArray()}</div>
      </div>
    );
  }
}

export default App;
