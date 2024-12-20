function calculateRisk(event) {
  if (event) {
    event.preventDefault();
  }
  var age = parseInt(document.getElementById("age").value);
  var cholesterol = parseInt(document.getElementById("cholesterol").value);
  var hdlCholesterol = parseInt(
    document.getElementById("hdlCholesterol").value
  );
  var bloodPressure = parseInt(document.getElementById("bloodPressure").value);
  var smoker = document.getElementById("smokerSwitch").checked ? "yes" : "no";
  var diabetes = document.getElementById("diabetesSwitch").checked
    ? "yes"
    : "no";
  var familyHistory = document.getElementById("familyHistorySwitch").checked
    ? "yes"
    : "no";
  var physicalActivity =
    parseFloat(document.getElementById("physicalActivity").value);
  var weight = parseFloat(document.getElementById("weight").value);
  var height = parseFloat(document.getElementById("height").value);
  var alcoholConsumption =
    parseInt(document.getElementById("alcoholConsumption").value);

  // BMI calculation
  var bmi = calculateBMI(weight, height);

  // Determine BMI category
  var bmiCategory;
  if (bmi < 18.5) {
    bmiCategory = "Underweight";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    bmiCategory = "Normal weight";
  } else if (bmi >= 25 && bmi < 29.9) {
    bmiCategory = "Overweight";
  } else {
    bmiCategory = "Obese";
  }
  // Calculate the risk based on a complex formula
  var risk = 0;

  // Age component
  if (age >= 40 && age <= 49) {
    risk += 1;
  } else if (age >= 50 && age <= 59) {
    risk += 2;
  } else if (age >= 60 && age <= 69) {
    risk += 3;
  } else if (age >= 70) {
    risk += 4;
  }

  // Cholesterol component
  if (cholesterol >= 160 && cholesterol <= 199) {
    risk += 1;
  } else if (cholesterol >= 200 && cholesterol <= 239) {
    risk += 2;
  } else if (cholesterol >= 240) {
    risk += 3;
  }

  // HDL Cholesterol component
  if (hdlCholesterol >= 60) {
    risk -= 1;
  }

  // Blood Pressure component
  if (bloodPressure >= 120 && bloodPressure <= 129) {
    risk += 1;
  } else if (bloodPressure >= 130 && bloodPressure <= 139) {
    risk += 2;
  } else if (bloodPressure >= 140) {
    risk += 3;
  }

  // Smoking component
  if (smoker === "yes") {
    risk += 2;
  }

  // Diabetes component
  if (diabetes === "yes") {
    risk += 2;
  }

  // Family history component
  if (familyHistory === "yes") {
    risk += 1;
  }

  // Physical activity component
  if (physicalActivity >= 3) {
    risk -= 1;
  }

  // BMI component
  if (bmi >= 25) {
    risk += 1;
  }

  // Alcohol consumption component
  if (alcoholConsumption > 7) {
    risk += 1;
  }

  // Display the result
  document.getElementById("result").innerHTML =
    "Your Heart Risk: " +
    risk +
    "%<br>" +
    "Your BMI: " +
    bmi.toFixed(2) +
    "<br>" +
    "Your BMI Category: " +
    bmiCategory;
}

function calculateBMI(weight, height) {
  // BMI formula: weight (kg) / (height (m))^2
  var heightInMeters = height / 100;
  return weight / (heightInMeters * heightInMeters);
}


////////////
///////////
//////////
document.getElementById("openFormBtn").addEventListener("click", openForm);

function openForm() {
  document.getElementById("FormOverlay").style.display = "block";
}

function closeForm() {
  document.getElementById("FormOverlay").style.display = "none";
  document.getElementById("riskCalculatorForm").submit();
}


