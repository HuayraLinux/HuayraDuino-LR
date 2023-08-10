/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 *
 * @fileoverview  Ardublockly specific English strings.
 *
 * After modifying this file, either run "build.py" from the blockly directory,
 * or run (from this directory):
 * ../i18n/js_to_json.py
 * to regenerate json/{en,qqq,synonyms}.json.
 *
 * To convert all of the json files to .js files, run:
 * ../i18n/create_messages.py json/*.json
 */
'use strict';

goog.provide('Blockly.Msg.en');

goog.require('Blockly.Msg');


/**
 * Due to the frequency of long strings, the 80-column wrap rule need not apply
 * to message files.
 */

/**
 * Each message is preceded with a triple-slash comment that becomes the
 * message descriptor.  The build process extracts these descriptors, adds
 * them to msg/json/qqq_ardublockly.json, and they show up in the translation
 * console.
 * Note the strings have to be surrounded by single quotation marks: ''
 */

/**
 * Ardublockly Types
 */
/// Arduino Types - Character C type char
Blockly.Msg.ARD_TYPE_CHAR = 'Character';
/// Arduino Types - Text C type String
Blockly.Msg.ARD_TYPE_TEXT = 'Text';
/// Arduino Types - Boolean type
Blockly.Msg.ARD_TYPE_BOOL = 'Boolean';
/// Arduino Types - Short number C type char
Blockly.Msg.ARD_TYPE_SHORT = 'Short Number';
/// Arduino Types - Number C type integer
Blockly.Msg.ARD_TYPE_NUMBER = 'Number';
/// Arduino Types - Large number C type long integer
Blockly.Msg.ARD_TYPE_LONG = 'Large Number';
/// Arduino Types - Decimal number C type floating point
Blockly.Msg.ARD_TYPE_DECIMAL = 'Decimal';
/// Arduino Types - Array
Blockly.Msg.ARD_TYPE_ARRAY = 'Array';
/// Arduino Types - Null C type void
Blockly.Msg.ARD_TYPE_NULL = 'Null';
/// Arduino Types - Undefined type
Blockly.Msg.ARD_TYPE_UNDEF = 'Undefined';
/// Arduino Types - Place holder value, indicates block with type not connected
Blockly.Msg.ARD_TYPE_CHILDBLOCKMISSING = 'ChildBlockMissing';

