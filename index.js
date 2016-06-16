var promise = require('bluebird')

function addFunction(inputParam1, inputParam2){

    return new promise(function(resolve, reject){
            
        var addResult = inputParam1 + inputParam2;

        if(addResult !== '' && !isNaN(addResult)){
            console.log('Add result ',addResult)
            var params = [inputParam1, inputParam2, addResult]
            resolve(params)
        }
        else{
            reject('something went wrong in addFunction')  
        }
        
    })
}

function subFunction(params){

    var subResult = params[0] - params[1];

        if(subResult !== '' && !isNaN(subResult)){
            console.log('Sub result ',subResult)
            return params
        }
        else{
            throw 'something went wrong in subFunction'
        }
}

addFunction(2, 1)
.then(subFunction)
.catch(function(e){
    console.log('Error Found ',e); //Catch any unexpected errors
})
