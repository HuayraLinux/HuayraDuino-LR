/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Arduino code generator for the Dht11 library blocks.
 *     The Arduino Dht11 library docs: https://github.com/adafruit/DHT-sensor-library
 */
'use strict';

goog.provide('Blockly.Arduino.dht11');

goog.require('Blockly.Arduino');


/**
 * Code generator for the dht11 generator configuration. Nothing is added
 * to the 'loop()' function. Sets the TX, RX, etc.
  * Arduino code: #include <<DHT11.h>>
 *                #include <<SoftwareSerial.h>>
 *               setup() 
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Empty string as no code goes into 'loop()'.
 */
Blockly.Arduino['dht11_config'] = function(block) {
  var pinDHTType = Blockly.Arduino.PinTypes.DHT11_PIN;
  var mpDht11Name = block.getFieldValue('DHT11_NAME');
  var DHTPin = [block.getFieldValue('DHT11_PIN')];
  var portVar = 'int ' + mpDht11Name + '_DHT11_pin = ' + DHTPin + ';';
  var globalCode = 'DHT ' + mpDht11Name + '(' + mpDht11Name + '_DHT11_pin, DHTTYPE);'; 
  
  Blockly.Arduino.reservePin(block, DHTPin, pinDHTType, 'dht11');

  //portVar is a variable containing the used pins
  Blockly.Arduino.addVariable(mpDht11Name, portVar, true);
  
  Blockly.Arduino.addInclude('dht11', '#include <DHT.h>\n' +
                             '#define DHTTYPE DHT11');

  Blockly.Arduino.addDeclaration(mpDht11Name, globalCode);
  
  var setupCode = mpDht11Name + '.begin();';
  Blockly.Arduino.addSetup(mpDht11Name, setupCode, true);

  return '';
};


/**
 * Code generator to read a distance from a dht11 sensor.
 * Arduino code: 
 *               loop  {  x.readhumidity();    }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */              
Blockly.Arduino['dht11_readhumidity'] = function(block) {
  var mpDht11Name = block.getFieldValue('DHT11_NAME');
  var code = mpDht11Name + '.readHumidity()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * Code generator to read a distance from a dht11 sensor.
 * Arduino code: 
 *               loop  {  x.readTemperature();    }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */              
Blockly.Arduino['dht11_readTemperature'] = function(block) {
  var mpDht11Name = block.getFieldValue('DHT11_NAME');
  var code = mpDht11Name + '.readTemperature()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * Code generator to read a distance from a dht11 sensor.
 * Arduino code: 
 *               loop  {  x.computeHeatIndex(t, h, false);
     }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */              
Blockly.Arduino['dht11_computeHeatIndex'] = function(block) {
  var mpDht11Name = block.getFieldValue('DHT11_NAME');
  var mpDht11Temp = block.getFieldValue('DHT11_TEMP');
  var mpDht11Hum = block.getFieldValue('DHT11_HUM');
  var code = mpDht11Name + '.computeHeatIndex(' + mpDht11Temp + ', ' + mpDht11Hum + ', false)';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

