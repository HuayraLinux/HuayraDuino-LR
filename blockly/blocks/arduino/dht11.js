/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Blocks for Arduino dht11 library.
 *     The Arduino functions syntax can be found in the following URL:
 *     https://github.com/adafruit/DHT-sensor-library
 *     Note that this block uses the Blockly.FieldInstance instead of
 *     Blockly.FieldDropdown which generates a unique instance per setup block
 *     in the workspace.
 */
'use strict';

goog.provide('Blockly.Blocks.dht11');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');


/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.dht11.HUE = 120;

Blockly.Blocks['dht11_config'] = {
  /**
   * Block for for the dht11 generator configuration including creating
   * an object instance and setting up the speed. Info in the setHelpUrl link.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('https://github.com/adafruit/DHT-sensor-library');
    this.setColour(Blockly.Blocks.dht11.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ARD_DHT11_SETUP)
    this.appendDummyInput()
        .appendField(
            new Blockly.FieldInstance('dht11',
                                      Blockly.Msg.ARD_DHT11_DEFAULT_NAME,
                                      true, true, false),
            'DHT11_NAME')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARD_DHT11_PIN)
        .appendField(new Blockly.FieldDropdown(
            Blockly.Arduino.Boards.selected.digitalPins), 'DHT11_PIN')
        this.setTooltip(Blockly.Msg.ARD_DHT11_SETUP_TIP);
  },
  /**
   * Updates the content of the the pin related fields.
   * @this Blockly.Block
   */
  updateFields: function() {
    Blockly.Boards.refreshBlockFieldDropdown(
        this, 'DHT11_PIN', 'digitalPins');
  }
};

Blockly.Blocks['dht11_readhumidity'] = {
  /**
   * Block for get humidity on a dht11 sensor.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('https://github.com/adafruit/DHT-sensor-library');
    this.setColour(Blockly.Blocks.dht11.HUE);    
    this.appendDummyInput()
        .appendField(Blockly.Msg.ARD_DHT11_READHUMIDITY)
    this.appendDummyInput()
        .appendField(
          new Blockly.FieldInstance('dht11',
                                    Blockly.Msg.ARD_DHT11_DEFAULT_NAME,
                                    false, true, false),
          'DHT11_NAME')
      this.setTooltip(Blockly.Msg.ARD_DHT11_READHUMIDITY_TIP);
      this.setOutput(true, Blockly.Types.DECIMAL.output);
  },
  /**
   * Should be a long (32bit), but  for for now an int.
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
        this, 'DHT11_DEFAULT_NAME', 'dht11');
  },
  /**
   * Called whenever anything on the workspace changes.
   * It checks/warns if the selected stepper instance has a config block.
   * @this Blockly.Block
   */
  onchange: function() {
    if (!this.workspace) return;  // Block has been deleted.

    var instanceName = this.getFieldValue('DHT11_NAME')
    if (Blockly.Instances.isInstancePresent(instanceName, 'dht11', this)) {
      this.setWarningText(null);
    } else {
      // Set a warning to select a valid stepper config block
      this.setWarningText(
        Blockly.Msg.ARD_COMPONENT_WARN1.replace(
            '%1', Blockly.Msg.ARD_DHT11_SETUP).replace(
                '%2', instanceName));
    }
  }

};

Blockly.Blocks['dht11_readTemperature'] = {
  /**
   * Block for get CO2 on a dht11 sensor.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('https://github.com/adafruit/DHT-sensor-library');
    this.setColour(Blockly.Blocks.dht11.HUE);    
    this.appendDummyInput()
        .appendField(Blockly.Msg.ARD_DHT11_READTEMP)
    this.appendDummyInput()
        .appendField(
          new Blockly.FieldInstance('dht11',
                                    Blockly.Msg.ARD_DHT11_DEFAULT_NAME,
                                    false, true, false),
          'DHT11_NAME')
      this.setTooltip(Blockly.Msg.ARD_DHT11_READTEMP_TIP);
      this.setOutput(true, Blockly.Types.DECIMAL.output);
  },
  /**
   * Should be a long (32bit), but  for for now an int.
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
        this, 'DHT11_DEFAULT_NAME', 'dht11');
  },
  /**
   * Called whenever anything on the workspace changes.
   * It checks/warns if the selected stepper instance has a config block.
   * @this Blockly.Block
   */
  onchange: function() {
    if (!this.workspace) return;  // Block has been deleted.

    var instanceName = this.getFieldValue('DHT11_NAME')
    if (Blockly.Instances.isInstancePresent(instanceName, 'dht11', this)) {
      this.setWarningText(null);
    } else {
      // Set a warning to select a valid stepper config block
      this.setWarningText(
        Blockly.Msg.ARD_COMPONENT_WARN1.replace(
            '%1', Blockly.Msg.ARD_DHT11_SETUP).replace(
                '%2', instanceName));
    }
  }

};


Blockly.Blocks['dht11_computeHeatIndex'] = {
  /**
   * Block for get CO2 on a dht11 sensor.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('https://github.com/adafruit/DHT-sensor-library');
    this.setColour(Blockly.Blocks.dht11.HUE);    
    this.appendDummyInput()
        .appendField(Blockly.Msg.ARD_DHT11_COMPUTEHEAT)
    this.appendDummyInput()
        .appendField(
          new Blockly.FieldInstance('dht11',
                                    Blockly.Msg.ARD_DHT11_DEFAULT_NAME,
                                    false, true, false),
          'DHT11_NAME')
    this.appendDummyInput()
          .appendField(Blockly.Msg.ARD_DHT11_COMPUTE_TEMP)
          .appendField(new Blockly.FieldVariable(
          Blockly.Msg.DHT11_APPEND_VARIABLE), 'DHT11_TEMP');
    this.appendDummyInput()
        .appendField(Blockly.Msg.ARD_DHT11_COMPUTE_HUM)       
          .appendField(new Blockly.FieldVariable(
      Blockly.Msg.DHT11_APPEND_VARIABLE), 'DHT11_HUM');
    this.setTooltip(Blockly.Msg.ARD_DHT11_COMPUTEHEAT_TIP);
    this.setOutput(true, Blockly.Types.DECIMAL.output);
  },
  /**
   * Should be a long (32bit), but  for for now an int.
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
        this, 'DHT11_DEFAULT_NAME', 'dht11');
  },
  /**
   * Called whenever anything on the workspace changes.
   * It checks/warns if the selected stepper instance has a config block.
   * @this Blockly.Block
   */
  onchange: function() {
    if (!this.workspace) return;  // Block has been deleted.

    var instanceName = this.getFieldValue('DHT11_NAME')
    if (Blockly.Instances.isInstancePresent(instanceName, 'dht11', this)) {
      this.setWarningText(null);
    } else {
      // Set a warning to select a valid stepper config block
      this.setWarningText(
        Blockly.Msg.ARD_COMPONENT_WARN1.replace(
            '%1', Blockly.Msg.ARD_DHT11_SETUP).replace(
                '%2', instanceName));
    }
  }

};

