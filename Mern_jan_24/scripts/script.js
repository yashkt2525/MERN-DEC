var a = 20;
console.log(a);

let b = 10;
console.log(b);

const c = "Yash";
console.log(c);

for (var i = 0; i < 10; i++) {
  console.log(i);
}
{
  var s = 78;
}
console.log("s is ", s);

{
  let d = 18;
  console.log("The value of D is ", d);
  console.log("The value of D is ", d);
}
// console.log("The value of D out of the scope is ", d);

{
  var f = 17;
  console.log("The value of F is ", f);
  console.log("The value of F is ", f);
}
console.log("The value of F is ", f);

var f = 78;
console.log(f);

{
  let g;
  g = 90;
  console.log(g);
}
{
  let g = 34;
  g = 90;
}

var z;
let y;

// const

{
  const g = 90;
  console.log("G is ", g);
}

{
  let g = 90;

  {
    console.log("inner g is", g);
  }
}
