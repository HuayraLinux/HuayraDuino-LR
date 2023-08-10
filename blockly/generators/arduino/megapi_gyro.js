/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Arduino code generator for the Gyro library blocks.
 *     The Arduino MegaPi library docs: https://github.com/Makeblock-official/Makeblock-Libraries
 */
'use strict';

goog.provide('Blockly.Arduino.megaPi_gyro');

goog.require('Blockly.Arduino');


/**
 * Code generator for the stepper generator configuration. Nothing is added
 * to the 'loop()' function. Sets the slot(X), steps per revolution (Z), acceleration (Y)
 * maxSpeed(A) and instance name (B).
 * Arduino code: #include <<MeMegaPi.h>>
 *               megaPi_Gyro gyro;
 *               
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Empty string as no code goes into 'loop()'.
 */
Blockly.Arduino['megaPi_gyro_config'] = function(block) {
  var mpStepperName = block.getFieldValue('MEGAPI_GYRO_NAME');
  var globalCode = 'MeGyro ' + mpStepperName + ';';
  Blockly.Arduino.addInclude('megaPi', '#include <MeMegaPi.h>');
  Blockly.Arduino.addDeclaration(mpStepperName, globalCode);

  return '';
};


/**
 * Code generator to read a value from a gyro angle X.
 * Arduino code: 
 *               loop  {  x.getAngleX();    }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */              
Blockly.Arduino['megaPi_gyro_read_anglex'] = function(block) {
  var mpStepperName = block.getFieldValue('MEGAPI_GYRO_NAME');
  var code = mpStepperName + '.getAngleX()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * Code generator to read a value from a gyro angle Y.
 * Arduino code: 
 *               loop  {  x.getAngleY();    }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */              
Blockly.Arduino['megaPi_gyro_read_angley'] = function(block) {
  var mpStepperName = block.getFieldValue('MEGAPI_GYRO_NAME');
  var code = mpStepperName + '.getAngleY()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * Code generator to read a value from a gyro angle Z.
 * Arduino code: 
 *               loop  {  x.getAngleZ();    }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */              
Blockly.Arduino['megaPi_gyro_read_anglez'] = function(block) {
  var mpStepperName = block.getFieldValue('MEGAPI_GYRO_NAME');
  var code = mpStepperName + '.getAngleZ()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
