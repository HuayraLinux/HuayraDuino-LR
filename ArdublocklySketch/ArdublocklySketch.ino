// Ardublockly generated sketch
#include <MeMegaPi.h>

int elemento;
int MiMegaPiMotorDC_port = A1;
int MiMegaPiMotorDC_2_port = A2;
int MiMegaPiMotorDC_3_port = A3;
int MiMegaPiMotorDC_4_port = A4;

MeMegaPiDCMotor MiMegaPiMotorDC(MiMegaPiMotorDC_port);
MeMegaPiDCMotor MiMegaPiMotorDC_2(MiMegaPiMotorDC_2_port);
MeMegaPiDCMotor MiMegaPiMotorDC_3(MiMegaPiMotorDC_3_port);
MeMegaPiDCMotor MiMegaPiMotorDC_4(MiMegaPiMotorDC_4_port);

// Describe esta función...
void moverMotor() {
  MiMegaPiMotorDC.run(elemento);
  MiMegaPiMotorDC_2.run(elemento);
  MiMegaPiMotorDC_3.run(elemento);
  MiMegaPiMotorDC_4.run(elemento);
  delay(2000);
  MiMegaPiMotorDC.stop();
  MiMegaPiMotorDC_2.stop();
  MiMegaPiMotorDC_3.stop();
  MiMegaPiMotorDC_4.stop();
}


void setup() {
}

void loop() {
  elemento = 100;
  moverMotor();
  delay(100);
  elemento = -100;
  moverMotor();
  delay(2000);

}