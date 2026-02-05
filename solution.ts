type inputType = string | number | boolean;

const formatValue = (value: inputType) : inputType | undefined => {
  if(typeof value === "string"){
    return value.toUpperCase();
  }
  else if(typeof value === "number"){
    return value * 10;
  }
  else if(typeof value === "boolean"){
    return !value;
  }
  else{
    console.log("invalid input")
  }
}

const result = formatValue("hello");
const result2 = formatValue(5);
const result3 = formatValue(true);

// console.log(result);
// console.log(result2);
// console.log(result3);

type lengthInputType = string | any[];

const getLength = (value: lengthInputType) : number => {
    return value.length;
}

const lengthResult = getLength('typescript');
const lengthResult2 = getLength([10, 20, 30, 40]);

console.log(lengthResult);
console.log(lengthResult2);
 