// რა?სად?როდის?



const question1 = prompt(`ვინ იყო საქართველოს პირველი პრეზიდენტი? \n 1.გამსახურდია \n 2.სააკაშვილი \n 3.ზურაბიშვილი \n 4.მე`)
const question2 = prompt(`რა არის საქართველოს დედაქალაქი? \n 1.თბილისი \n 2.ბათუმი \n 3.ქუთაისი \n 4.რუსთავი`)
const question3 = prompt(`რამდენია 5+5*3? \n 1.30 \n 2.15 \n 3.20 \n 4.40`)

let score = 0;
 
if (question1 == 1){
    score = score + 1;
}
if (question2 == 1){
   score = score + 1
}
if (question3 == 3){
 score = score + 1
}
alert(`შენ გაეცი ${score} კითხვას პასუხი`)






