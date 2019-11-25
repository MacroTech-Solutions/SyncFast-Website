/*

 * --------------------------------------------------------------------------------------------------------------------

 * Example sketch/program showing how to read new NUID from a PICC to serial.

 * --------------------------------------------------------------------------------------------------------------------

 * This is a MFRC522 library example; for further details and other examples see: https://github.com/miguelbalboa/rfid

 * 

 * Example sketch/program showing how to the read data from a PICC (that is: a RFID Tag or Card) using a MFRC522 based RFID

 * Reader on the Arduino SPI interface.

 * 

 * When the Arduino and the MFRC522 module are connected (see the pin layout below), load this sketch into Arduino IDE

 * then verify/compile and upload it. To see the output: use Tools, Serial Monitor of the IDE (hit Ctrl+Shft+M). When

 * you present a PICC (that is: a RFID Tag or Card) at reading distance of the MFRC522 Reader/PCD, the serial output

 * will show the type, and the NUID if a new card has been detected. Note: you may see "Timeout in communication" messages

 * when removing the PICC from reading distance too early.

 * 

 * @license Released into the public domain.

 * 

 * Typical pin layout used:

 * -----------------------------------------------------------------------------------------

 *             MFRC522      Arduino       Arduino   Arduino    Arduino          Arduino

 *             Reader/PCD   Uno/101       Mega      Nano v3    Leonardo/Micro   Pro Micro

 * Signal      Pin          Pin           Pin       Pin        Pin              Pin

 * -----------------------------------------------------------------------------------------

 * RST/Reset   RST          9             5         D9         RESET/ICSP-5     RST

 * SPI SS      SDA(SS)      10            53        D10        10               10

 * SPI MOSI    MOSI         11 / ICSP-4   51        D11        ICSP-4           16

 * SPI MISO    MISO         12 / ICSP-1   50        D12        ICSP-1           14

 * SPI SCK     SCK          13 / ICSP-3   52        D13        ICSP-3           15

 */



#include <SPI.h>

#include <MFRC522.h>

#include <LiquidCrystal.h> // includes the LiquidCrystal Library 

#define NOTE_B0  31
#define NOTE_C1  33
#define NOTE_CS1 35
#define NOTE_D1  37
#define NOTE_DS1 39
#define NOTE_E1  41
#define NOTE_F1  44
#define NOTE_FS1 46
#define NOTE_G1  49
#define NOTE_GS1 52
#define NOTE_A1  55
#define NOTE_AS1 58
#define NOTE_B1  62
#define NOTE_C2  65
#define NOTE_CS2 69
#define NOTE_D2  73
#define NOTE_DS2 78
#define NOTE_E2  82
#define NOTE_F2  87
#define NOTE_FS2 93
#define NOTE_G2  98
#define NOTE_GS2 104
#define NOTE_A2  110
#define NOTE_AS2 117
#define NOTE_B2  123
#define NOTE_C3  131
#define NOTE_CS3 139
#define NOTE_D3  147
#define NOTE_DS3 156
#define NOTE_E3  165
#define NOTE_F3  175
#define NOTE_FS3 185
#define NOTE_G3  196
#define NOTE_GS3 208
#define NOTE_A3  220
#define NOTE_AS3 233
#define NOTE_B3  247
#define NOTE_C4  262
#define NOTE_CS4 277
#define NOTE_D4  294
#define NOTE_DS4 311
#define NOTE_E4  330
#define NOTE_F4  349
#define NOTE_FS4 370
#define NOTE_G4  392
#define NOTE_GS4 415
#define NOTE_A4  440
#define NOTE_AS4 466
#define NOTE_B4  494
#define NOTE_C5  523
#define NOTE_CS5 554
#define NOTE_D5  587
#define NOTE_DS5 622
#define NOTE_E5  659
#define NOTE_F5  698
#define NOTE_FS5 740
#define NOTE_G5  784
#define NOTE_GS5 831
#define NOTE_A5  880
#define NOTE_AS5 932
#define NOTE_B5  988
#define NOTE_C6  1047
#define NOTE_CS6 1109
#define NOTE_D6  1175
#define NOTE_DS6 1245
#define NOTE_E6  1319
#define NOTE_F6  1397
#define NOTE_FS6 1480
#define NOTE_G6  1568
#define NOTE_GS6 1661
#define NOTE_A6  1760
#define NOTE_AS6 1865
#define NOTE_B6  1976
#define NOTE_C7  2093
#define NOTE_CS7 2217
#define NOTE_D7  2349
#define NOTE_DS7 2489
#define NOTE_E7  2637
#define NOTE_F7  2794
#define NOTE_FS7 2960
#define NOTE_G7  3136
#define NOTE_GS7 3322
#define NOTE_A7  3520
#define NOTE_AS7 3729
#define NOTE_B7  3951
#define NOTE_C8  4186
#define NOTE_CS8 4435
#define NOTE_D8  4699
#define NOTE_DS8 4978

