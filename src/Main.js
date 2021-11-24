import './css/App.css';
import React, { Component } from 'react';
import Table from './components/Table';
import Navbar from './components/Navbar'
import Card from './components/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import axios from 'axios'

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      planetData: [],
      showTable: true,
      showGraph: false
    }
  }

  componentDidMount() {
    this.retrieveData("https://swapi.dev/api/planets/?page=1")
  }

  retrieveData(reqLink) {
    axios.get(reqLink)
      .then((resp) =>  {
        let rawData = resp.data.results
        let planets = []
        for (let i = 0; i < rawData.length; i++) {
          // format numbers later
          let planet = {}
          planet['name'] = rawData[i].name
          planet['population'] = rawData[i].population
          planet['rotation'] = rawData[i].rotation_period
          planet['orbital'] = rawData[i].orbital_period
          planet['diameter'] = rawData[i].diameter
          planet['climate'] = rawData[i].climate
          planet['surfaceWater'] = rawData[i].surface_water
          planets.push(planet)
        }

        this.setState({
          planetData: [...this.state.planetData, ...planets]
        })

        let link = resp.data.next
        if (link) {
          this.retrieveData(link)
        }
      })
      .catch((err) => {
        console.log("Error: ", err)
      })
  }

  formatNumbers(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  render() {
    return (
      <div className="main-container">
        <Navbar />
        <div className="card-container">
          <Card table = {<Table planetData = {this.state.planetData} />}/>
        </div>
      </div>
    )
  }
}

export default Main;

// How to Paginate:
// Divide data up by into sets of 10, pass a set of 10 elements to Table element
// Add pagination (BS) element and add onclicks to point to appropriate page
