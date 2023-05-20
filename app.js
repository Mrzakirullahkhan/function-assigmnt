// chapter no 01
// var a = "Error! please enter a valid passward"
// alert(a);


// .................



// var a= "welcome to jawascript land \n happy coding!"
// alert(a);



// ..................














// chapter 02 


// var name = "hello world"
// alert(name);



// var studentName = "zakir khan"
// alert(studentName);

// var studentAge = 22;
// alert(studentAge);

// var studentQualification = "enter"
// alert(studentQualification);


// ............


// var a = "pizza \n pizz \n plz \n pi \n p"
// alert(a);


// ...........


//  var email = "mrzak802@gmail.com"
//  alert("my email is " + email);


// ...........


// var a = "yes i can write  HTML  content through jawa script"
// document.write(a);


// ..................

// chapter no 03

// var age = 22;
// alert("i am " + age + " years old ")         

// ........

// var  name = "jhone"
// var  product = "t-shart"
// var quantity = 5;
// document.write(name + " "  +"ordered" + " " + quantity + product +" " + "from sareena market");


// chapter no 05

// var a = 3;
// var b = 5;
// var c = a + b;
// document.write("sum of 3 and 5 is " + c);



// ..........

// let a = 10;
// var increament = a++                                                                     sir se puchunnga
// document.write("initial value is " + a);

// document.write("<br> final value after inreament " + increament);



// ........


// var num1 =10;
// document.write("after icreament " + ++num1);


// ..........reminder 

// var a = 10;
// document.write("the reminder is " + a % 3);

// ......ticket cost 

// var ticketPrice = 600;
// var totalTicket = 5;
// var totalCost = 600 * 5;
// document.write("the total cost of buying ticket is " + totalCost);


// ........

// var totalTickets = Number(prompt("quantitiy of tickets"));
// var ticketPrice  = 600;
// var totalCost = totalTickets * ticketPrice;
// document.write(`the total cost of your tickt is ${totalCost}`);




// ........
// let a = 4;
// let b = 2;
// let c = a * b ;
// document.write(a * + " * " + b + "= " + c);


// ....temperature to fahrenhiet

// var celsiusTemperature = 30;
// var f = (celsiusTemperature * 9/5) + 32;
// document.write(celsiusTemperature +" " +"degree is " + f +" "+"Fahrenheit" );


// fahrenheit to temperature 

// var fahrenheit = 70;
// var centigrate = (fahrenheit - 32 ) * 5/9;
// document.write(fahrenheit +" "+ "F is " + centigrate +" " +"degree");

// ..........
// var faranheit = Number(prompt("what is faranheit value"));
// var celcius = Number(prompt("what is celcius value"));
// var fToC = (faranheit - 32) * 5/9;
// var CToF = (celcius * 9/5) +32;
// document.write(`the faranhiet to degree value is ${fToC} <br>` )
// document.write(`the degree to faranheit value is ${CToF} <br>` )

// ......Shoppiing card 

// let priceItem1 = 800;
// let priceItem2 = 600;
// let orderQuantityItem1 = 2;
// let orderQuantityItem2 = 1;
// let shippingCharges = 100;
// let totalCost = (priceItem1 * orderQuantityItem1) + (priceItem2 * orderQuantityItem2) + shippingCharges ;
// document.write("price of item 1 is "+priceItem1 +"<br> Quantity ofitem 1 is "+ orderQuantityItem1 +"<br> price of item 2 is" +priceItem2+"<br>quantity of item 2 is"+orderQuantityItem2+"<br> total cost"+totalCost);



// ....... student marks 


// let obtainMarks= Number(prompt("what is your obtain  marks"));
// let totalMarks = 1100;
// let persentageMarks = obtainMarks / totalMarks * 100;
// document.write(`the student % is ${persentageMarks}`);


// ...Q No 09....dollers and riyals 

// let doller = 10;
// let riyals = 22;
// let DollerToPakRupees = 104.80;
// let riyalsToPakRupees = 28;
// document.write(`the total pakistani rupees are ${(doller * DollerToPakRupees) + (riyals* riyalsToPakRupees)}`);



// .....Q no 10

