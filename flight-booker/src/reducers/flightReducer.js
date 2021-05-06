import isValidDate from "../helpers/isValidDate"
import actions from "../actions/actions"

function flightReducer(prevState, action) {
    switch(action.type) {
        default:
        case actions.SET_TYPE_ONE_WAY:
            return  {
                ...prevState,
                type: "one-way flight",
                return: {
                    isValid: false,
                    date: "",
                }
            }
        case actions.SET_TYPE_RETURN:
            return {
                ...prevState,
                type: "return flight",
            }
        case actions.SET_DEPARTURE_DATE:
            let departureDate = action.date
            return {
                ...prevState,
                departure: {
                    date: departureDate,
                    isValid: isValidDate(departureDate)
                }
            }
        case actions.SET_RETURN_DATE:
            const returnDate = action.date
            return {
                ...prevState,
                return: {
                    date: returnDate,
                    isValid: isValidDate(returnDate)
                }
            }
    }
}

export default flightReducer