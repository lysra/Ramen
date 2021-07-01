function newsletter() {
  let name = prompt("What is your name?");
  let email = prompt("What is your email address?");
  let food = prompt("What is your favorite food?");

  alert(
    "Thank you, " +
      name +
      "! You'll receive our weekly newsletter. While you are waiting for the next recipe, have lot of " +
      food +
      "!"
  );
}

let button = document.querySelector("button");
button.addEventListener("click", newsletter);
