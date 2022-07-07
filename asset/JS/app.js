var input = document.getElementById("input")
var ul = document.getElementById("list")
var btn = document.getElementById("add")
var list_of_li = ''

btn.addEventListener("click", function () {
    list_of_li = `<li> ${input.value} <button class="btn_of_button">Delete</button></li>`
    ul.insertAdjacentHTML("beforeend", list_of_li)
    document.getElementById("input").value = ""

    FindBtn();
})

function FindBtn() {
    document.querySelectorAll(".btn_of_button").forEach(x => {
        x.addEventListener("click", function (e) {
            e.target.parentElement.remove()
        })
        list_of_li = ul.innerHTML
    })
}
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);


