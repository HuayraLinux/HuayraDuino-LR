// Ardublockly generated sketch
#include <DS18B20.h>

uint8_t direccion[8];
uint8_t direccion_3[8];

DS18B20 ds(2);
DS18B20 ds_3(3);

void setup() {
  Serial.begin(9600);
  ds.selectNext();
  ds.getAddress(direccion);
  ds_3.selectNext();
  ds_3.getAddress(direccion_3);
}

void loop() {
  Serial.println(ds.getTempF());
  Serial.println(ds.getTempF());
  Serial.println(ds.getTempC());
  Serial.println(ds.getTempC());
  delay(5000);

}