// booleans and comparisons operators

console.log(true, false, "true", "false");

// comparison operators
console.log(1 == 1);
console.log();
console.log(1 == "1");
console.log();
console.log(1 === "1");
console.log();
console.log(1 === 1);
console.log();
console.log(1 != 1);
console.log();
console.log(1 != "1");
console.log();
console.log(1 !== "1");
console.log();
console.log(1 !== 1);
console.log();
console.log(1 > 1);
console.log(1 < 1);
console.log(1 >= 1);
console.log(1 <= 1);
console.log();

// loose comparison (different types can still be equal)
console.log(1 == 1);
console.log(1 == "1");
console.log(1 != 1);
console.log(1 != "1");
console.log();
 
// truthyand falsy values
// falsy values: false, 0, "", null, undefined, NaN
// truthy values: everything else that is not falsy

console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(false));
console.log(Boolean(true));
console.log(Boolean("hello"));
console.log(Boolean("0"));
console.log(Boolean(" "));
console.log(Boolean("false"));
console.log(Boolean([]));
console.log(Boolean({}));
console.log(Boolean(function(){}));