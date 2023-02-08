function checkCashRegister(price, cash, cid) {
  const arrOfChange = [["ONE HUNDRED",100],["TWENTY",20], ["TEN",10], ["FIVE",5] , ["ONE",1], ["QUARTER",.25], ["DIME",.10], ["NICKEL",.05], ["PENNY",.01]];
  let change = cash - price;
  let newCid = [];
  let availableCid = [];

  // look at only the funds that can be usedx
  for (let i in arrOfChange) {
    if (change >= arrOfChange[i][1] && cid[cid.length - 1 - i][1] >= arrOfChange[i][1]) {
      cid
      .filter(item => item[0] == arrOfChange[i][0])
      .map(item => availableCid.push([item[0],item[1]]));
    }
  }

  let funds = availableCid
  .map(item => item[1])
  .reduce((a,b) => a + b, 0);

  // if the available funds is less than the change due
  if (funds.toFixed(2) < change) {
    return {status: "INSUFFICIENT_FUNDS", change: []}
  }

  // if the available funds is equal to the change due
  else if (funds.toFixed(2) == change) {
    return {status: "CLOSED", change: cid};
  }

  while (change > 0) {
    
    for (let i in availableCid) {

      // total change paid
      if (availableCid[i][1] == change) {
        newCid.push([availableCid[i][0], change])
        change = 0;
        break;
      }

      // there are still some rest of the change
      else if (availableCid[i][1] < change) {
        newCid.push([availableCid[i][0], availableCid[i][1]])
        change = (change - availableCid[i][1]).toFixed(2);
      }

      else {
        let value = arrOfChange
        .filter(item => item[0] == availableCid[i][0])
        .map(item => item[1])
        .reduce((a,b) => a + b);
        
        let countAv = 1;
        while (true) {
          if ((countAv * value) > change) {
            countAv--;
            break;
          }
          countAv++;
        }

        newCid.push([availableCid[i][0], value * countAv])
        change = (change - (value * countAv)).toFixed(2);
      }
    }
  }

  return {status: "OPEN", change: newCid.filter(item => item[1] != 0)};
}

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));