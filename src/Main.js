import './css/App.css';
import React, { Component } from 'react';
import Table from './components/Table';
import axios from 'axios'

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      planetData: []
    }
  }

  componentDidMount() {
    this.retrieveData()
  }

  retrieveData() {
    let pageNumber = 1
    while (pageNumber <= 6) {
      axios.get(`https://swapi.dev/api//planets/?page=${pageNumber}`)
        .then((resp) =>  {
          let planets = resp.data.results
          this.setState({
            planetData: [...this.state.planetData, ...planets]
          })
        })
        .catch((err) => {
          console.log("Error: ", err)
        })
      pageNumber++;
    }
  }

  render() {
    return (
      <div className="main-container">
        <Table planetData = {this.state.planetData}/>
      </div>
    )
  }
}

export default Main;
