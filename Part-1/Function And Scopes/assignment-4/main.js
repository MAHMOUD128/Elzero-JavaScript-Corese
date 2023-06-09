function specialMix(...data) {
   
   let sum = 0 ;
   let isAllStrings = true;

   for (let i = 0 ; i < data.length; i++) 
   {
        if(typeof data[i] == "number")
        {
            sum += data[i];
            isAllStrings = false;
        }
        else if (typeof data[i] == "string")
        {
            let number = parseInt(data[i]);
            if(!isNaN(number))
            {
                sum += number;
                isAllStrings = false;
            }
        }
   }
   if(isAllStrings)
   {
       return "All Is Strings";
   }
   return sum;

  }
  
  console.log(specialMix(10, 20, 30)); // 60
  console.log(specialMix("10Test", "Testing", "20Cool")); // 30
  console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
  console.log(specialMix("Test", "Cool", "Test")); // All Is Strings