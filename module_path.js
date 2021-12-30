console.log(module.paths);
console.log(require.extensions);

module.exports = {
    name: 'clloz',
    age: 29,
    sayHello: function () {
        console.log('Hello, ' + this.name);
    }
}