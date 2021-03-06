const noble = require('noble');

const BLE_UUID_HEALTH_THERMOMETER_SERVICE="1809";
const serviceUUIDs = [BLE_UUID_HEALTH_THERMOMETER_SERVICE];

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
    const serviceData = peripheral.advertisement.serviceData;
    if (serviceData && serviceData.length)
    {
        for (let i in serviceData)
        {
            if (serviceData[i].uuid == BLE_UUID_HEALTH_THERMOMETER_SERVICE)
            {
                let temperature = serviceData[i].data[1] << 8 | serviceData[i].data[0];
                let exp = Number(serviceData[i].data[3]);
                if (exp > 127)
                   exp = exp - 256;
                let ftemp = temperature * Math.pow(10.0, exp);
                console.log(`Name: ${peripheral.advertisement.localName} temperature: ${ftemp.toString()}\xB0C`)
            }
        }
    }
});
