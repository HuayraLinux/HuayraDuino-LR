/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Blocks for Arduino MakeBlock MegaPi encoder library.
 *     The Arduino MakeBlock MegaPi encoder functions syntax can be found in the following URL:
 *     https://github.com/Makeblock-official/Makeblock-Libraries
 *     Note that this block uses the Blockly.FieldInstance instead of
 *     Blockly.FieldDropdown which generates a unique instance per setup block
 *     in the workspace.
 */
'use strict';

goog.provide('Blockly.Blocks.megaPi_encoder');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');


/** Common HSV hue for all blocks in this category. */
Blockly.Blocks.megaPi_encoder.HUE = 240;

var ENCODER_SLOTS_NAMES =
[['SLOT1', 'SLOT1'],
 ['SLOT2', 'SLOT2'],
 ['SLOT3', 'SLOT3'],  
 ['SLOT4', 'SLOT4']];

Blockly.Blocks['megaPi_encoder_init'] = {
  /**
   * Block for for the encoder generator the initialization of encoder including creating
   * an object instance and setting up the speed. Info in the setHelpUrl link.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('https://github.com/Makeblock-official/Makeblock-Libraries');
    this.setColour(Blockly.Blocks.megaPi_encoder.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ARD_MEGAPI_ENCODER_INIT, 'MEGAPI_ENCODER_NAME_INIT')
    this.setTooltip(Blockly.Msg.ARD_MEGAPI_ENCODER_INIT_TIP);
  },
};

Blockly.Blocks['megaPi_encoder_config'] = {
  /**
   * Block for for the encoder generator configuration including creating
   * an object instance and setting up the speed. Info in the setHelpUrl link.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('https://github.com/Makeblock-official/Makeblock-Libraries');
    this.setColour(Blockly.Blocks.megaPi_encoder.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ARD_MEGAPI_ENCODER_SETUP, 'MEGAPI_ENCODER_NAME_CONFIG')
    this.appendDummyInput()
        .appendField(
            new Blockly.FieldInstance('megaPi_encoder',
                                      Blockly.Msg.ARD_MEGAPI_ENCODER_DEFAULT_NAME,
                                      true, true, true),
            'MEGAPI_ENCODER_NAME');
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARD_MEGAPI_ENCODER_SLOT)
        .appendField(new Blockly.FieldDropdown(ENCODER_SLOTS_NAMES), 'MEGAPI_ENCODER_SLOT')
    this.setTooltip(Blockly.Msg.ARD_MEGAPI_ENCODER_SETUP_TIP);
  },
  /**
   * Updates the content of the the pin related fields.
   * @this Blockly.Block
   */
  updateFields: function() {
    Blockly.Boards.refreshBlockFieldDropdown(
        this, 'MEGAPI_ENCODER_SLOT', ENCODER_SLOTS_NAMES);
    }
};

Blockly.Blocks['megaPi_encoder_settarpwm'] = {
  /**
   * Block for for the megaPi encoder 'setTarPWM()' function.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('https://github.com/Makeblock-official/Makeblock-Libraries');
    this.setColour(Blockly.Blocks.megaPi_encoder.HUE);
    this.appendValueInput('MEGAPI_ENCODER_SETTARPWM')
        .appendField(Blockly.Msg.ARD_MEGAPI_ENCODER_SETTARPWM)
        .appendField(
            new Blockly.FieldInstance('megaPi_encoder',
                                      Blockly.Msg.ARD_MEGAPI_ENCODER_DEFAULT_NAME,
                                      false, true, false),
            'MEGAPI_ENCODER_NAME')
        .setCheck(Blockly.Types.NUMBER.checkList);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.ARD_MEGAPI_ENCODER_SETTARPWM_TIP);
  },
  /**
   * Called whenever anything on the workspace changes.
   * It checks/warns if the selected encoder instance has a config block.
   * @this Blockly.Block
   */
  onchange: function() {
    if (!this.workspace) return;  // Block has been deleted.

    var instanceName = this.getFieldValue('MEGAPI_ENCODER_NAME')
    if (Blockly.Instances.isInstancePresent(instanceName, 'megaPi_encoder', this)) {
      this.setWarningText(null);
    } else {
      // Set a warning to select a valid encoder config block
      this.setWarningText(
        Blockly.Msg.ARD_COMPONENT_WARN1.replace(
            '%1', Blockly.Msg.ARD_MEGAPI_ENCODER_COMPONENT).replace(
                '%2', instanceName));
    }
  }
};

