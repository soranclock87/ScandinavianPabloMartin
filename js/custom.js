var botonMenu = document.querySelector(".menu-btn");

botonMenu.onclick = function () {
  const aside = document.getElementById("aside");
  const img_menu = document.getElementById("img-menu");
  const social = document.getElementById("social-media");
  const more_text = document.getElementById("more-text");
  const menu_content = document.getElementById("menu-content");

  if (menu_content.classList.contains("mi-div-activado")) {
    menu_content.classList.remove("mi-div-activado");
    setTimeout(function () {
      menu_content.style.display = "none";
    }, 1000);
  } else {
    menu_content.style.display = "flex";
    menu_content.classList.add("mi-div-activado");
  }

  if (aside.classList.contains("animate__fadeInUp")) {
    aside.classList.remove("animate__fadeInUp");
    aside.classList.add("animate__fadeOutDown");
    setTimeout(function () {
      aside.style.display = "none";
    }, 1000);
  } else {
    aside.style.display = "flex";
    aside.classList.remove("animate__fadeOutDown");
    aside.classList.add("animate__fadeInUp");
  }

  if (img_menu.classList.contains("animate__fadeInBottomLeft")) {
    img_menu.classList.remove("animate__fadeInBottomLeft");
    img_menu.classList.add("animate__fadeOutBottomLeft");
    setTimeout(function () {
      img_menu.style.display = "none";
    }, 1000);
  } else {
    img_menu.style.display = "flex";
    img_menu.classList.remove("animate__fadeOutBottomLeft");
    img_menu.classList.add("animate__fadeInBottomLeft");
  }

  if (social.classList.contains("animate__slideInRight")) {
    social.classList.remove("animate__slideInRight");
    social.classList.add("animate__fadeOutRight");
    setTimeout(function () {
      social.style.display = "none";
    }, 1000);
  } else {
    social.style.display = "block";
    social.classList.remove("animate__fadeOutRight");
    social.classList.add("animate__slideInRight");
  }

  if (more_text.classList.contains("animate__fadeIn")) {
    more_text.classList.remove("animate__fadeIn");
    more_text.classList.add("animate__fadeOut");
    setTimeout(function () {
      more_text.style.display = "none";
    }, 500);
  } else {
    more_text.style.display = "flex";
    more_text.classList.remove("animate__fadeOut");
    more_text.classList.add("animate__fadeIn");
  }

};
