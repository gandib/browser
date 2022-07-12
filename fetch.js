console.log(111);
console.log(222);
// setTimeout(() => console.log('sss'), 3000);
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(json => console.log(json))
console.log(333);