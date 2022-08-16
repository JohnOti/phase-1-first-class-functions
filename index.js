function receivesAFunction(spy){
    return spy();
}
function  returnsANamedFunction(){
    return function ANamedFunction(){
        console.log ('This is a function')
    }
}

function returnsAnAnonymousFunction(){
    return () => 
        console.log('John Oduor');
    

}