/// Arduino Blocks
Blockly.Msg.ARD_HIGH = 'HIGH';
Blockly.Msg.ARD_LOW = 'LOW';
Blockly.Msg.ARD_ANALOGREAD = 'read analog pin#';
Blockly.Msg.ARD_ANALOGREAD_PULLUP = 'read analog via pull up pin#';
Blockly.Msg.ARD_ANALOGREAD_TIP = 'Return value between 0 and 1024';
Blockly.Msg.ARD_ANALOGWRITE = 'set analog pin#';
Blockly.Msg.ARD_ANALOGWRITE_TIP = 'Write analog value between 0 and 255 to a specific PWM Port';
Blockly.Msg.ARD_HIGHLOW_TIP = 'Set a pin state logic High or Low.';
Blockly.Msg.ARD_DIGITALREAD = 'read digital pin#';
Blockly.Msg.ARD_DIGITALREAD_TIP = 'Read digital value on a pin: HIGH or LOW';
Blockly.Msg.ARD_DIGITALWRITE = 'set digital pin#';
Blockly.Msg.ARD_WRITE_TO = 'to';
Blockly.Msg.ARD_DIGITALWRITE_TIP = 'Write digital value HIGH or LOW to a specific Port';
Blockly.Msg.ARD_BUILTIN_LED = 'set built-in LED';
Blockly.Msg.ARD_BUILTIN_LED_TIP = 'Light on or off for the built-in LED of the Arduino';
Blockly.Msg.ARD_DEFINE = 'Define';
Blockly.Msg.ARD_TONE_PIN = 'Tone PIN#';
Blockly.Msg.ARD_TONE_FREQ = 'frequency';
Blockly.Msg.ARD_TONE_PIN_TIP = 'Generate audio tones on a pin';
Blockly.Msg.ARD_NOTONE_PIN = 'No tone PIN#';
Blockly.Msg.ARD_NOTONE_PIN_TIP = 'Stop generating a tone on a pin';
Blockly.Msg.ARD_MAP = 'Map';
Blockly.Msg.ARD_MAP_VAL = 'value to [0-';
Blockly.Msg.ARD_MAP_TIP = 'Re-maps a number from [0-1024] to another.';
Blockly.Msg.ARD_FUN_RUN_SETUP = 'Arduino run first:';
Blockly.Msg.ARD_FUN_RUN_LOOP = 'Arduino loop forever:';
Blockly.Msg.ARD_FUN_RUN_TIP = 'Defines the Arduino setup() and loop() functions.';
Blockly.Msg.ARD_PIN_WARN1 = 'Pin %1 is needed for %2 as pin %3. Already used as %4.';
Blockly.Msg.ARD_SERIAL_SETUP = 'Setup';
Blockly.Msg.ARD_SERIAL_SPEED = ':  speed to';
Blockly.Msg.ARD_SERIAL_BPS = 'bps';
Blockly.Msg.ARD_SERIAL_SETUP_TIP = 'Selects the speed for a specific Serial peripheral';
Blockly.Msg.ARD_SERIAL_PRINT = 'print';
Blockly.Msg.ARD_SERIAL_PRINT_NEWLINE = 'add new line';
Blockly.Msg.ARD_SERIAL_PRINT_TIP = 'Prints data to the console/serial port as human-readable ASCII text.';
Blockly.Msg.ARD_SERIAL_AVAILABLE = 'available to read';
Blockly.Msg.ARD_SERIAL_AVAILABLE_TIP = 'Returns true if the number of bytes available to read is great zero.';
Blockly.Msg.ARD_SERIAL_PRINT_WARN = 'A setup block for %1 must be added to the workspace to use this block!';
Blockly.Msg.ARD_SERIAL_READ = 'Read';
Blockly.Msg.ARD_SERIAL_READ_TIP = 'Reads a char for a specific Serial peripheral';
Blockly.Msg.ARD_SERVO_WRITE = 'set SERVO from Pin';
Blockly.Msg.ARD_SERVO_WRITE_TO = 'to';
Blockly.Msg.ARD_SERVO_WRITE_DEG_180 = 'Degrees (0~180)';
Blockly.Msg.ARD_SERVO_WRITE_TIP = 'Set a Servo to an specified angle';
Blockly.Msg.ARD_SERVO_READ = 'read SERVO from PIN#';
Blockly.Msg.ARD_SERVO_READ_TIP = 'Read a Servo angle';
Blockly.Msg.ARD_SPI_SETUP = 'Setup';
Blockly.Msg.ARD_SPI_SETUP_CONF = 'configuration:';
Blockly.Msg.ARD_SPI_SETUP_SHIFT = 'data shift';
Blockly.Msg.ARD_SPI_SETUP_MSBFIRST = 'MSBFIRST';
Blockly.Msg.ARD_SPI_SETUP_LSBFIRST = 'LSBFIRST';
Blockly.Msg.ARD_SPI_SETUP_DIVIDE = 'clock divide';
Blockly.Msg.ARD_SPI_SETUP_MODE = 'SPI mode (idle - edge)';
Blockly.Msg.ARD_SPI_SETUP_MODE0 = '0 (Low - Falling)';
Blockly.Msg.ARD_SPI_SETUP_MODE1 = '1 (Low - Rising)';
Blockly.Msg.ARD_SPI_SETUP_MODE2 = '2 (High - Falling)';
Blockly.Msg.ARD_SPI_SETUP_MODE3 = '3 (High - Rising)';
Blockly.Msg.ARD_SPI_SETUP_TIP = 'Configures the SPI peripheral.';
Blockly.Msg.ARD_SPI_TRANS_NONE = 'none';
Blockly.Msg.ARD_SPI_TRANS_VAL = 'transfer';
Blockly.Msg.ARD_SPI_TRANS_SLAVE = 'to slave pin';
Blockly.Msg.ARD_SPI_TRANS_TIP = 'Send a SPI message to an specified slave device.';
Blockly.Msg.ARD_SPI_TRANS_WARN1 = 'A setup block for %1 must be added to the workspace to use this block!';
Blockly.Msg.ARD_SPI_TRANS_WARN2 = 'Old pin value %1 is no longer available.';
Blockly.Msg.ARD_SPI_TRANSRETURN_TIP = 'Send a SPI message to an specified slave device and get data back.';
Blockly.Msg.ARD_STEPPER_SETUP = 'Setup stepper motor';
Blockly.Msg.ARD_STEPPER_MOTOR = 'stepper motor:';
Blockly.Msg.ARD_STEPPER_DEFAULT_NAME = 'MyStepper';
Blockly.Msg.ARD_STEPPER_NUMBER_OF_PINS = 'Number of pins';
Blockly.Msg.ARD_STEPPER_TWO_PINS = '2';
Blockly.Msg.ARD_STEPPER_FOUR_PINS = '4';
Blockly.Msg.ARD_STEPPER_PIN1 = 'pin1#';
Blockly.Msg.ARD_STEPPER_PIN2 = 'pin2#';
Blockly.Msg.ARD_STEPPER_PIN3 = 'pin3#';
Blockly.Msg.ARD_STEPPER_PIN4 = 'pin4#';
Blockly.Msg.ARD_STEPPER_REVOLVS = 'how many steps per revolution';
Blockly.Msg.ARD_STEPPER_SPEED = 'set speed (rpm) to';
Blockly.Msg.ARD_STEPPER_SETUP_TIP = 'Configures a stepper motor pinout and other settings.';
Blockly.Msg.ARD_STEPPER_STEP = 'move stepper';
Blockly.Msg.ARD_STEPPER_STEPS = 'steps';
Blockly.Msg.ARD_STEPPER_STEP_TIP = 'Turns the stepper motor a specific number of steps.';
Blockly.Msg.ARD_STEPPER_COMPONENT = 'stepper';

