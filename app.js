function favMovie(movie = "The Room", name = "Tommy Wiseau") {
    console.log(`My name is ${name} and my favorite movie is ${movie}!`)
}

favMovie();
favMovie("The Shawshank Redemption", "Donald Smith");


let favMovie1 = (movie = "The Room", name1 = "Tommy Wiseau") => {
console.log(`My name is ${name1} and my favorite movie is ${movie}!`)
    
}
favMovie1();
favMovie1("The Sixth Sense");

let getFirstName = fullName => {
    let firstName = fullName.split(" ")[0]
    console.log(firstName)
}

let getFirstNameConcise = fullName => {
    console.log(fullName.split(" ")[0])
    
}

getFirstName("Donald Smith");
getFirstNameConcise("Amir Smith");

let doMath = (num1, num2) => {
    return{
        exp: num1**num2,
        prod: num1*num2
    }
}

let thisResult = doMath(3,4)
console.log(`The result of 3 to the power of 4 is ${thisResult.exp} and the product is ${thisResult.prod}`)

let randomFunc = (name, Location, favFood) => {
    console.log(`My name is ${name}. I live in ${Location} and my favorite food is ${favFood}.`)
}

let arr = ["Donald", "Mobile", "Pizza"];
randomFunc(...arr);

const myName = "Donald"

let randomFunc2 = (string) => {
    let splitArr = [...string]
    for (let index = 0; index < splitArr.length; index++) {
        console.log(splitArr[index])
    }
}
randomFunc2(myName)