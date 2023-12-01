// const btn = document.getElementById("btn");
// var x = document.querySelector(".result");
// btn.addEventListener("click", function () {
//   x.style.display = "block";
// });

//----toggle bill
function show() {
  var x = document.querySelector(".result");
  x.style.display = "block";
}

// document.querySelector(".btn").addEventListener("click", function () {
//   var x = document.querySelector(".result");
//   x.style.display = "block";
// });

document.getElementById("frm").addEventListener("submit", function (event) {
  event.preventDefault();
  document.getElementById("txtConsumption").value;
});
//----download
function downloadDivContent() {
  const divContent = document.getElementById("contentToDownload").innerHTML;
  const blob = new Blob([divContent], { type: "text/html" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "Pay-slip.html";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
//----print
function printDiv() {
  window.print();
}
