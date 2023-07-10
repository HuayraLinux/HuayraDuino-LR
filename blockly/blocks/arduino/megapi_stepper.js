/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Blocks for Arduino Stepper library.
 *     The Arduino Servo functions syntax can be found in the following URL:
 *     http://arduino.cc/en/Reference/Stepper
 *     Note that this block uses the Blockly.FieldInstance instead of
 *     Blockly.FieldDropdown which generates a unique instance per setup block
 *     in the workspace.
 */
'use strict';

goog.provide('Blockly.Blocks.megaPi_stepper');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');


/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.megaPi_stepper.HUE = 80;

Blockly.Blocks['megaPi_stepper_config'] = {
  /**
   * Block for for the stepper generator configuration including creating
   * an object instance and setting up the speed. Info in the setHelpUrl link.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('https://github.com/Makeblock-official/Makeblock-Libraries');
    this.setColour(Blockly.Blocks.megaPi_stepper.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ARD_MEGAPI_STEPPER_SETUP)
    this.appendDummyInput()
        .appendField(
            new Blockly.FieldInstance('megaPi_Stepper',
                                      Blockly.Msg.ARD_MEGAPI_STEPPER_DEFAULT_NAME,
                                      true, true, false),
            'MEGAPI_STEPPER_NAME')
        .appendField(Blockly.Msg.ARD_MEGAPI_STEPPER_MOTOR);
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARD_MEGAPI_STEPPER_SLOT)
        .appendField(new Blockly.FieldDropdown(
            Blockly.Arduino.Boards.selected.digitalPins), 'MEGAPI_STEPPER_SLOT')
    this.appendValueInput('MEGAPI_STEPPER_STEPS')
        .setCheck(Blockly.Types.NUMBER.checkList)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARD_MEGAPI_STEPPER_REVOLVS);
    this.appendValueInput('MEGAPI_STEPPER_SPEED')
        .setCheck(Blockly.Types.NUMBER.checkList)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARD_MEGAPI_STEPPER_SPEED);
    this.appendValueInput('MEGAPI_STEPPER_ACCELERATION')
        .setCheck(Blockly.Types.NUMBER.checkList)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARD_MEGAPI_STEPPER_ACCELERATION);
    this.setTooltip(Blockly.Msg.ARD_MEGAPI_STEPPER_SETUP_TIP);
  },
  /**
   * Updates the content of the the pin related fields.
   * @this Blockly.Block
   */
  updateFields: function() {
    Blockly.Boards.refreshBlockFieldDropdown(
        this, 'MEGAPI_STEPPER_SLOT', 'digitalPins');
    }
};

Blockly.Blocks['megaPi_stepper_step'] = {
  /**
   * Block for for the megaPi stepper 'move()' function.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('https://github.com/Makeblock-official/Makeblock-Libraries');
    this.setColour(Blockly.Blocks.megaPi_stepper.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ARD_MEGAPI_STEPPER_STEP)
        .appendField(
            new Blockly.FieldInstance('megaPi_Stepper',
                                      Blockly.Msg.ARD_MEGAPI_STEPPER_DEFAULT_NAME,
                                      false, true, false),
            'MEGAPI_STEPPER_NAME');
    this.appendValueInput('MEGAPI_STEPPER_STEPS')
        .setCheck(Blockly.Types.NUMBER.checkList);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ARD_MEGAPI_STEPPER_STEPS);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.ARD_MEGAPI_STEPPER_STEP_TIP);
  },
  /**
   * Called whenever anything on the workspace changes.
   * It checks/warns if the selected stepper instance has a config block.
   * @this Blockly.Block
   */
  onchange: function() {
    if (!this.workspace) return;  // Block has been deleted.

    var instanceName = this.getFieldValue('MEGAPI_STEPPER_NAME')
    if (Blockly.Instances.isInstancePresent(instanceName, 'megaPi_Stepper', this)) {
      this.setWarningText(null);
    } else {
      // Set a warning to select a valid stepper config block
      this.setWarningText(
        Blockly.Msg.ARD_COMPONENT_WARN1.replace(
            '%1', Blockly.Msg.ARD_MEGAPI_STEPPER_COMPONENT).replace(
                '%2', instanceName));
    }
  }
};

Blockly.Blocks['megaPi_stepper_stepTo'] = {
  /**
   * Block for for the megaPi stepper 'moveTo()' function.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('https://github.com/Makeblock-official/Makeblock-Libraries');
    this.setColour(Blockly.Blocks.megaPi_stepper.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ARD_MEGAPI_STEPPER_STEP_TO)
        .appendField(
            new Blockly.FieldInstance('megaPi_Stepper',
                                      Blockly.Msg.ARD_MEGAPI_STEPPER_DEFAULT_NAME,
                                      false, true, false),
            'MEGAPI_STEPPER_NAME');
    this.appendValueInput('MEGAPI_STEPPER_STEPS_TO')
        .setCheck(Blockly.Types.NUMBER.checkList);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ARD_MEGAPI_STEPPER_STEPS_TO);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.ARD_MEGAPI_STEPPER_STEP_TIP);
  },
  /**
   * Called whenever anything on the workspace changes.
   * It checks/warns if the selected stepper instance has a config block.
   * @this Blockly.Block
   */
  onchange: function() {
    if (!this.workspace) return;  // Block has been deleted.

    var instanceName = this.getFieldValue('MEGAPI_STEPPER_NAME')
    if (Blockly.Instances.isInstancePresent(instanceName, 'megaPi_Stepper', this)) {
      this.setWarningText(null);
    } else {
      // Set a warning to select a valid stepper config block
      this.setWarningText(
        Blockly.Msg.ARD_COMPONENT_WARN1.replace(
            '%1', Blockly.Msg.ARD_MEGAPI_STEPPER_COMPONENT).replace(
                '%2', instanceName));
    }
  }
};

  Blockly.Blocks['megaPi_stepper_run'] = {
    /**
     * Block for for the megaPi stepper 'run()' function.
     * @this Blockly.Block
     */
    init: function() {
      this.setHelpUrl('https://github.com/Makeblock-official/Makeblock-Libraries');
      this.setColour(Blockly.Blocks.megaPi_stepper.HUE);
      this.appendDummyInput()
          .appendField(Blockly.Msg.ARD_MEGAPI_STEPPER_RUN)
          .appendField(
              new Blockly.FieldInstance('megaPi_Stepper',
                                        Blockly.Msg.ARD_MEGAPI_STEPPER_DEFAULT_NAME,
                                        false, true, false),
              'MEGAPI_STEPPER_NAME');
      this.setPreviousStatement(true);
      this.setNextStatement(true);
      this.setTooltip(Blockly.Msg.ARD_MEGAPI_STEPPER_RUN_TIP);
    },
    /**
     * Called whenever anything on the workspace changes.
     * It checks/warns if the selected stepper instance has a config block.
     * @this Blockly.Block
     */
    onchange: function() {
      if (!this.workspace) return;  // Block has been deleted.
  
      var instanceName = this.getFieldValue('MEGAPI_STEPPER_NAME')
      if (Blockly.Instances.isInstancePresent(instanceName, 'megaPi_Stepper', this)) {
        this.setWarningText(null);
      } else {
        // Set a warning to select a valid stepper config block
        this.setWarningText(
          Blockly.Msg.ARD_COMPONENT_WARN1.replace(
              '%1', Blockly.Msg.ARD_MEGAPI_STEPPER_COMPONENT).replace(
                  '%2', instanceName));
      }
    }
  
};
