function exercise1() {
  const userInput = prompt("Enter your score: ");

  function getGrade(score) {
    let grade = "";

    if (score >= 90 && score <= 100) {
      grade = "A";
    } else if (score >= 80 && score <= 100) {
      grade = "B";
    } else if (score >= 70 && score <= 100) {
      grade = "C";
    } else if (score >= 60 && score <= 100) {
      grade = "D";
    } else if (score >= 0 && score <= 59) {
      grade = "F";
    } else {
      return "Invalid Score Provided";
    }

    return score === 100
      ? `Outstanding! Grade: ${grade}`
      : `Score: ${score} -> Grade: ${grade}`;
  }

  alert(getGrade(Number(userInput)));
}

function exercise2() {
  const price = prompt("Enter price: ");
  const customerType = prompt(
    "Enter customer type (Student, Senior, Employee)"
  );
  const isFirstPurchase = prompt("Is it your first time purchasing? (yes/no)");

  function calculatePrice(price, customerType, isFirstPurchase) {
    let discountedPrice = 0;
    if (String(customerType).toLowerCase() === "student") {
      const discountPercentage =
        isFirstPurchase.toLowerCase() === "yes" ? 15 : 10;
      discountedPrice =
        Number(price) - (discountPercentage / 100) * Number(price);
    } else if (String(customerType).toLowerCase() === "senior") {
      const discountPercentage =
        isFirstPurchase.toLowerCase() === "yes" ? 20 : 15;
      discountedPrice =
        Number(price) - (discountPercentage / 100) * Number(price);
    } else if (String(customerType).toLowerCase() === "employee") {
      const discountPercentage =
        isFirstPurchase.toLowerCase() === "yes" ? 25 : 20;
      discountedPrice =
        Number(price) - (discountPercentage / 100) * Number(price);
    }

    return `Discounted price is ${discountedPrice}`;
  }

  alert(calculatePrice(price, customerType, isFirstPurchase));
}

function exercise3() {
  const temperature = prompt("What is the current temperature");
  const isRaining = prompt("Is it raining?");
  function weatherAdvice(temperature, isRaining) {
    if (Number(temperature) < 32 && String(isRaining).toLowerCase() === "yes") {
      return "Freezing rain! Stay inside!";
    } else if (Number(temperature) < 32) {
      return "Very cold, wear a heavy coat.";
    } else if (Number(temperature) >= 32 && Number(temperature) <= 59) {
      return "Chilly, bring a jacket.";
    } else if (Number(temperature) >= 60 && Number(temperature) <= 79) {
      return "Nice Weather!";
    } else if (Number(temperature) >= 80) {
      return "It's hot, stay hydrated!";
    }
  }

  alert(weatherAdvice(temperature, isRaining));
}

function exercise4() {
  const balance = 1000;
  const action = prompt(
    "What do you want to do? (Type either withdraw or deposit)"
  );
  const amount =
    action.toLowerCase() === "withdraw"
      ? prompt("Enter the amount you want to withdraw")
      : prompt("Enter the amount you want to deposit");
  function ATMSimulation(balance, action, amount) {
    if (action.toLowerCase() === "withdraw") {
      if (Number(amount) > 500) {
        return "You have exceeded the transaction limit, Transaction limit is 500";
      } else {
        if (Number(amount) < balance) {
          return `Withdrawal Successful! New Balance is ${
            balance - Number(amount)
          }`;
        } else if (Number(amount) > balance) {
          return `Insufficient funds yout Balance is ${balance}`;
        }
      }
    } else if (action === "deposit") {
      balance += Number(amount);

      return `Deposit Successful, your new balance is ${balance}`;
    } else {
      return "You entered an invalid input";
    }
  }

  alert(ATMSimulation(balance, action, amount));
}