Blockly.Blocks['megaPi_encoder_setpulse'] = {
  /**
   * Block for for the megaPi encoder 'setPulse' function.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('https://github.com/Makeblock-official/Makeblock-Libraries');
    this.setColour(Blockly.Blocks.megaPi_encoder.HUE);
    this.appendValueInput('MEGAPI_ENCODER_SETPULSE')
        .appendField(Blockly.Msg.ARD_MEGAPI_ENCODER_SETPULSE)
        .appendField(
            new Blockly.FieldInstance('megaPi_encoder',
                                      Blockly.Msg.ARD_MEGAPI_ENCODER_DEFAULT_NAME,
                                      false, true, false),
            'MEGAPI_ENCODER_NAME')
        .setCheck(Blockly.Types.NUMBER.checkList);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.ARD_MEGAPI_ENCODER_SETPULSE_TIP);
  },
  /**
   * Called whenever anything on the workspace changes.
   * It checks/warns if the selected encoder instance has a config block.
   * @this Blockly.Block
   */
  onchange: function() {
    if (!this.workspace) return;  // Block has been deleted.

    var instanceName = this.getFieldValue('MEGAPI_ENCODER_NAME')
    if (Blockly.Instances.isInstancePresent(instanceName, 'megaPi_encoder', this)) {
      this.setWarningText(null);
    } else {
      // Set a warning to select a valid encoder config block
      this.setWarningText(
        Blockly.Msg.ARD_COMPONENT_WARN1.replace(
            '%1', Blockly.Msg.ARD_MEGAPI_ENCODER_COMPONENT).replace(
                '%2', instanceName));
    }
  }
};


Blockly.Blocks['megaPi_encoder_setmotorpwm'] = {
  /**
   * Block for for the megaPi encoder 'setMotorPWM' function.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('https://github.com/Makeblock-official/Makeblock-Libraries');
    this.setColour(Blockly.Blocks.megaPi_encoder.HUE);
    this.appendValueInput('MEGAPI_ENCODER_SETMOTORPWM')
        .appendField(Blockly.Msg.ARD_MEGAPI_ENCODER_SETMOTORPWM)
        .appendField(
            new Blockly.FieldInstance('megaPi_encoder',
                                      Blockly.Msg.ARD_MEGAPI_ENCODER_DEFAULT_NAME,
                                      false, true, false),
            'MEGAPI_ENCODER_NAME')
        .setCheck(Blockly.Types.NUMBER.checkList);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.ARD_MEGAPI_ENCODER_SETMOTORPWM_TIP);
  },
  /**
   * Called whenever anything on the workspace changes.
   * It checks/warns if the selected encoder instance has a config block.
   * @this Blockly.Block
   */
  onchange: function() {
    if (!this.workspace) return;  // Block has been deleted.

    var instanceName = this.getFieldValue('MEGAPI_ENCODER_NAME')
    if (Blockly.Instances.isInstancePresent(instanceName, 'megaPi_encoder', this)) {
      this.setWarningText(null);
    } else {
      // Set a warning to select a valid encoder config block
      this.setWarningText(
        Blockly.Msg.ARD_COMPONENT_WARN1.replace(
            '%1', Blockly.Msg.ARD_MEGAPI_ENCODER_COMPONENT).replace(
                '%2', instanceName));
    }
  }
};