Blockly.Msg.ARD_MEGAPI_STEPPER_SETUP = 'Setup MegaPi stepper motor';
Blockly.Msg.ARD_MEGAPI_STEPPER_MOTOR = 'MegaPi stepper motor:';
Blockly.Msg.ARD_MEGAPI_STEPPER_DEFAULT_NAME = 'MyMegaPiStepper';
Blockly.Msg.ARD_MEGAPI_STEPPER_SLOT = 'slot#';
Blockly.Msg.ARD_MEGAPI_STEPPER_REVOLVS = 'how many steps per revolution';
Blockly.Msg.ARD_MEGAPI_STEPPER_SPEED = 'set speed (rpm) to';
Blockly.Msg.ARD_MEGAPI_STEPPER_ACCELERATION = 'set acceleration to';
Blockly.Msg.ARD_MEGAPI_STEPPER_SETUP_TIP = 'Configures a MegaPi stepper motor pinout and other settings.';
Blockly.Msg.ARD_MEGAPI_STEPPER_STEP = 'move MegaPi stepper';
Blockly.Msg.ARD_MEGAPI_STEPPER_STEP_TO = 'move to MegaPi stepper';
Blockly.Msg.ARD_MEGAPI_STEPPER_STEPS_TO = 'steps to';
Blockly.Msg.ARD_MEGAPI_STEPPER_STEPS = 'steps';
Blockly.Msg.ARD_MEGAPI_STEPPER_RUN = 'run MegaPi stepper';
Blockly.Msg.ARD_MEGAPI_STEPPER_RUN_TIP = 'Runs MegaPi stepper statements';
Blockly.Msg.ARD_MEGAPI_STEPPER_STEP_TIP = 'Turns the MegaPi stepper motor a specific number of steps.';
Blockly.Msg.ARD_MEGAPI_STEPPER_COMPONENT = 'MegaPi stepper';

Blockly.Msg.ARD_MEGAPI_LINE_FOLLOWER_SETUP = 'Setup MegaPi line follower:';
Blockly.Msg.ARD_MEGAPI_LINE_FOLLOWER_DEFAULT_NAME = 'MyMegaPiLineFollower';
Blockly.Msg.ARD_MEGAPI_LINE_FOLLOWER_PORT = 'port#';
Blockly.Msg.ARD_MEGAPI_LINE_FOLLOWER_SETUP_TIP = 'Configures a MegaPi line follower pinout and other settings.';
Blockly.Msg.ARD_MEGAPI_LINE_FOLLOWER_READ_SENSOR = 'Read MegaPi line follower sensors';
Blockly.Msg.ARD_MEGAPI_LINE_FOLLOWER_READ_SENSOR_TIP = 'Reads a number for a specific MegaPi line follower peripheral';
Blockly.Msg.ARD_MEGAPI_LINE_FOLLOWER_READ_SENSOR_INFO_1 = 'S1_IN_S2_IN   = 0x00    sensor1 and sensor2 are both inside of black line';
Blockly.Msg.ARD_MEGAPI_LINE_FOLLOWER_READ_SENSOR_INFO_2 = 'S1_IN_S2_OUT  = 0x01    sensor1 is inside of black line and sensor2 is outside of black line';
Blockly.Msg.ARD_MEGAPI_LINE_FOLLOWER_READ_SENSOR_INFO_3 = 'S1_OUT_S2_IN  = 0x02    sensor1 is outside of black line and sensor2 is inside of black line'; 
Blockly.Msg.ARD_MEGAPI_LINE_FOLLOWER_READ_SENSOR_INFO_4 = 'S1_OUT_S2_OUT = 0x03    sensor1 and sensor2 are both outside of black line';