LiquidCrystal lcd(2, 3, 4, 5, 6, 7); // Creates an LC object. Parameters: (rs, enable, d4, d5, d6, d7) 

// notes in the melody:
int sadmelody[] = {
  NOTE_E3, NOTE_D3, NOTE_C3
};
int happymelody[] = {
  NOTE_C4, NOTE_G3, NOTE_G3, NOTE_A3, NOTE_G3, 0, NOTE_B3, NOTE_C4
};

// note durations: 4 = quarter note, 8 = eighth note, etc.:
int happynoteDurations[] = {
  4, 8, 8, 4, 4, 4, 4, 4
};

// note durations: 4 = quarter note, 8 = eighth note, etc.:
int sadnoteDurations[] = {
  2,2,2
};


#define SS_PIN 53

#define RST_PIN 33

  int state = 0;



int red_light_pin = 43;

int blue_light_pin = 41;

int green_light_pin = 40;

MFRC522 rfid(SS_PIN, RST_PIN); // Instance of the class



MFRC522::MIFARE_Key key; 



// Init array that will store new NUID 

byte nuidPICC[4];

void happy() {
  for (int thisNote = 0; thisNote < 8; thisNote++) {

    // to calculate the note duration, take one second divided by the note type.
    //e.g. quarter note = 1000 / 4, eighth note = 1000/8, etc.
    int noteDuration = 1000 / happynoteDurations[thisNote];
    tone(9, happymelody[thisNote], noteDuration);

    // to distinguish the notes, set a minimum time between them.
    // the note's duration + 30% seems to work well:
    int pauseBetweenNotes = noteDuration * 1.30;
    delay(pauseBetweenNotes);
    // stop the tone playing:
    noTone(8);
  }
}

void sad() {
  for (int thisNote = 0; thisNote < 3; thisNote++) {

    // to calculate the note duration, take one second divided by the note type.
    //e.g. quarter note = 1000 / 4, eighth note = 1000/8, etc.
    int noteDuration = 1000 / sadnoteDurations[thisNote];
    tone(9, sadmelody[thisNote], noteDuration);

    // to distinguish the notes, set a minimum time between them.
    // the note's duration + 30% seems to work well:
    int pauseBetweenNotes = noteDuration * 1.30;
    delay(pauseBetweenNotes);
    // stop the tone playing:
    noTone(8);
  }
}

void setup() { 

  

  lcd.begin(16, 2);

  Serial.begin(9600);

  Serial3.begin(9600);

  RGB_color(0, 255, 0);

  SPI.begin(); // Init SPI bus

  rfid.PCD_Init(); // Init MFRC522 



  for (byte i = 0; i < 6; i++){

    key.keyByte[i] = 0xFF;

  }



  Serial.println(F("This code scan the MIFARE Classsic NUID."));

  Serial.print(F("Using the following key:"));

  printHex(key.keyByte, MFRC522::MF_KEY_SIZE);

}

 

