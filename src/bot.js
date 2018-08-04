const Eris = require('eris');
const config = require('./config');
const http = require('http');
const port = process.env.PORT;


// Server keeps the bot up with Uptime Robot pinging it
const requestHandler = (request, response) => {
  console.log(request.url);
  response.end('server requested');
}

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }
  console.log(`server is listening on ${port}`);
});

const bot = new Eris.CommandClient(process.env.token, {}, {
  prefix: config.prefix,
  ignoreSelf: true,
  ignoreBots: true,
  defaultHelpCommand: false,
  getAllUsers: true,
  defaultCommandOptions: {
    caseInsensitive: true,
  },
});

module.exports = bot;