Blockly.Blocks['megaPi_encoder_setratio'] = {
  /**
   * Block for for the megaPi encoder 'setRatio' function.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('https://github.com/Makeblock-official/Makeblock-Libraries');
    this.setColour(Blockly.Blocks.megaPi_encoder.HUE);
    this.appendValueInput('MEGAPI_ENCODER_SETRATIO')
        .appendField(Blockly.Msg.ARD_MEGAPI_ENCODER_SETRATIO)
        .appendField(
            new Blockly.FieldInstance('megaPi_encoder',
                                      Blockly.Msg.ARD_MEGAPI_ENCODER_DEFAULT_NAME,
                                      false, true, false),
            'MEGAPI_ENCODER_NAME')
        .setCheck(Blockly.Types.DECIMAL.checkList);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.ARD_MEGAPI_ENCODER_SETRATIO_TIP);
  },
  /**
   * Called whenever anything on the workspace changes.
   * It checks/warns if the selected encoder instance has a config block.
   * @this Blockly.Block
   */
  onchange: function() {
    if (!this.workspace) return;  // Block has been deleted.

    var instanceName = this.getFieldValue('MEGAPI_ENCODER_NAME')
    if (Blockly.Instances.isInstancePresent(instanceName, 'megaPi_encoder', this)) {
      this.setWarningText(null);
    } else {
      // Set a warning to select a valid encoder config block
      this.setWarningText(
        Blockly.Msg.ARD_COMPONENT_WARN1.replace(
            '%1', Blockly.Msg.ARD_MEGAPI_ENCODER_COMPONENT).replace(
                '%2', instanceName));
    }
  }
};

Blockly.Blocks['megaPi_encoder_setpospid'] = {
  /**
   * Block for for the megaPi encoder 'setPosPid' function.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('https://github.com/Makeblock-official/Makeblock-Libraries');
    this.setColour(Blockly.Blocks.megaPi_encoder.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ARD_MEGAPI_ENCODER_SETPOSPID)
    this.appendValueInput('MEGAPI_ENCODER_SETPOSPID_P')
        .appendField(
            new Blockly.FieldInstance('megaPi_encoder',
                                      Blockly.Msg.ARD_MEGAPI_ENCODER_DEFAULT_NAME,
                                      false, true, false),
            'MEGAPI_ENCODER_NAME')
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ARD_MEGAPI_ENCODER_SETPOSPID_P)
      .setCheck(Blockly.Types.DECIMAL.checkList);
    this.appendValueInput('MEGAPI_ENCODER_SETPOSPID_I')
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ARD_MEGAPI_ENCODER_SETPOSPID_I)
      .setCheck(Blockly.Types.DECIMAL.checkList);
    this.appendValueInput('MEGAPI_ENCODER_SETPOSPID_D')
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ARD_MEGAPI_ENCODER_SETPOSPID_D)
      .setCheck(Blockly.Types.DECIMAL.checkList);       
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.ARD_MEGAPI_ENCODER_SETPOSPID_TIP);
  },
  /**
   * Called whenever anything on the workspace changes.
   * It checks/warns if the selected encoder instance has a config block.
   * @this Blockly.Block
   */
  onchange: function() {
    if (!this.workspace) return;  // Block has been deleted.

    var instanceName = this.getFieldValue('MEGAPI_ENCODER_NAME')
    if (Blockly.Instances.isInstancePresent(instanceName, 'megaPi_encoder', this)) {
      this.setWarningText(null);
    } else {
      // Set a warning to select a valid encoder config block
      this.setWarningText(
        Blockly.Msg.ARD_COMPONENT_WARN1.replace(
            '%1', Blockly.Msg.ARD_MEGAPI_ENCODER_COMPONENT).replace(
                '%2', instanceName));
    }
  }
};

