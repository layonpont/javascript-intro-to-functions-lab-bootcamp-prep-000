function shout(string){
  return "hello".toUpperCase();
}

function whisper(string){
  return "hello".toLowerCase();
}

function logShout(string){
  return console.log("hello".toUpperCase());
}

function logWhisper(string){
  console.log("hello".toLowerCase());
}

function sayHiToGrandma(string){
  if( string.toLowerCase){
    return "i can\'t hear you!";
  } else {
    return "YES INDEED!";
  }
}
