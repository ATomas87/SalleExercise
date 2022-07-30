//iterables:

function flatMap(myIterable, myCallback(n)) {
    let result = [];
    for (let item of myIterable) {
      for (let x of myCallback(item)) {
        result = [...result, x];
      }
    }
    return result;
  }
  
  let myIterable = [1, 2, 3, 4, 5];
  
  function myCallback(n) {
    result = n + 2;
    return result;
  }
  
  let test = flatMap(myIterable, myCallback(n))

  console.log(test)