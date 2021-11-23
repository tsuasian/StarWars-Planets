import './css/App.css';
import React, { Component } from 'react';
import Table from './components/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
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
    let reqLink = "https://swapi.dev/api/planets/?page=1"
    while (pageNumber <= 6) {
      axios.get(`https://swapi.dev/api/planets/?page=${pageNumber}`)
        .then((resp) =>  {
          let planets = resp.data.results
          this.setState({
            planetData: [...this.state.planetData, ...planets]
          })
          console.log(resp.data.next)
          reqLink = resp.data.next
          console.log(reqLink)
        })
        .catch((err) => {
          console.log("Error: ", err)
        })
      pageNumber++;
    }
  }

  processPages() {
    let tableElements = []
    let i = 0
    while (i < this.state.planetData.length) {
      // 0-9,10-19
      let dataSet = this.state.planetData.slice(i, i + 10)
      tableElements.push(<Table planetData = {dataSet} />)
    }
    return tableElements
  }


  render() {
    let tableElements = this.processPages()
    console.log(tableElements)
    return (
      <div className="main-container">
        {tableElements}
      </div>
    )
  }
}

export default Main;

// How to Paginate:
// Divide data up by into sets of 10, pass a set of 10 elements to Table element
// Add pagination (BS) element and add onclicks to point to appropriate page
