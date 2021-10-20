
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var rope,ramen,ground;
var ramen_con;

var bg_img;
var ramen;
var dice;

var button;
var bunny;
var blink,eat,sad;
var mute_btn;

var money, money2;
var money_img;
var moneyDisplay, money_1, money_2, money_empty;

var blower;
var score = 0;


function preload(){
  bg_img = loadImage();
  ramen = loadImage();
  dice = loadImage();
  money_img = loadImage();
  money_1 = loadImage();
  money_2 = loadImage();
  money_empty = loadImage();

  bk_song = loadSound();
  sad_sound = loadSound()
  cut_sound = loadSound();
  eating_sound = loadSound();
  air = loadSound();

  blink = loadAnimation();
  eat = loadAnimation();
  sad = loadAnimation();

  blink.playing = true;
  eat.playing = true;
  sad.playing = true;
  sad.looping= false;
  eat.looping = false; 
}


function setup() {
  createCanvas(700,700);


  money = createSprite();
  money.addImage();
  money.scale = 

  money2 = createSprite();
  money2.addImage();
  money2.scale =

  moneyDisplay = createSprite()
  moneyDisplay.addImage()
  moneyDisplay.scale = 0.2

 Engine = Engine.create();
  World = Engine.world;
  
}


function draw() 
{
  background(51);
  Engine.update(Engine);
  
}
