console.log("I am a Fronted Developer")
console.log("Also a Software Engineer")

setTimeout( () => {
    console.log("I am inside SetTimeout")
}, 2000);

console.log("The End")

const fn = () => {
    console.log("Nothing")
}

const callback = (arg, fn) => {
  console.log(arg)
  fn()
}

const loadScript = (src, callback) => {
  let sc = document.createElement("Script");
  sc.src = src;
  sc.onload = callback("Ankita", fn);
  document.head.append(sc)
}


loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback);














// I am a Fronted Developer
//  Also a Software Engineer
//  The End
//  I am inside SetTimeout