const locationss = require('../locations.json')
const APIAdress = 'https://archive-api.open-meteo.com/v1/archive';
async function f1 (lat, long, timeStr) {
    let sum=0;
    let datakaka;
    await fetch(APIAdress+`?latitude=${lat}&longitude=${long}&start_date=${timeStr}&end_date=${timeStr}&hourly=temperature_2m`)
    .then(data=>data.json()).then(data => datakaka=data).then(data=> console.log(data));
    datakaka.hourly.temperature_2m.forEach(element => {
        sum+=element;});
     return Math.floor(sum/24);
}
module.exports = f1;