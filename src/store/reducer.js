const INTIAL_STATE = {
    covid: []
}

export default (state = INTIAL_STATE, action) => {
    switch (action.type) {
        case "UPDATEDATA":
            return ({
                ...state,
                covid: action.covid
            })
        default:
        return state
    }
}