console.log('First');
// setInterval(() => {
//     console.log('Third');
// }, 3000);
let seconds = 0;
const timeId = setInterval(() => {
    // seconds++;
    // console.log(seconds++);
    console.log(++seconds);
    if (seconds > 15) {
        clearInterval(timeId);
    }
}, 1000);
console.log('Second');