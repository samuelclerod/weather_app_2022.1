console.log("Starting up");
setTimeout(() => {
  console.log('Two seconds');
}, 2000);
setTimeout(() => {
  console.log('zero seconds');
}, 0);
console.log('Finishing up');