Blockly.Blocks['megaPi_encoder_setspeedpid'] = {
  /**
   * Block for for the megaPi encoder 'setSpeedPid' function.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('https://github.com/Makeblock-official/Makeblock-Libraries');
    this.setColour(Blockly.Blocks.megaPi_encoder.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ARD_MEGAPI_ENCODER_SETSPEEDPID)
    this.appendValueInput('MEGAPI_ENCODER_SETSPEEDPID_P')
            .appendField(
            new Blockly.FieldInstance('megaPi_encoder',
                                      Blockly.Msg.ARD_MEGAPI_ENCODER_DEFAULT_NAME,
                                      false, true, false),
            'MEGAPI_ENCODER_NAME') 
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARD_MEGAPI_ENCODER_SETSPEEDPID_P)
        .setCheck(Blockly.Types.DECIMAL.checkList);
    this.appendValueInput('MEGAPI_ENCODER_SETSPEEDPID_I')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARD_MEGAPI_ENCODER_SETSPEEDPID_I)
        .setCheck(Blockly.Types.DECIMAL.checkList);
    this.appendValueInput('MEGAPI_ENCODER_SETSPEEDPID_D')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARD_MEGAPI_ENCODER_SETSPEEDPID_D)
        .setCheck(Blockly.Types.DECIMAL.checkList);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.ARD_MEGAPI_ENCODER_SETSPEEDPID_TIP);
  },
  /**
   * Called whenever anything on the workspace changes.
   * It checks/warns if the selected encoder instance has a config block.
   * @this Blockly.Block
   */
  onchange: function() {
    if (!this.workspace) return;  // Block has been deleted.

    var instanceName = this.getFieldValue('MEGAPI_ENCODER_NAME')
    if (Blockly.Instances.isInstancePresent(instanceName, 'megaPi_encoder', this)) {
      this.setWarningText(null);
    } else {
      // Set a warning to select a valid encoder config block
      this.setWarningText(
        Blockly.Msg.ARD_COMPONENT_WARN1.replace(
            '%1', Blockly.Msg.ARD_MEGAPI_ENCODER_COMPONENT).replace(
                '%2', instanceName));
    }
  }
};

Blockly.Blocks['megaPi_encoder_runspeed'] = {
  /**
   * Block for for the megaPi encoder 'runSpeed' function.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('https://github.com/Makeblock-official/Makeblock-Libraries');
    this.setColour(Blockly.Blocks.megaPi_encoder.HUE);
    this.appendValueInput('MEGAPI_ENCODER_RUNSPEED')
        .appendField(Blockly.Msg.ARD_MEGAPI_ENCODER_RUNSPEED)
        .appendField(
            new Blockly.FieldInstance('megaPi_encoder',
                                      Blockly.Msg.ARD_MEGAPI_ENCODER_DEFAULT_NAME,
                                      false, true, false),
            'MEGAPI_ENCODER_NAME')
        .setCheck(Blockly.Types.DECIMAL.checkList);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.ARD_MEGAPI_ENCODER_RUNSPEED_TIP);
  },
  /**
   * Called whenever anything on the workspace changes.
   * It checks/warns if the selected encoder instance has a config block.
   * @this Blockly.Block
   */
  onchange: function() {
    if (!this.workspace) return;  // Block has been deleted.

    var instanceName = this.getFieldValue('MEGAPI_ENCODER_NAME')
    if (Blockly.Instances.isInstancePresent(instanceName, 'megaPi_encoder', this)) {
      this.setWarningText(null);
    } else {
      // Set a warning to select a valid encoder config block
      this.setWarningText(
        Blockly.Msg.ARD_COMPONENT_WARN1.replace(
            '%1', Blockly.Msg.ARD_MEGAPI_ENCODER_COMPONENT).replace(
                '%2', instanceName));
    }
  }
};

Blockly.Blocks['megaPi_encoder_moveto'] = {
  /**
   * Block for for the megaPi encoder 'moveTo' function.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('https://github.com/Makeblock-official/Makeblock-Libraries');
    this.setColour(Blockly.Blocks.megaPi_encoder.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ARD_MEGAPI_ENCODER_MOVETO)
    this.appendValueInput('MEGAPI_ENCODER_MOVETO_POS')
        .appendField(
            new Blockly.FieldInstance('megaPi_encoder',
                                      Blockly.Msg.ARD_MEGAPI_ENCODER_DEFAULT_NAME,
                                      false, true, false),
            'MEGAPI_ENCODER_NAME')
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ARD_MEGAPI_ENCODER_MOVETO_POS)
      .setCheck(Blockly.Types.NUMBER.checkList);
    this.appendValueInput('MEGAPI_ENCODER_MOVETO_SPEED')
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ARD_MEGAPI_ENCODER_MOVETO_SPEED)
      .setCheck(Blockly.Types.DECIMAL.checkList);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.ARD_MEGAPI_ENCODER_MOVETO_TIP);
  },
  /**
   * Called whenever anything on the workspace changes.
   * It checks/warns if the selected encoder instance has a config block.
   * @this Blockly.Block
   */
  onchange: function() {
    if (!this.workspace) return;  // Block has been deleted.

    var instanceName = this.getFieldValue('MEGAPI_ENCODER_NAME')
    if (Blockly.Instances.isInstancePresent(instanceName, 'megaPi_encoder', this)) {
      this.setWarningText(null);
    } else {
      // Set a warning to select a valid encoder config block
      this.setWarningText(
        Blockly.Msg.ARD_COMPONENT_WARN1.replace(
            '%1', Blockly.Msg.ARD_MEGAPI_ENCODER_COMPONENT).replace(
                '%2', instanceName));
    }
  }
};

