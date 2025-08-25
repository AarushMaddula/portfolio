#include "SR04.h"
#define TRIG_PIN 13
#define ECHO_PIN 12
SR04 sr04 = SR04(ECHO_PIN,TRIG_PIN);
long a;


int redPin = 3;
int yellowPin = 4;
int greenPin = 5;


void setup() {
 pinMode(redPin, OUTPUT);
 pinMode(yellowPin, OUTPUT);
 pinMode(greenPin, OUTPUT);


 Serial.begin(9600);
 delay(1000);
}

boolean isActivated = false;

void loop() {
  a=sr04.Distance();

  if (a < 20 && !isActivated) {
    for (int i = 0; i < 10; i++) {
      digitalWrite(redPin, HIGH);
      delay(500);
      digitalWrite(redPin, LOW);
      digitalWrite(yellowPin, HIGH);
      delay(500);
      digitalWrite(yellowPin, LOW);
    }
    
    digitalWrite(redPin, LOW);      
    digitalWrite(yellowPin, LOW);
    digitalWrite(greenPin, HIGH);

    isActivated = true;
  }

 Serial.print(a);
 Serial.println("cm");

}



