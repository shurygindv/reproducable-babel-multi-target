const context = require.context('./src/');
const keys = context.keys();

const locale = {};

keys.forEach(key => Object.assign(locale, require(`./src${key.substr(1)}`)));

export default locale;
