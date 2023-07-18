/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 *
 * @fileoverview XML toolbox embedded into a JavaScript text string.
 */
'use strict';

/** Create a namespace for the application. */
var Ardublockly = Ardublockly || {};

Ardublockly.TOOLBOX_XML =
'<xml>' +
'  <sep></sep>' +
'  <category id="catLogic" name="Logic">' +
'    <block type="controls_if"></block>' +
'    <block type="logic_compare"></block>' +
'    <block type="logic_operation"></block>' +
'    <block type="logic_negate"></block>' +
'    <block type="logic_boolean"></block>' +
'    <block type="logic_null"></block>' +
'    <block type="logic_ternary"></block>' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catLoops" name="Loops">' +
'    <block type="controls_repeat_ext">' +
'      <value name="TIMES">' +
'        <block type="math_number">' +
'          <field name="NUM">10</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="controls_whileUntil"></block>' +
'    <block type="controls_for">' +
'      <value name="FROM">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'      <value name="TO">' +
'        <block type="math_number">' +
'          <field name="NUM">10</field>' +
'        </block>' +
'      </value>' +
'      <value name="BY">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="controls_flow_statements"></block>' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catMath" name="Math">' +
'    <block type="math_number"></block>' +
'    <block type="math_arithmetic"></block>' +
'    <block type="math_single"></block>' +
'    <block type="math_trig"></block>' +
'    <block type="math_constant"></block>' +
'    <block type="math_number_property"></block>' +
'    <block type="math_change">' +
'      <value name="DELTA">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="math_round"></block>' +
'    <block type="math_modulo"></block>' +
'    <block type="math_constrain">' +
'      <value name="LOW">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'      <value name="HIGH">' +
'        <block type="math_number">' +
'          <field name="NUM">100</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="math_random_int">' +
'      <value name="FROM">' +
'        <block type="math_number">' +
'          <field name="NUM">1</field>' +
'        </block>' +
'      </value>' +
'      <value name="TO">' +
'        <block type="math_number">' +
'          <field name="NUM">100</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="math_random_float"></block>' +
'    <block type="base_map"></block>' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catText" name="Text">' +
'    <block type="text"></block>' +
'    <block type="text_join"></block>' +
'    <block type="text_append">' +
'      <value name="TEXT">' +
'        <block type="text"></block>' +
'      </value>' +
'    </block>' +
'    <block type="text_length"></block>' +
'    <block type="text_isEmpty"></block>' +
//'    <!--block type="text_trim"></block Need to update block -->' +
//'    <!--block type="text_print"></block Part of the serial comms -->' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catVariables" name="Variables">' +
'    <block type="variables_get"></block>' +
'    <block type="variables_set"></block>' +
'    <block type="variables_set">' +
'      <value name="VALUE">' +
'        <block type="variables_set_type"></block>' +
'      </value>' +
'    </block>' +
'    <block type="variables_set_type"></block>' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catFunctions" name="Functions" custom="PROCEDURE"></category>' +
'  <sep></sep>' +
'  <category id="catInputOutput" name="Input/Output">' +
'    <block type="io_digitalwrite">' +
'      <value name="STATE">' +
'        <block type="io_highlow"></block>' +
'      </value>' +
'    </block>' +
'    <block type="io_digitalread"></block>' +
'    <block type="io_builtin_led">' +
'      <value name="STATE">' +
'        <block type="io_highlow"></block>' +
'      </value>' +
'    </block>' +
'    <block type="io_analogwrite"></block>' +
'    <block type="io_analogread"></block>' +
'    <block type="io_highlow"></block>' +
'    <block type="io_pulsein">' +
'      <value name="PULSETYPE">' +
'        <shadow type="io_highlow"></shadow>' +
'      </value>' +
'    </block>' +
'    <block type="io_pulsetimeout">' +
'      <value name="PULSETYPE">' +
'        <shadow type="io_highlow"></shadow>' +
'      </value>' +
'      <value name="TIMEOUT">' +
'        <block type="math_number"></block>' +
'      </value>'+
'    </block>' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catTime" name="Time">' +
'    <block type="time_delay">' +
'      <value name="DELAY_TIME_MILI">' +
'        <block type="math_number">' +
'          <field name="NUM">1000</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="time_delaymicros">' +
'      <value name="DELAY_TIME_MICRO">' +
'        <block type="math_number">' +
'          <field name="NUM">100</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="time_millis"></block>' +
'    <block type="time_micros"></block>' +
'    <block type="infinite_loop"></block>' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catAudio" name="Audio">' +
'    <block type="io_tone">' +
'      <field name="TONEPIN">0</field>' +
'      <value name="FREQUENCY">' +
'        <shadow type="math_number">' +
'          <field name="NUM">220</field>' +
'        </shadow>' +
'      </value>' +
'    </block>' +
'    <block type="io_notone"></block>' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catMotors" name="Motors">' +
'    <block type="servo_write">' +
'      <value name="SERVO_ANGLE">' +
'        <block type="math_number">' +
'          <field name="NUM">90</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="servo_read"></block>' +
'    <block type="stepper_config">' +
'      <field name="STEPPER_PIN1">1</field>' +
'      <field name="STEPPER_PIN2">2</field>' +
'      <field name="STEPPER_PIN3">3</field>' +
'      <value name="STEPPER_STEPS">' +
'        <block type="math_number">' +
'          <field name="NUM">100</field>' +
'        </block>' +
'      </value>' +
'      <value name="STEPPER_SPEED">' +
'        <block type="math_number">' +
'          <field name="NUM">10</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="stepper_step">' +
'      <value name="STEPPER_STEPS">' +
'        <block type="math_number">' +
'          <field name="NUM">10</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'  </category>' +
'  <sep></sep>' +
'  <category id="catComms" name="Comms">' +
'    <block type="serial_setup"></block>' +
'    <block type="serial_available"></block>' +
'    <block type="serial_read"></block>' +
'    <block type="serial_print"></block>' +
'    <block type="text_prompt_ext">' +
'      <value name="TEXT">' +
'        <block type="text"></block>' +
'      </value>' +
'    </block>' +
'    <block type="DS18B20_config">' +
'      <field name="DS18B20_NAME">ds_1</field>' +
'      <field name="DS18B20_PIN">2</field>' +
'      <field name="DS18B20_ADDRESS">direccion_1</field>' +
'    </block>' +
'    <block type="DS18B20_temp_C">' +
'    </block>' +
'    <block type="DS18B20_temp_F">' +
'    </block>' +
'    <block type="spi_setup"></block>' +
'    <block type="spi_transfer"></block>' +
'    <block type="spi_transfer_return"></block>' +
'  </category>' +
'  <sep></sep>' +
'  <category id="makeBlock" name="MakeBlocks">' +
'    <block type="megaPi_encoder_init">' +
'    </block>'+
'    <block type="megaPi_encoder_config">' +
'      <field name="MEGAPI_ENCODER_SLOT">SLOT1</field>' +
'    </block>'+
'    <block type="megaPi_encoder_gostraight">' +
'      <value name="MEGAPI_ENCODER_GO_STRAIGHT">' +
'        <block type="math_number">' +
'          <field name="NUM">100</field>' +
'        </block>' +
'      </value>' +
'      <field name="MEGAPI_ENCODER_GO_STRAIGHT_FOR_BACK">ENCODER_FORWARD</field>' +
'    </block>' +
'    <block type="megaPi_encoder_spin">' +
'      <field name="MEGAPI_ENCODER_SPIN">ENCODER_LEFT</field>' +
'      <value name="MEGAPI_ENCODER_SPIN_TIME">' +
'        <block type="math_number">' +
'          <field name="NUM">4000</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="megaPi_encoder_settarpwm">' +
'      <value name="MEGAPI_ENCODER_SETTARPWM">' +
'        <block type="math_number">' +
'          <field name="NUM">0</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="megaPi_encoder_setpulse">' +
'      <value name="MEGAPI_ENCODER_SETPULSE">' +
'        <block type="math_number">' +
'          <field name="NUM">0</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="megaPi_encoder_setmotorpwm">' +
'      <value name="MEGAPI_ENCODER_SETMOTORPWM">' +
'        <block type="math_number">' +
'          <field name="NUM">100</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="megaPi_encoder_setratio">' +
'      <value name="MEGAPI_ENCODER_SETRATIO">' +
'        <block type="math_number">' +
'          <field name="NUM">26.9</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="megaPi_encoder_setpospid">' +
'      <value name="MEGAPI_ENCODER_SETPOSPID_P">' +
'        <block type="math_number">' +
'          <field name="NUM">1.8</field>' +
'        </block>' +
'      </value>' +
'      <value name="MEGAPI_ENCODER_SETPOSPID_I">' +
'        <block type="math_number">' +
'          <field name="NUM">0</field>' +
'        </block>' +
'      </value>' +
'      <value name="MEGAPI_ENCODER_SETPOSPID_D">' +
'        <block type="math_number">' +
'          <field name="NUM">1.2</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="megaPi_encoder_setspeedpid">' +
'      <value name="MEGAPI_ENCODER_SETSPEEDPID_P">' +
'        <block type="math_number">' +
'          <field name="NUM">0.18</field>' +
'        </block>' +
'      </value>' +
'      <value name="MEGAPI_ENCODER_SETSPEEDPID_I">' +
'        <block type="math_number">' +
'          <field name="NUM">0</field>' +
'        </block>' +
'      </value>' +
'      <value name="MEGAPI_ENCODER_SETSPEEDPID_D">' +
'        <block type="math_number">' +
'          <field name="NUM">0</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="megaPi_encoder_runspeed">' +
'      <value name="MEGAPI_ENCODER_RUNSPEED">' +
'        <block type="math_number">' +
'          <field name="NUM">100</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="megaPi_encoder_moveto">' +
'      <value name="MEGAPI_ENCODER_MOVETO_POS">' +
'        <block type="math_number">' +
'          <field name="NUM">100</field>' +
'        </block>' +
'      </value>' +
'      <value name="MEGAPI_ENCODER_MOVETO_SPEED">' +
'        <block type="math_number">' +
'          <field name="NUM">100</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="megaPi_encoder_getcurpos"></block>' +
'    <block type="megaPi_encoder_getcurrentspeed"></block>' +
'    <block type="megaPi_encoder_updatespeed"></block>' +
'    <block type="megaPi_line_follower_config">' +
'      <field name="MEGAPI_LINE_FOLLOWER_PORT">3</field>' +
'    </block>' +
'    <block type="megaPi_line_follower_read_sensors"></block>' +
'    <block type="megaPi_ultrasonic_config">' +
'      <field name="MEGAPI_ULTRASONIC_PORT">7</field>' +
'    </block>' +
'    <block type="megaPi_ultrasonic_distance"></block>' +
'    <block type="megaPi_dc_motor_config">' +
'      <field name="MEGAPI_DC_MOTOR_PORT">A1</field>' +
'    </block>' +
'    <block type="megaPi_dc_motor_stop">' +
'      <value name="MEGAPI_DC_MOTOR_STOP">' +
'      </value>' +
'    </block>' +
'    <block type="megaPi_dc_motor_run">' +
'      <value name="MEGAPI_DC_MOTOR_RUN">' +
'      </value>' +
'      <value name="MEGAPI_DC_MOTOR_SPEEDS">' +
'        <block type="math_number">' +
'          <field name="NUM">100</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="megaPi_gyro_config">' +
'    </block>' +
'    <block type="megaPi_gyro_read_anglex"></block>' +
'    <block type="megaPi_gyro_read_angley"></block>' +
'    <block type="megaPi_gyro_read_anglez"></block>' +
'    <block type="megaPi_stepper_config">' +
'      <field name="MEGAPI_STEPPER_SLOT">1</field>' +
'      <value name="MEGAPI_STEPPER_STEPS">' +
'        <block type="math_number">' +
'          <field name="NUM">16</field>' +
'        </block>' +
'      </value>' +
'      <value name="MEGAPI_STEPPER_SPEED">' +
'        <block type="math_number">' +
'          <field name="NUM">1000</field>' +
'        </block>' +
'      </value>' +
'      <value name="MEGAPI_STEPPER_ACCELERATION">' +
'        <block type="math_number">' +
'          <field name="NUM">2000</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="megaPi_stepper_stepTo">' +
'      <value name="MEGAPI_STEPPER_STEPS_TO">' +
'        <block type="math_number">' +
'          <field name="NUM">10</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="megaPi_stepper_step">' +
'      <value name="MEGAPI_STEPPER_STEPS">' +
'        <block type="math_number">' +
'          <field name="NUM">10</field>' +
'        </block>' +
'      </value>' +
'    </block>' +
'    <block type="megaPi_stepper_run">' +
'      <value name="MEGAPI_STEPPER_RUN">' +
'      </value>' +
'    </block>' +
'  </category>' +
'</xml>';

