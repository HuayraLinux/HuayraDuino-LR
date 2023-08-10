/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Blocks for Arduino LCD_I2C library.
 *     The Arduino Servo functions syntax can be found in the following URL:
 *     https://github.com/marcoschwartz/LiquidCrystal_I2C
 *     Note that this block uses the Blockly.FieldInstance instead of
 *     Blockly.FieldDropdown which generates a unique instance per setup block
 *     in the workspace.
 */
'use strict';

goog.provide('Blockly.Blocks.LCD_I2C');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');


/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.LCD_I2C.HUE = 190;

Blockly.Blocks['LCD_I2C_config'] = {
  /**
   * Block for for the LCD_I2C generator configuration including creating
   * an object instance and setting up the speed. Info in the setHelpUrl link.
   * @this Blockly.Block
   */


  init: function() {
    this.setHelpUrl('https://github.com/marcoschwartz/LiquidCrystal_I2C');
    this.setColour(Blockly.Blocks.LCD_I2C.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ARD_LCD_I2C_SETUP)
    .appendField(
        new Blockly.FieldInstance('LCD_I2C',
                                  Blockly.Msg.ARD_LCD_I2C_DEFAULT_NAME,
                                  true, true, false),
        'LCD_I2C_NAME');
    this.setInputsInline(false);
  }
};


Blockly.Blocks['LCD_I2C_print'] = {
  /**
   * Block for for the LCD_I2C 'print(args)' function.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('https://github.com/marcoschwartz/LiquidCrystal_I2C');
    this.setColour(Blockly.Blocks.LCD_I2C.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ARD_LCD_I2C_PRINT)
        .appendField(
          new Blockly.FieldInstance('LCD_I2C',
              Blockly.Msg.ARD_LCD_I2C_DEFAULT_NAME,
              false, true, false),
          'LCD_I2C_NAME')
    this.appendValueInput('LCD_I2C_CONTENT');
    this.setInputsInline(true);    
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  },
  /**
   * Called whenever anything on the workspace changes.
   * It checks/warns if the selected LCD_I2C instance has a config block.
   * @this Blockly.Block
   */  
  onchange: function() {
      if (!this.workspace) return;  // Block has been deleted.
  
      var instanceName = this.getFieldValue('LCD_I2C_NAME')
      if (Blockly.Instances.isInstancePresent(instanceName, 'LCD_I2C', this)) {
        this.setWarningText(null);
      } else {
        // Set a warning to select a valid stepper config block
        this.setWarningText(
          Blockly.Msg.ARD_COMPONENT_WARN1.replace(
              '%1', Blockly.Msg.ARD_LCD_I2C_COMPONENT).replace(
                  '%2', instanceName));
      }
    }
};

Blockly.Blocks['LCD_I2C_setcursor'] = {
  /**
   * Block for for the LCD_I2C 'setCursor' function.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('https://github.com/marcoschwartz/LiquidCrystal_I2C');
    this.setColour(Blockly.Blocks.LCD_I2C.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ARD_LCD_I2C_SETCURSOR)
    this.appendValueInput('LCD_I2C_SETCURSOR_COL')
        .appendField(
            new Blockly.FieldInstance('LCD_I2C',
                                      Blockly.Msg.ARD_LCD_I2C_DEFAULT_NAME,
                                      false, true, false),
            'LCD_I2C_NAME')
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ARD_LCD_I2C_SETCURSOR_COL)
      .setCheck(Blockly.Types.NUMBER.checkList);
    this.appendValueInput('LCD_I2C_SETCURSOR_ROW')
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ARD_LCD_I2C_SETCURSOR_ROW)
      .setCheck(Blockly.Types.NUMBER.checkList);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.ARD_LCD_I2C_SETCURSOR_TIP);
  },
  /**
   * Called whenever anything on the workspace changes.
   * It checks/warns if the selected encoder instance has a config block.
   * @this Blockly.Block
   */
  onchange: function() {
    if (!this.workspace) return;  // Block has been deleted.

    var instanceName = this.getFieldValue('LCD_I2C_NAME')
    if (Blockly.Instances.isInstancePresent(instanceName, 'LCD_I2C', this)) {
      this.setWarningText(null);
    } else {
      // Set a warning to select a valid encoder config block
      this.setWarningText(
        Blockly.Msg.ARD_COMPONENT_WARN1.replace(
            '%1', Blockly.Msg.ARD_LCD_I2C_COMPONENT).replace(
                '%2', instanceName));
    }
  }
};