Blockly.Msg.ARD_MEGAPI_ULTRASONIC_SETUP = 'Setup MegaPi ultrasonic:';
Blockly.Msg.ARD_MEGAPI_ULTRASONIC_DEFAULT_NAME = 'MyMegaPiUltrasonic';
Blockly.Msg.ARD_MEGAPI_ULTRASONIC_PORT = 'port#';
Blockly.Msg.ARD_MEGAPI_ULTRASONIC_SETUP_TIP = 'Configures a MegaPi ultrasonic pinout and other settings.';
Blockly.Msg.ARD_MEGAPI_ULTRASONIC_DISTANCE = 'Distance in Cm MegaPi ultrasonic sensor';
Blockly.Msg.ARD_MEGAPI_ULTRASONIC_DISTANCE_TIP = 'Reads a distance to an obstacle in cm for a MegaPi ultrasonic sensor';

Blockly.Msg.ARD_MEGAPI_DC_MOTOR_SETUP = 'Setup MegaPi DC Motor';
Blockly.Msg.ARD_MEGAPI_DC_MOTOR_DEFAULT_NAME = 'MyMegaPiDCMotor';
Blockly.Msg.ARD_MEGAPI_DC_MOTOR_PORT = 'port#';
Blockly.Msg.ARD_MEGAPI_DC_MOTOR_SPEED = 'to speed';
Blockly.Msg.ARD_MEGAPI_DC_MOTOR_SETUP_TIP = 'Configures a MegaPi DC Motor pinout and other settings.';
Blockly.Msg.ARD_MEGAPI_DC_MOTOR_RUN = 'run MegaPi DC Motor';
Blockly.Msg.ARD_MEGAPI_DC_MOTOR_RUN_TIP = 'Runs MegaPi DC Motor at especific speed';
Blockly.Msg.ARD_MEGAPI_DC_MOTOR_STOP = 'stop MegaPi DC Motor';
Blockly.Msg.ARD_MEGAPI_DC_MOTOR_STOP_TIP = 'Stops the MegaPi DC Motor.';
Blockly.Msg.ARD_MEGAPI_DC_MOTOR_COMPONENT = 'MegaPi DC Motor';

Blockly.Msg.ARD_MEGAPI_GYRO_SETUP = 'Setup MegaPi Gyro:';
Blockly.Msg.ARD_MEGAPI_GYRO_DEFAULT_NAME = 'MyMegaPiGyro';
Blockly.Msg.ARD_MEGAPI_GYRO_SETUP_TIP = 'Configures a MegaPi Gyro.';
Blockly.Msg.ARD_MEGAPI_GYRO_READ_ANGLEX = 'Read MegaPi Gyro angle X';
Blockly.Msg.ARD_MEGAPI_GYRO_READ_ANGLEY = 'Read MegaPi Gyro angle Y';
Blockly.Msg.ARD_MEGAPI_GYRO_READ_ANGLEZ = 'Read MegaPi Gyro angle Z';
Blockly.Msg.ARD_MEGAPI_GYRO_READ_ANGLE_AXIS_TIP = 'Reads the angle value of the x/y/z axis for a specific MegaPi Gyro peripheral';

