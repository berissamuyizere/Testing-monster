const dateUtils = require('./dateUtils')

function generateWelcomeMessage(username, date){
    const formattedDate = dateUtils.getFormattedDate(date);
    return `Hello ${username}, today is ${formattedDate}`
}

module.exports = {generateWelcomeMessage};