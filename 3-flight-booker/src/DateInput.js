import PropTypes from "prop-types"
import { useMemo } from "react"

function DateInput ({
    id,
    label,
    date,
    disabled,
    onChangeDate,
    isValid
}) {  
    const isValidStyle = useMemo(() => {
        if (disabled) {
            return ""
        }
        if (!date || !isValid) {
            return "invalidDate"
        }
    }, [isValid, disabled, date])

    return (
        <div className="flight-date">
            <label htmlFor={id}>{label}</label>
            <input
                className={isValidStyle}
                value={date}
                id={id}
                placeholder="dd.mm.yyyy"
                maxLength="10"
                disabled={disabled}
                onChange={onChangeDate}>
            </input>
        </div>
    )
}

DateInput.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string.isRequired,
    date: PropTypes.object.isRequired,
    disabled: PropTypes.bool,
    onChangeDate: PropTypes.func.isRequired,
    isValid: PropTypes.bool.isRequired
}

export default DateInput