import React, { Component } from 'react';
import './App.sass';
import axios from 'axios';
import { Navbar } from 'react-bootstrap';
import Gnomes from './Gnomes/Gnomes';
import _ from 'lodash';
import gnomeFilter from './Gnomes/GnomeFilter'

class App extends Component {

  constructor() {
    super();
    this.state = {
      gnomes: [Object],
      errorMessage: false,
      loading: true,
      open: false,
      name: '',
      hairColor: '',
      gender: '',
      profession1: '',
      profession2: ''
    }
    this.getAllGnomes();
  }

  getAllGnomes() {
      axios.get('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json').then(response => {
        this.setState({ gnomes: response.data.Brastlewark });
        this.setGnomesGender();
        this.setState({loading: false});
      })
    .catch(err => {
      this.setState({loading: false});
      this.setState({errorMessage: "Unable to get gnome's list from Brastlewark"});
    });
  }

  setGnomesGender() {
    let gnomeNames = this.state.gnomes.map(a => a.name.split(' ')[0]);
    gnomeNames = _.uniq(gnomeNames);
    for (let i = 0; i < gnomeNames.length; i++) {
      if (i % 2 === 0) {
        this.setGnomesGenderByName(gnomeNames[i], 'Male');
      } else {
        this.setGnomesGenderByName(gnomeNames[i], 'Female');
      }
    }
  }

  setGnomesGenderByName (name, gender) {
    let allGnomes = this.state.gnomes;
    let gnomes = _.filter(this.state.gnomes, gnome => gnome.name.toLowerCase().indexOf(name.toLowerCase()) !== -1);
    for (let gnome of gnomes) {
      allGnomes[gnome.id].gender = gender;
    }
    this.setState({gnomes: allGnomes})
  }

  updateName(event) {
    this.setState({name: event.target.value});
  }

  updateHairColor(event) {
    this.setState({hairColor: event.target.value});
  }

  updateGender(event) {
    this.setState({gender: event.target.value});
  }

  updateProfession1(event) {
    this.setState({profession1: event.target.value});
  }

  updateProfession2(event) {
    this.setState({profession2: event.target.value});
  }

  render() {
    let filteredGnomes = gnomeFilter(this.state.gnomes, this.state.name, this.state.hairColor, this.state.gender,
      this.state.profession1, this.state.profession2);
    
    let data;

    if(this.state.loading) {
      data = 
        <div className="spinner-grow" role="status">
          <span className="sr-only">Loading...</span>
        </div>
    }
    else {
      if(!this.state.errorMessage){
        data =
          <div className="App">
            <div className="container-fluid">

              <div className="row">
                <div className="col-md-12">
                  <div className="accordion">
                    <div className="card">
                      <div className="card-header" aria-expanded={this.state.open} onClick={() => this.setState({ open: !this.state.open })}>
                        Filters
                      </div>
                      
                      <div className={this.state.open ? "collapse show" : "collapse"}>
                        <div className="card-body">
                          <form>
                            <div className="form-row">
                              <div className="form-group col-md-4 col-lg-3 col-xl-2">
                                <label htmlFor="name">Name</label>
                                <input className="form-control" id="name" value={this.state.name} onChange={this.updateName.bind(this)}></input>
                              </div>
                              <div className="form-group col-md-4 col-lg-3 col-xl-2">
                                <label htmlFor="hair-color">Hair color</label>
                                <input className="form-control" id="hair-color" value={this.state.hairColor} onChange={this.updateHairColor.bind(this)}></input>
                              </div>
                              <div className="form-group col-md-4 col-lg-3 col-xl-2">
                                <label htmlFor="gender">Gender</label>
                                <input className="form-control" id="gender" value={this.state.gender} onChange={this.updateGender.bind(this)}></input>
                              </div>
                              <div className="form-group col-md-4 col-lg-3 col-xl-2">
                                <label htmlFor="profession1">Profession 1</label>
                                <input className="form-control" id="profession1" value={this.state.profession1} onChange={this.updateProfession1.bind(this)}></input>
                              </div>
                              <div className="form-group col-md-4 col-lg-3 col-xl-2">
                                <label htmlFor="profession2">Profession 2</label>
                                <input className="form-control" id="profession2" value={this.state.profession2} onChange={this.updateProfession2.bind(this)}></input>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <Gnomes gnomes={filteredGnomes} numberOfGnomes={this.state.gnomes.length}/>
                </div>
              </div>

            </div>
          </div>
      }
      else {
        data = 
          <div>
            <p>{this.state.errorMessage}</p>
          </div>
      }
    }

    return (
      <div className="full">

        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>Brastlewark Town</Navbar.Brand>
        </Navbar>

        {data}
      </div>
    );
  }
}


export default App;
