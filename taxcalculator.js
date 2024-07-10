// function calculateTax(earnings) {
//     return 0;
//   }
  
// export default calculateTax;
  
//cycle 3
//handle earnings between 12000 and 36000.
// function calculateTax(earnings) {
//   if (earnings < 12000) {
//     return 0;
//   } else if (earnings <= 36000) {
//     return (earnings - 12000) * 0.2;
//   }
//   return 0;
// }

// export default calculateTax;

//handle earnings above 36000.


//handle earnings between 12000 and 36000//
// function to handle earnings above 36000.
function calculateTax(earnings) {
  if (earnings < 12000) {
    return 0;
  } else if (earnings <= 36000) {
    return (earnings - 12000) * 0.2;
  } else {
    return (36000 - 12000) * 0.2 + (earnings - 36000) * 0.4;
  }
}

export default calculateTax;




