const books = [
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    maxPages: 350,
    onPage: 350,
  },
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    maxPages: 400,
    onPage: 350,
  },
  {
    title: "Harry Potter",
    author: "J.K. Rowling",
    maxPages: 400,
    onPage: 400,
  },
];

books.forEach((el) => {
  const bookList = document.getElementById("book");
  const listElement = document.createElement("li");
  listElement.innerText = el.title + " by " + el.author;
  bookList.appendChild(listElement);
});

books.forEach((el) => {
  const readList = document.getElementById("read");
  const listElement = document.createElement("li");
  listElement.innerText = el.title + " by " + el.author;
  readList.appendChild(listElement);

  if (el.maxPages === el.onPage) {
    listElement.innerText =
      "You already have read " + el.title + " by " + el.author;
    listElement.style.color = "green";
  } else {
    listElement.innerText =
      "You still need to read " + el.title + " by " + el.author;
    listElement.style.color = "red";
  }
});

const bookTableBody = document.getElementById("bookBody");

books.forEach((book) => {
  const row = document.createElement("tr");

  const titleCell = document.createElement("td");
  titleCell.textContent = book.title;
  row.appendChild(titleCell);

  const authorCell = document.createElement("td");
  authorCell.textContent = book.author;
  row.appendChild(authorCell);

  const maxPagesCell = document.createElement("td");
  maxPagesCell.textContent = book.maxPages;
  row.appendChild(maxPagesCell);

  const onPageCell = document.createElement("td");
  onPageCell.textContent = book.onPage;
  row.appendChild(onPageCell);

  const progressCell = document.createElement("td");
  const progressBar = document.createElement("div");
  progressBar.className = "progress-bar";
  const progress = document.createElement("div");
  progress.className = "progress";
  const percentage = (book.onPage / book.maxPages) * 100;
  progress.style.width = percentage + "%";
  progressBar.appendChild(progress);

  const percentageLabel = document.createElement("span");
  percentageLabel.className = "percentage-label";
  percentageLabel.textContent = percentage.toFixed(2) + "%";
  progress.appendChild(percentageLabel);

  progressCell.appendChild(progressBar);
  row.appendChild(progressCell);

  bookTableBody.appendChild(row);
});
function addBook() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const onPage = parseInt(document.getElementById("onPage").value, 10);
  const maxPages = parseInt(document.getElementById("maxPages").value, 10);

  const isRead = onPage === maxPages;

  const bookList = document.getElementById("book");
  const listElementBook = document.createElement("li");
  listElementBook.innerText = title + " by " + author;
  bookList.appendChild(listElementBook);

  const readList = document.getElementById("read");
  const listElementRead = document.createElement("li");
  listElementRead.innerText = title + " by " + author;

  if (isRead) {
    listElementRead.innerText =
      "You already have read " + title + " by " + author;
    listElementRead.style.color = "green";
  } else {
    listElementRead.innerText =
      "You still need to read " + title + " by " + author;
    listElementRead.style.color = "red";
  }

  readList.appendChild(listElementRead);

  const bookTableBody = document.getElementById("bookBody");

  const row = document.createElement("tr");

  const titleCell = document.createElement("td");
  titleCell.textContent = title;
  row.appendChild(titleCell);

  const authorCell = document.createElement("td");
  authorCell.textContent = author;
  row.appendChild(authorCell);

  const maxPagesCell = document.createElement("td");
  maxPagesCell.textContent = maxPages;
  row.appendChild(maxPagesCell);

  const onPageCell = document.createElement("td");
  onPageCell.textContent = onPage;
  row.appendChild(onPageCell);

  const progressCell = document.createElement("td");
  const progressBar = document.createElement("div");
  progressBar.className = "progress-bar";
  const progress = document.createElement("div");
  progress.className = "progress";
  const percentage = (onPage / maxPages) * 100;
  progress.style.width = percentage + "%";
  progressBar.appendChild(progress);

  const percentageLabel = document.createElement("span");
  percentageLabel.className = "percentage-label";
  percentageLabel.textContent = percentage.toFixed(2) + "%";
  progress.appendChild(percentageLabel);

  progressCell.appendChild(progressBar);
  row.appendChild(progressCell);

  bookTableBody.appendChild(row);
  document.getElementById("bookForm").reset();
}
