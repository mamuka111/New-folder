
const x = prompt(`შეიყვანეთ პირველი რიცხვი`)
const y = prompt('შეიყვანეთ მეორე რიცხვი')
const calculation = prompt('აირჩიეთ მოქედება \n + \n - \n / \n *')

if (calculation == "+"){
  alert(Number(x) + Number(y))
}
if(calculation == "-"){
    alert(Number(x) - Number(y))
}
if(calculation == "/"){
    alert(Number(x) / Number(y))
}
if(calculation == "*"){
    alert(Number(x) * Number(y))
}