function changeTheme() {
  let body = document.querySelector("body");
  body.classList.toggle("dark");
}

let darkTheme = document.querySelector(".darktheme");
darkTheme.addEventListener("click", changeTheme);
