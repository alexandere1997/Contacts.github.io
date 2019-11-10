/*INPUT FILE//////////////////////////////////////////////////////*/ 
let file__box__one = () => {
  let fields = document.querySelectorAll('.field__file');
Array.prototype.forEach.call(fields, function (input) {
  let label = input.nextElementSibling,
    labelVal = label.querySelector('.jobs-form__file-fake').innerText;

  input.addEventListener('change', function (e) {
    let countFiles = '';
    if (this.files && this.files.length >= 1)
      countFiles = this.files.length;

    if (countFiles)
      label.querySelector('.jobs-form__file-fake').innerText = 'Выбрано файлов: ' + countFiles;
    else
      label.querySelector('.jobs-form__file-fake').innerText = labelVal;
  });
});
}
file__box__one();


let file__box__two = () => {
  let summaryy = document.querySelectorAll('.summary__file');
Array.prototype.forEach.call(summaryy, function (input__two) {
  let label__two = input__two.nextElementSibling,
    labelVal__two = label__two.querySelector('.jobs-summary__file-fake').innerText;

    input__two.addEventListener('change', function (e) {
    let countFiles__two = '';
    if (this.files && this.files.length >= 1)
    countFiles__two = this.files.length;

    if (countFiles__two)
    label__two.querySelector('.jobs-summary__file-fake').innerText = 'Выбрано файлов: ' + countFiles__two;
    else
    label__two.querySelector('.jobs-summary__file-fake').innerText = labelVal__two;
  });
});
}

file__box__two();



let file__box__fri = () => {
  let results= document.querySelectorAll('.results__file');
Array.prototype.forEach.call(results, function (input__fri) {
  let label__fri = input__fri.nextElementSibling,
    labelVal__fri = label__fri.querySelector('.jobs-results__file-fake').innerText;

    input__fri.addEventListener('change', function (e) {
    let countFiles__fri = '';
    if (this.files && this.files.length >= 1)
    countFiles__fri = this.files.length;

    if (countFiles__fri)
    label__fri.querySelector('.jobs-results__file-fake').innerText = 'Выбрано файлов: ' + countFiles__fri;
    else
    label__fri.querySelector('.jobs-results__file-fake').innerText = labelVal__fri;
  });
});
}

file__box__fri();

/*seekers MODAL ///////////////////////////////*/
let seekers__btn_two = document.querySelector(".seekers__btn_two");
let Modal = document.querySelector(".Modal");
let jobs__off = document.querySelector(".jobs__off");

let seekersActive = () => {
  seekers__btn_two.addEventListener("click", () => {
    Modal.style.display = "flex";
  });
  jobs__off.addEventListener("click", () => {
    Modal.style.display = "none";
  })
}
seekersActive();

/*NEW PERSONS //////////////////////////////////////////////////////*/
let exampleInputText = document.querySelector("#exampleInputText");
let job = document.querySelector("#job");
let field = document.querySelector(".field");
let exampleInputTel = document.querySelector("#exampleInputTel");
let exampleInputEmail = document.querySelector("#exampleInputEmail");
let summary = document.querySelector(".summary");
let results = document.querySelector(".results");

let form__button__two = document.querySelector(".form-button__two");

let form__button__one = document.querySelector(".form-button__one");

