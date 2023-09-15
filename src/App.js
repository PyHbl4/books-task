import './App.css';
import BooksList from './components/booksList.js';
import AddBookPopup from './components/addBookPopup.js'
import { useState, useEffect } from "react";
import { api } from './utils/Api.js';

function App() {
  const [isAddPopupOpened, setIsAddPopupOpened] = useState(false);
  const [books, setBooks] = useState([]);
  useEffect(() => {
    Promise.resolve(api.getBooks())
      .then((booksData) => {
        console.log(booksData);
        setBooks(booksData);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  function closeAllPopups() {
    setIsAddPopupOpened(false);
  }

  function addBook(options) {
    api.addBook(options)
      .then((data) => {
        setBooks(data);
        closeAllPopups();
      })
  }

  return (
    <>
      <div className='books'>
        <h1 className='books__title'>Книги</h1>
        <button onClick={() => setIsAddPopupOpened(true)} type='button' className='orange-button books__add-button'><span className='button-text'>Добавить книгу в коллекцию</span></button>
        <BooksList books={books} />
      </div>
      <AddBookPopup addBook={addBook} isOpen={isAddPopupOpened} closePopup={closeAllPopups} />
    </>
  );
}

export default App;
