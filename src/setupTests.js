// setup file
var Enzyme = require('enzyme');
var Adapter = require('enzyme-adapter-react-16');

jest.unmock('axios');

Enzyme.configure({ adapter: new Adapter() });