void loop() {

  Serial3.flush();

   

  

  if (state == 0)

  {

    while(Serial3.available() == 0)

    {

      

    }

    Serial3.readString();

    Serial3.flush();

    RGB_color(255, 0, 0);

    state = 1;

    

  }

  noTone(5);

  //

  if ( ! rfid.PICC_IsNewCardPresent())

  {

    

    return;

  }



  // Verify if the NUID has been readed

  if ( ! rfid.PICC_ReadCardSerial())

    return;



  Serial.print(F("PICC type: "));

  MFRC522::PICC_Type piccType = rfid.PICC_GetType(rfid.uid.sak);

  Serial.println(rfid.PICC_GetTypeName(piccType));



  // Check is the PICC of Classic MIFARE type

  if (piccType != MFRC522::PICC_TYPE_MIFARE_MINI &&  

    piccType != MFRC522::PICC_TYPE_MIFARE_1K &&

    piccType != MFRC522::PICC_TYPE_MIFARE_4K) {

    Serial.println(F("Your tag is not of type MIFARE Classic."));

    return;

  }



 /* if (rfid.uid.uidByte[0] != nuidPICC[0] || 

    rfid.uid.uidByte[1] != nuidPICC[1] || 

    rfid.uid.uidByte[2] != nuidPICC[2] || 

    rfid.uid.uidByte[3] != nuidPICC[3] ) {*/

    //Serial.println(F("A new card has been detected."));



    // Store NUID into nuidPICC array

    for (byte i = 0; i < 4; i++) {

      nuidPICC[i] = rfid.uid.uidByte[i];

    }

  

    Serial.println(F("The NUID tag is:"));

    Serial.print(F("In hex: "));

    printHex(rfid.uid.uidByte, rfid.uid.size);

    Serial.println();

    Serial.print(F("In dec: "));

    Serial3.println(printDec(rfid.uid.uidByte, rfid.uid.size));

    Serial.println();

   while(Serial3.available()==0)

    {

        tone (8, 25, 50);

    }

      noTone(8);

     String input = Serial3.readString();

     int a = input.indexOf(',');

     String name1 = input.substring(0, a);

     String b = input.substring(a+1);       //two commas left

     int c = b.indexOf(',');

     String price = b.substring(0, c);

     String d = b.substring(c+1);           //one comma left

     int e = d.indexOf(',');

     String purchased = d.substring(0, e);

     String error = d.substring(e+1);

     Serial.println(name1);

     Serial.println(price);

     Serial.println(purchased);

     Serial.println(error);

     lcd.clear();

     

     if (b.substring(0, 9).equals("Incorrect") || b.substring(0, 10).equals("initialize"))

     {

      lcd.print("ERROR");

      lcd.setCursor(0, 1);

      lcd.print("Incorrect Code");
     
      sad();

      RGB_color(0,255,0);

     }

     else if (b.equals("Item not found")){

      lcd.print("ERROR");

      lcd.setCursor(0,1);

      lcd.print("Item Not Found");

      RGB_color(0,255,0);

     }



     else 

     {
      if (!name1.equals("initialize")) {
        Serial.print(name1);

      lcd.print("Pres Name");

      lcd.setCursor(0,1);
      
      lcd.print(name1);

      happy();
    
      RGB_color(255,255,0);
      }


     }

     

     delay(1000);

    lcd.setCursor(0,0);

    RGB_color(255,0,0);



  // Halt PICC

  rfid.PICC_HaltA();



  // Stop encryption on PCD

  rfid.PCD_StopCrypto1();

}





/**

 * Helper routine to dump a byte array as hex values to Serial. 

 */

void printHex(byte *buffer, byte bufferSize) {\

  for (byte i = 0; i < bufferSize; i++) {

    Serial.print(buffer[i] < 0x10 ? " 0" : " ");

    Serial.print(buffer[i], HEX);

  }

}



/**

 * Helper routine to dump a byte array as dec values to Serial.

 */

String printDec(byte *buffer, byte bufferSize) {

  char myBuffer[4];

  String myString = "";

  for (byte i = 0; i < bufferSize; i++) {

    if (buffer[i] < 0x10){

      sprintf(myBuffer, "%d", 0);

      myString += String(myBuffer);

    }

    sprintf(myBuffer, "%d", buffer[i]);

    myString += String(myBuffer);

    Serial.print(buffer[i] < 0x10 ? " 0" : " ");

    Serial.print(buffer[i], DEC);

    //Serial.println(newStringBytes[0], DEC);

  }

  Serial.println('\n');

  Serial.println(myString);

  return myString;

}



void RGB_color(int red_light_value, int green_light_value, int blue_light_value)

 {

  analogWrite(red_light_pin, red_light_value);

  analogWrite(green_light_pin, green_light_value);

  analogWrite(blue_light_pin, blue_light_value);

 }
