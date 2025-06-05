var helloWorldFunction = function() {
    return function(...args){
    return "Hello World"
    }
}
helloWorldFunction();