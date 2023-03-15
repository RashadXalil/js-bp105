const title = document.getElementById("title");
const desc = document.getElementById("desc");
const btn = document.getElementById("btn");
const cards = document.getElementById("cards")
let innerHTML = "";
btn.addEventListener("click", function (e) {
    e.preventDefault();
    innerHTML+=`<div class="col-3 mb-5">
    <div class="card" style="width: 18rem">
      <img
        class="card-img-top"
        src="https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg"
        alt="Card image cap"
      />
      <div class="card-body">
        <h5 class="card-title">${title.value}</h5>
        <p class="card-text">
          ${desc.value}
        </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>`
  cards.innerText = innerHTML;
  title.value = "";
  desc.value="";
});

