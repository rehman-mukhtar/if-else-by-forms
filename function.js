// function findMaxNum(){
//     var n1=document.getElementById("number1").value;
//     var n2=document.getElementById("number2").value;
//      if(n1>n2){
//         console.log("n1 is maximum",n1);
//     }
//     else if(n2>n1)
//     {
//         console.log("n2 is maximum",n2);
//     }
        // else{
        //     console.log("both are equal");
        // }
//     }
// function findMaxNum1(){
    // var n1=document.getElementById("number1").value;
//     var n2=document.getElementById("number2").value;
//     var n3=document.getElementById("number3").value;

//          if(n1>n2&&n1>n3){
//             console.log("n1 is maximum",n1);
//         }
//         else if(n2>n1&&n2>n3){
//             console.log("n2 is maximum",n2);
//         }
//         else if(n3>n1&&n3>n1){
//             console.log("n3 is maximum");
//         }
//         else{
//             console.log("all equal")
//         }
        

// }
// function findNumNature(){
//     var n1=document.getElementById("number").value;
//     if(n1>0)
//     {
//         console.log("num is positive",n1);
//     }
//     else if(n1<0)
//     {
//         console.log("num is negtive",n1);
//     }
//     else{
//         console.log("num is positive",n1);
//     }

// }
// function divisibilityOfNum(){
//     var n1=document.getElementById("num").value;
//     if(n1%5==0)
//             {
//                 console.log(n1," is divided by 5");
//             }
//     else if(n1%11==0)
//             {
//                 console.log(n1," is divided by 11");
//             }
//     else{
//                 console.log("num is zero");
//             }

// }
// function checkEvenOdd(){
//     var n1=document.getElementById("checking").value;
// if(n1%2==0)
//      {
//         console.log("even");
//      }
//      else
//      {
//         console.log("odd");
//      }   
//     }
// function checkLeapYear(){
//     var n1=document.getElementById("checkYear").value;
// if(n1%4==0)
//      {
//         console.log("leap year");
//      }
//      else
//      {
//         console.log("not leap year");
//      }   
// }
// function checkCharacter(){
//     var char=document.getElementById("checkChar").value;
//     if((char>='a'&& char<='z')||(char>='A'&& char<='Z'))
//              {
//                 console.log("alphabet");
//              }
//              else
//              {
//                 console.log("digit or ymbol");
//              }
// }
// function checkCharacterNature(){
//     var char=document.getElementById("checkCharNature").value;
//     switch(char)
// {
//     case 'a':
//     case 'A':
//         console.log("vowal")
//     break;
//     case 'e':
//     case 'E':
//         console.log("vowal")
//         break;
//     case 'i':
//     case 'I':
//         console.log("vowal")
// break;
//     case 'o':
//     case 'O':
//         console.log("vowal")
// break;
//     case 'u':
//     case 'U':
//         console.log("vowal")
// default:
//     console.log("consonant")
    

// }
// }
// function charFinding(){
//     var char=document.getElementById("checking").value;
//     if((char>='a'&& char<='z')||(char>='A'&& char<='Z'))
//         {
//             console.log("you enter character")
//         }
//         else if((char>='0' && char<='9'))
//         {
//             console.log("you enter digits")
//         }
//         else
//         {
//             console.log("youe enter symbol")
//         }
// }
// function checkCharCase(){
//     var char=document.getElementById("checkCase").value;
//     if(char>='a' && char<'z')
//         {
//             console.log("you enter lower case alphabat")
        
//         }
//         else if(char>='A' && char<='Z')
//         {
//             console.log("you enter upper case latter")
//         }
// }
// function findWeekDay(){
//     var n =document.getElementById("weekDay").value;
//     switch(n)
//     {
//         case 1:
//             console.log("mon");
//             break;
//         case 2:
//             console.log("un");
//             break;
//         case 3:
//             console.log("tue");
//             break;
//         case 4:
//             console.log("wed");
//             break;
//         case 5:
//             console.log("thu");
//             break;
//         case 6:
//             console.log("fri");
//             break;
//         case 7:
//             console.log("sat");
//             break;
//         default:
//             console.log("invalid");
    
//     }
// }
// function findMonth(){
//         var n =document.getElementById("monthDay").value;
//         switch(n)
// {
//     case 1:
//         console.log("jan");
//         break;
//     case 2:
//         console.log("feb");
//         break;
//     case 3:
//         console.log("mar");
//         break;
//     case 4:
//         console.log("apr");
//         break;
//     case 5:
//         console.log("may");
//         break;
//     case 6:
//         console.log("june");
//         break;
//     case 7:
//         console.log("july");
//         break;
//     case 8:
//             console.log("aug");
//             break; 
//     case 9:
//             console.log("sep");
//             break; 
//     case 10:
//             console.log("oct");
//             break; 
//     case 11:
//             console.log("nov");
//             break; 
//     case 12:
//             console.log("dec");
//             break;
//     default:
//         console.log("invalid");

// }
// }
function checkTriangle(){
let side1 = document.getElementById("number1").value
let side2 = document.getElementById("number2").value
let side3 = document.getElementById("number3").value

// Check if the sides form a valid triangle
if (
    side1 > 0 && side2 > 0 && side3 > 0 && // All sides must be positive
    (side1 + side2 > side3) &&
    (side1 + side3 > side2) &&
    (side2 + side3 > side1)
) {
    // Check the type of triangle
    if (side1 === side2 && side2 === side3) {
        console.log("The triangle is an Equilateral triangle.");
    } else if (side1 === side2 || side1 === side3 || side2 === side3) {
        console.log("The triangle is an Isosceles triangle.");
    } else {
        console.log("The triangle is a Scalene triangle.");
    }
} else {
    console.log("The given sides do not form a valid triangle.");
}
}