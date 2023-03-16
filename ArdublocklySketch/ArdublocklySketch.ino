// Ardublockly generated sketch
float val;
float i;
float j;
float k;
String m;
String n;

void setup() {
  Serial.begin(9600);
  pinMode(A0, INPUT);
  pinMode(A1, INPUT);
}

void loop() {
  val = (float)(analogRead(A0));
  i = val * 5;
  i = i * 100;
  i = i / 1023;
  j = (float)(analogRead(A1));
  k = j * 5;
  k = k * 100;
  k = k / 1023;
  m = String("A0,") + String(i);
  n = String(",A1,") + String(k);
  Serial.println((String(m) + String(n)));
  delay(5000);

}