
var input,input1,input2,input3,button,a1,l,d,a2,a3,a4,a5,a6,a7,a8,a9,a10;

function setup(){
  var canvas = createCanvas(1366,600);
  textSize(20);
 text("Which Color Do Your Father Like ?",200,100);
 input10 = createInput("Points");
 input10.position(200,470);
 button10 = createButton("Submit");
 button10.position(200,550);
 input9 = createInput("Answer");
 input9.position(200,200);
 button9 = createButton("Next");
 button9.position(200,250);
 input8 = createInput("Answer");
 input8.position(200,200);
 button8 = createButton("Next");
 button8.position(200,250);
 input7 = createInput("Answer");
 input7.position(200,200);
 button7 = createButton("Next");
 button7.position(200,250);
 input6 = createInput("Answer");
 input6.position(200,200);
 button6 = createButton("Next");
 button6.position(200,250);
 input5 = createInput("Answer");
 input5.position(200,200);
 button5 = createButton("Next");
 button5.position(200,250);
 input4 = createInput("Answer");
 input4.position(200,200);
 button4 = createButton("Next");
 button4.position(200,250);
 input3 = createInput("Answer");
 input3.position(200,200);
 button3 = createButton("Next");
 button3.position(200,250);
 input2 = createInput("Answer");
 input2.position(200,200);
 button2 = createButton("Next");
 button2.position(200,250);
 input1 = createInput("Answer");
 input1.position(200,200);
 button1 = createButton("Next");
 button1.position(200,250);
 input = createInput("Answer");
 input.position(200,200);
 button = createButton("Next");
 button.position(200,250);

}
function draw(){
  a1 = input.value();
  a2 = input1.value();
  a3 = input2.value();
  a4 = input3.value();
  a5 = input4.value();
  a6 = input5.value();
  a7 = input6.value();
  a8 = input7.value();
  a9 = input8.value();
  a10 = input9.value();

  button1.mousePressed(()=>{
    button1.hide();
    input1.hide();
    clear();
    text("Which movie do your father like the most ?",200,100);
  });
  button.mousePressed(()=>{
    button.hide();
    input.hide();
    clear();
    text("Which Food Dish Do Your Father Like The Most ?",200,100);
  });
  button2.mousePressed(()=>{
    button2.hide();
    input2.hide();
    clear();
    text("Which actor Do Your Father Like The Most ?",200,100);
  });
  button3.mousePressed(()=>{
    button3.hide();
    input3.hide();
    clear();
    text("Which actress Do Your Father Like The Most ?",200,100);
  });
  button4.mousePressed(()=>{
    button4.hide();
    input4.hide();
    clear();
    text("Which Is Your Father's Favourite place ?",200,100);
  });
  button5.mousePressed(()=>{
    button5.hide();
    input5.hide();
    clear();
    text("Which Is Your Father's Favourite sport ?",200,100);
  });
  button6.mousePressed(()=>{
    button6.hide();
    input6.hide();
    clear();
    text("Which Is Your Father's Favourite Game app ?",200,100);
  });
  button7.mousePressed(()=>{
    button7.hide();
    input7.hide();
    clear();
    text("Which Is Your Father's Favourite season ?",200,100);
  });
  button8.mousePressed(()=>{
    button8.hide();
    input8.hide();
    clear();
    text("Write Few Lines About Your Father Describing Him ?",200,100);
  });
  button9.mousePressed(()=>{
    button9.hide();
    input9.hide();
    clear();
    text("results:-",200,100);
    text("Answer:1-"+a1,200,150);
    text("Answer:2-"+a2,400,150);
    text("Answer:3-"+a3,600,150);
    text("Answer:4-"+a4,800,150);
    text("Answer:5-"+a5,1000,150);
    text("Answer:6-"+a6,200,250);
    text("Answer:7-"+a7,400,250);
    text("Answer:8-"+a8,600,250);
    text("Answer:9-"+a9,800,250);
    text("Answer:10-"+a10,200,350);
    text("Show Your Answers To Your Father And Let Them Give You A Score !!",200,450);

  });
  button10.mousePressed(()=>{
    button10.hide();
    input10.hide();
    clear();
    text("Thanks For Playing",200,200);
  });
drawSprites();
}