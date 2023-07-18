// Ardublockly generated sketch
#include <MeMegaPi.h>

int j;
int i;
int MiMegaPiUltrasonico_port = 7;
int MiMegaPiSeguidor_port = 6;

MeEncoderOnBoard MiMegaPiEncoder(SLOT1);
void isr_process_MiMegaPiEncoder(void)
{
  if(digitalRead(MiMegaPiEncoder.getPortB()) == 0)
  {
    MiMegaPiEncoder.pulsePosMinus();
  }
  else
  {
    MiMegaPiEncoder.pulsePosPlus();
  }
}

MeEncoderOnBoard MiMegaPiEncoder_4(SLOT2);
void isr_process_MiMegaPiEncoder_4(void)
{
  if(digitalRead(MiMegaPiEncoder_4.getPortB()) == 0)
  {
    MiMegaPiEncoder_4.pulsePosMinus();
  }
  else
  {
    MiMegaPiEncoder_4.pulsePosPlus();
  }
}

MeUltrasonicSensor MiMegaPiUltrasonico(MiMegaPiUltrasonico_port);
MeLineFollower MiMegaPiSeguidor(MiMegaPiSeguidor_port);

void setup() {
  //Set PWM 8KHz
  TCCR1A = _BV(WGM10);
  TCCR1B = _BV(CS11) | _BV(WGM12);
  TCCR2A = _BV(WGM21) | _BV(WGM20);
  TCCR2B = _BV(CS21);
  attachInterrupt(MiMegaPiEncoder.getIntNum(), isr_process_MiMegaPiEncoder, RISING);
  attachInterrupt(MiMegaPiEncoder_4.getIntNum(), isr_process_MiMegaPiEncoder_4, RISING);
}

void loop() {
  j = MiMegaPiUltrasonico.distanceCm();
  i = MiMegaPiSeguidor.readSensors();
  // S1_IN_S2_IN   = 0x00    sensor1 y sensor2 ambos dentro de la linea negra
  // S1_IN_S2_OUT  = 0x01    sensor1 esta dentro de la linea negra y sensor2 esta fuera de la linea negra
  // undefined
  // S1_OUT_S2_OUT = 0x03    sensor1 and sensor2 ambos fuera de la linea negra ;
  if (i == 0) {
    MiMegaPiEncoder.setMotorPwm(100);
    MiMegaPiEncoder_4.setMotorPwm(-100);
    MiMegaPiEncoder.updateSpeed();
    MiMegaPiEncoder_4.updateSpeed();
  } else if (i == 1) {
    MiMegaPiEncoder.setMotorPwm(100);
    MiMegaPiEncoder_4.setMotorPwm(100);
    MiMegaPiEncoder.updateSpeed();
    MiMegaPiEncoder_4.updateSpeed();
  } else if (i == 2) {
    MiMegaPiEncoder.setMotorPwm(-100);
    MiMegaPiEncoder_4.setMotorPwm(-100);
    MiMegaPiEncoder.updateSpeed();
    MiMegaPiEncoder_4.updateSpeed();
  } else if (i == 3) {
    if (j < 25) {
      MiMegaPiEncoder.setMotorPwm(100);
      MiMegaPiEncoder_4.setMotorPwm(100);
      delay(4000);
      MiMegaPiEncoder.updateSpeed();
      MiMegaPiEncoder_4.updateSpeed();
    }
    MiMegaPiEncoder.setMotorPwm(100);
    MiMegaPiEncoder_4.setMotorPwm(-100);
    MiMegaPiEncoder.updateSpeed();
    MiMegaPiEncoder_4.updateSpeed();
  }

}