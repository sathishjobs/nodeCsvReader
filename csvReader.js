const fs = require('fs');
const csv = require('csv-parser');

let count = 0;
let fakeGeoData = []
fs.createReadStream("./Mobile_activity_3months_scrambled.csv")
    .pipe(csv())
    .on('data', function (data) {
        try {
            count++
            if (count < 600) {
                fakeGeoData.push({
                    lat: data.lat,
                    lon: data.lon,
                    assets: generateRandomAssetRange()
                })
            }
            // console.log(data);
            // console.log("Age is: "+data.AGE);
            //perform the operation
        }
        catch (err) {
            //error handler
        }
    })
    .on('end', function () {
        console.log('Final end');
        console.log(fakeGeoData[0]);
        //some final operation
    });

generateRandomAssetRange = () => {
    var randomOne = Math.floor((Math.random() * 100) + 1)
    var randomTow = Math.floor((Math.random() * 100) + 1)
    var randomThree = Math.floor((Math.random() * 100) + 1)
    return [randomOne, randomTow, randomThree]
}