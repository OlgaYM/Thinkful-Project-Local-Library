/* example account
 {
    id: "5f446f2ecfaf0310387c9603",
    picture: "https://api.adorable.io/avatars/75/esther.tucker@zillacon.me",
    age: 25,
    name: {
      first: "Esther",
      last: "Tucker",
    },
    company: "ZILLACON",
    email: "esther.tucker@zillacon.me",
    registered: "Thursday, May 28, 2015 2:51 PM",
  },
  
  const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);
  */

function findAccountById(accounts, id) {
  const found = accounts.find(element => element.id === id);
  return found;
}

function sortAccountsByLastName(accounts) {
    const sorted = accounts.sort((lastName1, lastName2) =>
    lastName1.name.last.toLowerCase() > lastName2.name.last.toLowerCase()
      ? 1
      : -1
  );
  return sorted;
}

function getTotalNumberOfBorrows(account, books) {
  const accountID = account.id;
  let numberBorrows = 0;
  books.forEach((book) => {
    const timesBorrowed = book.borrows.filter(
      (borrow) => borrow.id === accountID
    ).length;
    numberBorrows += timesBorrowed;
  });
  return numberBorrows;
  
}

////helper function. find author returns an author object

function findAuthor(book, authors) {
  const author = authors.find((author) => author.id === book.authorId);
  return author;
}
function getBooksPossessedByAccount(account, books, authors) {
  const booksBorrowed = [];
  books.forEach((book) => {
    let bookBorrows = book.borrows;
    bookBorrows.forEach((borrow) => {
      if (borrow.id === account.id && !borrow.returned) {
        booksBorrowed.push(book);
      }
    });
  });
  let result = booksBorrowed.map((book) => {
    return { ...book, author: findAuthor(book, authors) };
  });
  return result;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
