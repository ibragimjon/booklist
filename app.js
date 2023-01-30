const form = document.querySelector("form");
const tbody = document.querySelector("tbody");
const container = document.querySelector('.container')
const tr = document.querySelector('tr')


// construcot function
function Book(name, author, year) {
  (this.name = name), (this.author = author), (this.year = year);
}

Book.prototype.haqida = function () {
  return `Bu kitob ${this.name}, ${this.author} tomonidan  yozilgan, ${this.year} yilda.`;
};

// UI
function UI() {}

// add book
UI.prototype.addBook = function (book) {
  const tr = document.createElement("tr");

  tr.innerHTML = `
    <th scope="row">1</th>
      <td>${book.name}</td>
      <td>${book.author}</td>
      <td>${book.year}</td>
      <td>
        <i class="fas fa-trash"></i>
      </td>
    `

  tbody.appendChild(tr);
  
};

UI.prototype.showMessage = function (type, text) {
    const div = document.createElement('div')
    div.classList.add('alert')
    div.classList.add(`alert-${type}`)
    div.textContent = text

    container.insertBefore(div, form)

    setTimeout(() => {
        div.remove()
    }, 2000)
}

UI.prototype.clearInput = () => {
    form.name.value = ''
    form.author.value = ''
    form.year.value = ''
}





form.addEventListener("submit", (e) => {
  e.preventDefault();
  const ui = new UI()



  


  if (form.name.value && form.author.value && form.year.value) {
    const book = new Book(form.name.value, form.author.value, form.year.value);
    const ui = new UI();
    ui.addBook(book);
    ui.showMessage('success', 'You added a book successufuly !')
    ui.clearInput()
  } else {
      ui.showMessage('warning', 'You do not enter someting')
  }

});


tbody.addEventListener('click', (e) => {
  if(e.target.classList[0] == 'fas') {
    e.target.parentElement.parentElement.remove()
  }
})