/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Arduino code generator for the encoder library blocks.
 *     The Arduino encoder library docs: https://github.com/Makeblock-official/Makeblock-Libraries
 */
'use strict';

goog.provide('Blockly.Arduino.megaPi_encoder');

goog.require('Blockly.Arduino');


/**
 * Code generator for the encoder generator configuration. Nothing is added
 * to the 'loop()' function. Sets the slot(X), steps per revolution (Z), acceleration (Y)
 * maxSpeed(A) and instance name (B).
 * Arduino code: #include <<MeMegaPi.h>>
 *               megaPi_encoder B(Z);
 *               setup() { B.setMaxSpeed(A); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Empty string as no code goes into 'loop()'.
 */
Blockly.Arduino['megaPi_encoder_config'] = function(block) {
  var mpEncoderName = block.getFieldValue('MEGAPI_ENCODER_NAME');
  var slot = [block.getFieldValue('MEGAPI_ENCODER_SLOT')];  
  var globalCode = 'MeEncoderOnBoard ' + mpEncoderName + '(' + slot +');\n';
  
  globalCode = globalCode +
                'void isr_process_' + mpEncoderName +'(void)\n'+
                '{\n'+
                '  if(digitalRead(' + mpEncoderName +'.getPortB()) == 0)\n'+
                '  {\n'+
                '    ' + mpEncoderName +'.pulsePosMinus();\n'+
                '  }\n'+
                '  else\n'+
                '  {\n'+
                '    ' + mpEncoderName +'.pulsePosPlus();\n'+
                '  }\n'+
                '}\n';
  
  Blockly.Arduino.addDeclaration(mpEncoderName, globalCode);

  var setupCode = 'attachInterrupt(' + mpEncoderName +'.getIntNum(), isr_process_' + mpEncoderName +', RISING);';
  Blockly.Arduino.addSetup(mpEncoderName, setupCode, true);

  return '';
};

/**
 * Code generator for the encoder generator initialization. added
 * to the 'setup()' function.
 * Arduino code: #include <<MeMegaPi.h>>
 *               Set PWM 8kHz initialization in setup(); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Empty string as no code goes into 'loop()'.
 */
Blockly.Arduino['megaPi_encoder_init'] = function(block) {
  var mpEncoderName = block.getFieldValue('MEGAPI_ENCODER_NAME');
  var setupCode = '//Set PWM 8KHz\n' +
                  '  TCCR1A = _BV(WGM10);\n' +
                  '  TCCR1B = _BV(CS11) | _BV(WGM12);\n' +
                  '  TCCR2A = _BV(WGM21) | _BV(WGM20);\n' +
                  '  TCCR2B = _BV(CS21);';

  Blockly.Arduino.addSetup(mpEncoderName, setupCode, true);

  Blockly.Arduino.addInclude('megaPi', '#include <MeMegaPi.h>');

  return '';
};

/**
 * Code generator for moving the encoder tar PWM.
 * Library info in the setHelpUrl link.
 * This block requires the encoder_init and encoder_config block to be present.
 * Arduino code: loop { X.setTarPWM(PWM_Value) }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code with order of operation.
 */
Blockly.Arduino['megaPi_encoder_settarpwm'] = function(block) {
  var mpEncoderInstanceName = block.getFieldValue('MEGAPI_ENCODER_NAME');
  var mpEncoderPWMValue = Blockly.Arduino.valueToCode(block, 'MEGAPI_ENCODER_SETTARPWM',
      Blockly.Arduino.ORDER_ATOMIC) || '0';
  var code = mpEncoderInstanceName + '.setTarPWM(' + mpEncoderPWMValue + ');\n';
  return code;
};

/**
 * Code generator for moving the encoder setPulse.
 * Library info in the setHelpUrl link.
 * This block requires the encoder_init and encoder_config block to be present.
 * Arduino code: loop { X.setPulse(pulseValue) }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code with order of operation.
 */
Blockly.Arduino['megaPi_encoder_setpulse'] = function(block) {
  var mpEncoderInstanceName = block.getFieldValue('MEGAPI_ENCODER_NAME');
  var mpEncoderPulseValue = Blockly.Arduino.valueToCode(block, 'MEGAPI_ENCODER_SETPULSE',
      Blockly.Arduino.ORDER_ATOMIC) || '0';
  var code = mpEncoderInstanceName + '.setPulse(' + mpEncoderPulseValue + ');\n';
  return code;
};

/**
 * Code generator for moving the encoder setMotorPWM.
 * Library info in the setHelpUrl link.
 * This block requires the encoder_init and encoder_config block to be present.
 * Arduino code: loop { X.setMotorPWM( pwmValue) }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code with order of operation.
 */
Blockly.Arduino['megaPi_encoder_setmotorpwm'] = function(block) {
  var mpEncoderInstanceName = block.getFieldValue('MEGAPI_ENCODER_NAME');
  var mpEncoderPWMValue = Blockly.Arduino.valueToCode(block, 'MEGAPI_ENCODER_SETMOTORPWM',
      Blockly.Arduino.ORDER_ATOMIC) || '0';
  var code = mpEncoderInstanceName + '.setMotorPwm(' + mpEncoderPWMValue + ');\n';
  return code;
};

