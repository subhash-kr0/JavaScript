// get multiple element using getElements by class name
// get multiple element item using querySelectorAll
// array like object ---> indexing, length property
// let navItems = document.getElementsBy TagName("a"); //HTMLCollection
// console.log(navItems);
//we can't use forEach method to iterate through HTMLCollection
//simple for loop
// simple of loop
//forEach

//for(let i=0; i< navTtems.lenght; i++){
//    console.log(navItems[i]);
//   const navItem = navItems[i];
//   navItem.style.backgroundColor = "#fff";
//   navItem.style.color = "green";
//   navItem.style.fontWeight = "bold";
//}

//for(let navItem of navItems){
//   navItem.style.backgroundColor = "#fff";
//   navItem.style.color = "green";
//   navItem.style.fontWeight = "bold";
//}

// navItems = Array.from(navItems);
// console.log(Array.isArray(navItems));
// navItems.forEach((navItem)=>{
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// })

// console.log(Array.isArray(navItems));
// const navItems = document.querySelectorAll(".nav-item"); // NodeList
// console.log(navItems[1]);

// let navItems = document.querySelectorAll("a");
// navItems = Array.from(navItems);
// console.log(Array.isArray(navItems));
// simple for loop 
// for of loop 
// forEach 
// for(let i=0; i< navItems.length; i++){
//     // console.log(navItems[i]);
//     const navItem = navItems[i];
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";

// }

// for(let navItem of navItems){
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// }
// navItems.forEach((navItem)=>{
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
//     navItem.style.fontWeight = "bold";
// })