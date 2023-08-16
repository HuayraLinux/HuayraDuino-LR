// Ardublockly generated sketch
int j;

void setup() {
  Serial.begin(9600);
  pinMode(A0, INPUT);
}

void loop() {
  j = analogRead(A0);
  Serial.print("Humedad,");
  Serial.print(j);
  if (j >= 1000) {
    Serial.println(", Seco");
  } else if (j >= 901 && j <= 999) {
    Serial.println(", Normal");
  } else if (j <= 900) {
    Serial.println(", Humedo");
  }
  delay(500);

}