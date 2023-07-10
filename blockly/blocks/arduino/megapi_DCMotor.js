/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Blocks for MegaPi DC Motor library.
 *     The Arduino Servo functions syntax can be found in the following URL:
 *     https://github.com/Makeblock-official/Makeblock-Libraries
 *     Note that this block uses the Blockly.FieldInstance instead of
 *     Blockly.FieldDropdown which generates a unique instance per setup block
 *     in the workspace.
 */
'use strict';

goog.provide('Blockly.Blocks.megaPi_dc_motor');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');


/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.megaPi_dc_motor.HUE = 80;

Blockly.Blocks['megaPi_dc_motor_config'] = {
  /**
   * Block for for the dc_motor generator configuration including creating
   * an object instance and setting up the speed. Info in the setHelpUrl link.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('https://github.com/Makeblock-official/Makeblock-Libraries');
    this.setColour(Blockly.Blocks.megaPi_dc_motor.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ARD_MEGAPI_DC_MOTOR_SETUP)
    this.appendDummyInput()
        .appendField(
            new Blockly.FieldInstance('megaPi_dc_motor',
                                      Blockly.Msg.ARD_MEGAPI_DC_MOTOR_DEFAULT_NAME,
                                      true, true, false),
            'MEGAPI_DC_MOTOR_NAME')
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARD_MEGAPI_DC_MOTOR_PORT)
        .appendField(new Blockly.FieldDropdown(
            Blockly.Arduino.Boards.selected.digitalPins), 'MEGAPI_DC_MOTOR_PORT')
    this.setTooltip(Blockly.Msg.ARD_MEGAPI_DC_MOTOR_SETUP_TIP);
  },
  /**
   * Updates the content of the the pin related fields.
   * @this Blockly.Block
   */
  updateFields: function() {
    Blockly.Boards.refreshBlockFieldDropdown(
        this, 'MEGAPI_DC_MOTOR_PORT', 'digitalPins');
    }
};

Blockly.Blocks['megaPi_dc_motor_stop'] = {
  /**
   * Block for for the megaPi dc_motor 'stop()' function.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('https://github.com/Makeblock-official/Makeblock-Libraries');
    this.setColour(Blockly.Blocks.megaPi_dc_motor.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ARD_MEGAPI_DC_MOTOR_STOP)    
        .appendField(
                new Blockly.FieldInstance('megaPi_dc_motor',
                                      Blockly.Msg.ARD_MEGAPI_DC_MOTOR_DEFAULT_NAME,
                                      false, true, false),
            'MEGAPI_DC_MOTOR_NAME');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.ARD_MEGAPI_DC_MOTOR_STOP_TIP);
  },
  /**
   * Called whenever anything on the workspace changes.
   * It checks/warns if the selected dc_motor instance has a config block.
   * @this Blockly.Block
   */
  onchange: function() {
    if (!this.workspace) return;  // Block has been deleted.

    var instanceName = this.getFieldValue('MEGAPI_DC_MOTOR_NAME')
    if (Blockly.Instances.isInstancePresent(instanceName, 'megaPi_dc_motor', this)) {
      this.setWarningText(null);
    } else {
      // Set a warning to select a valid dc_motor config block
      this.setWarningText(
        Blockly.Msg.ARD_COMPONENT_WARN1.replace(
            '%1', Blockly.Msg.ARD_MEGAPI_DC_MOTOR_COMPONENT).replace(
                '%2', instanceName));
    }
  }
};


Blockly.Blocks['megaPi_dc_motor_run'] = {
    /**
     * Block for for the megaPi dc_motor 'run(speed)' function.
     * @this Blockly.Block
     */
    init: function() {
      this.setHelpUrl('https://github.com/Makeblock-official/Makeblock-Libraries');
      this.setColour(Blockly.Blocks.megaPi_dc_motor.HUE);
      this.appendDummyInput()
          .appendField(Blockly.Msg.ARD_MEGAPI_DC_MOTOR_RUN)
          .appendField(
              new Blockly.FieldInstance('megaPi_dc_motor',
                                        Blockly.Msg.ARD_MEGAPI_DC_MOTOR_DEFAULT_NAME,
                                        false, true, false),
              'MEGAPI_DC_MOTOR_NAME');
      this.appendDummyInput()
          .setAlign(Blockly.ALIGN_RIGHT)    
          .appendField(Blockly.Msg.ARD_MEGAPI_DC_MOTOR_SPEED);
      this.appendValueInput('MEGAPI_DC_MOTOR_SPEEDS')
          .setCheck(Blockly.Types.NUMBER.checkList)
      this.setPreviousStatement(true);
      this.setNextStatement(true);
      this.setTooltip(Blockly.Msg.ARD_MEGAPI_DC_MOTOR_RUN_TIP);
    },
    /**
     * Called whenever anything on the workspace changes.
     * It checks/warns if the selected dc_motor instance has a config block.
     * @this Blockly.Block
     */
    onchange: function() {
      if (!this.workspace) return;  // Block has been deleted.
  
      var instanceName = this.getFieldValue('MEGAPI_DC_MOTOR_NAME')
      if (Blockly.Instances.isInstancePresent(instanceName, 'megaPi_dc_motor', this)) {
        this.setWarningText(null);
      } else {
        // Set a warning to select a valid dc_motor config block
        this.setWarningText(
          Blockly.Msg.ARD_COMPONENT_WARN1.replace(
              '%1', Blockly.Msg.ARD_MEGAPI_DC_MOTOR_COMPONENT).replace(
                  '%2', instanceName));
      }
    }
  
};
