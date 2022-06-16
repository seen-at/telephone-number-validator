function telephoneCheck(str) {
  if(str.indexOf("(") === -1 && str.indexOf(")") > 0) return false;
  if(str.indexOf(")") - str.indexOf("(") > 4) return false;
  if(str[0] === "-") return false;
  if(str.indexOf(" ") === 2) return false;

  let polishedPhone = str.replace(/ |-/g, "")

  if(polishedPhone.indexOf("(") < polishedPhone.indexOf(")")) {
    polishedPhone = polishedPhone.replace(/\(|\)/g, "")
  }
  if(polishedPhone.length === 10) return true; 
  else if(polishedPhone.length === 11 && polishedPhone[0] === "1" ) {
    return true;
  }
  
  return false;
}

console.log(telephoneCheck("55 55-55-555-5"));
