function isValidDate(date) {
    return date.match(/^\d{2}[.]\d{2}[.]\d{4}$/)
}

export default isValidDate