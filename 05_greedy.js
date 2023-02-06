let arrOfChange = [50, 20, 10, 5, 2 , 1, .50, .25, .10, .05, .01];

let amount_paid = 98.36;

let changes = [];
let count = 0;

let i = 0;
while (amount_paid >= 0) {
  if (amount_paid == 0){
    break;
  }

  else if (arrOfChange[i] <= amount_paid) {
    amount_paid = (amount_paid - arrOfChange[i]).toFixed(2);
    count++;
  } 
  
  else {
    changes.push({count: count, change: arrOfChange[i]});
    count = 0;
    i++;
  }
}

console.log(changes.filter(item => item.count != 0))