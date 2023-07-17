// Ardublockly generated sketch
#include <MeMegaPi.h>

int i;
int MiMegaPiUltrasonico_port = 7;

MeUltrasonicSensor MiMegaPiUltrasonico(MiMegaPiUltrasonico_port);
MeEncoderOnBoard MiMegaPiEncoder_2(SLOT1);
void isr_process_MiMegaPiEncoder_2(void)
{
  if(digitalRead(MiMegaPiEncoder_2.getPortB()) == 0)
  {
    MiMegaPiEncoder_2.pulsePosMinus();
  }
  else
  {
    MiMegaPiEncoder_2.pulsePosPlus();
  }
}

MeEncoderOnBoard MiMegaPiEncoder_3(SLOT2);
void isr_process_MiMegaPiEncoder_3(void)
{
  if(digitalRead(MiMegaPiEncoder_3.getPortB()) == 0)
  {
    MiMegaPiEncoder_3.pulsePosMinus();
  }
  else
  {
    MiMegaPiEncoder_3.pulsePosPlus();
  }
}


void setup() {
  //Set PWM 8KHz
  TCCR1A = _BV(WGM10);
  TCCR1B = _BV(CS11) | _BV(WGM12);
  TCCR2A = _BV(WGM21) | _BV(WGM20);
  TCCR2B = _BV(CS21);
  attachInterrupt(MiMegaPiEncoder_2.getIntNum(), isr_process_MiMegaPiEncoder_2, RISING);
  attachInterrupt(MiMegaPiEncoder_3.getIntNum(), isr_process_MiMegaPiEncoder_3, RISING);
}

void loop() {
  i = MiMegaPiUltrasonico.distanceCm();
  if (i < 25) {
    MiMegaPiEncoder_2.setMotorPwm(100);
    MiMegaPiEncoder_3.setMotorPwm(100);
    delay(4000);
    MiMegaPiEncoder_2.updateSpeed();
    MiMegaPiEncoder_3.updateSpeed();
  } else {
    MiMegaPiEncoder_2.setMotorPwm(100);
    MiMegaPiEncoder_3.setMotorPwm(-100);
    MiMegaPiEncoder_2.updateSpeed();
    MiMegaPiEncoder_3.updateSpeed();
  }
  MiMegaPiEncoder_2.updateSpeed();
  MiMegaPiEncoder_3.updateSpeed();

}