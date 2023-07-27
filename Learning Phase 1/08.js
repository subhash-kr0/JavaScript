// while loop

var i = 1;
while (i <= 10) {
  console.log(i);
  i++;
} 

// do while loop  (always runs at least once)

var i = 1;
do {
    console.log(i);
    i++;
    }
while (i <= 10);

// for loop

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// break and continue

const scores = [50, 25, 0, 30, 100, 20, 10];

for (let i = 0; i < scores.length; i++) {
    console.log("your score: ", scores[i]);
    if (scores[i] === 100) {
        console.log("congrats, you got the top score");
        break;
    }
}

for (let i = 0; i < scores.length; i++) {
    if (scores[i] === 0) {
        continue;
    }
    console.log("your score: ", scores[i]);
    if (scores[i] === 100) {
        console.log("congrats, you got the top score");
        break;
    }
}