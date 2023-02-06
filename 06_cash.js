function checkCashRegister(price, cash, cid) {
    let change = cash - price;
    let newCid = [];
  
    decompose(change)
    .map(item => {
      newCid.push([item.curencyUnit[0], item.curencyUnit[1] * item.amount])
    })
  
    return newCid;
  }
  
  
  function decompose(change) {
    let arrOfChange = [["TWENTY",20], ["TEN",10], ["FIVE",5] , ["ONE",1], ["QUARTER",.25], ["DIME",.10], ["NICKEL",.05], ["PENNY",.01]];
  
    let changeDue = change.toFixed(2);
    let changes   = [];
    let count     = 0;
  
    let i = 0;
    while (changeDue >= 0) {
      if (changeDue == 0) {
        changes.push({amount: count,curencyUnit: arrOfChange[i]});
        break;
      }
  
      if (changeDue >= arrOfChange[i][1]) {
        changeDue = (changeDue - arrOfChange[i][1]).toFixed(2);
        count ++;
      }
  
      else {
        changes.push({amount: count,curencyUnit: arrOfChange[i]});
        count = 0;
        i++;
      }
    }
  
    return changes.filter(item => item.amount > 0);
  }
  
  console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));