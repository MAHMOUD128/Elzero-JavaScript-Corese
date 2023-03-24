function getDetails(zName, zAge, zCountry) {
    function namePattern(zName) {
      // Split the name into parts
    const parts = zName.split(" ");
    // Get the first name and the first letter of the last name
    const firstName = parts[0];
    const lastNameInitial = parts[parts.length - 1].charAt(0).toUpperCase() + ".";
    // Return the formatted name
    return `${firstName} ${lastNameInitial}`; 
        //output
      // Osama Mohamed => Osama M.
      // Ahmed ali => Ahmed A.
    }
    function ageWithMessage(zAge) 
    {
      // Extract the age from the string
        const age = zAge.split(" ")[0];
        // Return the formatted age message
        return `Your Age Is ${age}`;
         // 38 Is My Age => Your Age Is 38
        // 32 Is The Age => Your Age Is 32
    }
    function countryTwoLetters(zCountry) 
    {
      // Get the two-letter code for the country
        const codes = {
            "Egypt": "EG",
            "Syria": "SY",
        // Add more country codes here
        };
        const code = codes[zCountry];
        // Return the formatted country message
        return `You Live In ${code}`;
        // Egypt => You Live In EG
        // Syria => You Live In SY
    }
    function fullDetails() {
      // Call the other functions to get the formatted details
        const name = namePattern(zName);
        const age = ageWithMessage(zAge);
        const country = countryTwoLetters(zCountry);
        // Return the full details message
        return `Hello ${name}, ${age}, ${country}`;
    }
    return fullDetails(); // Do Not Edit This
  }
  
  console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
  // Hello Osama M., Your Age Is 38, You Live In EG
  
  console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
  // Hello Ahmed A., Your Age Is 32, You Live In SY