let newPersons = () => {
  form__button__one.addEventListener("click", (e) => {
    e.preventDefault();
    exampleInputText.value = "";
    job.value = "";
    field.value = "";
    exampleInputTel.value = "";
    exampleInputEmail.value = "";
    summary.value = "";
    results.value = "";
    document.querySelector('.jobs-form__file-fake').innerText = "ФАЙЛ НЕ ВБРАН";
    document.querySelector('.jobs-summary__file-fake').innerText = "ФАЙЛ НЕ ВБРАН";
    document.querySelector('.jobs-results__file-fake').innerText = "ФАЙЛ НЕ ВБРАН";
  });

  let counter__img = 0;
  form__button__two.addEventListener("click", (e) => {
    if(exampleInputText.value == false) {
      e.preventDefault();
      alert("введите даныыые в поля");
    }
    else if(job.value == false){
      e.preventDefault();
      alert("введите даныыые в поля");
    }
    else if(field.value == false){
      e.preventDefault();
      alert("введите даныыые в поля");
    }
    else if(summary.value == false){
      e.preventDefault();
      alert("введите даныыые в поля");
    }
    else if(results.value == false){
      e.preventDefault();
      alert("введите даныыые в поля");
    }
    else if(exampleInputTel.value == false){
      e.preventDefault();
      alert("введите даныыые в поля");
    }
    else if(exampleInputEmail.value == false){
      e.preventDefault();
      alert("введите даныыые в поля");
    }
    else{
      e.preventDefault();
      let fillresults = results.value.replace(/^.*\\/, "");
      let fillsummary = summary.value.replace(/^.*\\/, "");
      let filename = field.value.replace(/^.*\\/, "");

      let label__one = document.querySelectorAll(".jobs__form .jobs-form__assessment .rating-one > .input__one:checked ~ .label__one").length;
      let label__two = document.querySelectorAll(".jobs__form .jobs-form__assessment .rating-two > .input__two:checked ~ .label__two").length;
      let label__fri = document.querySelectorAll(".jobs__form .jobs-form__assessment .rating-fri > .input__fri:checked ~ .label__fri").length;
      let results__label = Math.round((label__one + label__two + label__fri)/3);

      let candidates__tables = document.querySelector(".candidates__tables");
      let newTabs = document.createElement("tr");
      newTabs.classList.add(`data-index="${counter__img++}"`)
      newTabs.innerHTML = `
      <td>
      <div class="candidates-tables__body">
          <div class="candidates-tables__img">
              <img src="img/${filename}" alt="">
            </div>
            <div class="candidates-tables__text">
              <p>${exampleInputText.value}</p>
              <span>${job.value}</span>
            </div>
      </div>
    </td>
    <td>
      <div class="candidates-tables__body">
          <div class="candidates-tables__images">
              <img src="img/phone.png" alt="">
            </div>
            <div class="candidates-tables__text">
              <p>${exampleInputTel.value}</p>
              <span>Показать еще 1 номер</span>
            </div>
      </div>
      </td>
    <td>
      <div class="candidates-tables__body">
          <div class="candidates-tables__images">
              <img src="img/mail.png" alt="">
            </div>
            <div class="candidates-tables__text">
              <p>${exampleInputEmail.value}</p>
              <span>Показать еще 1 e-mail</span>
            </div>
      </div>
    </td>
    <td>
      <div class="candidates-tables__body">
        <div class="candidates-tables__text">
        <div class="candidates-tables__rating">
        ${results__label === 1 ? `<img src="img/zvezda/Group 1.png" alt=""></img>` 
        :results__label === 2 ? `<img src="img/zvezda/Group 2.png" alt=""></img>` 
        :results__label === 3 ? `<img src="img/zvezda/Group 3.png" alt=""></img>` 
        :results__label === 4 ? `<img src="img/zvezda/Group 4.png" alt=""></img>` 
        :results__label === 5 ? `<img src="img/zvezda/Group 5.png" alt=""></img>`: console.log("") }
        </div>
        <span>Средний балл: <b>${results__label}.0</b></span>
      </div>
      </div>
    </td>
    <td>
      <div class="candidates-tables__body">
          <div class="candidates-tables__imags">
            <a href="content/${fillsummary}" download><img src="img/resume.png" alt=""></a>
            <a href="${fillresults}" download><img src="img/archive.png" alt=""></a>
            <a href="" class="candidates-tables__imags_add"><img src="img/favorites.png" alt=""></a>
            </div>
      </div>
    </td>
      `
      candidates__tables.appendChild(newTabs);
      Modal.style.display = "none";

      exampleInputText.value = "";
      job.value = "";
      field.value = "";
      exampleInputTel.value = "";
      exampleInputEmail.value = "";
      summary.value = "";
      results.value = "";
      document.querySelector('.jobs-form__file-fake').innerText = "ФАЙЛ НЕ ВБРАН";
      document.querySelector('.jobs-summary__file-fake').innerText = "ФАЙЛ НЕ ВБРАН";
      document.querySelector('.jobs-results__file-fake').innerText = "ФАЙЛ НЕ ВБРАН";

    let counter = () => {
      let seekers__counter__element = document.querySelector(".seekers__counter-element");
      seekers__counter__element.textContent++
    }
    counter();
    }
  });
}
newPersons();

let seekers__btn_one = document.querySelector(".seekers__btn_one");
let modal__save = document.querySelector(".modal__save");
let save__off = document.querySelector(".save__off");

seekers__btn_one.addEventListener("click", () => {
  modal__save.style.display = "flex";
});

save__off.addEventListener("click", () => {
  modal__save.style.display = "none";
})