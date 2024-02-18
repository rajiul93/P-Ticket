let selectedAllSeat = [];
const totalPrice = 0;
const totalSeat = document.getElementById("total-seat");
const addedSeat = document.getElementById("added-seat");
const couponApply = document.getElementById("coupon-apply");
const tBody = document.getElementById("t-body");
const totalPriceLocation = document.getElementById("total-price");

couponApply.addEventListener("click", function () {
  couponApply.setAttribute(("disabled", "true"));
});

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

      for (const seat of selectedAllSeat) {
        seat.location.classList.add("bg-green-500");
      }
    } else {
      alert("you already select 4 seat");
    }
    activeCoupon();
    // totalPrice(selectedAllSeat)
  });
}


// function totalPrice(){
//   let sum = 0
//   for(const seat of selectedAllSeat){
//       // sum = sum + seat.price
//       console.log(seat);
//   }
//   // console.log(sum);
// }



function activeCoupon() {
  if (selectedAllSeat.length > 2) {
    couponApply.removeAttribute("disabled");
  }
}

function getNumber(id) {
  const number = parseInt(id.innerText);
  return number;
}











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

 