function isStrongPassword(password) {
const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z0-9])[A-Za-z\d!@#$%^&*(),.?":{}|<>_\-+=~`[\]\\;'\/]+$/;

  if (password.length < 8) {
    console.log("Password length must be at least 8 characters long");
  } else if(regex.test(password)) {
    console.log("Strong password")
  }
  else{
    console.log("Password must contain Alphabet, Numeric and Special Characters")
  }
}

function formatPercentage(value){
    console.log(`${value.toFixed(1)}%`)
}

function calculateCompoundInterest(principal,rate,years){
    console.log(`Compound Interest = ${principal * ((1 + rate)^years)}`)
}