/**
 * Code generator for moving the encoder setRatio.
 * Library info in the setHelpUrl link.
 * This block requires the encoder_init and encoder_config block to be present.
 * Arduino code: loop { X.setRatio( ratioValue ) }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code with order of operation.
 */
Blockly.Arduino['megaPi_encoder_setratio'] = function(block) {
  var mpEncoderInstanceName = block.getFieldValue('MEGAPI_ENCODER_NAME');
  var mpEncoderRatioValue = Blockly.Arduino.valueToCode(block, 'MEGAPI_ENCODER_SETRATIO',
      Blockly.Arduino.ORDER_ATOMIC) || '0';
  var code = mpEncoderInstanceName + '.setRatio(' + mpEncoderRatioValue + ');\n';
  return code;
};

/**
 * Code generator for moving the encoder setPosPid
 * Library info in the setHelpUrl link.
 * This block requires the encoder_init and encoder_config block to be present.
 * Arduino code: loop { X.setPosPid( p, i, d ) }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code with order of operation.
 */
Blockly.Arduino['megaPi_encoder_setpospid'] = function(block) {
  var mpEncoderInstanceName = block.getFieldValue('MEGAPI_ENCODER_NAME');
  var mpEncoderPValue = Blockly.Arduino.valueToCode(block, 'MEGAPI_ENCODER_SETPOSPID_P',
      Blockly.Arduino.ORDER_ATOMIC) || '0.0';
  var mpEncoderIValue = Blockly.Arduino.valueToCode(block, 'MEGAPI_ENCODER_SETPOSPID_I',
      Blockly.Arduino.ORDER_ATOMIC) || '0.0';
  var mpEncoderDValue = Blockly.Arduino.valueToCode(block, 'MEGAPI_ENCODER_SETPOSPID_D',
      Blockly.Arduino.ORDER_ATOMIC) || '0.0';
  var code = mpEncoderInstanceName + '.setPosPid(' + mpEncoderPValue + ',' + mpEncoderIValue + ',' + mpEncoderDValue + ');\n';
  return code;
};

/**
 * Code generator for moving the encoder setSpeedPid
 * Library info in the setHelpUrl link.
 * This block requires the encoder_init and encoder_config block to be present.
 * Arduino code: loop { X.setSpeedPid( p, i, d ) }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code with order of operation.
 */
Blockly.Arduino['megaPi_encoder_setspeedpid'] = function(block) {
  var mpEncoderInstanceName = block.getFieldValue('MEGAPI_ENCODER_NAME');
  var mpEncoderPValue = Blockly.Arduino.valueToCode(block, 'MEGAPI_ENCODER_SETSPEEDPID_P',
      Blockly.Arduino.ORDER_ATOMIC) || '0.0';
  var mpEncoderIValue = Blockly.Arduino.valueToCode(block, 'MEGAPI_ENCODER_SETSPEEDPID_I',
      Blockly.Arduino.ORDER_ATOMIC) || '0.0';
  var mpEncoderDValue = Blockly.Arduino.valueToCode(block, 'MEGAPI_ENCODER_SETSPEEDPID_D',
      Blockly.Arduino.ORDER_ATOMIC) || '0.0';
  var code = mpEncoderInstanceName + '.setSpeedPid(' + mpEncoderPValue + ',' + mpEncoderIValue + ',' + mpEncoderDValue + ');\n';
  return code;
};

/**
 * Code generator for moving the encoder runSpeed
 * Library info in the setHelpUrl link.
 * This block requires the encoder_init and encoder_config block to be present.
 * Arduino code: loop { X.runSpeed( speed ) }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code with order of operation.
 */
Blockly.Arduino['megaPi_encoder_runspeed'] = function(block) {
  var mpEncoderInstanceName = block.getFieldValue('MEGAPI_ENCODER_NAME');
  var mpEncoderSpeedValue = Blockly.Arduino.valueToCode(block, 'MEGAPI_ENCODER_RUNSPEED',
      Blockly.Arduino.ORDER_ATOMIC) || '0.0';
  var code = mpEncoderInstanceName + '.runSpeed(' + mpEncoderSpeedValue + ');\n';
  return code;
};

/**
 * Code generator for moving the encoder moveTo
 * Library info in the setHelpUrl link.
 * This block requires the encoder_init and encoder_config block to be present.
 * Arduino code: loop { X.moveTo( p, s ) }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code with order of operation.
 */
Blockly.Arduino['megaPi_encoder_moveto'] = function(block) {
  var mpEncoderInstanceName = block.getFieldValue('MEGAPI_ENCODER_NAME');
  var mpEncoderPosValue = Blockly.Arduino.valueToCode(block, 'MEGAPI_ENCODER_MOVETO_POS',
      Blockly.Arduino.ORDER_ATOMIC) || '0.0';
  var mpEncoderSpeedValue = Blockly.Arduino.valueToCode(block, 'MEGAPI_ENCODER_MOVETO_SPEED',
      Blockly.Arduino.ORDER_ATOMIC) || '0.0';
  var code = mpEncoderInstanceName + '.moveTo(' + mpEncoderPosValue + ',' + mpEncoderSpeedValue + ');\n';
  return code;
};

