// =====================================================================
// server.js  —  our first Express web server
//
// Setup (one time, inside this folder):
//     npm install            (downloads Express into node_modules/)
//
// Run:
//     npm start              (same as: node server.js)
//     npm run dev            (restarts automatically when you save)
//
// Then open http://localhost:3000 in your browser.
// Stop the server with Ctrl + C in the terminal.
// =====================================================================

// 1. Load Express. `require` finds it in the node_modules folder that
//    `npm install` created.
const express = require('express');
const path = require('path');

// 2. Create the application. `app` is our web server.
const app = express();

// 3. Choose a PORT. Think of the computer as an apartment building:
//    the address is "localhost" (this computer) and the port is the
//    apartment number. Our server lives in apartment 3000.
const PORT = 3000;


// ---------------------------------------------------------------------
// MIDDLEWARE: code that runs for EVERY request, before the routes.
// This one logs each request in the TERMINAL (not the browser console!).
// ---------------------------------------------------------------------
app.use(function (req, res, next) {
  console.log(new Date().toLocaleTimeString(), req.method, req.url);
  next(); // pass the request on to the next matching route
});


// ---------------------------------------------------------------------
// ROUTES: "When someone asks for THIS path, run THIS function."
//
//   app.get(path, function (req, res) { ... })
//     req = the REQUEST  (what the browser sent us)
//     res = the RESPONSE (what we send back)
//
// Compare with the browser:
//   button.addEventListener('click', function (event) { ... })
// A route is an event listener for a URL!
// ---------------------------------------------------------------------

// Route A: plain text
// Visit: http://localhost:3000/hello
app.get('/hello', function (req, res) {
  res.send('Hello from the server!');
});

// Route B: JSON data. Servers usually send DATA, and the browser decides
// how to display it. res.json turns a JS object into JSON text.
// Visit: http://localhost:3000/api/time
app.get('/api/time', function (req, res) {
  res.json({
    message: 'This time comes from the SERVER computer',
    serverTime: new Date().toLocaleTimeString(),
    serverPlatform: process.platform // only Node knows this
  });
});

// Route C: a ROUTE PARAMETER. The ":name" part matches any word,
// and Express puts it in req.params.name.
// Visit: http://localhost:3000/api/greet/Maria
app.get('/api/greet/:name', function (req, res) {
  const name = req.params.name;
  res.json({ greeting: 'Hello, ' + name + '!' });
});

// Route D: a QUERY STRING. Everything after "?" in the URL becomes
// req.query. Values always arrive as TEXT, so we use Number(),
// exactly like we did with input.value in the Study Log exercise.
// Visit: http://localhost:3000/api/add?a=2&b=3
app.get('/api/add', function (req, res) {
  const a = Number(req.query.a);
  const b = Number(req.query.b);

  // Validate on the server too: never trust what the browser sends
  if (isNaN(a) || isNaN(b)) {
    // 400 = "Bad Request" (the client sent something wrong)
    return res.status(400).json({ error: 'a and b must be numbers' });
  }

  res.json({ a: a, b: b, sum: a + b });
});


// ---------------------------------------------------------------------
// STATIC FILES: send the HTML/CSS/JS files in the "public" folder
// as they are. http://localhost:3000/ will show public/index.html.
// That page's JavaScript then runs in the BROWSER and calls our routes.
// ---------------------------------------------------------------------
app.use(express.static(path.join(__dirname, 'public')));


// ---------------------------------------------------------------------
// 404: if no route above matched, send a "Not Found" response.
// This must come LAST, because Express checks routes from top to bottom.
// ---------------------------------------------------------------------
app.use(function (req, res) {
  res.status(404).send('Sorry, ' + req.url + ' was not found on this server.');
});


// 4. Start listening. The program now WAITS for requests and does
//    not end until you press Ctrl + C.
app.listen(PORT, function () {
  console.log('Server running at http://localhost:' + PORT);
});
