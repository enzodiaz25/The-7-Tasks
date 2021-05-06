import actions from "./actions/actions"

function FlightTypeSelect({ onChangeType }) {
    return (
        <select required onChange={onChangeType}>
            <option disabled selected value="">
                -- Choose flight type --
            </option>
            <option value={actions.SET_TYPE_ONE_WAY}>
                One way flight
            </option>
            <option value={actions.SET_TYPE_RETURN}>
                Return flight
            </option>
        </select>
    )
}

export default FlightTypeSelect;