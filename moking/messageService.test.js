jest.mock('./dateUtils');
console.log('1. dateUtils is being mocked above');


const dateUtils = require('./dateUtils');
console.log('2. imported mocked dateUtils module', dateUtils);

const {generateWelcomeMessage} = require('./messageService');
console.log('3.  Imported the general welcome message from message service');
//moking
 
test('should generate welcome message with mocked date', ()=>{
    dateUtils.getFormattedDate.mockReturnValue('April 8, 2025');
console.log('Mocked getFormattedDate to return 21th April 2025');

    const result  = generateWelcomeMessage('Jane', new Date('2025-04-08'));
    console.log('called GenerateWelcome message', result);

    expect(dateUtils.getFormattedDate).toHaveBeenCalled();

    expect(result).toBe('Hello Jane, today is April 8, 2025');
})