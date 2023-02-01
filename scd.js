function smallestCommons(arr) {
    let [min,max] = arr.sort((a,b) => a - b);
  
    /*
     set new Array with all the values between the two first value in the given array
    */
    let newArr = [];
    for (let i = min; i <= max; i++) {
      newArr.push(i);
    }
  
    // array of primes number
    let primes = getPrimes(newArr[newArr.length - 1]);
  
    let finalVal = [];
    let arrOfPrimes = [];
  
    let actualArr = [];
  
    let i = 0;
    while (i < primes.length) {
      let isReady = true;
      let updatedArr = [];
  
      // when executed for the first time
      if (finalVal.length == 0) {
        isReady = false;
        updatedArr.push(...newArr);
      }
  
      else {
        actualArr.map(item => {
          if (item % primes[i] == 0) {
            isReady = false;
            updatedArr.push(item/primes[i]);
          } else {
            updatedArr.push(item);
          }
        })
      }
  
      // only if there is no element divisible by the actual primes no more
      if (isReady) {
        i++;
      } else {
        actualArr = updatedArr;
        finalVal.push(actualArr);
        if (finalVal.length > 1) {
          arrOfPrimes.push(primes[i]);
        }
      }
    }
    
    return arrOfPrimes.reduce((a,b) => a * b);
  }
  
  
  
  /* Find all prime numbers inferior to num given */
  function getPrimes(num) {
    let arr = [];
  
    for (let i = 2; i <= num; i++) {
      let divisorsFound = 0;
      for (let j = 1; j <= i; j++) {
        if (i % j == 0) {
          divisorsFound++;
        }
      }
  
      if (divisorsFound == 2) {
        arr.push(i);
      }
    }
  
    return arr;
  }
  
  console.log(smallestCommons([23,18]));