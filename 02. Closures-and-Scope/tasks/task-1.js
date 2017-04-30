/* Task Description */
/* 
	*	Create a module for working with books
		*	The module must provide the following functionalities:
			*	Add a new book to category
				*	Each book has unique title, author and ISBN
				*	It must return the newly created book with assigned ID
				*	If the category is missing, it must be automatically created
			*	List all books
				*	Books are sorted by ID
				*	This can be done by author, by category or all
			*	List all categories
				*	Categories are sorted by ID
		*	Each book/catagory has a unique identifier (ID) that is a number greater than or equal to 1
			*	When adding a book/category, the ID is generated automatically
		*	Add validation everywhere, where possible
			*	Book title and category name must be between 2 and 100 characters, including letters, digits and special characters ('!', ',', '.', etc)
			*	Author is any non-empty string
			*	Unique params are Book title and Book ISBN
			*	Book ISBN is an unique code that contains either 10 or 13 digits
			*	If something is not valid - throw Error
*/
function solve() {
	var library = (function () {
		var books = [];
		var categories = [];
		function listBooks(arg = null) {
			var outputBooks = [];
			if (arg !== null){
				for (let i = 0; i < books.length; i+=1){
					if (books[i].category === arg.category){
						outputBooks.push(books[i]);
					}
				}
			}
			if (arg !== null){
				return outputBooks;
			}
			else{
				return books;
			}
		}

		function addBook(book) {
			if (book.title.length < 2 || book.title.length > 100){
				throw "Name must be between 2 and 100 symbols long";
			}
			if (book.category.length < 2 || book.category.length > 100){
				throw "Name must be between 2 and 100 symbols long";
			}
			if (book.author.length === 0){
				throw "Author can not be empty";
			}
			if (!(book.isbn.length === 10 || book.isbn.length === 13)){
				throw 'Invalid ISBN';
			}
			for (let i = 0; i < books.length; i+=1){
				if (books[i].title === book.title){
					throw 'Duplicate name';
				}
				if (books[i].isbn === book.isbn){
					throw 'Duplicate ISBN';
				}
			}
			book.ID = books.length + 1;
			books.push(book);
			return book;
		}

		function listCategories() {
			for (let i = 0; i < books.length; i += 1){
				isCategoryPresent = false;
				for (let j = 0; j < i; j += 1){
					if (books[i].category !== null && books[i].category === books[j].category){
						isCategoryPresent = true;
					}
				}
				if (books[i].category !== null && isCategoryPresent === false){
					categories.push(books[i].category);
				}
			}
			return categories;
		}

		return {
			books: {
				list: listBooks,
				add: addBook
			},
			categories: {
				list: listCategories
			}
		};
	} ());
	return library;
}
module.exports = solve;
