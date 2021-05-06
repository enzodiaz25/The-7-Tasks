function summarizeFlight(flight) {
    let message = `You have booked a ${flight.type} `
    switch(flight.type) {
        default:
        case "one-way flight":
            if (flight.departure.isValid) {
                message += `on ${flight.departure.date}.`
            } else {
                message = "Invalid departure date."
            }
            break
        case "return flight":
            if (flight.departure.isValid && flight.return.isValid) {
                message += `on ${flight.departure.date} with a return date for ${flight.return.date}.`
            } else {
                message = "Invalid departure or return date."
            }
    }
    return message
}

export default summarizeFlight