new Splide('.splide', {
  type: 'loop',
  gap: "6vw",
  pagination: false,
  arrows: true,
  autoplay: true,
  resetProgress: true,
  pauseOnHover: false,
}).mount();

document.onload = setButton();

function setButton() {
  const agent = navigator.userAgent;
  let name;

  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(agent)) {
    document.getElementById("browser-button").style.display = "none";
    document.getElementById("other-button").style.display = "flex";
  } else {

    if (agent.includes("Edg")) {
      name = "Edge";
    } else if (agent.includes("Firefox")) {
      name = "Firefox"
    } else if (agent.includes("Chrome") && agent.includes("Edg") === false) {
      name = "Chrome"
    } else {
      name = "other"
    }

    if (name === "other") {
      document.getElementById("link").style.display = "none";
      document.getElementById("other-button").style.display = "flex";
    } else {
      document.getElementById("browser").innerHTML = "Download For " + name;
      document.getElementById("browser-icon").src = "img/" + name.toLowerCase() + ".png";

      if (name === "Firefox") {
        document.getElementById("link").href = "https://addons.mozilla.org/addon/panorama-tab/";
      } else if (name === "Edge") {
        document.getElementById("link").href = "https://microsoftedge.microsoft.com/addons/detail/panorama-tab/pfpebaokeeiinfhcklkomfbdejpfaoke";
      } else if (name === "Chrome") {
        document.getElementById("link").href = "https://chrome.google.com/webstore/detail/panorama-tab/einjlbiknhpkccefknpcnmnmmnhigcbc";
      }
    }
  }
}
