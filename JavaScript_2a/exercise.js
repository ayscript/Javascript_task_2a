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

  console.log(getGrade(Number(userInput)));
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
      const discountPercentage = isFirstPurchase.toLowerCase() === 'yes' ? 15 : 10;
      discountedPrice =
        Number(price) - (discountPercentage / 100) * Number(price);
    } else if (String(customerType).toLowerCase() === "senior") {
      const discountPercentage = isFirstPurchase.toLowerCase() === 'yes' ? 20 : 15;
      discountedPrice =
        Number(price) - (discountPercentage / 100) * Number(price);
    } else if (String(customerType).toLowerCase() === "employee") {
      const discountPercentage = isFirstPurchase.toLowerCase() === 'yes' ? 25 : 20;
      discountedPrice =
        Number(price) - (discountPercentage / 100) * Number(price);
    }

    return `Discounted price is ${discountedPrice}`
  }

  console.log(calculatePrice(price, customerType, isFirstPurchase))
}

function exercise3() {
    const temperature = prompt("What is the current temperature")
    const isRaining = prompt("Is it raining?")
    function weatherAdvice(temperature, isRaining){
        if (Number(temperature) < 32 && String(isRaining).toLowerCase() === 'yes') {
            return 'Freezing rain! Stay inside!'
        } else if(Number(temperature) < 32) {
            return "Very cold, wear a heavy coat."
        } else if(Number(temperature) >= 32 && Number(temperature) <= 59) {
            return "Chilly, bring a jacket."
        } else if(Number(temperature) >= 60 && Number(temperature) <= 79) {
            return "Nice Weather!"
        } else if (Number(temperature) >= 80) {
            return "It's hot, stay hydrated!"
        }
    }

    console.log(weatherAdvice(temperature, isRaining))
}