Blockly.Msg.ARD_MEGAPI_ENCODER_INIT = 'Init MegaPi Encoder Motor';
Blockly.Msg.ARD_MEGAPI_ENCODER_INIT_TIP = 'Initializes all configurations of MegaPi Encoder';
Blockly.Msg.ARD_MEGAPI_ENCODER_SETUP = 'Setup MegaPi Encoder: ';
Blockly.Msg.ARD_MEGAPI_ENCODER_DEFAULT_NAME = 'MyMegaPiEncoder';
Blockly.Msg.ARD_MEGAPI_ENCODER_MOTOR = 'MegaPi Encoder';
Blockly.Msg.ARD_MEGAPI_ENCODER_SLOT = 'Slot#';
Blockly.Msg.ARD_MEGAPI_ENCODER_SETUP_TIP = 'Configures a MegaPi Encoder Motor';
Blockly.Msg.ARD_MEGAPI_ENCODER_SETTARPWM = 'Set PWM Tar MegaPi Encoder';
Blockly.Msg.ARD_MEGAPI_ENCODER_SETTARPWM_TIP = 'Sets a PWM Tar function of MegaPi Encoder Motor';
Blockly.Msg.ARD_MEGAPI_ENCODER_SETPULSE = 'Set Pulse MegaPi Encoder';
Blockly.Msg.ARD_MEGAPI_ENCODER_SETPULSE_TIP = 'Sets the pulse of MegaPi Encoder Motor';
Blockly.Msg.ARD_MEGAPI_ENCODER_COMPONENT = 'MegaPi Encoder Motor';
Blockly.Msg.ARD_MEGAPI_ENCODER_SETMOTORPWM = 'Set PWM MegaPi Encoder ';
Blockly.Msg.ARD_MEGAPI_ENCODER_SETMOTORPWM_TIP = 'Sets the PWM of MegaPi Encoder Motor';
Blockly.Msg.ARD_MEGAPI_ENCODER_SETRATIO =  'Set Ratio MegaPi Encoder ';
Blockly.Msg.ARD_MEGAPI_ENCODER_SETRATIO_TIP = 'Sets the Ratio of MegaPi Encoder Motor';
Blockly.Msg.ARD_MEGAPI_ENCODER_SETPOSPID = 'Set Pos PID of MegaPi Encoder';
Blockly.Msg.ARD_MEGAPI_ENCODER_SETPOSPID_P = 'PID P';
Blockly.Msg.ARD_MEGAPI_ENCODER_SETPOSPID_I = 'PID I';
Blockly.Msg.ARD_MEGAPI_ENCODER_SETPOSPID_D = 'PID D';
Blockly.Msg.ARD_MEGAPI_ENCODER_SETPOSPID_TIP = 'Sets the Position PID and parameters of MegaPi Encoder Motor';
Blockly.Msg.ARD_MEGAPI_ENCODER_SETSPEEDPID = 'Set Speed PID of MegaPi Encoder';
Blockly.Msg.ARD_MEGAPI_ENCODER_SETSPEEDPID_P = 'PID P';
Blockly.Msg.ARD_MEGAPI_ENCODER_SETSPEEDPID_I = 'PID I';
Blockly.Msg.ARD_MEGAPI_ENCODER_SETSPEEDPID_D = 'PID D';
Blockly.Msg.ARD_MEGAPI_ENCODER_SETSPEEDPID_TIP = 'Sets the Speed PID and parameters of MegaPi Encoder Motor';
Blockly.Msg.ARD_MEGAPI_ENCODER_RUNSPEED = 'Run at Speed MegaPi Encoder';
Blockly.Msg.ARD_MEGAPI_ENCODER_RUNSPEED_TIP = 'Runs at especific Speed';
Blockly.Msg.ARD_MEGAPI_ENCODER_MOVETO = 'Move To MegaPi Encoder';
Blockly.Msg.ARD_MEGAPI_ENCODER_MOVETO_POS = 'Position';
Blockly.Msg.ARD_MEGAPI_ENCODER_MOVETO_SPEED = 'Speed';
Blockly.Msg.ARD_MEGAPI_ENCODER_MOVETO_TIP = 'Moves To a position and speed of MegaPi Encoder Motor';
Blockly.Msg.ARD_MEGAPI_ENCODER_GETCURPOS = 'Get Position MegaPi Encoder';
Blockly.Msg.ARD_MEGAPI_ENCODER_GETCURPOS_TIP = 'Gets the current position of MegaPi Encoder Motor';
Blockly.Msg.ARD_MEGAPI_ENCODER_GETCURRENTSPEED = 'Get Speed MegaPi Encoder';
Blockly.Msg.ARD_MEGAPI_ENCODER_GETCURRENTSPEED_TIP = 'Gets the current speed of MegaPi Encoder Motor';
Blockly.Msg.ARD_MEGAPI_ENCODER_UPDATESPEED = 'Update Speed MegaPi Encoder';
Blockly.Msg.ARD_MEGAPI_ENCODER_UPDATESPEED_TIP = 'Updates the previous set speed of MegaPi Encoder Motor';

