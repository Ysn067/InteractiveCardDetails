//CARD FRONT SELECT

const cardNumberFront = document.querySelector("#card-number");
const cardNameFront = document.querySelector(".name");
const cardFrontMonth = document.querySelector(".date-month");
const cardFrontYear = document.querySelector(".date-year");



//CARD BACK SELECT

const cardBackCvc = document.querySelector(".card-cvc");

//Personel content div

const personelContent = document.querySelector(".personel-content");



//PERSONEL CARD TEXTBOX SELECT

//name text and error
const cardNameText = document.querySelector(".card-name");
const errorName = document.querySelector(".error-name");

//number text and error
const cardNumberText = document.querySelector(".card-number-text");
const errorNumber = document.querySelector(".error-number");

//date text and error
const cardMonthText = document.querySelector(".text-month");
const cardYearText = document.querySelector(".text-year");
const errorDate = document.querySelector(".error-date");

//cvc text and error
const cvcText = document.querySelector(".cvc");
const errorCvc = document.querySelector(".error-cvc");

//Button
const button = document.querySelector(".submit");
//tesekkur
const ty=document.querySelector(".tesekkur");




const now = new Date();
const nowYear = now.getFullYear();
const nowMonth = now.getMonth();
//CardNameText Event  


cardNameText.addEventListener("keyup", function CardName(){
    let Name = cardNameText.value;
    if(Name === " " || Name.length < 3){
        errorName.textContent = "Please enter name."
    }else{
        errorName.textContent = "";
    }
    cardNameFront.textContent = Name;
    console.log(cardNameText.value);

});

cardNumberText.addEventListener("keyup", function CardNumber(){
   let Number = cardNumberText.value;
    Number = Number.replace(/\D/g, '');
    let formattedNumber = "";
    for (let i = 0; i < Number.length; i++) {
        formattedNumber += Number[i];
        if ((i + 1) % 4 === 0 && i !== Number.length - 1) {
            formattedNumber += " ";
        }
    }


    cardNumberText.value = formattedNumber;
    cardNumberFront.textContent = formattedNumber;
});

cardMonthText.addEventListener("keyup", function CardMonth(){
    let Month = cardMonthText.value;
    if(Month === "" || Month.length < 2 || Month > 12 ){
        errorDate.textContent = "Please enter Month."
    }else{
        errorDate.textContent = "";
    }
    if(Month > 12 || Month < 1){
        errorDate.textContent = "Enter a valid month"
    }else{
        cardFrontMonth.textContent = Month;
        errorDate.textContent = ""
    }
});

cardYearText.addEventListener("keyup", function CardYear() {
    let Year = cardYearText.value;

    // Girdi 2 karakterden uzunsa sadece son iki karakterini al
    if (Year.length > 2) {
        Year = Year.slice(-2);
    }

    // Kartın son iki hanesini input alanına yaz
    cardYearText.value = Year;

    // Kartın son iki hanesini geçerli yıl olarak kabul et
    const cardYear = parseInt(Year, 10); // Sadece son iki hane

    if (isNaN(cardYear)) {
        errorDate.textContent = "Enter a valid year";
    } else if (nowYear % 100 > cardYear) {
        errorDate.textContent = "Enter a valid year";
    } else {
        cardFrontYear.textContent = Year;
        errorDate.textContent = "";
    }
});


cvcText.addEventListener("keyup", function CardYear(){
    let numberRegex = /^\d+$/;
    let cvc = cvcText.value;
    if(cvc === "" || cvc.length < 3 || !numberRegex.test(cvc) || cvc === "000"){
        errorCvc.textContent = "Enter a valid cvc"
    }else{
        cardBackCvc.textContent = cvc;
        errorCvc.textContent = "";
    }
});


button.addEventListener("click", () => {
    let nameText = /^[A-Za-zÇçĞğIıİiÖöŞşÜü\s]+$/; // INPUT TURKCE KARAKTER GIRISI VE HARFLERI TANIMLAMA (SAYI GIRISINI IPTAL ETME)
    let monthText = /^\d+$/; // SAYI GİRİŞİ REGEX
    let yearText = /^\d+$/; // SAYI GİRİŞİ REGEX
    let cvcTextTest = /^\d+$/; // SAYI GİRİŞİ REGEX
    if (cardNameText.value === "" || !nameText.test(cardNameText.value) /*cardNameText değeri nameText'te belirtilen karakterlerin dışında girilirse anlamına geliyor.*/ ) {
        cardNameText.style.border = "2px solid red";
        errorName.textContent = "Please enter a valid name.";
        errorName.style.color = "red";
    }
    else if (cardNumberText.value === "" || cardNumberText.value.length < 19) {
        cardNumberText.style.border = "2px solid red";
        errorNumber.textContent = "Please enter a valid number.";
        errorNumber.style.color = "red";
    }
    else if ((cardMonthText.value === "" || cardMonthText.value.length < 2) || (cardMonthText.value < 1 || cardMonthText.value > 12) || !monthText.test(cardMonthText.value)) {
        cardMonthText.style.border = "2px solid red";
        errorDate.textContent = "Please enter a valid month.";
        errorDate.style.width = "250px"; // "witdh" yerine "width"
        errorDate.style.color = "red";
    }
    else if ((cvcText.value === "" || cvcText.value.length < 3) || !cvcTextTest.test(cvcText.value)) {
        cvcText.style.border = "2px solid red";
        errorCvc.textContent = "Please enter a valid cvc";
        errorCvc.style.color = "red";
    }
    else {
        personelContent.style.display = "none";
        ty.style.display = "flex";
    }
});