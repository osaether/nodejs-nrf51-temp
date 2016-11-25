nodejs-nrf51-temp
=================

nodejs-nrf51-temp is a Noble (Node.js, Bluetooth Low Energy) module that scans for 
advertisements from the nrf51-ble-app-temp and prints the temperature to standard output.

The code has been tested on a Rasberry Pi 3

Prerequisites
=============

A Raspberry Pi (or other system) running Noble (https://github.com/sandeepmistry/noble) and
one or more nRF51 peripherals running the nrf51-ble-app-temp firmware.
The nrf51-ble-app-temp can be found here https://github.com/osaether/nrf51-ble-app-temp Other
BLE peripherals advertising the BLE Health Thermometer Service compatible with the
nrf51-ble-app-temp can also be used.

Usage
=====

sudo NOBLE_REPORT_ALL_HCI_EVENTS=1 node nrf-temp.js


gives and output similar to this:

Name: 6AF4CDD2 temperature: 19°C
Name: 8A78B2EC temperature: 22.74°C
Name: 6AF4CDD2 temperature: 19°C
