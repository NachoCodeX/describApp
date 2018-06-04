export function getID(state){
    return state.auth.user._id || '';
}
export function getAjustadorID(state){
    return state.auth.user.ajustador._id || '';
}

export function getRole(state){
    return state.auth.user.role || '';
}


export function getAccidents(state){
    const accidents=state.auth.user.accidents || '';

    return accidents.filter(accident=>accident.isActive)

}


export function getFirstname(state){
    return state.auth.user.firstName || '';

}

export function getLastname(state){
    return state.auth.user.lastName || '';
}


export function getEmail(state){
    return state.auth.user.email || '';
}

export function getAge(state){
    return state.auth.user.age || '';
}