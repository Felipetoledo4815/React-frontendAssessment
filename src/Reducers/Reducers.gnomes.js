const initialValue = {
  fetching: false,
  fetched: false,
  error: false
}

export default function (state=initialValue, action) {
  switch(action.type) {
      case 'FETCH_ALL_GNOMES':
        return {...state, fetching:true}
      case 'FETCH_ALL_GNOMES_FULLFILLED':
        return {...state, fetching:false, fetched:true};
      case 'FETCH_ALL_GNOMES_REJECTED':
        return {...state, fetching:false, fetched:true, error:action.payload};
      default:
        break;
  }
  return state;
}