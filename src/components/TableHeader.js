import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import '../css/Table.css'

class TableHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      planetData: []
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

    return (
      <div className = "table-container">
        <BootstrapTable keyField='id' data={ this.props.planetData } columns={ columns } pagination={ paginationFactory() } bootstrap4 = 'true' />
      </div>
    )
  }

}

export default TableHeader;


// if planetData props < 60 diplay loading --> display table when all data is loaded
