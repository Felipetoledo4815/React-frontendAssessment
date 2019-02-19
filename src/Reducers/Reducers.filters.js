import gnomeFilter from '../Containers/Filters/GnomeFilter'

const initialValue = {
    name: '',
    hairColor: '',
    gender: '',
    profession1: '',
    profession2: '',
    filteredGnomes: [],
    allGnomes: []
}

export default function (state=initialValue, action) {
    switch(action.type) {
        case 'UPDATE_NAME':
          return {...state, name:action.payload}
        case 'UPDATE_HAIR_COLOR':
          return {...state, hairColor:action.payload};
        case 'UPDATE_GENDER':
          return {...state, gender:action.payload};
        case 'UPDATE_PROFESSION1':
          return {...state, profession1:action.payload};
        case 'UPDATE_PROFESSION2':
          return {...state, profession2:action.payload};
        case 'SET_GNOMES':
          return {...state, allGnomes:action.payload, filteredGnomes:action.payload};
        case 'FILTER_GNOMES':
          return {...state, filteredGnomes:gnomeFilter(state.allGnomes, state.name, state.hairColor, state.gender, 
            state.profession1, state.profession2)};
        default:
          break;
    }
    return state;
  }