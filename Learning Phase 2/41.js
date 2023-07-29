// object destructuring

const band = {
    bandName: "led zeppelin",
    famousSong: "stairway to heaven",
    year: 1968,
    anotherFamousSong: "kashmir",
}

console.log(band);

const {bandName, famousSong, year, anotherFamousSong} = band;
console.log(bandName);
console.log(famousSong);
console.log(year);
console.log(anotherFamousSong);

const {bandName: name, famousSong: song, year: bandYear, anotherFamousSong: song2} = band;
console.log(name);
console.log(song);
console.log(bandYear);
console.log(song2);

