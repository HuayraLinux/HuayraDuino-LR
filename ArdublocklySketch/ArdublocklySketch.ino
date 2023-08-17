// Ardublockly generated sketch
#include <MeMegaPi.h>

int j;
int i;
int MiMegaPiUltrasonico_port = 7;
int MiMegaPiSeguidor_port = 6;

MeEncoderOnBoard MiMotorIzquierdo(SLOT1);
void isr_process_MiMotorIzquierdo(void)
{
  if(digitalRead(MiMotorIzquierdo.getPortB()) == 0)
  {
    MiMotorIzquierdo.pulsePosMinus();
  }
  else
  {
    MiMotorIzquierdo.pulsePosPlus();
  }
}

MeEncoderOnBoard MiMotorDerecho(SLOT2);
void isr_process_MiMotorDerecho(void)
{
  if(digitalRead(MiMotorDerecho.getPortB()) == 0)
  {
    MiMotorDerecho.pulsePosMinus();
  }
  else
  {
    MiMotorDerecho.pulsePosPlus();
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
  attachInterrupt(MiMotorIzquierdo.getIntNum(), isr_process_MiMotorIzquierdo, RISING);
  attachInterrupt(MiMotorDerecho.getIntNum(), isr_process_MiMotorDerecho, RISING);
}

void loop() {
  j = MiMegaPiUltrasonico.distanceCm();
  i = MiMegaPiSeguidor.readSensors();
  // S1_IN_S2_IN   = 0x00    sensor1 y sensor2 ambos dentro de la linea negra
  // S1_IN_S2_OUT  = 0x01    sensor1 esta dentro de la linea negra y sensor2 esta fuera de la linea negra
  // undefined
  // S1_OUT_S2_OUT = 0x03    sensor1 and sensor2 ambos fuera de la linea negra ;
  if (i == 0) {
    MiMotorIzquierdo.setMotorPwm(100);
    MiMotorDerecho.setMotorPwm(-100);
    MiMotorIzquierdo.updateSpeed();
    MiMotorDerecho.updateSpeed();
  } else if (i == 1) {
    MiMotorIzquierdo.setMotorPwm(100);
    MiMotorDerecho.setMotorPwm(100);
    delay(0);
    MiMotorIzquierdo.updateSpeed();
    MiMotorDerecho.updateSpeed();
  } else if (i == 2) {
    MiMotorIzquierdo.setMotorPwm(-100);
    MiMotorDerecho.setMotorPwm(-100);
    delay(0);
    MiMotorIzquierdo.updateSpeed();
    MiMotorDerecho.updateSpeed();
  } else if (i == 3) {
    if (j < 25) {
      MiMotorIzquierdo.setMotorPwm(100);
      MiMotorDerecho.setMotorPwm(100);
      delay(4000);
      MiMotorIzquierdo.updateSpeed();
      MiMotorDerecho.updateSpeed();
    }
    MiMotorIzquierdo.setMotorPwm(100);
    MiMotorDerecho.setMotorPwm(-100);
    MiMotorIzquierdo.updateSpeed();
    MiMotorDerecho.updateSpeed();
  }

}