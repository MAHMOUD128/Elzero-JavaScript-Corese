function ageInTime(theAge) {
    if(theAge > 10 && theAge < 100)
    {
        console.log(`Months => ${12*theAge} Months\nDays => ${theAge*12*365} Days\nNumber of Hours => ${theAge*12*365*24} Hours\nNumber of Min => ${theAge*12*365*24*60} Min\nNumber of Sec => ${theAge*12*365*24*60*60} Sec`);
    }
    else{
        console.log(`Age Out Of Range`);
    }
  }
  
  // Needed Output
  ageInTime(110); // Age Out Of Range
  ageInTime(38); // Months Example => 456 Months