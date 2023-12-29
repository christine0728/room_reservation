// const readline = require("readline");
// console.log("hello");

const count = require("./counter");
const mf = require("./math_functions");

const fs = require("fs");
const os = require("os");

const http = require("http"); //step 1: require http core module

const server = http.createServer((req, res) => {
  //step 2: create server
  //dito ihahandle ang mga bagay bagay
  if (req.url == "/") {
    res.write("<html><body><p>This is home Page.</p></body></html>");
    res.end();
  } else if (req.url == "/index") {
    res.write("<html><body><p>This is home Page.</p></body></html>");
    res.end();
  } else if (req.url == "/contact") {
    res.write("<html><body><p>This is contact Page.</p></body></html>");
    res.end();
  } else {
    res.write("<html><body><p>Page not found.</p></body></html>");
    res.end();
  }
});

let portnumber = 5000;

server.listen(portnumber, (err) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log(`Server running at port ${portnumber}`);
  }
}); //3. assignn port number

// let filepath = __dirname + "/doc/test.txt";

//read ng file
// fs.readFile("./server/doc/test1.txt", (err, data) => {
//   if (err) {
//     console.log(err.message);
//   } else {
//     console.log(data.toString());
//   }
// });

//write a file
// fs.appendFile(filepath, " Hello Again", (err) => {
//   if (err) {
//     console.log(err.message);
//   }
// });

dir = __dirname + "/uploads";

//test if existing
// if (!fs.existsSync(dir)) {
//   // console.log("Need to create the directory");
//   fs.mkdir(dir, (err) => {
//     if (err) {
//       console.log(err.message);
//     }
//   });
// } else {
//   fs.rmdir(dir, (err) => {
//     if (err) {
//       console.log(err.message);
//     }
//   });
// }

// setTimeout(() => {
//   console.log("3 seconds");
// }, 3000);

// console.log(mf.adder(5, 6));
// console.log(`The are of circle with radius 5 is ${mf.area_circle(5)}`);
// console.log(`The value of pi is ${mf.pi}`);
// console.log(`The square of 5 is ${mf.square(5)}`);

// console.log(count([1, 2, 3, 4, 5]));

// console.log(mf);

// let x = 0;
// let time_out = setInterval(() => {
//   x += 2;
//   console.log(`${x} seconds`);
//   if (x > 5) {
//     clearInterval(time_out);
//   }
// }, 2000);

// console.log(__dirname);
// console.log(__filename);

// let str = "Rhenel";

// let x;
// for (x = 0; x < str.length; x++) {
//   console.log(str[x].toLocaleUpperCase());
// }

// let rl = readline.createInterface(process.stdin, process.stdout);

// rl.setPrompt(`What is your age? `);
// rl.prompt();
// console.log(mf);

// console.log(fs);
