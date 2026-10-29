// =====================================================================
// node-demo.js  —  JavaScript OUTSIDE the browser
//
// Run it from a terminal in this folder:
//     node node-demo.js
//     node node-demo.js Maria        (passes the name "Maria" to the program)
//
// There is no web page and no browser here. Node.js is a program that
// runs JavaScript directly on a computer (yours, or a server in a data center).
// =====================================================================


// ---------------------------------------------------------------------
// 1. The JavaScript LANGUAGE is exactly the same
//    Variables, functions, if/else, loops, arrays all work like before.
// ---------------------------------------------------------------------
const topics = ['HTML', 'CSS', 'JavaScript'];

function describe(list) {
  return 'We have learned ' + list.length + ' topics: ' + list.join(', ');
}

console.log('--- 1. Same language ---');
console.log(describe(topics));
// console.log prints to the TERMINAL now, not to the browser DevTools.


// ---------------------------------------------------------------------
// 2. The browser objects are GONE
//    There is no page, so there is no `document` and no `window`.
// ---------------------------------------------------------------------
console.log('\n--- 2. No browser objects ---');
console.log('typeof window   =', typeof window);    // undefined
console.log('typeof document =', typeof document);  // undefined

// If we try to use the DOM anyway, Node throws an error.
// try/catch lets us see the error without stopping the program.
try {
  document.querySelector('h1');
} catch (error) {
  console.log('Error:', error.message);             // document is not defined
}


// ---------------------------------------------------------------------
// 3. Node gives us NEW things the browser does not allow
//    `require` loads a module (a library of code). These modules are
//    built into Node, so we do not need to install anything.
// ---------------------------------------------------------------------
const os = require('os');     // information about the computer
const fs = require('fs');     // read and write FILES on the computer
const path = require('path'); // build file paths safely on Windows/Mac/Linux

console.log('\n--- 3. New powers ---');
console.log('Node version    :', process.version);        // e.g. v24.x.x
console.log('Operating system:', process.platform);       // win32, darwin, linux
console.log('CPU cores       :', os.cpus().length);
console.log('This file lives :', __dirname);               // folder of this file

// process.argv is the list of words typed in the terminal.
// [0] = path to node, [1] = path to this file, [2] = first extra word
const name = process.argv[2] || 'student';
console.log('Hello, ' + name + '!');

// Write a real file to the hard drive. A web page can NEVER do this
// silently — that would be a huge security problem. A server needs to
// do it all the time (saving uploads, logs, data...).
const notePath = path.join(__dirname, 'note.txt');
fs.writeFileSync(notePath, 'Written by Node at ' + new Date().toLocaleString());
console.log('Created file    :', notePath);
console.log('File contents   :', fs.readFileSync(notePath, 'utf8'));
