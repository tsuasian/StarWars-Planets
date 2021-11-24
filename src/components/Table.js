import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import Loading from './Loading'
import paginationFactory from 'react-bootstrap-table2-paginator';
import '../css/Table.css'

class TableHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {

  }

  render() {
    const columns = [{
      dataField: 'name',
      text: 'Name',
      sort: true
    }, {
      dataField: 'population',
      text: 'Population'
    }, {
      dataField: 'rotation',
      text: 'Rotation Period'
    }, {
      dataField: 'orbital',
      text: 'Orbital Period'
    }, {
      dataField: 'diameter',
      text: 'Diameter'
    }, {
      dataField: 'climate',
      text: 'Climate'
    }, {
      dataField: 'surfaceWater',
      text: 'Surface Water'
    }]

    let element;
    if (this.props.planetData.length === 60) {
      let data = this.props.planetData
      data.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
      element = <BootstrapTable keyField='id' data={ this.props.planetData } columns={ columns } pagination={ paginationFactory() } />
    } else {
      element = <Loading />
    }

    return (
      <div className = "table-container">
        {element}
      </div>
    )
  }

}

export default TableHeader;

// {this.state.finishedLoading ?
// : <Loading />}
// if planetData props < 60 diplay loading --> display table when all data is loaded