Blockly.Blocks['megaPi_encoder_getcurpos'] = {
  /**
   * Block for for the megaPi encoder 'long getcurpos()' function.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('https://github.com/Makeblock-official/Makeblock-Libraries');
    this.setColour(Blockly.Blocks.megaPi_encoder.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ARD_MEGAPI_ENCODER_GETCURPOS)
        .appendField(
            new Blockly.FieldInstance('megaPi_encoder',
                                      Blockly.Msg.ARD_MEGAPI_ENCODER_DEFAULT_NAME,
                                      false, true, false),
            'MEGAPI_ENCODER_NAME');
    this.setTooltip(Blockly.Msg.ARD_MEGAPI_ENCODER_GETCURPOS_TIP);
    this.setOutput(true, Blockly.Types.NUMBER.output);
  },
  /** @return {string} The type of return value for the block, an integer. */
  getBlockType: function() {
    return Blockly.Types.NUMBER;
  },  
  /**
   * Called whenever anything on the workspace changes.
   * It checks/warns if the selected encoder instance has a config block.
   * @this Blockly.Block
   */
  onchange: function() {
    if (!this.workspace) return;  // Block has been deleted.

    var instanceName = this.getFieldValue('MEGAPI_ENCODER_NAME')
    if (Blockly.Instances.isInstancePresent(instanceName, 'megaPi_encoder', this)) {
      this.setWarningText(null);
    } else {
      // Set a warning to select a valid encoder config block
      this.setWarningText(
        Blockly.Msg.ARD_COMPONENT_WARN1.replace(
            '%1', Blockly.Msg.ARD_MEGAPI_ENCODER_COMPONENT).replace(
                '%2', instanceName));
    }
  }
};

Blockly.Blocks['megaPi_encoder_getcurrentspeed'] = {
  /**
   * Block for for the megaPi encoder 'double getCurrentSpeed()' function.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl('https://github.com/Makeblock-official/Makeblock-Libraries');
    this.setColour(Blockly.Blocks.megaPi_encoder.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ARD_MEGAPI_ENCODER_GETCURRENTSPEED)
        .appendField(
            new Blockly.FieldInstance('megaPi_encoder',
                                      Blockly.Msg.ARD_MEGAPI_ENCODER_DEFAULT_NAME,
                                      false, true, false),
            'MEGAPI_ENCODER_NAME');
    this.setTooltip(Blockly.Msg.ARD_MEGAPI_ENCODER_GETCURRENTSPEED_TIP);
    this.setOutput(true, Blockly.Types.DECIMAL.output);
  },
  /** @return {string} The type of return value for the block, an integer. */
  getBlockType: function() {
    return Blockly.Types.DECIMAL;
  },  
  /**
   * Called whenever anything on the workspace changes.
   * It checks/warns if the selected encoder instance has a config block.
   * @this Blockly.Block
   */
  onchange: function() {
    if (!this.workspace) return;  // Block has been deleted.

    var instanceName = this.getFieldValue('MEGAPI_ENCODER_NAME')
    if (Blockly.Instances.isInstancePresent(instanceName, 'megaPi_encoder', this)) {
      this.setWarningText(null);
    } else {
      // Set a warning to select a valid encoder config block
      this.setWarningText(
        Blockly.Msg.ARD_COMPONENT_WARN1.replace(
            '%1', Blockly.Msg.ARD_MEGAPI_ENCODER_COMPONENT).replace(
                '%2', instanceName));
    }
  }
};

