import axios from 'axios';
import _ from 'lodash';

export function getAllGnomes() {
    return function(dispatch) {
        dispatch({type:'FETCH_ALL_GNOMES'})
        axios.get('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json').then(response => {
            setGnomesGender(response.data.Brastlewark);
            dispatch({type:'FETCH_ALL_GNOMES_FULLFILLED', payload: response.data.Brastlewark})
            dispatch({type:'SET_GNOMES', payload: response.data.Brastlewark})
        })
        .catch(err => {
            dispatch({type:'FETCH_ALL_GNOMES_REJECTED', payload:"Unable to get gnome's list from Brastlewark"})
        })
    }
}

function setGnomesGender(gnomes) {
    let gnomeNames = gnomes.map(a => a.name.split(' ')[0]);
    gnomeNames = _.uniq(gnomeNames);
    for (let i = 0; i < gnomeNames.length; i++) {
      if (i % 2 === 0) {
        setGnomesGenderByName(gnomes, gnomeNames[i], 'Male');
      } else {
        setGnomesGenderByName(gnomes, gnomeNames[i], 'Female');
      }
    }
  }

function setGnomesGenderByName (allGnomes, name, gender) {
    let gnomes = _.filter(allGnomes, gnome => gnome.name.toLowerCase().indexOf(name.toLowerCase()) !== -1);
    for (let gnome of gnomes) {
        allGnomes[gnome.id].gender = gender;
    }
}