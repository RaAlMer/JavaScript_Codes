// Project #5
// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), 
//and cash-in-drawer (cid) as the third argument.
// cid is a 2D array listing available currency.
// The checkCashRegister() function should always return an object with a status key and a change key.
// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.
// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.
// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

function checkCashRegister(price, cash, cid) {
  let difference  = cash - price;
  let cidMax = 0;
  const originalDiff = difference;
  let objectReturn = {
    status: '',
    change: []
  }
  let arrCurrency = [
    ["ONE HUNDRED", 100], 
    ["TWENTY", 20], 
    ["TEN", 10], 
    ["FIVE", 5], 
    ["ONE", 1], 
    ["QUARTER", 0.25],
    ["DIME", 0.1],
    ["NICKEL", 0.05],
    ["PENNY", 0.01]
    ]
  cid.reverse();
  for (let i = 0; i < cid.length; i++){
    cidMax += cid[i][1];
  }
  let result = [...arrCurrency];
  for(let i = 0; i < arrCurrency.length; i++){
    let returnMoney = 0; 
    let bill = cid[i][1]/arrCurrency[i][1]
      bill.toFixed(2);
      while(difference.toFixed(2) >= arrCurrency[i][1] && bill>=1){
        difference -= arrCurrency[i][1];
        returnMoney += arrCurrency[i][1];
        bill--;
      }
        if (returnMoney > 0){
          if (returnMoney - Math.floor(returnMoney) !== 0){result[i][1] = returnMoney.toFixed(2)
          result[i][1] = parseFloat(result[i][1])}else{
            result[i][1]= returnMoney;
          }

        }else{
          result[i][1]= returnMoney;
        }
  }
  let sumResult = 0;
  for (let i = 0; i < cid.length; i++){
    sumResult += result[i][1];
  }
  sumResult = sumResult.toFixed(2);
  if(cidMax < originalDiff || sumResult < originalDiff){
    objectReturn.status = 'INSUFFICIENT_FUNDS';
    } else if (cidMax == originalDiff){
      objectReturn.status = 'CLOSED';
      objectReturn.change = cid.reverse();
    } else {
      let resultFiltered =[];
      for (let a = 0; a < result.length; a++){
        if (result[a][1] !== 0){
          resultFiltered.push(result[a]);  
        } 
        }
     objectReturn.status = 'OPEN';
     objectReturn.change = resultFiltered;
    }
     return objectReturn;
}
