import React, { Component } from 'react';
import './GnomeProfile.sass';

export default class GnomeProfile extends Component {

  getArrayAsString(array, type) {
    if(!array || array.length === 0) {
      return "No " + type
    }
    else {
      return array.join(", ");
    }
  }

  render() {

    let gnome = this.props.gnome;

    return (
      <div className="GnomeProfile col-md-6 col-lg-4 col-xl-3">
        <div className="card">
          <img src={gnome.thumbnail} className="card-img-top" alt="Loading..."></img>
          <div className="card-body">
            <h5 className="card-title">{gnome.name}</h5>
            <p className="card-text">
              <b>Age:</b> {gnome.age}
              <br></br>
              <b>Weight:</b> {gnome.weight}
              <br></br>
              <b>Height:</b> {gnome.height}
              <br></br>
              <b>Hair color:</b> {gnome.hair_color}
              <br></br>
              <b>Gender:</b> {gnome.gender}
              <br></br>
              <b>Professions:</b> {this.getArrayAsString(gnome.professions, "profession")}
              <br></br>
              <b>Friends:</b> {this.getArrayAsString(gnome.friends, "friend")}
              <br></br>
            </p>
          </div>
        </div>
      </div>
    )
  }
}