Blockly.Msg.ARD_MEGAPI_ENCODER_GO_STRAIGHT = 'Move MegaPi Encoder Motors';
Blockly.Msg.ARD_MEGAPI_ENCODER_GO_STRAIGHT_SPEED = 'Set Speed';
Blockly.Msg.ARD_MEGAPI_ENCODER_FOR_BACK = 'Set direction';
Blockly.Msg.ARD_MEGAPI_ENCODER_GO_STRAIGHT_TIP = 'Sets the Speed to go for MegaPi Encoder Motors';
Blockly.Msg.ARD_MEGAPI_ENCODER_FORWARD = 'Forward';
Blockly.Msg.ARD_MEGAPI_ENCODER_BACKWARD = 'Backward';

Blockly.Msg.ARD_MEGAPI_ENCODER_LEFT = 'Left';
Blockly.Msg.ARD_MEGAPI_ENCODER_RIGHT = 'Right';
Blockly.Msg.ARD_MEGAPI_ENCODER_SPIN = 'Set turn to MegaPi Encoder Motors';
Blockly.Msg.ARD_MEGAPI_ENCODER_SPIN_TIME = 'turn wait in milliseconds';
Blockly.Msg.ARD_MEGAPI_ENCODER_SPIN_DIR = 'direction';
Blockly.Msg.ARD_MEGAPI_ENCODER_SPIN_TIP = 'Sets turn direction to go for MegaPi Encoder Motors';

Blockly.Msg.ARD_DS18B20_SETUP = 'Config Sensor type DS18B20';
Blockly.Msg.ARD_DS18B20_DEFAULT_NAME = 'ds_1';
Blockly.Msg.ARD_DS18B20_PIN = 'Pin';
/*
Blockly.Msg.ARD_DS18B20_ADDRESS_1 = 'direccion_1#';
Blockly.Msg.ARD_DS18B20_ADDRESS_2 = 'direccion_2#';
Blockly.Msg.ARD_DS18B20_ADDRESS_3 = 'direccion_3#';
Blockly.Msg.ARD_DS18B20_ADDRESS_4 = 'direccion_4#';
Blockly.Msg.ARD_DS18B20_ADDRESS_5 = 'direccion_5#';
Blockly.Msg.ARD_DS18B20_ADDRESS_6 = 'direccion_6#';
Blockly.Msg.ARD_DS18B20_ADDRESS_7 = 'direccion_7#';
Blockly.Msg.ARD_DS18B20_ADDRESS_8 = 'direccion_8#';*/
Blockly.Msg.ARD_DS18B20_ADDRESS = 'direccion de memoria';
Blockly.Msg.ARD_DS18B20_TEMPERATURE_C = 'Leer Temperatura en °C de DS18B20 ';
Blockly.Msg.ARD_DS18B20_TEMPERATURE_F = 'Leer Temperatura en °F de DS18B20 ';
Blockly.Msg.ARD_DS18B20_COMPONENT = 'DS18B20';

Blockly.Msg.ARD_MHZ19_SETUP = 'Config Sensor MHZ19 CO2';
Blockly.Msg.ARD_MHZ19_DEFAULT_NAME = 'MyMHZ19';
Blockly.Msg.ARD_MHZ19_RX_PORT = 'RX Pin';
Blockly.Msg.ARD_MHZ19_TX_PORT = 'TX Pin';
Blockly.Msg.ARD_MHZ19_SETUP_TIP = 'Configures a MHZ19 CO2 Sensor';
Blockly.Msg.ARD_MHZ19_GETCO2 = 'Get MHZ19 CO2 (ppm)';
Blockly.Msg.ARD_MHZ19_GETCO2_TIP = 'Gets MHZ19 Sensor CO2 value in ppm';
Blockly.Msg.ARD_MHZ19_GETTEMP = 'Get MHZ19 Temperature in °C';
Blockly.Msg.ARD_MHZ19_GETTEMP_TIP = 'Gets MHZ19 Sensor Temperature value in °C';