// let num = Number(prompt("input number"));
// document.write(`after addition ${num + 5} <br> after multiplication ${num * 10} <br> after divide ${num /10}`);




// .....Q no 11 age calculator 

// let birthYear = Number(prompt("what is your birth year"));
// let currentYear = 2023;
// let yourAge = 2023 - birthYear;
// if( birthYear == +Number){
//     document.write(`current year ${currentYear} <br> birth year ${birthYear} <br> your age ${yourAge}`);
// }
// else{
//     document.write(" you input string which is not allowd")
// }


// .......  Q no 12
// let circleRadius = Number(prompt("input radius of the circle"));
// let circumferenceOfTheCircle = 2 * 3.14 * circleRadius;
// let areaOfTheCircle = 3.14 * circleRadius^2;
// document.write(`Radius of the circle is ${circleRadius} <br> the circumference of circle ${circumferenceOfTheCircle} <br> the area is ${areaOfTheCircle}`)


// ........
// let snakeName = prompt("what is your favorate snakes");
// let yourAge = prompt("what is your current age");
// let maxAge = prompt("your maximum age");
// let snaksOrder = prompt("today order amount");
// let totalOrder = maxAge - yourAge * 360 * snaksOrder;
// document.write(`you will need ${totalOrder +  snakeName }  choaclate for the rest of your life`);

// ..............Chapter No 6-9

// ....Q No 1
// let a = 10;
// document.write(`the value of a is : ${a}<br><br>`);
// let b = ++a;
// document.write(`<br> the value of ++a is ${b} <br> now the value of a is: ${b}<br><br>`);
// let aa = 11;
// let bb = aa++;
// let cc = bb
// document.write(`the value of a++ is ${aa} <br> now the value of a is ${cc} <br><br>`);



// ..........Q No 2

//  let a = 2;
//  let b = 1;
//  let result = --a - --b + ++b + b--;
//  document.write(result);


// ..........Q no 2
// let name = prompt("what is your name ");
// document.write(`hello ${name} how are you ?`);

// ....Q No 03 Table 


// var table = Number(prompt("input a number" , 5));
// for( i = 1; i<=10; i++){
//         document.write(`${table} * ${i} = ${(table * i)} <br>`);
// }


// .......Q No 04
// document.write(`<h2> subjects total marks obtained persentage</h2><br>`)
// let english = Number(prompt("input your english marks"));
// let Math = Number(prompt("input your maths marks"));
// let Urdu = Number(prompt("input your urdu marks"));
// let totalMarks = 100;
// let englishpersentage = (english / totalMarks) * 100; 
// let mathspersentage = (Math / totalMarks) * 100; 
// let urdupersentage = (Urdu / totalMarks) * 100;
// document.write(`English     100     ${english}     ${englishpersentage}%<br>`)
// document.write(`Maths       100     ${Math}     ${mathspersentage}%<br>`)
// document.write(`Urdu        100     ${Urdu}     ${urdupersentage} %<br>`)



// ........ CH No 9-11
// let city = prompt("input your city name");
// if( city == "karachi"){
//     document.write("welcome to the city of light")
// }
// else{

//     document.write(`welcome to ${city}`)
// }


// Q No 2

// let a = prompt("input your gender");
// if(a=="male"){
//     document.write(`good morning sir`);

// }
// else if(a=="female"){
//     document.write("good morning Ma'am")
// }


// Q No 3
// let signalColor = prompt("input the signal colour");
// if(signalColor == "red"){
//     document.write("must be stop")
// }
// else if(signalColor=="yellow"){
//     document.write("ready to move ")
// }
// else if(signalColor=="green" ){
//     document.write("move on")
// }
//  Q No-04

// let carFuel =Number( prompt("input your car current fuel"));
// if( carFuel < 0.25){
//     document.write(`plese rfuel your car`)
// }
// else{
//     document.write(`enjoy your day`);
// }

//  Q No-5

// let a = 4;
// if(++a===5){
//     alert("given condition for variable a is true")
// }
// else{
//     alert("false")
// }


// var b = 82;
// if (b++ === 83){
//     alert("given condition is ture ")

// }
// else{
//     alert("given condtion is false")
// }

