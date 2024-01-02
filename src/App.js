import React from "react";
import { CardListComponent } from "./components/cardList/card-list";
import { SearchBox } from "./components/serch-box/serch-box.component";
import './App.css'
class App extends React.Component{
    constructor(){
        super();
        this.state = {
            monster: [],
            searchFild: ''
        }
    }
 componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>this.setState({monster : users}))
 }
    render(){
  const {monster, searchFild} = this.state;
  const filterdMonster = monster.filter(mon=> (
    mon.name.toLowerCase().includes(searchFild.toLowerCase())
  ))
        return (
            <div className="App">
                <h1>MONSTER ROLODEX</h1>
                 <SearchBox  placeholder="search monester" handleChange={e=> this.setState({searchFild: e.target.value})}  />
              <CardListComponent monster = {filterdMonster} />
            </div>
        )
    }
}
export default App;

