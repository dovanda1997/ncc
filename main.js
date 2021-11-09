function foo(input) {
  let a = 100;
  if (input) {
    let b = a + 1;
    var c = a + 1;
  }
  console.log(c);
  console.log(b);
}
foo(true);

function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
}
async function asyncCall() {
  console.log("calling");
  var result = await resolveAfter2Seconds();
  console.log(result);
}
asyncCall();
console.log("has called");

const array = [1, 2, 3];
const extension = [4, 5, 6];
const array = [...array, ...extension];
console.log(array);
