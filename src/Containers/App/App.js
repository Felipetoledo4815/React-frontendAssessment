import React, { Component } from 'react';
import './App.sass';
import {getAllGnomes} from '../../Actions/GnomesActions';
import {connect} from 'react-redux';
import {Navbar} from 'react-bootstrap';
import GnomesList from '../Gnomes-list/Gnomes-list';
import Filters from '../Filters/Filters';

class App extends Component {

  constructor(props) {
    super(props);
    props.dispatch(getAllGnomes())
  }

  spinner() {
    return (
      <div className="spinner-grow" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    )
  }

  errorMessage() {
    return (
      <div>
        <p>{this.props.data.error}</p>
      </div>
    )
  }

  filterAndList() {
    return (
      <div>
        <Filters />
        <div className="row">
          <div className="col-md-12">
            <GnomesList />
          </div>
        </div>
      </div>
    )
  }

  render() {
    let data;

    if(this.props.data.fetching) {
      data = this.spinner();
    }
    else {
      if(this.props.data.fetched && !this.props.data.error){
        data = this.filterAndList();
      }
      else {
        data = this.errorMessage();
      }
    }

    return (
      <div className="full">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>Brastlewark Town</Navbar.Brand>
        </Navbar>
        <div className="App">
          <div className="container-fluid">
            {data}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
      data: state.gnomes,
      filters: state.filters
  };
}

export default connect(mapStateToProps)(App);
