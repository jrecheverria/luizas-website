//change 5 to the total number of questions
var total=10
var question=new Array()
for (i=1;i<=total+1;i++){
temp="choice"+i+"=new Array()"
eval(temp)
}
var solution=new Array()

/*Below lists the phrases that will be randomly displayed if the user correctly answers the question. You may extend or shorten this list as desired*/
var compliments=new Array()
compliments[0]="Excellent!"
compliments[1]="Keep up the awesome work!"
compliments[2]="Big brain energy right there!"
compliments[3]="You cooked!"
compliments[4]="Lets gooo!"
compliments[5]="Your math skills are on point!"
compliments[6]="Great job, my guy!"


/*Below lists the questions, its choices, and finally, the solution to each question. Folow the exact format below when editing the questions. You may have as many questions as needed. Check doc at http://javascriptkit.com/script/script2/comboquiz.htm for more info
*/

question[1]="What is 3.6 x 4?"
choice1[1]="1.44"
choice1[2]="14.4"
choice1[3]="144"
choice1[4]="0.144"

question[2]="What is 0.7 x 0.8?"
choice2[1]="0.56"
choice2[2]="5.6"
choice2[3]="0.14"
choice2[4]="0.64"

question[3]="What is 12.5 x 0.3?"
choice3[1]="3.75"
choice3[2]="0.375"
choice3[3]="37.5"
choice3[4]="4.5"

question[4]="What is 5.4 x 2.7?"
choice4[1]="14.58"
choice4[2]="1.458"
choice4[3]="15.48"
choice4[4]="10.8"

question[5]="What is 0.45 x 10?"
choice5[1]="0.045"
choice5[2]="4.5"
choice5[3]="45"
choice5[4]="0.0045"

question[6]="Mia bought 3.5 pounds of apples. Each pound costs $2.49. How much did she pay in total?"
choice6[1]="$6.48"
choice6[2]="$7.25"
choice6[3]="$8.72"
choice6[4]="$9.32"

question[7]="A rectangular garden is 4.2 meters lond and 3.5 meters wide. What is the area of the garden?"
choice7[1]="14.7 meters squared"
choice7[2]="12.8 meters squared"
choice7[3]="10.2 meters squared"
choice7[4]="7.7 meters squared"

question[8]="A bottle contains 0.75 liters of juice. If you buy 6 bottles, how many liters of juice do you have in total?"
choice8[1]="3.75 L"
choice8[2]="4.25 L"
choice8[3]="3.6 L"
choice8[4]="4.75 L"

question[9]="Mrs. Clarke uses 0.25 pounds of sugar for each batch of cookies. If she makes 9 batches, how many pounds of sugar does she use? "
choice9[1]="1.75 lb"
choice9[2]="2.25 lb"
choice9[3]="3.25 lb"
choice9[4]="0.225 lb"

question[10]="Mrs Hurley jogs 2.4 miles each day for 5.5 days. How many miles does she jog in total?"
choice10[1]="10.2 miles"
choice10[2]="11.5 miles"
choice10[3]="12.2 miles"
choice10[4]="13.2 miles"

solution[1]="b"
solution[2]="a"
solution[3]="a"
solution[4]="a"
solution[5]="b"
solution[6]="d"
solution[7]="a"
solution[8]="a"
solution[9]="b"
solution[10]="c"


