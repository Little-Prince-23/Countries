const myInput = document.querySelector("#myInput");
const myFlag = document.querySelector("#flag");
const myCountry = document.querySelector("#country");
const myCapital = document.querySelector("#capital");
const myGerb = document.querySelector("img");
const searchButton = document.querySelector("#btn");

searchButton.addEventListener("click", searchFunc);

function searchFunc() {
  let name = myInput.value;
  name = getExternal(name);
}

function getExternal(name) {
  fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (country) {
      console.log(`Olke adi: ${country[0].altSpellings[1]}`);
      myCountry.textContent = `Ölkə adı : ${country[0].altSpellings[1]}`;
      return country;
    })
    .then(function (capital) {
      console.log(`Paytaxt: ${capital[0].capital[0]}`);
      myCapital.textContent = `Paytaxt : ${capital[0].capital[0]}`;
      return capital;
    })
    .then(function (flag) {
      console.log(`Bayraq: ${flag[0].flag}`);
      myFlag.textContent = `${flag[0].flag}`;
      return flag;
    })
    .then(function (gerb) {
      //console.log(gerb[0].coatOfArms.png)
      myGerb.src = `${gerb[0].coatOfArms.png}`;
      myGerb.style.width = "150px";
      return gerb;
    })
    .then(function (myLocation) {
      console.log(myLocation[0].maps.googleMaps);
    })
    .catch(function () {
      const err = new Error("Olke adi daxil edin!");
      console.error(err);
    });

  if (name === undefined) {
    document.querySelector(".bayraq").style.display = "none";
    document.querySelector(".gerb").style.display = "none";
  } else {
    document.querySelector(".bayraq").style.display = "block";
    document.querySelector(".gerb").style.display = "block";
  }

  //   if (name !== getExternal(name)) {
  //     alert("Bazada axtardiginiz ad yoxdur");
  //   }

  myInput.value = "";
}
getExternal();
