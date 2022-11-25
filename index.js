function receivesAFunction(funFunction){
    funFunction();
    return "Call Back";
}

function returnsANamedFunction(){
    return function namedFunction() {return "This is a Named Function";};
}

function returnsAnAnonymousFunction(){
    return () => "This is an AnonymousFunction";
}

