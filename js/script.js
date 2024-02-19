let selectedAllSeat = [];
// const totalPrice = 0;
const totalSeat = document.getElementById("total-seat");
const addedSeat = document.getElementById("added-seat");
const couponApply = document.getElementById("coupon-apply");
const tBody = document.getElementById("t-body");
const totalPriceLocation = document.getElementById("total-price");
const getCoupon = document.getElementById("get-coupon");
const couponContainer = document.getElementById("coupon-container");
const grandTotalLocation = document.getElementById("grand-total");
const submit = document.getElementById("submit");
const phone = document.getElementById("phone");
const successPopup = document.getElementById("success-popup");




couponApply.addEventListener("click", function () {
  couponApply.setAttribute(("disabled", "true"));
});
// all seat select by class name.
const allSeat = document.getElementsByClassName("seat-list");
for (const seat of allSeat) {
  seat.addEventListener("click", function (e) {
    const seatName = e.target.innerText;
    const selectedSeatLocation = e.target;
    const seatNumber = {
      location: selectedSeatLocation,
      price: 550,
      seatName: seatName,
      buy: true,
    };

    if (selectedAllSeat.length < 4) {
      createElement(seatNumber);
      totalSeat.innerText = getNumber(totalSeat) - 1;
      addedSeat.innerText = getNumber(addedSeat) + 1;

      selectedAllSeat.push(seatNumber);
      totalMoney(selectedAllSeat);

      for (const seat of selectedAllSeat) {
        seat.location.classList.add("bg-green-500");
      }
    } else {
      alert("you already select 4 seat");
    }
    activeCoupon();
    activeSubmitButton();
  });
}

// active final submit button
function activeSubmitButton() {
  if (phone.value.length != 0 && selectedAllSeat.length != 0) {
    submit.removeAttribute("disabled");
  } 
}
function totalMoney(allSeatPrice) {
  let sum = 0;
  for (const seat of allSeatPrice) {
    sum = sum + seat.price;
  }
  totalPriceLocation.innerText = sum;
  grandTotalLocation.innerText = sum;
}

function activeCoupon() {
  if (selectedAllSeat.length > 3) {
    couponApply.removeAttribute("disabled");
  }
}

function applyCoupon() {
  if (getCoupon.value === "NEW15") {
    couponContainer.classList.add("hidden");

    const offer = (getNumber(totalPriceLocation) * 15) / 100;
    const grandTotal = getNumber(totalPriceLocation) - offer;
    grandTotalLocation.innerText = grandTotal;
  } else if (getCoupon.value === "Couple20") {
    couponContainer.classList.add("hidden");

    const offer = (getNumber(totalPriceLocation) * 20) / 100;
    const grandTotal = getNumber(totalPriceLocation) - offer;
    grandTotalLocation.innerText = grandTotal;
  } else {
    alert("Should be valid coupon");
  }
}

function getNumber(id) {
  const number = parseInt(id.innerText);
  return number;
}
// active final submit button
phone.addEventListener("keyup", function (e) {
  const eValue = e.target.value;
  if (!isNaN(eValue)) {
    if (e.target.value.length != "" && selectedAllSeat.length != 0) {
      submit.removeAttribute("disabled");
    } else {
      submit.setAttribute("disabled", "true");
    }
  } else {
    alert("Should be Mobile number");
  }
});

function finalSubmit() {}

function createElement(obj) {
  const tr = document.createElement("tr");
  tr.classList.add("hover");

  const td1 = document.createElement("td");
  td1.innerText = obj.seatName;
  const td2 = document.createElement("td");
  td2.innerText = "Economoy";
  const td3 = document.createElement("td");
  td3.innerText = obj.price;
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  

  tBody.appendChild(tr);
}



function successPopupMassage(){
  successPopup.classList.remove('hidden')
}

function confirm (){ 
  phone.value =""
  successPopup.classList.add('hidden');
  // totalPriceLocation.innerText='0'
  // grandTotalLocation.innerText="0"
  for(const seat of allSeat){
    seat.classList.remove('bg-green-500')

  }

}