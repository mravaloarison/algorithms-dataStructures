function telephoneCheck(str) {
    /* 
        The program would look for the pattern first, 
            - if the number inserted looks like a phone pattern, 
                - then it will check if it starts with one or not,
                    - if yes and the length is 11 then return true
                    - else check if length is 10, then return true if so

            - else, it will return false instantly
    */
    let phone_number = str.split(/\D/).join("");
    let pattern      = [];
    let patterns     = [
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
  
    /* transform all int found into a star */
    for (let i in str) {
        !parseInt(str[i]) ? pattern.push(str[i]) : pattern.push('*')
    }
  
  
    // check if the pattern match to a phone number's patern
    let pattern_met = 0
    patterns.map(item => {
      if (item === pattern.join("")) {
        pattern_met++;
      };
    })
  
    // conditions if the patterns match
    if (pattern_met > 0) {

        // does it star with one and the length is 11?
        if (phone_number.length == 11 && phone_number[0] == 1) return true;

        // or does the length eqaul to 10
        else if (phone_number.length == 10) return true;
        
        // doesn't match any of the above
        else return false;
    }
    else return false;
  
  }
  
  console.log(telephoneCheck("2 (757) 622-7382"));