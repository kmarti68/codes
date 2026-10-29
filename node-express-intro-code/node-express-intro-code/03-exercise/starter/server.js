// =====================================================================
// IN-CLASS EXERCISE: Study Log API  (about 10 minutes)
//
// Last time, the Study Log lived only in the browser. When you refreshed
// the page, every session disappeared. Now the SERVER keeps the data,
// and the page asks the server for it.
//
// The page in public/index.html is ALREADY finished. It calls:
//     GET /api/sessions          -> expects an array of sessions
//     GET /api/sessions/total    -> expects { total: <number>, goalReached: <true/false> }
// Your job: write those two routes below.
//
// Run:  npm install   (once)   then   npm run dev
// Open: http://localhost:3000
// =====================================================================

const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Our "database" for today: a plain array that lives in the server's memory.
// (A future lesson will replace this with a real database.)
const sessions = [
  { topic: 'HTML', minutes: 20 },
  { topic: 'CSS', minutes: 15 },
  { topic: 'DOM events', minutes: 30 }
];

const GOAL_MINUTES = 60;


// TODO 1: GET /api/sessions
//   Send the whole `sessions` array back as JSON.
//   Test it: http://localhost:3000/api/sessions


// TODO 2: GET /api/sessions/total
//   - Use a loop to add up the minutes of every session.
//   - Send back JSON like:  { "total": 65, "goalReached": true }
//     goalReached is true when the total is GOAL_MINUTES or more.
//   - Also console.log the total. Where does that message show up?
//   Test it: http://localhost:3000/api/sessions/total


// BONUS: GET /api/sessions/long?min=20
//   Send back only the sessions with at least `min` minutes.
//   Remember: req.query.min is TEXT. Turn it into a number first.
//   Hint: an array's .filter() method, or a loop that pushes into a new array.
//   Test it: http://localhost:3000/api/sessions/long?min=20


// Send the files in /public (the finished web page)
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, function () {
  console.log('Study Log server running at http://localhost:' + PORT);
});
