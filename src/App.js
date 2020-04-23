import React, { Component } from "react";
import { CardList } from "./component/card-list/card-list.component";
import { SearchBox } from "./component/search-box/seach-box.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchText: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((monsters) => this.setState({ monsters }));
  }

  handleChange = (e) => {
    this.setState({ searchText: e.target.value });
  };

  render() {
    const { monsters, searchText } = this.state;

    const filterMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monster"
          handleChange={this.handleChange}
        />

        <CardList monsters={filterMonsters} />
      </div>
    );
  }
}

export default App;
