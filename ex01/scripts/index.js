var element;
var imageText;
var imageSrc;
var text;

const items = document.getElementsByClassName("gallery-item");

for (const item of items) {
  item.addEventListener("mouseover", () => {
    element = document.querySelector("image");
    imageText = document.getElementsByTagName("img").alt;
    imageSrc = document.getElementsByTagName("img").src;
    text = document.querySelector(imageText);
  });
}

// document.querySelector("image").addEventListener("mouseover", mouseOver);
// document.querySelector("image").addEventListener("mouseout", mouseOut);

function mouseOver() {
  element.classList.toggle("black");
  text.innerHTML = "<h1>" + imageText + "</h1>";
}

function mouseOut() {
  element.classList.toggle("black");
  text.innerHTML = null;
}

var modalText = document.querySelector("modalText");

// Get the modal
var modal = document.querySelector("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
element.onclick = function () {
  modal.style.display = "block";
  modalText.innerHTML = displayModuleHtml(imageSrc, imageText);
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// display
function displayModuleHtml(imageSrc, imageText) {
  var txtEnding = imageSrc.substr(34);
  var textArr = txtEnding.split(".");
  var text = textArr[0];
  console.log(txtEnding);
  console.log(text);
  return `<a target="_blank" href="/ex01/images/${txtEnding}">
            <img src="/ex01/images/${txtEnding}" alt=${imageText} width="200px"/>
        </a>
      <object
        data="/ex01/texts/${text}.txt"
        type="text/plain"
        width="100%"
        style="height: 300px"
        style="font-family: Arial, Helvetica, sans-serif"
      ></object>`;
}
