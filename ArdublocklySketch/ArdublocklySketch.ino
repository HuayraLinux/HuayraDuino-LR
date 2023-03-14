// Ardublockly generated sketch
void setup() {
  Serial.begin(9600);
  pinMode(13, OUTPUT);
}

void loop() {
  for (int count = 0; count < 10; count++) {
    digitalWrite(13, HIGH);
    delay(1000);
    digitalWrite(13, LOW);
    delay(1000);
    Serial.println("blablabla");
  }

}