/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Arduino code generator for the LCD_I2C library blocks.
 *     The Arduino LCD_I2C library docs: https://github.com/marcoschwartz/LiquidCrystal_I2C
 */
'use strict';

goog.provide('Blockly.Arduino.LCD_I2C');

goog.require('Blockly.Arduino');


/**
 * Code generator for the LCD_I2C generator configuration. Nothing is added
 * to the 'loop()' function. 
 * Arduino code: #include <<LiquidCrystal_I2C.h>>
 *               LCD_I2C definition (IIC Address, display Characters, lines);
 *               setup() 
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Empty string as no code goes into 'loop()'.
 */
Blockly.Arduino['LCD_I2C_config'] = function(block) {
  var LCD_I2CName = block.getFieldValue('LCD_I2C_NAME');
  var globalCode = 'LiquidCrystal_I2C ' + LCD_I2CName + '(0x20,16,2);\n';
                
  Blockly.Arduino.addDeclaration(LCD_I2CName, globalCode);

  Blockly.Arduino.addInclude('LCD_I2C', '#include <LiquidCrystal_I2C.h>');

  var setupCode = LCD_I2CName +'.init();';
  Blockly.Arduino.addSetup(LCD_I2CName, setupCode, true);

  return '';
};


/**
 * Code generator for LCD_I2C set position.
 * Library info in the setHelpUrl link.
 * This block requires the LCD_I2C config.
 * Arduino code: loop { X.setCursor(col, row) }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code with order of operation.
 */
Blockly.Arduino['LCD_I2C_setcursor'] = function(block) {
  var LCD_I2CInstanceName = block.getFieldValue('LCD_I2C_NAME');
  var LCD_I2CColValue = Blockly.Arduino.valueToCode(block, 'LCD_I2C_SETCURSOR_COL',
      Blockly.Arduino.ORDER_ATOMIC) || '0';
  var LCD_I2CRowValue = Blockly.Arduino.valueToCode(block, 'LCD_I2C_SETCURSOR_ROW',
      Blockly.Arduino.ORDER_ATOMIC) || '0';
  var code = LCD_I2CInstanceName + '.setCursor(' + LCD_I2CColValue + ', ' + LCD_I2CRowValue + ');\n';
  return code;
};

/**
 * Code generator for LCD_I2C print.
 * Library info in the setHelpUrl link.
 * This block requires the LCD_I2C_config block to be present.
 * Arduino code: loop { X.print(data) }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Completed code with order of operation.
 */
Blockly.Arduino['LCD_I2C_print'] = function(block) {
  var LCD_I2CInstanceName = block.getFieldValue('LCD_I2C_NAME');
  var LCD_I2CData = Blockly.Arduino.valueToCode(block, 'LCD_I2C_CONTENT',
      Blockly.Arduino.ORDER_ATOMIC) || '0';
  var code = LCD_I2CInstanceName + '.print(' + LCD_I2CData + ');\n';
  return code;
};
