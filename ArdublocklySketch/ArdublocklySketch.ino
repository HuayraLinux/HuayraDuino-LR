// Ardublockly generated sketch
#include <MHZ19.h>
#include <SoftwareSerial.h>

int CO2;
int Temp;
int SensorCO2_RX_port = 12;
int SensorCO2_TX_port = 13;

MHZ19 SensorCO2;
SoftwareSerial SensorCO2_Serial(SensorCO2_RX_port, SensorCO2_TX_port);

void setup() {
  SensorCO2_Serial.begin(9600);
SensorCO2.begin(SensorCO2_Serial);
SensorCO2.autoCalibration();
  Serial.begin(9600);
}

void loop() {
  CO2 = SensorCO2.getCO2();
  Temp = SensorCO2.getTemperature();
  Serial.print("CO2,");
  Serial.print(CO2);
  Serial.print(" ppm, Temperatura,");
  Serial.print(Temp);
  Serial.println(" °C");
  delay(1000);

}