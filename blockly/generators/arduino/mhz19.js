/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Arduino code generator for the Mhz19 library blocks.
 *     The Arduino Mhz19 library docs: https://github.com/WifWaf/MH-Z19
 */
'use strict';

goog.provide('Blockly.Arduino.mhz19');

goog.require('Blockly.Arduino');


/**
 * Code generator for the mhz19 generator configuration. Nothing is added
 * to the 'loop()' function. Sets the TX, RX, etc.
  * Arduino code: #include <<MHZ19.h>>
 *                #include <<SoftwareSerial.h>>
 *               setup() 
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Empty string as no code goes into 'loop()'.
 */
Blockly.Arduino['mhz19_config'] = function(block) {
  var pinRXType = Blockly.Arduino.PinTypes.MHZ19_RX_PORT;
  var pinTXType = Blockly.Arduino.PinTypes.MHZ19_TX_PORT;
  var mpMhz19Name = block.getFieldValue('MHZ19_NAME');
  var RXport = [block.getFieldValue('MHZ19_RX_PORT')];
  var TXport = [block.getFieldValue('MHZ19_TX_PORT')];
  var portVar = 'int ' + mpMhz19Name + '_RX_port = ' + RXport + ';\n' +
                'int ' + mpMhz19Name + '_TX_port = ' + TXport + ';';
  var globalCode = 'MHZ19 ' + mpMhz19Name + ';\n'  +
                   'SoftwareSerial ' + mpMhz19Name + '_Serial(' + mpMhz19Name + '_RX_port, ' + mpMhz19Name + '_TX_port);'; 
  
  Blockly.Arduino.reservePin(block, RXport, pinRXType, 'mhz19');
  Blockly.Arduino.reservePin(block, TXport, pinTXType, 'mhz19');
  
  //portVar is a variable containing the used pins
  Blockly.Arduino.addVariable(mpMhz19Name, portVar, true);
  
  Blockly.Arduino.addInclude('mhz19', '#include <MHZ19.h>\n' +
                             '#include <SoftwareSerial.h>');

  Blockly.Arduino.addDeclaration(mpMhz19Name, globalCode);
  
  var setupCode = mpMhz19Name + '_Serial.begin(9600);\n  ' +
                  mpMhz19Name + '.begin(' + mpMhz19Name + '_Serial);\n  ' +
                  mpMhz19Name +'.autoCalibration();';
  Blockly.Arduino.addSetup(mpMhz19Name, setupCode, true);

  return '';
};


/**
 * Code generator to read a distance from a mhz19 sensor.
 * Arduino code: 
 *               loop  {  x.distanceCm();    }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */              
Blockly.Arduino['mhz19_getCO2'] = function(block) {
  var mpMhz19Name = block.getFieldValue('MHZ19_NAME');
  var code = mpMhz19Name + '.getCO2()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * Code generator to read a distance from a mhz19 sensor.
 * Arduino code: 
 *               loop  {  x.distanceCm();    }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */              
Blockly.Arduino['mhz19_getTemperature'] = function(block) {
  var mpMhz19Name = block.getFieldValue('MHZ19_NAME');
  var code = mpMhz19Name + '.getTemperature()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

