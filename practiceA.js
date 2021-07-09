//function that returns the first element in an array

const cars = [["mazda", "ford"], ["porsche", "suzuki"]]

function getFirstEle() {

const name = cars[0][0];
return name

}

//console.log(getFirstEle(cars))

//function that returns the last element in an array

function getLastEle() {
    return cars[cars.length - 1]
    
}

//console.log(getLastEle(cars))

//function that returns a given element of an array as a parameter


function getAnyEle(a) {
    return cars[a]
}

//let passed = 3
//console.log(getAnyEle(passed))

//function to get index of an element in an array where its element matches a value passed as a parameter

function getIndexEle() {
    for(i = 0; i < cars.length; i++)
    console.log(i)
}

getIndexEle()


//correct way to do the above problem 

function getIndexByValue(element) {
    for (let i = 0; i < cars.length; i++) {
      if (cars[i] === element) {
        return i
      }
    }
  }
  const elementValue = "mazda"
  //console.log(getIndexByValue(elementValue))