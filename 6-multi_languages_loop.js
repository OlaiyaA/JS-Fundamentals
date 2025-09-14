// 6-multi_languages_loop.js

const lines = [
  "C is fun",
  "Python is cool",
  "JavaScript is amazing"
];

for (const line of lines) {
  console.log(line);
}
// Alternatively, using process.argv to print the same lines
// const languages = process.argv.slice(2);
// for (const lang of languages) {
//   console.log(lang + " is " + (lang === "C" ? "fun" : lang === "Python" ? "cool" : "amazing"));
// }