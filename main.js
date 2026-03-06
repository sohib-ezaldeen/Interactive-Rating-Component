//Selecting items

let lis = document.querySelectorAll("li button");
let btn = document.querySelector(".submit-rating");
let cover = document.querySelector(" .cover");
let mainBox = document.querySelector("main");
let questionBox = document.querySelector(".question-box");
let boxEvaluation = document.querySelector(".box-Evaluation");
let selectedRating = null;

// To go through all elements and delete the class
lis.forEach((ele, index, array) => {
  //  To add an event, click on the “Add” button.
  ele.addEventListener("click", function () {
    array.forEach((el) => {
      el.classList.remove("active");
    });
    ele.classList.add("active");
    selectedRating = ele.dataset.num;
     
  });
});

// To add an event, press the button and call the image creation function and thank you message.
btn.addEventListener("click", function () {
  if (selectedRating !== null) {
    GetThankMassge(selectedRating);
  } else {
    return;
  }
});

//  image creation function and thank you message.
function GetThankMassge(e) {
  cover.remove();
  questionBox.remove();
  boxEvaluation.remove();
  // create img
  let ImgOfThank = document.createElement("img");
  ImgOfThank.setAttribute("src", "images/illustration-thank-you.svg");
  ImgOfThank.setAttribute("class", "img-of-thank");
  ImgOfThank.setAttribute("alt", "img-of-thank");
  mainBox.appendChild(ImgOfThank);
  // create div To clarify the number of evaluations
  let countSelected = document.createElement("div");
  countSelected.setAttribute("class", "count-selected");
  countSelected.textContent = `You selected ${e} out of ${lis.length}`;
  mainBox.appendChild(countSelected);

  // massge of Thank
  let titel = document.createElement("h1");
  titel.textContent = "Thank You !";
  mainBox.appendChild(titel);

  let massge = document.createElement("span");
  massge.textContent =
    "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch.";
  mainBox.appendChild(massge);
}
