function rot13(str) {

    let arr = str.split("");
  
    let res = []
    
    for (let i in arr) {
      if (arr[i].match(/\w/)) {
  
        /*
          insert into res the char + 13 or char - 13 value of each char found in the first str
        */
        (str.charCodeAt(i) < 78) ?
          res.push(String.fromCharCode(str.charCodeAt(i) + 13))
          :   
          res.push(String.fromCharCode(str.charCodeAt(i) - 13))
      } else res.push(arr[i]);
    }
  
    return res.join("");
  }
  
  console.log(rot13("SERR PBQR PNZC"));