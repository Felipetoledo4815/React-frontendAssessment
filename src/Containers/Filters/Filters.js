import React, {Component} from 'react';
import * as filterActions from '../../Actions/FilterActions';
import {connect} from 'react-redux';

class Filters extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }

  updateName(event) {
    this.props.dispatch(filterActions.updateName(event.target.value));
  }

  updateHairColor(event) {
    this.props.dispatch(filterActions.updateHairColor(event.target.value));
  }

  updateGender(event) {
    this.props.dispatch(filterActions.updateGender(event.target.value));
  }

  updateProfession1(event) {
    this.props.dispatch(filterActions.updateProfession1(event.target.value));
  }

  updateProfession2(event) {
    this.props.dispatch(filterActions.updateProfession2(event.target.value));
  }

  render() {
    return(
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
    )
  }
}

export default connect()(Filters);