//  var c = 12;
//  if(c++===13){
//     alert("condition 1 is true")
//  }
//  else if( c===13){
//     alert("condition 2 is ture")
//  }
//  if (++c < 14){
//     alert("condition 3 is true")
//  }
//  if(c===14){
//     alert("condition 4 is true")
//   }




// AND and OR operators 

// var teamA = 50 + 20 + 15 + 3;
// var teamB = 20 + 50 + 3 + 9 ;
// if(teamA>teamB){
//     document.write(`team A is win the match `)
// }
// else{
//     document.write(`team B is win thew match `)
// }


// ........guest the number 1 to 5 
// let guestNumber= +prompt("input a number between 1 to 5 ");
// if( (guestNumber===4 || guestNumber===3 || guestNumber===2 ) (guestNumber!==1 && guestNumber!==5) ){

//     document.write("true");

// }
// else{
//     document.write("false")
// }
// var y;
// if(y)
// console.log(true)
// else
// console.log(false)


// let age = 18;
// let maxAge = 30;
// let blindMan = true;
// let lisence =true ;
// if( age >=18 && maxAge ===30 && blindMan && lisence){
//     document.write(true)
// }
// else{
// document.write(false);
// }



// let age= 66;
// let res = "U.S."
// if (age > 65 || age < 21 && res === "U.S."){
//     document.write(true)
// }
// else{
//     document.write(false)
// }




// let num1 = +prompt(`enter first number`);
// let num2 = +prompt(`enter second number`);
// let a = prompt(`what you want of these two numbers `);
// if(a==="+" || a==="add"){
//     document.write(num1 + num2)
// }
// else if(a==="-" || a==="subtract"){
//     document.write(num1-num2)
// }
// else if(a==="*" || a==="multiply"){
//     document.write(num1 * num2)
// }
// else if(a==="/" || a==="divide"){
//     document.write(num1 / num2)
// }


// var  names = ["zakir", "wajid", 4, "kaleenbhai", "amjad", "ubaid"]
// names.splice(2,1,"4 ko ura do")
// var newName= names.splice(0,3)    is se hum new variable me elemnt ko copy kr skte hai
// console.log(newName)
// names.splice(index number, how many you want remove, adding value)
// names.pop();         last se aik ko remove krty hai
// names.push("zakir ullah", 88);      last me one ko add krty hai
// names.shift();                   fist se 1 ko remove krty hai
// names.unshift("abdullah");    first me aik ko add krty hai 
// names.splice(0,1, "asad")
// names[1]="islamabd" is se bhi value add ho skti hai
// document.write(names)



// for loop case


// let months = [ "janvery", "febrary", "march", "april", "may", "june", "july", "agust", "september","oct", "Nov", "Dec"]
// let yourBirthMonth = prompt("what is your birth month name?")
// for( let i=0; i<=11; i++){
//     if(yourBirthMonth===months[i]){
//     document.write(`yes you born in these one of month`)
// }

// }
// document.write("no way ")

// ...table
// let a = +prompt("enter your number");
// for( let i=1; i<=10; i++){
//     document.write(`${a} * ${i} = ${a * i} <br>`);
// }

// function boysName (name1, name3,name2){
//     document.write(name1 +"and" + " " + name3 +"are good boys " ) 

// }

// let name1="zakir ullah"
// let name3= "mujahid"
// let name2="abdullah"

// boysName(name1,name3);


// function hello(name){
//     console.log("heelo there bob")
//     console.log("heelo there johns")
//     console.log("heelo there susay")

// }
// hello();


// function greet(name){
//     console.log("hello there" + name);

// }
// greet("bob");
// greet("Anna");
// greet("susay");

// const wallHeight = 30;

// function calculate(value){
//     console.log("the value in cm is: " + value * 2.54 + "cm")
//     return ("hello world")
// }
// const width = calculate(100);
// const height = calculate(wallHeight);
// const dimension = [ width, height];
// console.log(dimension)

// const wallHeight = 80;
// function calculate(value){
//     const newValue =value * 2.54;
//     return newValue;
// }
// const width = calculate(100);
// const height = calculate(wallHeight);
//  const dimension = [width, wallHeight]
//  console.log(dimension);
//  document.write(dimension)


