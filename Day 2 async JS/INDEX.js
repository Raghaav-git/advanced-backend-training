console.log("Program started");

// CALLBACK EXAMPLE //

function fetchUserCallback(callback) {
  setTimeout(() => {
    const user = { id: 1, name: "Raghav" };
    console.log("User fetched using Callback");
    callback(user);
  }, 2000);
}

fetchUserCallback((user) => {
  console.log("Callback User Data:", user);
});

// PROMISE EXAMPLE //

function fetchUserPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = { id: 2, name: "Triloki" };
      console.log("User fetched using Promise");
      resolve(user);
    }, 2000);
  });
}

fetchUserPromise()
  .then((user) => {
    console.log("Promise User Data:", user);
  })
  .catch((error) => {
    console.log("Promise Error:", error);
  });

//  ASYNC / AWAIT EXAMPLE

async function fetchUserAsync() {
  try {
    const user = await fetchUserPromise();
    console.log("Async/Await User Data:", user);
  } catch (error) {
    console.log("Async Error:", error);
  }
}

fetchUserAsync();

console.log("Program ended");