const getTotalBooksCount = books => {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let booksCurrentlyBorrowed = books.filter(
    (book) => book.borrows[0].returned === false
  );
  return booksCurrentlyBorrowed.length;
}

// //Helper function returns top five results
// function _topFive(array) {
//   let result = array.sort((countA, countB) => (countA.count < countB.count ? 1: -1
//     )).slice(0, 5);
//   return result;
// }

////helper function returns top five results
function sortTopFive(books) {
  let sorted = books.sort((A, B) => (A.count < B.count ? 1 : -1)).slice(0, 5);
  return sorted;
}

///function which returns all the genres
function getGenres(books) {
  let result = books.map((book) => book.genre);
  return result;
}

function getMostCommonGenres(books) {
  let popularGenres = [];
  // List of Genres in the array
  const allGenres = books.reduce((acc, book) => {
    // Keep track of how many books exist for each genre
    // console.log('BEFORE IF STATEMENT',acc,book.genre)
    if (!acc[book.genre]) {
      // console.log('setting value to 1')
      acc[book.genre] = 1;
    } else {
      // console.log('incrementing count')
      acc[book.genre]++;
    }
    // console.log('resulting accumulator: ',acc)
    return acc;
  }, {});
  for (const genre in allGenres) {
    popularGenres.push({ name: genre, count: allGenres[genre] });
  }
  return sortTopFive(popularGenres);
}

function getMostPopularBooks(books) {
  let popularBooks = [];
  //List of borrows.ID, length
  for (let i = 0; i < books.length; i++) {
    console.log("BOOKS TITLE", books[i].title);
    console.log("BORROWS LENGTH", books[i].borrows.length);
    popularBooks.push({ name: books[i].title, count: books[i].borrows.length });
  }
  return sortTopFive(popularBooks);
}

function getMostPopularAuthors(books, authors) {
  let popularAuthors = [];
  const countByAuthorId = books.reduce((acc, book) => {
    if (!acc[book.authorId]){
      acc[book.authorId] = book.borrows.length}
    else {
      acc[book.authorId] += book.borrows.length
    }
    return acc;
  }, {});
  

  for (let author of authors){
    
    if(countByAuthorId[author.id] !== undefined) {
      const authorName = `${author.name.first} ${author.name.last}`;
      popularAuthors.push({name: authorName, count: countByAuthorId[author.id]})
    }  
  }
  
  return sortTopFive(popularAuthors)
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};