// function fruitProcessor(apple, orange){
//     const juice = (`juice with ${apple} apple and ${orange} oranges`);
//     return juice

// }
// const appleJuice = fruitProcessor(5, 0);
// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice)
// console.log(appleJuice)
// function numbers(a, b){
//     return a+b

// }
// let newNumber = numbers(5, 6);
// document.write(newNumber);
// console.log(newNumber)
// const num = numbers(3,8);
// document.write(num)


// function fullName(fName,lastName){
//     let newValue = (`my full name is ${fName + lastName}`);
//     return newValue;
// }
// const a =fullName("zakir", "khan");
// document.write(a)


// .....
// function sumOfMarks(maths,phy,english,urdu){
//     let a = +(maths+ phy+english+urdu)
//     return a
// }
// let c = sumOfMarks(33,20,55,66,20);
// document.write("the total marks is" + c +"<br>")

// function persentage(totalMarks){
//     let d = totalMarks/500 *100;
//     return d
// }
// let e = persentage(c);
// document.write( "percentage is "+ e+ "%")


// chapter 12 se 13 

// 3. Write a program that takes input a number from user & 
// state whether the number is positive, negative or zero.



// let a = +prompt("input your number");
// if (a>0){
//     console.log("your number is positive")
// }
// else if(a<0){
//     console.log("your number is negative")
// }
// else{
//     console.log("you input string ")
// }



// 4. Write a program that takes a character (i.e. string of 
//     length 1) and returns true if it is a vowel, false otherwise


// let vowelCharacter = prompt("enter your letter")
// if ( vowelCharacter == "a" || "e" || "i" || "o" || "u"){
//     console.log(vowelCharacter)
//     return true

// }
// else {
//     console.log(vowelCharacter)
//     return false 
// }



// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then 
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are 
// same, show message “Correct! The password you 
// entered matches the original password”. Show 
// “Incorrect password” otherwise.


// let correctPasward = 12345
// let passward = +prompt("enter your correct paswrd")
// if( passward==correctPasward){
//     console.log("the paswrd is same and your paswrd is correct")
// }
// else if (passward!==correctPasward){
//     console.log("apka paswrd ghalat hai bhai  ")
// }
// else if (passward==""){
//     console.log("khalli nhi choro paswrd liko ")
// }
// else{
//     console.log("khali nhi chor isko fill krna hai ")
// }


// This if/else statement does not work. Try to fix it:


// var greeting;
// var hour = 13;
// if (hour < 18) {
//  console.log("good morning ")
// }
// else{
// console.log("Good evening") ;
// }


// 7. Write a program that takes time as input from user in 24 
// hours clock format like: 1900 = 7pm. Implement the 
// following case using if, else & else if statements


// let time = +prompt("input your time ")
// if( time>=0 && time<1200 ){
//     return "good morning"
// }
// else if ( time >=1200 && time<1700){
//     return "good after noon"
// }
// else  (time >=1700 && time > 2100){
//     return "good evening "
// }





// var students = ["zakir","amjad", 22, false, true, "islamabd"]
// console.log(students)


// Write a program to store 3 student names in an array.Take
// another array to store score of these three students. 
// Assume that total marks are 500 for each student, display 
// the scores & percentages of students like:


// var students = ["mujahid", "zakir", "abdullah"]
// var marks =[50, 60, 70]
// var totalMarks = 500;

// var persentageOfMujahid = 50/500 *100;
// document.write(`the ${students[0]} persentage is ${persentageOfStudent} `)
// var persentageOfZakir = 60/500 *100;
// document.write(`the ${students[1]} persentage is ${persentageOfZakir} `)
// var persentageOfAbdullah = 70/500 *100;
// document.write(`the ${students[2]} persentage is ${persentageOfAbdullah} `)

// ........ARRAYS..........

// jab kisi elemnt ki jaga koi or value ap put krna chaho tab 

// let a = ["zakir", "abdullah", 23, true, false ,"mujhaid hissain"];
// a[2]="raja bhai"
// console.log(a)


// agr apko arry ka length pata krna hai to 