Blockly.Msg.ARD_LCD_I2C_SETUP = 'Config LCD I2C';
Blockly.Msg.ARD_LCD_I2C_DEFAULT_NAME = 'lcd'
Blockly.Msg.ARD_LCD_I2C_SETCURSOR = 'Set position col, row LCD I2C';
Blockly.Msg.ARD_LCD_I2C_SETCURSOR_COL = 'col';
Blockly.Msg.ARD_LCD_I2C_SETCURSOR_ROW = 'row';
Blockly.Msg.ARD_LCD_I2C_SETCURSOR_TIP = 'Sets the position in cols and rows to LCD I2C';
Blockly.Msg.ARD_LCD_I2C_PRINT = 'print';
Blockly.Msg.ARD_LCD_I2C_COMPONENT = 'LCD I2C'
Blockly.Msg.ARD_COMPONENT_WARN1 = 'A %1 configuration block with the same %2 name must be added to use this block!';
Blockly.Msg.ARD_TIME_DELAY = 'wait';
Blockly.Msg.ARD_TIME_MS = 'milliseconds';
Blockly.Msg.ARD_TIME_DELAY_TIP = 'Wait specific time in milliseconds';
Blockly.Msg.ARD_TIME_DELAY_MICROS = 'microseconds';
Blockly.Msg.ARD_TIME_DELAY_MICRO_TIP = 'Wait specific time in microseconds';
Blockly.Msg.ARD_TIME_MILLIS = 'current elapsed Time (milliseconds)';
Blockly.Msg.ARD_TIME_MILLIS_TIP = 'Returns the number of milliseconds since the Arduino board began running the current program. Has to be stored in a positive long integer';
Blockly.Msg.ARD_TIME_MICROS = 'current elapsed Time (microseconds)';
Blockly.Msg.ARD_TIME_MICROS_TIP = 'Returns the number of microseconds since the Arduino board began running the current program. Has to be stored in a positive long integer';
Blockly.Msg.ARD_TIME_INF = 'wait forever (end program)';
Blockly.Msg.ARD_TIME_INF_TIP = 'Wait indefinitely, stopping the program.';
Blockly.Msg.ARD_VAR_AS = 'as';
Blockly.Msg.ARD_VAR_AS_TIP = 'Sets a value to a specific type';
/// IO blocks - pulseIn - Block for function pulseIn(), it measure a pulse duration in a given pin.
Blockly.Msg.ARD_PULSE_READ = 'measure %1 pulse on pin #%2';
/// IO blocks - pulseIn - Block similar to ARD_PULSE_READ, but it adds a time-out in microseconds.
Blockly.Msg.ARD_PULSE_READ_TIMEOUT = 'measure %1 pulse on pin #%2 (timeout after %3 μs)';
/// IO blocks - pulseIn - Tooltip for pulseIn() block.
Blockly.Msg.ARD_PULSE_TIP = 'Measures the duration of a pulse on the selected pin.';
/// IO blocks - pulseIn - Tooltip for pulseIn() block when it uses the optional argument for time-out.
Blockly.Msg.ARD_PULSETIMEOUT_TIP = 'Measures the duration of a pulse on the selected pin, if it is within the time-out in microseconds.';
Blockly.Msg.ARD_SETTONE = 'Set tone on pin #';
Blockly.Msg.ARD_TONEFREQ = 'at frequency';
Blockly.Msg.ARD_TONE_TIP = 'Sets tone on pin to specified frequency within range 31 - 65535';
Blockly.Msg.ARD_TONE_WARNING = 'Frequency must be in range 31 - 65535';
Blockly.Msg.ARD_NOTONE = 'Turn off tone on pin #';
Blockly.Msg.ARD_NOTONE_TIP = 'Turns the tone off on the selected pin';

/**
 * Ardublockly instances
 */
/// Instances - Menu item to indicate that it will create a new instance
Blockly.Msg.NEW_INSTANCE = 'New instance...';
/// Instances - Menu item to rename an instance name
Blockly.Msg.RENAME_INSTANCE = 'Rename instance...';
/// Instances - Menu item to create a new instance name and apply it to that block
Blockly.Msg.NEW_INSTANCE_TITLE = 'New instance name:';
/// Instances - Confirmation message that a number of instances will be renamed to a new name
Blockly.Msg.RENAME_INSTANCE_TITLE = 'Rename all "%1" instances to:';
