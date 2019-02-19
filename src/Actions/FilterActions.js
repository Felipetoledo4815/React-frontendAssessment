export function updateName(name) {
    return function(dispatch) {
        dispatch({type:'UPDATE_NAME', payload: name});
        dispatch({type:'FILTER_GNOMES'});
    }
}

export function updateHairColor(hairColor) {
    return function(dispatch) {
        dispatch({type:'UPDATE_HAIR_COLOR', payload: hairColor});
        dispatch({type:'FILTER_GNOMES'});
    }
}

export function updateGender(gender) {
    return function(dispatch) {
        dispatch({type:'UPDATE_GENDER', payload: gender});
        dispatch({type:'FILTER_GNOMES'});
    }
}

export function updateProfession1(profession) {
    return function(dispatch) {
        dispatch({type:'UPDATE_PROFESSION1', payload: profession});
        dispatch({type:'FILTER_GNOMES'});
    }
}

export function updateProfession2(profession) {
    return function(dispatch) {
        dispatch({type:'UPDATE_PROFESSION2', payload: profession});
        dispatch({type:'FILTER_GNOMES'});
    }
}