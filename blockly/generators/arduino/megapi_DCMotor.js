/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Arduino code generator for the DC Motor library blocks.
 *     The Arduino DC motor library docs: https://github.com/Makeblock-official/Makeblock-Libraries
 */
'use strict';

goog.provide('Blockly.Arduino.megaPi_dc_motor');

goog.require('Blockly.Arduino');


/**
 * Code generator for the DC Motor generator configuration. Nothing is added
 * to the 'loop()' function. Sets the port(X), steps per revolution (Z), acceleration (Y)
 * maxSpeed(A) and instance name (B).
 * Arduino code: #include <<MeMegaPi.h>>
 *               megaPi_DCMotor B(Z);
 *               setup() { B.setSpeed(A); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Empty string as no code goes into 'loop()'.
 */
Blockly.Arduino['megaPi_dc_motor_config'] = function(block) {
  var pinType = Blockly.Arduino.PinTypes.MEGAPI_DC_MOTOR_PORT;
  var mpDCMotorName = block.getFieldValue('MEGAPI_DC_MOTOR_NAME');
  var port = [block.getFieldValue('MEGAPI_DC_MOTOR_PORT')];
  var portVar = 'int ' + mpDCMotorName + '_port = ' + port + ';';
  var globalCode = 'MeMegaPiDCMotor ' + mpDCMotorName + '(' + mpDCMotorName + '_port);';
  Blockly.Arduino.reservePin(block, port, pinType, 'megaPi_dc_motor');
  //portVar is a variable containing the used pins
  Blockly.Arduino.addVariable(mpDCMotorName + '_port', portVar, true);

  Blockly.Arduino.addInclude('megaPi', '#include <MeMegaPi.h>');

  Blockly.Arduino.addDeclaration(mpDCMotorName, globalCode);
/*
  var setupCode = mpDCMotorName + '.setMaxSpeed(' + mpDCMotorSpeed + ');\n';
  Blockly.Arduino.addSetup(mpDCMotorName, setupCode, true);*/

  return '';
};

/**
 * Code generator for moving the DC Motor instance (X) a number of steps (Y).
 * Library info in the setHelpUrl link.
 * This block requires the DC Motor_config block to be present.
 * Arduino code: loop { X.move(Y) }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code with order of operation.
 */
Blockly.Arduino['megaPi_dc_motor_stop'] = function(block) {
  var mpDCMotorInstanceName = block.getFieldValue('MEGAPI_DC_MOTOR_NAME');
  var code = mpDCMotorInstanceName + '.stop();\n';
  return code;
};

/**
 * Code generator for run the DC Motor instance
 * Library info in the setHelpUrl link.
 * This block requires the DCMotor_config block to be present.
 * Arduino code: loop { X.run(speed) }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code with order of operation.
 */
Blockly.Arduino['megaPi_dc_motor_run'] = function(block) {
  var mpDCMotorInstanceName = block.getFieldValue('MEGAPI_DC_MOTOR_NAME');
  var mpDCMotorSpeed = Blockly.Arduino.valueToCode(block, 'MEGAPI_DC_MOTOR_SPEEDS',
      Blockly.Arduino.ORDER_ATOMIC) || '0';
  var code = mpDCMotorInstanceName + '.run('+mpDCMotorSpeed+');\n';
  return code;
};
