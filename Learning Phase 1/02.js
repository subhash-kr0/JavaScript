// string methods
// 1. trim()
// 2. toUpperCase()
// 3. toLowerCase()
// 4. substring()
// 5. split()
// 6. indexOf()
// 7. lastIndexOf()
// 8. charAt()
// 9. charCodeAt()
// 10. replace()
// 11. includes()
// 12. startsWith()
// 13. slice()
// 14. concat()

let firstNmae = "myworld";

console.log(firstNmae);
console.log(typeof firstNmae);

console.log(firstNmae.length);
console.log(firstNmae.toUpperCase());
console.log(firstNmae.toLowerCase());
console.log(firstNmae.substring(0, 2));
console.log(firstNmae.substring(0, 2).toUpperCase());
console.log(firstNmae.split(''));

console.log(firstNmae[0]);
console.log(firstNmae[1]);
console.log(firstNmae[2]);
console.log(firstNmae[3]);
console.log(firstNmae[4]);
console.log(firstNmae[5]);
console.log(firstNmae[6]);

console.log(firstNmae.indexOf('w'));
console.log(firstNmae.indexOf('o'));

let newStr = firstNmae.slice(0, 2);
console.log(newStr);