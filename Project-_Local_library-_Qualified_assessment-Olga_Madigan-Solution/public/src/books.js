function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id)
}

function findBookById(books, id) {
  return books.find((book)=> book.id === id)
}

//function findBookById(books, id) {}

function partitionBooksByBorrowedStatus(books) {
  const availableBooks = books.filter((book) => book.borrows[0].returned)
  const borrowedBooks = books.filter((book) => !book.borrows[0].returned)
  return [borrowedBooks, availableBooks]
}

function getBorrowersForBook(book, accounts) {
  const result = [];
for (let account of accounts){
  for (let i = 0; i < book.borrows.length; i++) {
    if (account.id === book.borrows[i].id){
      const returned = book.borrows[i].returned
      result.push({...account, returned} )
    }
  }
}
return result.slice(0,10)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
