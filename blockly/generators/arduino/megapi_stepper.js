/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Arduino code generator for the Stepper library blocks.
 *     The Arduino Stepper library docs: http://arduino.cc/en/Reference/Stepper
 */
'use strict';

goog.provide('Blockly.Arduino.megaPi_stepper');

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
Blockly.Arduino['megaPi_stepper_config'] = function(block) {
  var pinType = Blockly.Arduino.PinTypes.MEGAPI_STEPPER;
  var mpStepperName = block.getFieldValue('MEGAPI_STEPPER_NAME');
  var mpStepperSteps = Blockly.Arduino.valueToCode(block, 'MEGAPI_STEPPER_STEPS',
      Blockly.Arduino.ORDER_ATOMIC) || '16';
  var mpStepperSpeed = Blockly.Arduino.valueToCode(block, 'MEGAPI_STEPPER_SPEED',
      Blockly.Arduino.ORDER_ATOMIC) || '1000';
  var mpStepperAcceleration = Blockly.Arduino.valueToCode(block, 'MEGAPI_STEPPER_ACCELERATION',
  Blockly.Arduino.ORDER_ATOMIC) || '2000';
  var slot = [block.getFieldValue('MEGAPI_STEPPER_SLOT')];
  var slotVar = 'int ' + mpStepperName + ' = ' + slot;
  var globalCode = 'MeStepperOnBoard stepper_' + mpStepperName + '(' + mpStepperName + ');';
  Blockly.Arduino.reservePin(block, slot, pinType, 'megaPi_Stepper');
  //stepper is a variable containing the used pins
  Blockly.Arduino.addVariable(mpStepperName, slotVar, true);
  mpStepperName = 'megaPi_stepper_' + mpStepperName;

  Blockly.Arduino.addInclude('megaPi_stepper', '#include <MeMegaPi.h>');

  Blockly.Arduino.addDeclaration(mpStepperName, globalCode);

  var setupCode = mpStepperName + '.setMaxSpeed(' + mpStepperSpeed + ');';
  Blockly.Arduino.addSetup(mpStepperName, setupCode, true);

  setupCode = mpStepperName + '.setMicroStep(' + mpStepperSteps + ');';
  Blockly.Arduino.addSetup(mpStepperName, setupCode, true);

  setupCode = mpStepperName + '.setAcceleration(' + mpStepperAcceleration + ');';
  Blockly.Arduino.addSetup(mpStepperName, setupCode, true);

  setupCode = mpStepperName + '.enableOutputs();';
  Blockly.Arduino.addSetup(mpStepperName, setupCode, true);

  return mpStepperName + '.run()';
};

/**
 * Code generator for moving the stepper instance (X) a number of steps (Y).
 * Library info in the setHelpUrl link.
 * This block requires the stepper_config block to be present.
 * Arduino code: loop { X.steps(Y) }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['megaPi_stepper_step'] = function(block) {
  var mpStepperInstanceName = 'megaPi_stepper_' + block.getFieldValue('MEGAPI_STEPPER_NAME');
  var mpStepperSteps = Blockly.Arduino.valueToCode(block, 'MEGAPI_STEPPER_STEPS',
      Blockly.Arduino.ORDER_ATOMIC) || '0';
  var code = mpStepperInstanceName + '.move(' + mpStepperSteps + ');\n';
  return code;
};

/**
 * Code generator for moving the stepper instance (X) a number of steps (Y).
 * Library info in the setHelpUrl link.
 * This block requires the stepper_config block to be present.
 * Arduino code: loop { X.steps(Y) }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['megaPi_stepper_stepTo'] = function(block) {
  var mpStepperInstanceName = 'megaPi_stepper_' + block.getFieldValue('MEGAPI_STEPPER_NAME');
  var mpStepperSteps = Blockly.Arduino.valueToCode(block, 'MEGAPI_STEPPER_STEPS_TO',
      Blockly.Arduino.ORDER_ATOMIC) || '0';
  var code = mpStepperInstanceName + '.moveTo(' + mpStepperSteps + ');\n';
  return code;
};