// let a = ["zakir", "abdullah", 23, true, false ,"mujhaid hissain"];
// a[2]="raja bhai"
// console.log(a.length)


//  agr apko last me value add krni hai to ye krne hoga 

// let variable = ["zakir", "abdullah", 23, true, false ,"mujhaid hissain"];
//  variable.push("nxt value in last");
//  console.log(variable)


// agr value fiorst me add krni hai to ye krna hoga 

// let variable = ["zakir", "abdullah", 23, true, false ,"mujhaid hissain"];
//  variable.unshift("start me add kr rha ");
//  console.log(variable)


// agr apko last se value ko hatan hai to pir ye krna parega 

//  let variable = ["zakir", "abdullah", 23, true, false ,"mujhaid hissain"];
//  variable.pop();
//  console.log(variable)

//  agr shuru se hatan hai to ye krna parega 

//  let variable = ["zakir", "abdullah", 23, true, false ,"mujhaid hissain"];
//  variable.shift();
//  console.log(variable)


// agr apni marzi se koi value add krni hai hatani hai to ye krna prega 

// let variable = ["zakir", "abdullah", 23, true, false ,"mujhaid hissain"];
//  variable.splice(2,1,"naya value","number")
//  console.log(variable)



// agr apko kisi value ka positon fine krna hai to apko ye krna parega 

// let variable = ["zakir", "abdullah", 23, true, false, "mujhaid hissain"];
// let position = variable.indexOf(false)
// console.log(position)



// agr apko check krna hai k ye arry hai yan hi to ye krna hoga

// let variable = ["zakir", "abdullah", 23, true, false, "mujhaid hissain"];
// console.log(Array.isArray(variable))


//  agr kisi normal text ko arry me conevrt pare to ye krna hoga 

// let variable = "hello my name is amjad khan"
// let makeArray =  variable.split(" ");
//  console.log(makeArray)

// Array k andr Array ko kese banay jat hai 

// let student = [
//     ["amjad", 20],
//     ["kashif", 30],
//     ["mujahid",40]
// ]
// let fetch = student[1][1];
// console.log(fetch)



// now using loop for Array 
//  let students = [ "zakir", "mujahid","abdullah","hassan"]
//  let studentLength = students.length;
//  for( let i=0; i < studentLength; i++){
//     console.log(`element ${i} is ${students[i]}\n`)
//  }

//  Array assigment


// Declare an empty array using JS object notation to store
// student names in future.

// let array = [];
// console.log(array)


// 3. Declare and initialize a strings array.

// let string = ["amjad", "kashif","majid","wajid"]
// console.log(string)


// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students 

// let studentName = ["wajid", "adil", "abdullah"];
// let studentMarks = [60, 65, 70];
// let studentLength = studentName.length
// let totalMakrs = 500
// let persenattge = [60/500*100, 65/500*100, 70/500*100]

// for(i=0; i<studentLength; i++){

//     console.log(`score of ${studentName[i]} is ${studentMarks[i]} and persenattge is ${persenattge[i]} % `)
// }



// 9. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// Arrays | JAVASCRIPT
// Page 3 of 6
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

// let colors = ["blue", "green", "yellow", "brown", "purple"]
// let user = prompt("what color 1 you want to add in the list of start ")
// let user2 = prompt("what color 2 you want to add in the list of start ")
// colors.unshift(user);
// colors.unshift(user2);
// console.log(colors);



// .......... delet the last color 
// let colors = ["blue", "green", "yellow", "brown", "purple"]
// colors.pop();
// console.log(colors)



// ...........delete the first color 
// let colors = ["blue", "green", "yellow", "brown", "purple"]
// colors.shift();
// console.log(colors)

// .......
// let colors = ["blue", "green", "yellow", "brown", "purple"]
// let user1 = prompt("from which index you want to delete the value")
// let user2 = prompt("and how many values you want to add")
// let user3 = prompt("and what you want to add in the replacement ");
// colors.splice(user1, user2, user3);
// console.log(colors);

// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.

// let studentScore = [20, 30, 40, 50];
// studentScore.reverse()
// console.log(studentScore)


// 12. Write a program to create a single string from the
// below mentioned array:


