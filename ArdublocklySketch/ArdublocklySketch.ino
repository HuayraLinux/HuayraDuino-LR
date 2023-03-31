// Ardublockly generated sketch
#include <DS18B20.h>

float i;
float k;
String m;
String n;
uint8_t direccion_4[8];
uint8_t direccion_5[8];

DS18B20 ds_1(2);
DS18B20 ds_2(3);

void setup() {
  Serial.begin(9600);
  ds_1.selectNext();
  ds_1.getAddress(direccion_4);
  ds_2.selectNext();
  ds_2.getAddress(direccion_5);
}

void loop() {
  i = ds_1.getTempC();
  k = ds_2.getTempC();
  m = String("DS_1,") + String(i);
  n = String(",DS_2,") + String(k);
  Serial.println((String(m) + String(n)));
  delay(5000);

}