Blockly.Blocks['megaPi_encoder_updatespeed'] = {
    /**
     * Block for for the megaPi encoder 'updateSpeed()' function.
     * @this Blockly.Block
     */
    init: function() {
      this.setHelpUrl('https://github.com/Makeblock-official/Makeblock-Libraries');
      this.setColour(Blockly.Blocks.megaPi_encoder.HUE);
      this.appendDummyInput()
          .appendField(Blockly.Msg.ARD_MEGAPI_ENCODER_UPDATESPEED)
          .appendField(
              new Blockly.FieldInstance('megaPi_encoder',
                                        Blockly.Msg.ARD_MEGAPI_ENCODER_DEFAULT_NAME,
                                        false, true, false),
              'MEGAPI_ENCODER_NAME');
      this.setPreviousStatement(true);
      this.setNextStatement(true);
      this.setTooltip(Blockly.Msg.ARD_MEGAPI_ENCODER_UPDATESPEED_TIP);
    },
    /**
     * Called whenever anything on the workspace changes.
     * It checks/warns if the selected encoder instance has a config block.
     * @this Blockly.Block
     */
    onchange: function() {
      if (!this.workspace) return;  // Block has been deleted.
  
      var instanceName = this.getFieldValue('MEGAPI_ENCODER_NAME')
      if (Blockly.Instances.isInstancePresent(instanceName, 'megaPi_encoder', this)) {
        this.setWarningText(null);
      } else {
        // Set a warning to select a valid encoder config block
        this.setWarningText(
          Blockly.Msg.ARD_COMPONENT_WARN1.replace(
              '%1', Blockly.Msg.ARD_MEGAPI_ENCODER_COMPONENT).replace(
                  '%2', instanceName));
      }
    }
};

Blockly.Blocks['megaPi_encoder_gostraight'] = {
  /**
   * Block for for the megaPi encoder 'runSpeed' function.
   * @this Blockly.Block
   */
  init: function() {
    var ENCODER_FOR_BACK_NAMES =
    [[Blockly.Msg.ARD_MEGAPI_ENCODER_FORWARD, 'ENCODER_FORWARD'],
     [Blockly.Msg.ARD_MEGAPI_ENCODER_BACKWARD, 'ENCODER_BACKWARD']];
    
  this.setHelpUrl('https://github.com/Makeblock-official/Makeblock-Libraries');
    this.setColour(Blockly.Blocks.megaPi_encoder.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ARD_MEGAPI_ENCODER_GO_STRAIGHT)
    this.appendDummyInput()
        .appendField(
            new Blockly.FieldInstance('megaPi_encoder_1',
                                      Blockly.Msg.ARD_MEGAPI_ENCODER_DEFAULT_NAME,
                                      false, true, true),
            'MEGAPI_ENCODER_NAME_1')
        .appendField(
            new Blockly.FieldInstance('megaPi_encoder_2',
                                      Blockly.Msg.ARD_MEGAPI_ENCODER_DEFAULT_NAME,
                                      false, true, true),
            'MEGAPI_ENCODER_NAME_2')
    this.appendDummyInput()
        .appendField(Blockly.Msg.ARD_MEGAPI_ENCODER_FOR_BACK)
        .appendField(new Blockly.FieldDropdown(ENCODER_FOR_BACK_NAMES), 'MEGAPI_ENCODER_GO_STRAIGHT_FOR_BACK')
    this.appendValueInput('MEGAPI_ENCODER_GO_STRAIGHT')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.ARD_MEGAPI_ENCODER_GO_STRAIGHT_SPEED)
        .setCheck(Blockly.Types.DECIMAL.checkList);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.ARD_MEGAPI_ENCODER_GO_STRAIGHT_TIP);
  },
  /**
   * Called whenever anything on the workspace changes.
   * It checks/warns if the selected encoder instance has a config block.
   * @this Blockly.Block
   */
  onchange: function() {
    if (!this.workspace) return;  // Block has been deleted.

    var instanceName_1 = this.getFieldValue('MEGAPI_ENCODER_NAME_1')
    if (Blockly.Instances.isInstancePresent(instanceName_1, 'megaPi_encoder_1', this)) {
      this.setWarningText(null);
    } else {
      // Set a warning to select a valid encoder config block
      this.setWarningText(
        Blockly.Msg.ARD_COMPONENT_WARN1.replace(
            '%1', Blockly.Msg.ARD_MEGAPI_ENCODER_COMPONENT).replace(
                '%2', instanceName_1));
    }
    var instanceName_2 = this.getFieldValue('MEGAPI_ENCODER_NAME_2')
    if (Blockly.Instances.isInstancePresent(instanceName_2, 'megaPi_encoder_2', this)) {
      this.setWarningText(null);
    } else {
      // Set a warning to select a valid encoder config block
      this.setWarningText(
        Blockly.Msg.ARD_COMPONENT_WARN1.replace(
            '%1', Blockly.Msg.ARD_MEGAPI_ENCODER_COMPONENT).replace(
                '%2', instanceName_2));
    }
  }
};

