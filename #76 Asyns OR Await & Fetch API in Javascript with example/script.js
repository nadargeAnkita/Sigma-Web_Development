// settle means resolve or reject
// resolve means promise has settled successfully
// reject means promise has not settled successfully



// async function getData() {
//     //Simulate getting data from a server
//   return new Promise((resolve, rejecct) => {
//     setTimeout(() => {
//       resolve(455);
//     }, 3500);
//   });
// }

async function getData() {
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    // .then(response => response.json())
    // .then(json => console.log(json))
    let data = await x.json()
    // let data = await x.text()
    // console.log(data)
    return data
}

async function main() {
  console.log("Loading modules");

  console.log("Do something else");

  console.log("Load Data");
  let data = await getData();
  console.log(data);
  console.log("Process data");
}

main()

// Example POST method implementation
async function postData(url = "", data={}) {
    const response = await fetch(url, {
        method: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    return response.json();
}

postData("https://example.com/answer",{ answer: 42 }).then((data) => {
    console.log(data);
});





// data.then((v) => {
//   console.log(data)
//   console.log("Process data")
// })
