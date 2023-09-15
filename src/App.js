import './App.css';
import BooksList from './components/booksList.js';
import AddBookPopup from './components/addBookPopup.js'
import EditAuthorPopup from './components/editAuthorPopup.js'
import EditBookPopup from './components/editBookPopup.js'
import { useState, useEffect } from "react";
import { api } from './utils/Api.js';

function App() {
  const [isAddPopupOpened, setIsAddPopupOpened] = useState(false);
  const [isEditAuthorPopupOpened, setIsEditAuthorPopupOpened] = useState(false);
  const [isEditBookPopupOpened, setIsEditBookPopupOpened] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [books, setBooks] = useState([]);
  useEffect(() => {
    Promise.resolve(api.getBooks())
      .then((booksData) => {
        setBooks(booksData);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  function openAddBookPopup() {
    setIsAddPopupOpened(true);
  }

  function openEditAuthorPopup(book) {
    setSelectedBook(book);
    setIsEditAuthorPopupOpened(true);
  }

  function openEditBookPopup(book) {
    setSelectedBook(book);
    setIsEditBookPopupOpened(true);
  }

  function closeAllPopups() {
    setIsAddPopupOpened(false);
    setIsEditAuthorPopupOpened(false);
    setIsEditBookPopupOpened(false)
  }

  function addBook(options) {
    api.addBook(options)
      .then((data) => {
        setBooks(data);
        closeAllPopups();
      })
  }

  function editAuthor(options) {
    api.editAuthor(options)
      .then((data) => {
        setBooks(data);
        closeAllPopups();
      })
  }

  function editBook(options) {
    api.editBook(options)
      .then((data) => {
        setBooks(data);
        closeAllPopups();
      })
  }

  return (
    <>
      <div className='books'>
        <h1 className='books__title'>Книги</h1>
        <button onClick={openAddBookPopup} type='button' className='orange-button books__add-button'><span className='button-text'>Добавить книгу в коллекцию</span></button>
        <BooksList openEditAuthorPopup={openEditAuthorPopup} openEditBookPopup={openEditBookPopup} books={books} />
      </div>
      <AddBookPopup addBook={addBook} isOpen={isAddPopupOpened} closePopup={closeAllPopups} />
      {selectedBook && <EditAuthorPopup book={selectedBook} editAuthor={editAuthor} isOpen={isEditAuthorPopupOpened} closePopup={closeAllPopups} />}
      {selectedBook && <EditBookPopup book={selectedBook} editBook={editBook} isOpen={isEditBookPopupOpened} closePopup={closeAllPopups} />}
    </>
  );
}

export default App;
