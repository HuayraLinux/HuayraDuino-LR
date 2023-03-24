/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Arduino code generator for the Arduino DS18B20 blocks.
 *     The Arduino DS18B20 git: https://github.com/matmunk/DS18B20
 */
'use strict';

goog.provide('Blockly.Arduino.DS18B20');

goog.require('Blockly.Arduino');


/**
 * Code generator for the DS18B20 generator configuration. Nothing is added
 * to the 'loop()' function. Sets the pin and address,
 
 * Arduino code: #include <DS18B20.h>
 *               DS18B20 ds(X);
 *               uint8_t address[] = {40, 250, 31, 218, 4, 0, 0, 52};
 *               setup() { ds.select(address); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Empty string as no code goes into 'loop()'.
 */
Blockly.Arduino['DS18B20_config'] = function(block) {
  var pinType = Blockly.Arduino.PinTypes.DS18B20;
  var DS18B20Name = block.getFieldValue('DS18B20_NAME');
  var pin = block.getFieldValue('DS18B20_PIN');
  
  var address = block.getFieldValue('DS18B20_ADDRESS');
  /*
  var addressValues = [Blockly.Arduino.valueToCode(block, 'DS18B20_ADDRESS_1',
                       Blockly.Arduino.ORDER_ATOMIC) || '0',
                       Blockly.Arduino.valueToCode(block, 'DS18B20_ADDRESS_2',
                       Blockly.Arduino.ORDER_ATOMIC) || '0',
                       Blockly.Arduino.valueToCode(block, 'DS18B20_ADDRESS_3',
                       Blockly.Arduino.ORDER_ATOMIC) || '0',
                       Blockly.Arduino.valueToCode(block, 'DS18B20_ADDRESS_4',
                       Blockly.Arduino.ORDER_ATOMIC) || '0',
                       Blockly.Arduino.valueToCode(block, 'DS18B20_ADDRESS_5',
                       Blockly.Arduino.ORDER_ATOMIC) || '0',
                       Blockly.Arduino.valueToCode(block, 'DS18B20_ADDRESS_6',
                       Blockly.Arduino.ORDER_ATOMIC) || '0',
                       Blockly.Arduino.valueToCode(block, 'DS18B20_ADDRESS_7',
                       Blockly.Arduino.ORDER_ATOMIC) || '0',
                       Blockly.Arduino.valueToCode(block, 'DS18B20_ADDRESS_8',
                       Blockly.Arduino.ORDER_ATOMIC) || '0'];
                       
  var addressArray = 'uint8_t ' + address + '[' + addressValues.length + '] = {';
  
  for (var i = 0; i < addressValues.length; i++) {
    addressArray += addressValues[i] + ', ';
  }
  addressArray = addressArray.slice(0, -2) + '};';
  */  

  var globalCode = 'DS18B20 ' + DS18B20Name + '(' + pin + ');';
  Blockly.Arduino.reservePin(block, pin, pinType, 'DS18B20');
  var addressArray = 'uint8_t ' + address + '[8];';
    

  //DS18B20 is a variable containing the used address
  Blockly.Arduino.addVariable(DS18B20Name,
      addressArray, true);
  //DS18B20Name = 'ds18b20_' + DS18B20Name;

  Blockly.Arduino.addInclude('DS18B20', '#include <DS18B20.h>');

  Blockly.Arduino.addDeclaration(DS18B20Name, globalCode);

  // var setupCode = DS18B20Name + '.select(' + address + ');';

  var setupCode_1 = DS18B20Name + '.selectNext();';
  var setupCode_2 = DS18B20Name + '.getAddress(' + address + ');';

  Blockly.Arduino.addSetup(DS18B20Name + '_select', setupCode_1, true);
  Blockly.Arduino.addSetup(DS18B20Name + '_getAddress', setupCode_2, true);

  return '';
};

/**
 * Code generator for get Temperature from DS18B20
 * Library info in the setHelpUrl link.
 * This block requires the DS18B20_config block to be present.
 * Arduino code: loop { X = DS.getTempC }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['DS18B20_temp_C'] = function(block) {
  var DS18B20InstanceName = block.getFieldValue('DS18B20_NAME');
  var code = DS18B20InstanceName + '.getTempC()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * Code generator for get Temperature from DS18B20
 * Library info in the setHelpUrl link.
 * This block requires the DS18B20_config block to be present.
 * Arduino code: loop { X = DS.getTempF }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['DS18B20_temp_F'] = function(block) {
  var DS18B20InstanceName = block.getFieldValue('DS18B20_NAME');
  var code = DS18B20InstanceName + '.getTempF()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};