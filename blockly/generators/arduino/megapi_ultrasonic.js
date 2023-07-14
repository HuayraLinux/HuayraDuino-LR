/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Arduino code generator for the Ultrasonic library blocks.
 *     The Arduino MegaPi library docs: https://github.com/Makeblock-official/Makeblock-Libraries
 */
'use strict';

goog.provide('Blockly.Arduino.megaPi_ultrasonic');

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
Blockly.Arduino['megaPi_ultrasonic_config'] = function(block) {
  var pinType = Blockly.Arduino.PinTypes.MEGAPI_ULTRASONIC_PORT;
  var mpStepperName = block.getFieldValue('MEGAPI_ULTRASONIC_NAME');
  var port = [block.getFieldValue('MEGAPI_ULTRASONIC_PORT')];
  var portVar = 'int ' + mpStepperName + '_port = ' + port + ';';
  var globalCode = 'MeUltrasonicSensor ' + mpStepperName + '(' + mpStepperName + '_port);';
  Blockly.Arduino.reservePin(block, port, pinType, 'megaPi_ultrasonic');
  //portVar is a variable containing the used pins
  Blockly.Arduino.addVariable(mpStepperName, portVar, true);

  Blockly.Arduino.addInclude('megaPi', '#include <MeMegaPi.h>');

  Blockly.Arduino.addDeclaration(mpStepperName, globalCode);

  return '';
};


/**
 * Code generator to read a distance from a ultrasonic sensor.
 * Arduino code: 
 *               loop  {  x.distanceCm();    }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */              
Blockly.Arduino['megaPi_ultrasonic_distance'] = function(block) {
  var mpStepperName = block.getFieldValue('MEGAPI_ULTRASONIC_NAME');
  var code = mpStepperName + '.distanceCm()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