Blockly.Blocks['megaPi_encoder_spin'] = {
  /**
   * Block for for the megaPi encoder 'runSpeed' function.
   * @this Blockly.Block
   */
  init: function() {
    var ENCODER_SPIN_NAMES =
    [[Blockly.Msg.ARD_MEGAPI_ENCODER_LEFT, 'ENCODER_LEFT' ],
     [Blockly.Msg.ARD_MEGAPI_ENCODER_RIGHT, 'ENCODER_RIGHT' ]];
    
    this.setHelpUrl('https://github.com/Makeblock-official/Makeblock-Libraries');
    this.setColour(Blockly.Blocks.megaPi_encoder.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Msg.ARD_MEGAPI_ENCODER_SPIN)
    this.appendDummyInput()
        .appendField(
            new Blockly.FieldInstance('megaPi_encoder_1',
                                      Blockly.Msg.ARD_MEGAPI_ENCODER_DEFAULT_NAME,
                                      false, true, true),
            'MEGAPI_ENCODER_NAME_1')
        .appendField(
            new Blockly.FieldInstance('megaPi_encoder_2',
                                      Blockly.Msg.ARD_MEGAPI_ENCODER_DEFAULT_NAME,
                                      false, true, true),
            'MEGAPI_ENCODER_NAME_2')
    this.appendDummyInput()
      .appendField(Blockly.Msg.ARD_MEGAPI_ENCODER_SPIN_DIR)
      .appendField(new Blockly.FieldDropdown(ENCODER_SPIN_NAMES), 'MEGAPI_ENCODER_SPIN')
    this.appendValueInput('MEGAPI_ENCODER_SPIN_TIME')
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.ARD_MEGAPI_ENCODER_SPIN_TIME)
      .setCheck(Blockly.Types.NUMBER.checkList);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.ARD_MEGAPI_ENCODER_SPIN_TIP);
  },
  /**
   * Called whenever anything on the workspace changes.
   * It checks/warns if the selected encoder instance has a config block.
   * @this Blockly.Block
   */
  onchange: function() {
    if (!this.workspace) return;  // Block has been deleted.

    var instanceName_1 = this.getFieldValue('MEGAPI_ENCODER_NAME_1')
    if (Blockly.Instances.isInstancePresent(instanceName_1, 'megaPi_encoder_1', this)) {
      this.setWarningText(null);
    } else {
      // Set a warning to select a valid encoder config block
      this.setWarningText(
        Blockly.Msg.ARD_COMPONENT_WARN1.replace(
            '%1', Blockly.Msg.ARD_MEGAPI_ENCODER_COMPONENT).replace(
                '%2', instanceName_1));
    }
    var instanceName_2 = this.getFieldValue('MEGAPI_ENCODER_NAME_2')
    if (Blockly.Instances.isInstancePresent(instanceName_2, 'megaPi_encoder_2', this)) {
      this.setWarningText(null);
    } else {
      // Set a warning to select a valid encoder config block
      this.setWarningText(
        Blockly.Msg.ARD_COMPONENT_WARN1.replace(
            '%1', Blockly.Msg.ARD_MEGAPI_ENCODER_COMPONENT).replace(
                '%2', instanceName_2));
    }
  }
};

