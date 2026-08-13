const searchInput = document.getElementById("search");
const table = document.getElementById("payoutTable");

searchInput.addEventListener("keyup", function () {

  const searchValue = this.value.toLowerCase();
  const rows = table.querySelectorAll("tbody tr");

  rows.forEach(function (row) {

    const rowText = row.textContent.toLowerCase();

    if (rowText.includes(searchValue)) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }

  });

});
