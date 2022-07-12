function doSomething() {
    console.log('I am coding JavaScript');
}
console.log('First');
console.log('Second');
// setTimeout(doSomething, 3000);
setTimeout(function () {
    console.log('I am coding');
}, 5000);
setTimeout(() => {
    console.log('arrow function');
}, 4000);
console.log('Third');