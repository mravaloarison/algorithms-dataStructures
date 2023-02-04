function telephoneCheck(str) {
    let phone_number = str.split(/\D/).join("");
    let pattern = [];
  
    for (let i in str) {
      !parseInt(str[i]) ?
      pattern.push(str[i]) :
      pattern.push('*')
    }
  
    let patterns = [
      '* (***) *** ****',
      '* (***) ***-****',
      '*(***)***-****',
      '* ***-***-****',
      '* *** *** ****',
      '(***) *** ****',
      '(***) ***-****',
      '(***)***-****',
      '***-***-****',
      '*** *** ****',
      '**********'
    ]
  
    let pattern_met = 0
    patterns.map(item => {
      if (item === pattern.join("")) {
        pattern_met++;
      };
    })
  
    if (pattern_met > 0) {
      if (phone_number.length == 11 && phone_number[0] == 1) {
        return true;
      } else if (phone_number.length == 10) {
        return true;
      } 
      else return false;
    }
    else {
      return false;
    }
  
  }
  
  console.log(telephoneCheck("2 (757) 622-7382"));