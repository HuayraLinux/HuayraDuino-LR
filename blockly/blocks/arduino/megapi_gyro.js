/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Blocks for Arduino Gyro library.
 *     The Arduino functions syntax can be found in the following URL:
 *     https://github.com/Makeblock-official/Makeblock-Libraries
 *     Note that this block uses the Blockly.FieldInstance instead of
 *     Blockly.FieldDropdown which generates a unique instance per setup block
 *     in the workspace.
 */
'use strict';

goog.provide('Blockly.Blocks.megaPi_gyro');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');


/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.megaPi_gyro.HUE = 140;

Blockly.Blocks['megaPi_gyro_config'] = {
  /**
   * Block for for the gyro generator configuration including creating
   * an object instance. Info in the setHelpUrl link.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('https://github.com/Makeblock-official/Makeblock-Libraries');
    this.setColour(Blockly.Blocks.megaPi_gyro.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ARD_MEGAPI_GYRO_SETUP)
    this.appendDummyInput()
        .appendField(
            new Blockly.FieldInstance('megaPi_gyro',
                                      Blockly.Msg.ARD_MEGAPI_GYRO_DEFAULT_NAME,
                                      true, true, false),
            'MEGAPI_GYRO_NAME')
    this.setTooltip(Blockly.Msg.ARD_MEGAPI_GYRO_SETUP_TIP);
  }
};

Blockly.Blocks['megaPi_gyro_read_anglex'] = {
  /**
   * Block for reading the angleX from a gyro.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('https://github.com/Makeblock-official/Makeblock-Libraries');
    this.setColour(Blockly.Blocks.megaPi_gyro.HUE);    
    this.appendDummyInput()
        .appendField(Blockly.Msg.ARD_MEGAPI_GYRO_READ_ANGLEX)
        .appendField(
          new Blockly.FieldInstance('megaPi_gyro',
                                    Blockly.Msg.ARD_MEGAPI_GYRO_DEFAULT_NAME,
                                    false, true, false),
          'MEGAPI_GYRO_NAME')
      this.setTooltip(Blockly.Msg.ARD_MEGAPI_GYRO_READ_ANGLE_AXIS_TIP);
      this.setOutput(true, Blockly.Types.DECIMAL.output);
  },
  /**
   * Should be a double.
   * @return {string} The type of return value for the block, an integer.
   */
  getBlockType: function() {
    return Blockly.Types.DECIMAL;
  },
  /**
   * Updates the content of the name related fields.
   * @this Blockly.Block
   */
  updateFields: function() {
    Blockly.Arduino.Boards.refreshBlockFieldDropdown(
        this, 'MEGAPI_GYRO_DEFAULT_NAME', 'megaPi_gyro');
  },
  /**
   * Called whenever anything on the workspace changes.
   * It checks/warns if the selected stepper instance has a config block.
   * @this Blockly.Block
   */
  onchange: function() {
    if (!this.workspace) return;  // Block has been deleted.

    var instanceName = this.getFieldValue('MEGAPI_GYRO_NAME')
    if (Blockly.Instances.isInstancePresent(instanceName, 'megaPi_gyro', this)) {
      this.setWarningText(null);
    } else {
      // Set a warning to select a valid stepper config block
      this.setWarningText(
        Blockly.Msg.ARD_COMPONENT_WARN1.replace(
            '%1', Blockly.Msg.ARD_MEGAPI_GYRO_SETUP).replace(
                '%2', instanceName));
    }
  }

};

Blockly.Blocks['megaPi_gyro_read_angley'] = {
  /**
   * Block for reading the angleY from a gyro.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('https://github.com/Makeblock-official/Makeblock-Libraries');
    this.setColour(Blockly.Blocks.megaPi_gyro.HUE);    
    this.appendDummyInput()
        .appendField(Blockly.Msg.ARD_MEGAPI_GYRO_READ_ANGLEY)
        .appendField(
          new Blockly.FieldInstance('megaPi_gyro',
                                    Blockly.Msg.ARD_MEGAPI_GYRO_DEFAULT_NAME,
                                    false, true, false),
          'MEGAPI_GYRO_NAME')
      this.setTooltip(Blockly.Msg.ARD_MEGAPI_GYRO_READ_ANGLE_AXIS_TIP);
      this.setOutput(true, Blockly.Types.DECIMAL.output);
  },
  /**
   * Should be a double.
   * @return {string} The type of return value for the block, an integer.
   */
  getBlockType: function() {
    return Blockly.Types.DECIMAL;
  },
  /**
   * Updates the content of the name related fields.
   * @this Blockly.Block
   */
  updateFields: function() {
    Blockly.Arduino.Boards.refreshBlockFieldDropdown(
        this, 'MEGAPI_GYRO_DEFAULT_NAME', 'megaPi_gyro');
  },
  /**
   * Called whenever anything on the workspace changes.
   * It checks/warns if the selected stepper instance has a config block.
   * @this Blockly.Block
   */
  onchange: function() {
    if (!this.workspace) return;  // Block has been deleted.

    var instanceName = this.getFieldValue('MEGAPI_GYRO_NAME')
    if (Blockly.Instances.isInstancePresent(instanceName, 'megaPi_gyro', this)) {
      this.setWarningText(null);
    } else {
      // Set a warning to select a valid stepper config block
      this.setWarningText(
        Blockly.Msg.ARD_COMPONENT_WARN1.replace(
            '%1', Blockly.Msg.ARD_MEGAPI_GYRO_SETUP).replace(
                '%2', instanceName));
    }
  }

};

Blockly.Blocks['megaPi_gyro_read_anglez'] = {
  /**
   * Block for reading the angleZ from a gyro.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('https://github.com/Makeblock-official/Makeblock-Libraries');
    this.setColour(Blockly.Blocks.megaPi_gyro.HUE);    
    this.appendDummyInput()
        .appendField(Blockly.Msg.ARD_MEGAPI_GYRO_READ_ANGLEZ)
        .appendField(
          new Blockly.FieldInstance('megaPi_gyro',
                                    Blockly.Msg.ARD_MEGAPI_GYRO_DEFAULT_NAME,
                                    false, true, false),
          'MEGAPI_GYRO_NAME')
      this.setTooltip(Blockly.Msg.ARD_MEGAPI_GYRO_READ_ANGLE_AXIS_TIP);
      this.setOutput(true, Blockly.Types.DECIMAL.output);
  },
  /**
   * Should be a double.
   * @return {string} The type of return value for the block, an integer.
   */
  getBlockType: function() {
    return Blockly.Types.DECIMAL;
  },
  /**
   * Updates the content of the name related fields.
   * @this Blockly.Block
   */
  updateFields: function() {
    Blockly.Arduino.Boards.refreshBlockFieldDropdown(
        this, 'MEGAPI_GYRO_DEFAULT_NAME', 'megaPi_gyro');
  },
  /**
   * Called whenever anything on the workspace changes.
   * It checks/warns if the selected stepper instance has a config block.
   * @this Blockly.Block
   */
  onchange: function() {
    if (!this.workspace) return;  // Block has been deleted.

    var instanceName = this.getFieldValue('MEGAPI_GYRO_NAME')
    if (Blockly.Instances.isInstancePresent(instanceName, 'megaPi_gyro', this)) {
      this.setWarningText(null);
    } else {
      // Set a warning to select a valid stepper config block
      this.setWarningText(
        Blockly.Msg.ARD_COMPONENT_WARN1.replace(
            '%1', Blockly.Msg.ARD_MEGAPI_GYRO_SETUP).replace(
                '%2', instanceName));
    }
  }

};




