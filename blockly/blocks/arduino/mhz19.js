/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Blocks for Arduino mhz19 library.
 *     The Arduino functions syntax can be found in the following URL:
 *     https://github.com/WifWaf/MH-Z19
 *     Note that this block uses the Blockly.FieldInstance instead of
 *     Blockly.FieldDropdown which generates a unique instance per setup block
 *     in the workspace.
 */
'use strict';

goog.provide('Blockly.Blocks.mhz19');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');


/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.mhz19.HUE = 250;

Blockly.Blocks['mhz19_config'] = {
  /**
   * Block for for the mhz19 generator configuration including creating
   * an object instance and setting up the speed. Info in the setHelpUrl link.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('https://github.com/WifWaf/MH-Z19');
    this.setColour(Blockly.Blocks.mhz19.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ARD_MHZ19_SETUP)
    this.appendDummyInput()
        .appendField(
            new Blockly.FieldInstance('mhz19',
                                      Blockly.Msg.ARD_MHZ19_DEFAULT_NAME,
                                      true, true, false),
            'MHZ19_NAME')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARD_MHZ19_RX_PORT)
        .appendField(new Blockly.FieldDropdown(
            Blockly.Arduino.Boards.selected.digitalPins), 'MHZ19_RX_PORT')
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ARD_MHZ19_TX_PORT)
            .appendField(new Blockly.FieldDropdown(
                Blockly.Arduino.Boards.selected.digitalPins), 'MHZ19_TX_PORT')
        this.setTooltip(Blockly.Msg.ARD_MHZ19_SETUP_TIP);
  },
  /**
   * Updates the content of the the pin related fields.
   * @this Blockly.Block
   */
  updateFields: function() {
    Blockly.Boards.refreshBlockFieldDropdown(
        this, 'MHZ19_RX_PORT', 'digitalPins');
        Blockly.Boards.refreshBlockFieldDropdown(
          this, 'MHZ19_TX_PORT', 'digitalPins');
      }
};

Blockly.Blocks['mhz19_getCO2'] = {
  /**
   * Block for get CO2 on a mhz19 sensor.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('https://github.com/WifWaf/MH-Z19');
    this.setColour(Blockly.Blocks.mhz19.HUE);    
    this.appendDummyInput()
        .appendField(Blockly.Msg.ARD_MHZ19_GETCO2)
    this.appendDummyInput()
        .appendField(
          new Blockly.FieldInstance('mhz19',
                                    Blockly.Msg.ARD_MHZ19_DEFAULT_NAME,
                                    false, true, false),
          'MHZ19_NAME')
      this.setTooltip(Blockly.Msg.ARD_MHZ19_GETCO2_TIP);
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
   * Updates the content of the name related fields.
   * @this Blockly.Block
   */
  updateFields: function() {
    Blockly.Arduino.Boards.refreshBlockFieldDropdown(
        this, 'MHZ19_DEFAULT_NAME', 'mhz19');
  },
  /**
   * Called whenever anything on the workspace changes.
   * It checks/warns if the selected stepper instance has a config block.
   * @this Blockly.Block
   */
  onchange: function() {
    if (!this.workspace) return;  // Block has been deleted.

    var instanceName = this.getFieldValue('MHZ19_NAME')
    if (Blockly.Instances.isInstancePresent(instanceName, 'mhz19', this)) {
      this.setWarningText(null);
    } else {
      // Set a warning to select a valid stepper config block
      this.setWarningText(
        Blockly.Msg.ARD_COMPONENT_WARN1.replace(
            '%1', Blockly.Msg.ARD_MHZ19_SETUP).replace(
                '%2', instanceName));
    }
  }

};

Blockly.Blocks['mhz19_getTemperature'] = {
  /**
   * Block for get CO2 on a mhz19 sensor.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('https://github.com/WifWaf/MH-Z19');
    this.setColour(Blockly.Blocks.mhz19.HUE);    
    this.appendDummyInput()
        .appendField(Blockly.Msg.ARD_MHZ19_GETTEMP)
    this.appendDummyInput()
        .appendField(
          new Blockly.FieldInstance('mhz19',
                                    Blockly.Msg.ARD_MHZ19_DEFAULT_NAME,
                                    false, true, false),
          'MHZ19_NAME')
      this.setTooltip(Blockly.Msg.ARD_MHZ19_GETTEMP_TIP);
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
   * Updates the content of the name related fields.
   * @this Blockly.Block
   */
  updateFields: function() {
    Blockly.Arduino.Boards.refreshBlockFieldDropdown(
        this, 'MHZ19_DEFAULT_NAME', 'mhz19');
  },
  /**
   * Called whenever anything on the workspace changes.
   * It checks/warns if the selected stepper instance has a config block.
   * @this Blockly.Block
   */
  onchange: function() {
    if (!this.workspace) return;  // Block has been deleted.

    var instanceName = this.getFieldValue('MHZ19_NAME')
    if (Blockly.Instances.isInstancePresent(instanceName, 'mhz19', this)) {
      this.setWarningText(null);
    } else {
      // Set a warning to select a valid stepper config block
      this.setWarningText(
        Blockly.Msg.ARD_COMPONENT_WARN1.replace(
            '%1', Blockly.Msg.ARD_MHZ19_SETUP).replace(
                '%2', instanceName));
    }
  }

};

