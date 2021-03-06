/* Cory Wolfe and Prehit Patel
 * Section 06
 * Due: 2017-02-14
 */
// digital pin 2 has a pushbutton attached to it. Give it a name:
int red = 9;
int green = 10;
int blue = 11;
const int switchPin = 2;
const int ledPin = 11;
int buttonState;
int lightState = 0;
int blinkState = LOW;
long previousMillis = 0;
long interval = 1000;
unsigned long currentMillis = 0;
int i;
int dec = 0;
int o = 255;
int g = 0;
int t=0;


// the setup routine runs once when you press reset:
void setup() {
  Serial.begin(9600);
  pinMode(red,OUTPUT);
  pinMode(green,OUTPUT);
  pinMode(blue,OUTPUT);
  //pinMode(ledPin,OUTPUT);
  pinMode(switchPin,INPUT);
  buttonState = digitalRead(switchPin);
}

// the loop routine runs over and over again forever:
void loop() {
  int val = digitalRead(switchPin);
  delay(10);
  int val2 = digitalRead(switchPin);
 if(val==val2){
  if(val != buttonState){
    if(val == LOW){
      lightState++;
      if(lightState>2)
      lightState = 0;
      currentMillis = 0;
      previousMillis = millis();
      i = 0;
      o = 0;
      g = 0;
      t=0;
      }
    }
  }
  if(lightState == 0){
  analogWrite(red,0);
  analogWrite(blue,0);
  analogWrite(green,0);
  }
    if(lightState == 1){//Stay on forever.
    if(t<500){
      analogWrite(red,250);
      analogWrite(green,0);
      analogWrite(blue,0);
    }
    if(t<1000){
      if(t>=500){
        analogWrite(blue,250);
        analogWrite(green,250);
      }
    }
    if(t>=1000){
      analogWrite(red,0);
      analogWrite(green,0);
      if(t==1500)
      t=0;
    }
    t = millis() - previousMillis;
    if(t>1500)
    previousMillis = millis();
  }
  if(lightState == 2){ //dim up in 1 sec, down in 1 sec. Repeat.
      if(t<500){
          i=(t/2);
          analogWrite(red,i);
          analogWrite(blue,i);
          analogWrite(green,i);
          Serial.print("one: ");
          Serial.println(i);
      }
      if(t>=500){
        if(t<750){
          analogWrite(red,255);
          analogWrite(green,0);
          analogWrite(blue,0);
          Serial.println("two");
        }
      }
      if(t>=750){
        if(t<1000){
        analogWrite(green,0);
        analogWrite(red,0);
        analogWrite(blue,255);
        Serial.println("three");
        }
      }
      if(t==1000){
        analogWrite(green,250);
        analogWrite(blue,250);
        analogWrite(red,250);
      }
      if(t>1000){
          i=(t/2);
          o = 1000-i;
          analogWrite(red,250-o);
          analogWrite(blue,250-o);
          analogWrite(green,250-o);
          Serial.print("four: ");
          Serial.println(250-o);
      }
    t = millis() - previousMillis;
    if(t>1500){
    previousMillis = millis();
    i = 0;
    o = 0;
    }
    }
 

  buttonState = val;
  
}



