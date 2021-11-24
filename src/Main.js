import './css/App.css';
import React, { Component } from 'react';
import Table from './components/Table';
import Navbar from './components/Navbar'
import Card from './components/Card'
import Graph from './components/Graph'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import axios from 'axios'

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      planetData: [],
      showTable: JSON.parse(localStorage.getItem('showTable')),
      showGraph: JSON.parse(localStorage.getItem('showGraph'))
    }
    this.showGraphHandler.bind(this)
    this.showTableHandler.bind(this)
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
          planet['key'] = rawData[i].name
          planet['name'] = rawData[i].name
          planet['population'] = !isNaN(rawData[i].population) ? this.formatNumbers(rawData[i].population) : rawData[i].population
          planet['rotation'] = !isNaN(rawData[i].rotation_period) ? this.formatNumbers(rawData[i].rotation_period) : rawData[i].rotation_period
          planet['orbital'] = !isNaN(rawData[i].orbital_period) ? this.formatNumbers(rawData[i].orbital_period) : rawData[i].orbital_period
          planet['diameter'] = !isNaN(rawData[i].diameter) ? this.formatNumbers(rawData[i].diameter) : rawData[i].diameter
          planet['climate'] = rawData[i].climate
          planet['surfaceWater'] = !isNaN(rawData[i].surface_water) ? this.formatNumbers(rawData[i].surface_water) : rawData[i].surface_water
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

  showGraphHandler(e) {
    e.preventDefault();
    this.setState({
      showTable: false,
      showGraph: true
    }, () => {
      localStorage.setItem('showTable', JSON.stringify(this.state.showTable))
      localStorage.setItem('showGraph', JSON.stringify(this.state.showGraph))
    });
  }

  showTableHandler(e) {
    e.preventDefault();
    this.setState({
      showTable: true,
      showGraph: false
    }, () => {
      localStorage.setItem('showTable', JSON.stringify(this.state.showTable))
      localStorage.setItem('showGraph', JSON.stringify(this.state.showGraph))
    });
  }

  render() {
    return (
      <div className="main-container">
        <Navbar graphClick = {(e) => this.showGraphHandler(e)} tableClick = {(e) => this.showTableHandler(e)}/>
        <div className="card-container">
          {this.state.showTable ? <Card table = {<Table planetData = {this.state.planetData} />}/>
          : <Graph planetData = {this.state.planetData}/>}
        </div>
      </div>
    )
  }
}

export default Main;
