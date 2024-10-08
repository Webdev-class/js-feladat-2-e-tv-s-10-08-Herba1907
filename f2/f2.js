const APIAdress = 'https://archive-api.open-meteo.com/v1/archive';

const f2 = async (lat, long, timeStr, hour) => {
    let datakaka;
    await fetch(APIAdress+`?latitude=${lat}&longitude=${long}&start_date=${timeStr}&end_date=${timeStr}&hourly=temperature_2m`)
    .then(data=>data.json()).then(data => datakaka=data).then(data=> console.log(data));
     return datakaka.hourly.temperature_2m.at(hour)
}
module.exports = f2;