// var arr = ["This", "is ", " my ", " cat"];
// let newString =  arr.toString("")
// console.log(newString)


//  to check thge array

// let studentScore = [20, 30, 40, 50];
// console.log(Array.isArray(studentScore))




// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.



// let cityName = ["karachci", "lahore", "islamabd", "quetta", "faislabd"]
// let newValue = cityName.slice(0,3)
// console.log(newValue)




// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)





// 15. Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array.
//     Display the following dropdown/select menu in your
//     browser using document.write() method:



// .........FUNCTION ..........//


//  multiplication table in function 
// let user = +prompt("inter your number ")
// function mulTable(){
//     for(let i=1; i<=10; i++){
//         document.write(`${user} * ${i} = ${user * i}`)
//         document.write("<br>")

//     }
// }
// mulTable();


// .............

// function number(num1 , num2){
    
//  if( num1== num2){
//     return true
//  }
//  else {
//     return false
//  }

// } 
// let b= number(2,2);
// document.write(b)

// let y =4 

// function number(a, b){
//     let result = a + b 
//     console.log(result)
// }
// number(3,5)




// ..........FUNCTION ..........

// 2. Write a function that takes first & last name and then it 
// greets the user using his full name.



// function fullName(name1,name2){
   

// }
// document.write(`your full name is ${user1 + user2}`)



// 3. Write a function that adds two numbers (input by user) 
// and returns the sum of two numbers.


// function number(num1,num2){
//     return num1 + num2

// }

// let c =number( +prompt("fist number"), +prompt("second number"))
// document.write(c)


// 4. Calculator:
// Write a function that takes three arguments num1, num2 
// & operator & compute the desired operation. Return and 
// show the desired result in your browser.

// function number(num1,operator,num2){
//     return( num1  operator  num2)

// }
// let newValue = number(+prompt("enter fist number"),prompt("use operator"),+prompt("enter second numbe"));
// document.write(newValue)



// 5. Write a function that squares its argument.

// function number(a){
//     a = +prompt("input your number ")
//     return a ** 2

// }
//  c=number();
//  document.write(c);



// 6. Write a function that computes factorial of a number.


// function factorial(n){
//     let answer = 1;
//     if (n == 0 || n == 1){
//       return answer;
//     }
//     else if(n > 1){
//       for(var i = n; i >= 1; i--){
//         answer = answer * i;
//       }
//       return answer;
//     }
//     else{
//       return "number has to be positive."
//     }  
//   }
//   let n = 4;
//   answer = factorial(n)
//   console.log("Factorial of " + n + " : " + answer);



// function calculateHypotinus(){
//     let base = +prompt("input base value")
//     let perpendilculer = +prompt("perpendiculer value");
//     let hypotinus = base**2 + perpendilculer**2
//     return hypotinus**2
//     function claculatesquare(){
//         let radius = +prompt("input radius for square of the circle")
//         let square = 3.14 * radius**2
//         return square
//     }

// }


// let d= claculatesquare()
// let c= calculateHypotinus()
// document.write(c)
// document.write(d)


// objects

// let student = {
//   fullName : "mujahid ",
//   class : "matric",
//   age: 23,
  
// }
// student.fatherName = "abdullah";

// // delete krne k liye 
// delete student.fullName;
// // agr koi property check krna ho k vo isme hai ya nhi to 

// console.log("class" in student)
// // console.log(student.age)  


// ...........koi bhi total properties check krne ho to 
// let students = {
//   name : "zakir ",
//   fatheName : "abdul raof",
//   class: "matric",
//   rollNumber: 99,
// }
// for( let key in students){
//   console.log(key +":" + students[key])

// }

// object of function k combination ko methode bolte hai

// stundents.sayhello = function(){
//   console.log("hello students")
// }
// stundents.sayhello();

// function or object ko alag alag bhi kr skty hai 
 
// person ={};
// person.sayhello = student;
//  person.sayhello();

// function student(){
//   console.log("hi hello ");

//  }
// let user = Number(prompt("inter a number in km"));
// if(typeof user==="string"){
//   console.log("good ")
// }
// else{
//   console.log("abay o english ")

// }


