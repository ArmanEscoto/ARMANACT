// let input = prompt("Enter a decimal number: ");
// let result = Math.round(input);

// document.write("Sample Output:<br>")
// document.write("Enter a decimal number:"+ input+"<br>")
// document.write("Rounded Nearest Integer:"+ result);


// let num = parseFloat(prompt("Enter a decimal number: "));
// let n = num.toFixed(2);

// document.write("Rounded Two decimal:"+ n);



// let num1 = Number(prompt("Please enter the first decimal: "));
// document.write("Enter Decimal Number = ",num1);
// let num2 = Number(prompt("Please enter the second decimal: "));
// document.write("<br>Enter Decimal Number = ",num2);
// let num3 = Number(prompt("Please enter the third decimal: "));
// document.write("<br>Enter Decimal Number = ",num3);
// let num4 = Number(prompt("Please enter the fourth decimal: "));
// document.write("<br>Enter Decimal Number = ",num4);
// let num5 = Number(prompt("Please enter the fifth decimal: "));
// document.write("<br>Enter Decimal Number = ",num5);


// document.write("<br><br>You Entered: "+num1+" "+num2+" "+num3+" "+num4+" "+num5);
// let inum1 = Math.round(num1);
// let inum2 = Math.round(num2);
// let inum3 = Math.round(num3);
// let inum4 = Math.round(num4);
// let inum5 = Math.round(num5);

// document.write("<br>The sum of integers is: " +(inum1+inum2+inum3+inum4+inum5));
// document.write("<br>The average of integers is: " +((inum1 + inum2 + inum3 + inum4 + inum5)/5));




// num1 = Number(prompt("Please enter a number: "));
// num2 = Number(prompt("Please enter a number: "));
// num3 = Number(prompt("Please enter a number: "));

// var inum = [num1, num2, num3];
// var inum = inum.sort(function(a,b){return a - b});
// for(i=0;i<inum.length;i++){
//     document.write( inum[i]);
// }


// let inputs = prompt("Enter a set of number seperate with comma: ");
// let numbers = inputs.split(",").map(Number);

// let sumEven = 0;
// let sumOdd = 0;

// for (let i = 0; i < numbers.length; i++){
//     if (numbers[i] % 2 == 0){
//         sumEven += numbers[i];
//     } else {
//         sumOdd += numbers[i];
//     }
// }

// document.write("Sum of Even integers: " + sumEven);
// document.write("<br>")
// document.write("Sum of Odd integers: " + sumOdd);



function calculatePaycheck() {
    var employeeName = document.getElementById("employeeName").value;
    var grossIncome = parseFloat(document.getElementById("grossIncome").value);
    
    var stateTax = 0.035 * grossIncome;
    var socialSecurity = 0.0575 * grossIncome;
    var pagIbig = 0.0275 * grossIncome;
    var philHealth = 200;
    var retirementPlan = 0.05 * grossIncome;

    var netPay = grossIncome - stateTax - socialSecurity - pagIbig - philHealth - retirementPlan;

    document.getElementById("stateTax").innerHTML = "State Tax: P" + stateTax.toFixed(2);
    document.getElementById("socialSecurity").innerHTML = "Social Security Contribution: P" + socialSecurity.toFixed(2);
    document.getElementById("pagIbig").innerHTML = "Pag-ibig Contribution: P" + pagIbig.toFixed(2);
    document.getElementById("philHealth").innerHTML = "Philhealth Contribution: P" + philHealth.toFixed(2);
    document.getElementById("retirementPlan").innerHTML = "Retirement Plan: P" + retirementPlan.toFixed(2);
    document.getElementById("netPay").innerHTML = "Net Pay: P" + netPay.toFixed(2);
}