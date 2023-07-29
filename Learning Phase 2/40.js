// spread operator

const arr = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr, ...arr2, 7, 8, 9];
console.log(arr3);

const obj = {
    key1: "value1",
    key2: "value2",
    key3: "value3",
};

const obj2 = {
    key4: "value4",
    key5: "value5",
    key6: "value6",
};

const obj3 = { ...obj, ...obj2 };
console.log(obj3);

const obj4 = {...["item1", "item2", "item3"]}
console.log(obj4);