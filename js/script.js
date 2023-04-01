// Toogle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika user-fams di klik
document.querySelector("#user-fams").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik diluar Sidebar untuk menghilangkan nav
const user = document.querySelector("#user-fams");

document.addEventListener("click", function (e) {
  if (!user.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