/**
 * Code generator to read a value from a encoder get currrent position.
 * Arduino code: 
 *               loop  {  x.getCurPos();    }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */              
Blockly.Arduino['megaPi_encoder_getcurpos'] = function(block) {
  var mpEncoderInstanceName = block.getFieldValue('MEGAPI_ENCODER_NAME');
  var code = mpEncoderInstanceName + '.getCurPos()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * Code generator to read a value from a encoder get currrent speed.
 * Arduino code: 
 *               loop  {  x.getCurSpeed();    }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */              
Blockly.Arduino['megaPi_encoder_getcurrentspeed'] = function(block) {
  var mpEncoderInstanceName = block.getFieldValue('MEGAPI_ENCODER_NAME');
  var code = mpEncoderInstanceName + '.getCurSpeed()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * Code generator for moving the encoder updateSpeed
 * Library info in the setHelpUrl link.
 * This block requires the encoder_init and encoder_config block to be present.
 * Arduino code: loop { X.updateSpeed() ) }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code with order of operation.
 */
Blockly.Arduino['megaPi_encoder_updatespeed'] = function(block) {
  var mpEncoderInstanceName = block.getFieldValue('MEGAPI_ENCODER_NAME');
  var code = mpEncoderInstanceName + '.updateSpeed();\n';
  return code;
};


/**
 * Code generator for moving the encoder runSpeed
 * Library info in the setHelpUrl link.
 * This block requires the encoder_init and encoder_config block to be present.
 * Arduino code: loop { X.runSpeed( speed ) }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code with order of operation.
 */
Blockly.Arduino['megaPi_encoder_gostraight'] = function(block) {
  var mpEncoderInstanceName_1 = block.getFieldValue('MEGAPI_ENCODER_NAME_1');
  var mpEncoderInstanceName_2 = block.getFieldValue('MEGAPI_ENCODER_NAME_2');
  var mpEncoderForBack = block.getFieldValue('MEGAPI_ENCODER_GO_STRAIGHT_FOR_BACK');
  var mpEncoderSpeedValue = Blockly.Arduino.valueToCode(block, 'MEGAPI_ENCODER_GO_STRAIGHT',
      Blockly.Arduino.ORDER_ATOMIC) || '0.0';
  var code = '';
  if( mpEncoderForBack === 'ENCODER_FORWARD')
  {
    code = mpEncoderInstanceName_1 + '.setMotorPwm(' + mpEncoderSpeedValue + ');\n' +
           mpEncoderInstanceName_2 + '.setMotorPwm(-' + mpEncoderSpeedValue + ');\n';
  }
  else
  {
    code = mpEncoderInstanceName_1 + '.setMotorPwm(-' + mpEncoderSpeedValue + ');\n' +
           mpEncoderInstanceName_2 + '.setMotorPwm(' + mpEncoderSpeedValue + ');\n';
  }
  code = code + mpEncoderInstanceName_1 + '.updateSpeed();\n' +
                mpEncoderInstanceName_2 + '.updateSpeed();\n';
return code;
};

/**
 * Code generator for moving the encoder runSpeed
 * Library info in the setHelpUrl link.
 * This block requires the encoder_init and encoder_config block to be present.
 * Arduino code: loop { X.runSpeed( speed ) }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code with order of operation.
 */
Blockly.Arduino['megaPi_encoder_spin'] = function(block) {
  var mpEncoderInstanceName_1 = block.getFieldValue('MEGAPI_ENCODER_NAME_1');
  var mpEncoderInstanceName_2 = block.getFieldValue('MEGAPI_ENCODER_NAME_2');
    
  var mpEncoderSpin = block.getFieldValue('MEGAPI_ENCODER_SPIN');
  var mpEncoderSpinTimeValue = Blockly.Arduino.valueToCode(block, 'MEGAPI_ENCODER_SPIN_TIME',
      Blockly.Arduino.ORDER_ATOMIC) || '0.0';
  var code = '';
  if( mpEncoderSpin === 'ENCODER_LEFT')
  {
    code = mpEncoderInstanceName_1 + '.setMotorPwm(100);\n' +
           mpEncoderInstanceName_2 + '.setMotorPwm(100);\n';
  }
  else
  {
    code = mpEncoderInstanceName_1 + '.setMotorPwm(-100);\n' +
           mpEncoderInstanceName_2 + '.setMotorPwm(-100);\n';
  }
  code = code + 'delay('+mpEncoderSpinTimeValue+');\n' + 
                mpEncoderInstanceName_1 + '.updateSpeed();\n' +
                mpEncoderInstanceName_2 + '.updateSpeed();\n';

return code;
};
