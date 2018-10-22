import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import AddSet from './components/AddSet';
import axios from 'axios';
import ViewSets from './components/ViewSets';

class App extends Component {
  constructor() {
    super();

    this.state = {
      sets: []
    }
    //this.handleAddSet = this.handleAddSet.bind(this)
    this.deleteSet = this.deleteSet.bind(this)
  }

  componentDidMount() {
    axios.get('/api/sets').then(res => {
      console.log(res.data)
      this.setState({ sets: res.data });
    });
  }

deleteSet(id){
  console.log(id)
    axios.delete('/api/sets/' +id).then((res) => this.setState({sets: res.data}))
  }

  // handleAddSet(setObject) {
  //   // axios.post('api/sets/').then((res)=> 
  //   // this.setState({ sets: [...this.state.list, set]})
  //   this.setState({
  //     sets: set
  //   })
  //     axios.post('/api/sets', {body})
  //     .then(res=>this.setState({sets: res.data}))
  //   };
  updateSets = (data) => {
    this.setState({
      sets: data
    })
  }
  

  

  render() {
    return (
      <div className="App">
        <Header />
        <AddSet add={this.handleAddSet}
        sets={this.state.sets}
        updateSets={this.updateSets}
        />
        <ViewSets delete={this.deleteSet}
        sets={this.state.sets}/>
      </div>
    );
  }
}

export default App;
