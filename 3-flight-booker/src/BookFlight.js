import { useReducer } from "react"
import DateInput from "./DateInput"
import FlightTypeSelect from "./FlightTypeSelect"
import flightReducer from "./reducers/flightReducer"
import summarizeFlight from "./helpers/summarizeFlight"
import actions from "./actions/actions"
import './BookFlight.css';

const defaultFlightState = {
  type: "one-way flight",
  departure: {
    date: "22.09.1994",
    isValid: true,
  },
  return: {
    date: "",
    isValid: false,
  }
}

function BookFlight() {
  const [flight, dispatchFlight] = useReducer(flightReducer, defaultFlightState)

  function onChangeType(e) {
    const flightTypeAction = e.target.value
    dispatchFlight({ type: flightTypeAction })
  }

  function onChangeDate(e, newDateAction) {
    const newDate = e.target.value
  
    dispatchFlight({
      type: newDateAction,
      date: newDate
    })
  }

  function handleBook(e) {
    e.preventDefault()
    let message = summarizeFlight(flight)
    alert(message)
  }

  return (
    <div className="book-flight-container">
      <form onSubmit={handleBook} className="book-flight">
        <FlightTypeSelect onChangeType={onChangeType}/>
        
        <DateInput
          id="departure"
          label="Flight date: "
          date={flight.departure.date}
          onChangeDate={(e) => onChangeDate(e, actions.SET_DEPARTURE_DATE)}
          isValid={flight.departure.isValid}
        />
        <DateInput
          id="return"
          label="Flight return: "
          date={flight.return.date}
          disabled={flight.type !== "return flight"}
          onChangeDate={(e) => onChangeDate(e, actions.SET_RETURN_DATE)}
          isValid={flight.return.isValid}
        />

        <button className="book-btn">Book</button>
      </form>
    </div>
  );
}

export default BookFlight;