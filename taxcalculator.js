// function calculateTax(earnings) {
//     return 0;
//   }
  
// export default calculateTax;
  
//cycle 3
function calculateTax(earnings) {
  if (earnings < 12000) {
    return 0;
  } else if (earnings <= 36000) {
    return (earnings - 12000) * 0.2;
  }
  return 0;
}

export default calculateTax;
