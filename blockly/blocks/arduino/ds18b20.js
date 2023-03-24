/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Blocks for Arduino DS18B20 library.
 *     The Arduino Servo functions syntax can be found in the following URL:
 *     https://github.com/matmunk/DS18B20
 *     Note that this block uses the Blockly.FieldInstance instead of
 *     Blockly.FieldDropdown which generates a unique instance per setup block
 *     in the workspace.
 */
'use strict';

goog.provide('Blockly.Blocks.DS18B20');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');


/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.DS18B20.HUE = 170;

Blockly.Blocks['DS18B20_config'] = {
  /**
   * Block for for the DS18B20 generator configuration including creating
   * an object instance and setting up the speed. Info in the setHelpUrl link.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('https://github.com/matmunk/DS18B20');
    this.setColour(Blockly.Blocks.DS18B20.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ARD_DS18B20_SETUP)
        .appendField(
            new Blockly.FieldInstance('DS18B20',
                                      Blockly.Msg.ARD_DS18B20_DEFAULT_NAME,
                                      true, true, true),
            'DS18B20_NAME');
    this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_DS18B20_ADDRESS)
            .appendField(
                new Blockly.FieldInstance('DS18B20_ADDRESS',
                                          Blockly.Msg.ARD_DS18B20_ADDRESS,
                                          true, true, true),
                'DS18B20_ADDRESS');
    this.appendDummyInput()
                .setAlign(Blockly.ALIGN_RIGHT)
                .appendField(Blockly.Msg.ARD_DS18B20_PIN)
                .appendField(new Blockly.FieldDropdown(
                    Blockly.Arduino.Boards.selected.digitalPins), 'DS18B20_PIN')
    /*    
    this.appendValueInput('DS18B20_ADDRESS_1')
        .setCheck(Blockly.Types.NUMBER.checkList)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARD_DS18B20_ADDRESS_1);
    this.appendValueInput('DS18B20_ADDRESS_2')
        .setCheck(Blockly.Types.NUMBER.checkList)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARD_DS18B20_ADDRESS_2);
    this.appendValueInput('DS18B20_ADDRESS_3')
        .setCheck(Blockly.Types.NUMBER.checkList)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARD_DS18B20_ADDRESS_3);
    this.appendValueInput('DS18B20_ADDRESS_4')
        .setCheck(Blockly.Types.NUMBER.checkList)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARD_DS18B20_ADDRESS_4);
    this.appendValueInput('DS18B20_ADDRESS_5')
        .setCheck(Blockly.Types.NUMBER.checkList)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARD_DS18B20_ADDRESS_5);
    this.appendValueInput('DS18B20_ADDRESS_6')
        .setCheck(Blockly.Types.NUMBER.checkList)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARD_DS18B20_ADDRESS_6);
    this.appendValueInput('DS18B20_ADDRESS_7')
        .setCheck(Blockly.Types.NUMBER.checkList)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARD_DS18B20_ADDRESS_7);
    this.appendValueInput('DS18B20_ADDRESS_8')
        .setCheck(Blockly.Types.NUMBER.checkList)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARD_DS18B20_ADDRESS_8);
    */
    this.setInputsInline(false);
  },
  updateFields: function() {
    Blockly.Boards.refreshBlockFieldDropdown(
        this, 'DS18B20_PIN', 'digitalPins');
  }
};

/*
ds.selectNext()

  uint8_t address[8];
  ds.getAddress(address);

*/


Blockly.Blocks['DS18B20_temp_C'] = {
  /**
   * Block for for the DS18B20 'step()' function.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('https://github.com/matmunk/DS18B20');
    this.setColour(Blockly.Blocks.DS18B20.HUE);
    this.appendDummyInput()
         .appendField(Blockly.Msg.ARD_DS18B20_TEMPERATURE_C)
         .appendField(
          new Blockly.FieldInstance('DS18B20',
                                    Blockly.Msg.ARD_DS18B20_DEFAULT_NAME,
                                    false, true, false),
          'DS18B20_NAME');
    this.setOutput(true, Blockly.Types.NUMBER.output);
  },
    /**
     * Should be a long (32bit), but  for for now an int.
     * @return {string} The type of return value for the block, an integer.
     */
    getBlockType: function() {
      return Blockly.Types.NUMBER;
  },
  /**
   * Called whenever anything on the workspace changes.
   * It checks/warns if the selected DS18B20 instance has a config block.
   * @this Blockly.Block
   */
  /*
  onchange: function() {
    if (!this.workspace) return;  // Block has been deleted.

    var instanceName = this.getFieldValue('DS18B20_NAME')
    if (Blockly.Instances.isInstancePresent(instanceName, 'DS18B20', this)) {
      this.setWarningText(null);
    } else {
      // Set a warning to select a valid DS18B20 config block
      this.setWarningText(
        Blockly.Msg.ARD_COMPONENT_WARN1.replace(
            '%1', Blockly.Msg.ARD_DS18B20_COMPONENT).replace(
                '%2', instanceName));
    }
  }*/
};

Blockly.Blocks['DS18B20_temp_F'] = {
  /**
   * Block for for the DS18B20 'step()' function.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('https://github.com/matmunk/DS18B20');
    this.setColour(Blockly.Blocks.DS18B20.HUE);
    this.appendDummyInput()
         .appendField(Blockly.Msg.ARD_DS18B20_TEMPERATURE_F)
         .appendField(
          new Blockly.FieldInstance('DS18B20',
                                    Blockly.Msg.ARD_DS18B20_DEFAULT_NAME,
                                    false, true, false),
          'DS18B20_NAME');
    this.setOutput(true, Blockly.Types.NUMBER.output);
  },
    /**
     * Should be a long (32bit), but  for for now an int.
     * @return {string} The type of return value for the block, an integer.
     */
    getBlockType: function() {
      return Blockly.Types.NUMBER;
  },
  /**
   * Called whenever anything on the workspace changes.
   * It checks/warns if the selected DS18B20 instance has a config block.
   * @this Blockly.Block
   */
  /*
  onchange: function() {
    if (!this.workspace) return;  // Block has been deleted.

    var instanceName = this.getFieldValue('DS18B20_NAME')
    if (Blockly.Instances.isInstancePresent(instanceName, 'DS18B20', this)) {
      this.setWarningText(null);
    } else {
      // Set a warning to select a valid DS18B20 config block
      this.setWarningText(
        Blockly.Msg.ARD_COMPONENT_WARN1.replace(
            '%1', Blockly.Msg.ARD_DS18B20_COMPONENT).replace(
                '%2', instanceName));
    }
  }*/
};
