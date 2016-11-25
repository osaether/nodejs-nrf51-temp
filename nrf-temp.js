var noble = require('noble');

const BLE_UUID_HEALTH_THERMOMETER_SERVICE="1809";
var serviceUUIDs = [BLE_UUID_HEALTH_THERMOMETER_SERVICE];

noble.on('stateChange', function(state)
{
    if (state === 'poweredOn')
    {
        noble.startScanning(serviceUUIDs, true);
    }
    else
    {
        noble.stopScanning();
     }
});

noble.on('discover', function(peripheral)
{
    var serviceData = peripheral.advertisement.serviceData;
    if (serviceData && serviceData.length)
    {
        for (var i in serviceData)
        {
            if (serviceData[i].uuid == BLE_UUID_HEALTH_THERMOMETER_SERVICE)
            {
                var temperature = serviceData[i].data[1] << 8 | serviceData[i].data[0];
                var exp = Number(serviceData[i].data[3]);
                if (exp > 127)
                   exp = exp - 256;
                var ftemp = temperature * Math.pow(10.0, exp);
                console.log("Name: "+peripheral.advertisement.localName + " temperature: "+ftemp.toString()+"\xB0C")
            }
        }
    }
});
