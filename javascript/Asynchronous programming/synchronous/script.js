// //sync === blocking code
// console.log("step 1 is start boiling ");
// console.log("step 2 is Add pasta to the pot ");
// console.log("step 3 is stir and wait for 10 minutes ");
// console.log("step 4 is Drain the pasta and serve ");

// function blockingTasks() {
//   console.log("step 1:start a long runing task");
//   const startTime = Date.now();
//   while (Date.now() - startTime < 5000) {}
//   console.log("step 2 :long running task finished");
// }
// console.log("before calling blocking task");

// blockingTasks();
// console.log("after the blocking taks");

//! Async code
// console.log("task 1");
// setTimeout(() => {
//   console.log("task 2 (delay)");
// }, 2000);
// console.log("task 3");

//weather application
//api
//frontend app
function fetchData(callback) {
  //operation Api
  console.log("Fetching weather data...");
  //API- Simulating async operation(http)
  setTimeout(() => {
    console.log("weather data fetched successfully");
    callback();
  }, 2000);
}
function processData() {
  console.log(
    "Processing the weather data to display temperature and conditions"
  );
}
//fetchData(processData);

//!components of http request
//?.Method(HTTp Verb)
//GET-retrieve data
//POST-sending data to server
//PUT -Update
//DELETE-deleting
//?URL-Uniform Resource Locator -https://example.com //Api
//?Headers
//? Body

//HTTP Client
//fetch-default
//axios - third party

//Making http request
// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => {
//     return response.json().then((posts) => {
//       console.log("posts fetched succesfully", posts);
//     });
//   })
//   .catch((error) => {
//     console.log("error fetteching posts", error);
//   });

//Fetch user details - API -https://jsonplaceholder.typicode.com/users/2
function fetchUserData(callback) {
  //make real http request
  fetch("https://jsonplaceholder.typicode.com/users/10")
    .then((response) => {
      return response.json().then((userData) => {
        console.log(userData);
        //call back
        callback(userData.id);
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

//User's posts-https://jsonplaceholder.typicode.com/posts?userId=2
function fetchUserPost(userID) {
  fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userID}`)
    .then((response) => {
      return response.json().then((posts) => {
        console.log(posts);
      });
    })
    .catch((error) => {
      console.log(error);
    });
}
//fetchUserData(fetchUserPost);

//!1.Create a promise
// const myPromise = new Promise((resolve, reject) => {
//   //perform async task
//   let success = false;
//   if (success) {
//     resolve("Operation Successful");
//   } else {
//     reject("operation failed");
//   }
// });
// //!2.Consume the promise
// myPromise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//!Promise

//!Create Promise

//!2.consume Promise

// fetch("https://jsonplaceholder.typicode.com/albums")
//   .then((response) => {
//     return response.json().then((data) => {
//       console.log(data);
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//!Async Await

async function fetchAlbums() {
  try {
    const albumsreponse = await fetch(
      "https://jsonplaceholder.typicode.com/albums"
    );
    const albums = await albumsreponse.json();
    console.log(albums);
  } catch (error) {
    console.log(error);
  }
}
fetchAlbums();
