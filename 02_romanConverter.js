function convertToRoman(num) {
    /* 
      convert arabi numerals into roman numerals
    */
    let numeral = {
      1000: 'M',
      900 : 'CM',
      500 : 'D',	
      400 : 'CD',
      100 : 'C',
      90  : 'XC',
      50  : 'L', 
      40  : 'XL',
      10  : 'X',
      9   : 'IX',
      5   : 'V',
      4   : 'IV',
      1   : 'I',
    }
  
    // get all the usefull roman
    let arr = [];
    for (let property in numeral) {
     if (property < num) {
       arr.push(property)
     }
    }
  
  
    // decompose an integer
    let decomposition = [];
    function decompose(a) {
      let maxArr = Math.max(...arr);
      if (a < maxArr) {
        arr = arr.filter(i => i < a);
        return a;
      };
      decomposition.push(maxArr);
      return a - maxArr;
    }
  
    // push to the array decomposition the number decomposed
    let val = num
    while (val > 1) {
      if (numeral[val]) {
        decomposition.push(val);
        break;
      }
      val = decompose(val);
      if (val == 1) {
        decomposition.push(1);
      };
    }
  
  
    // return a string where the value from the array would be replaced to their roman value in the obj numeral
    return decomposition
      .map(item => numeral[item])
      .join("");
  }
  
  console.log(convertToRoman(3999));