/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Arduino code generator for the Line Follower library blocks.
 *     The Arduino MegaPi library docs: https://github.com/Makeblock-official/Makeblock-Libraries
 */
'use strict';

goog.provide('Blockly.Arduino.megaPi_line_follower');

goog.require('Blockly.Arduino');


/**
 * Code generator for the stepper generator configuration. Nothing is added
 * to the 'loop()' function. Sets the slot(X), steps per revolution (Z), acceleration (Y)
 * maxSpeed(A) and instance name (B).
 * Arduino code: #include <<MeMegaPi.h>>
 *               megaPi_Stepper B(Z);
 *               setup() { B.setMaxSpeed(A); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Empty string as no code goes into 'loop()'.
 */
Blockly.Arduino['megaPi_line_follower_config'] = function(block) {
  var pinType = Blockly.Arduino.PinTypes.MEGAPI_LINE_FOLLOWER_PORT;
  var mpStepperName = block.getFieldValue('MEGAPI_LINE_FOLLOWER_NAME');
  var port = [block.getFieldValue('MEGAPI_LINE_FOLLOWER_PORT')];
  var portVar = 'int ' + mpStepperName + '_port = ' + port + ';';
  var globalCode = 'MeLineFollower ' + mpStepperName + '(' + mpStepperName + '_port);';
  Blockly.Arduino.reservePin(block, port, pinType, 'megaPi_line_follower');
  //portVar is a variable containing the used pins
  Blockly.Arduino.addVariable(mpStepperName, portVar, true);

  Blockly.Arduino.addInclude('megaPi', '#include <MeMegaPi.h>');

  Blockly.Arduino.addDeclaration(mpStepperName, globalCode);

  return '';
};


/**
 * Code generator to read a value from a line_follower port (X).
 * Arduino code: 
 *               loop  {  x.readSensors();    }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */              
Blockly.Arduino['megaPi_line_follower_read_sensors'] = function(block) {
  var comment = '// ' + Blockly.Msg.ARD_MEGAPI_LINE_FOLLOWER_READ_SENSOR_INFO_1 + '\n'+
                '// ' + Blockly.Msg.ARD_MEGAPI_LINE_FOLLOWER_READ_SENSOR_INFO_2 + '\n'+
                '// ' + Blockly.Msg.ARD_MEGAPI_LINE_FOLLOWER_READ_SENSOR_INFO_3 + '\n'+
                '// ' + Blockly.Msg.ARD_MEGAPI_LINE_FOLLOWER_READ_SENSOR_INFO_4;

  var mpStepperName = block.getFieldValue('MEGAPI_LINE_FOLLOWER_NAME');
  var code = mpStepperName + '.readSensors();\n' + comment;
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

