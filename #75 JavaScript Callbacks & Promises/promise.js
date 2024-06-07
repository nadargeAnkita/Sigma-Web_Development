console.log("This is Promises");

let prom1 = new Promise((resolve, reject) => {
  let a = Math.random();
  if (a < 0.5) {
    reject("Random number are not supported");
  }
  setTimeout(() => {
    console.log("Yes Done");
    resolve("Ankita");
  }, 3000);
});

let prom2 = new Promise((resolve, reject) => {
  let a = Math.random();
  if (a < 0.5) {
    reject("Random number are also not supported in this");
  }
  setTimeout(() => {
    console.log("Yes i am also Done");
    resolve("Ankita Nadarge");
  }, 1000);
});

// prom1.then((a)=>{
//     console.log(a)
// }).catch((err)=>{
//     console.log(err);
// })


// ============PROMISE API'S==============//

// let p3 = Promise.all([prom1, prom2])
// p3.then((a) => {
//   console.log(a)
// }).catch((err) => {
//   console.log(err)
// })

// let p4 = Promise.allSettled([prom1, prom2])
// p3.then((a) => {
//   console.log(a)
// }).catch((err) => {
//   console.log(err)
// })

// let p5 = Promise.race([prom1, prom2])
// p3.then((a) => {
//   console.log(a)
// }).catch((err) => {
//   console.log(err)
// })

// let p3 = Promise.any([prom1, prom2])
// p3.then((a) => {
//   console.log(a)
// }).catch((err) => {
//   console.log(err)
// })

// let p3 = Promise.resolve([prom1, prom2])
// p3.then((a) => {
//   console.log(a)
// }).catch((err) => {
//   console.log(err)
// })

let p3 = Promise.reject([prom1, prom2])
p3.then((a) => {
  console.log(a)
}).catch((err) => {
  console.log(err)
})