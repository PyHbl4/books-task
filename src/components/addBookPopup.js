import { api } from '../utils/Api.js';
import { useState, useEffect } from "react";
function AddBookPopup(props) {
    const [authorName, setAuthorName] = useState('');
    const [bookTitle, setBookTitle] = useState('');
    function handleAuthorInput(evt) {
        setAuthorName(evt.target.value);
        console.log(authorName);
    }
    function handleBookTitle(evt) {
        setBookTitle(evt.target.value);
        console.log(bookTitle);
    }
    function handleSubmit(evt) {
        evt.preventDefault();
        props.addBook({
            author: authorName,
            title: bookTitle
        });
    }
    return (
        <div className={`popup add-book-popup${props.isOpen ? ' show' : ''}`}>
            <div className="popup__wrapper">
                <button onClick={props.closePopup} type="button" className="popup__close-button">
                    <span></span>
                    <span></span>
                </button>
                <form className="form add-book-form" onSubmit={handleSubmit}>
                    <input type="text" value={authorName} onChange={handleAuthorInput} minLength="2" maxLength="30" name="author-name" className="form__input" placeholder="Имя автора"/>
                    <input type="text" value={bookTitle} onChange={handleBookTitle} minLength="2" maxLength="30" name="book-title" className="form__input" placeholder="Название книги"/>
                    <button type="submit" className="orange-button form__submit-button"><span className="button-text">Сохранить</span></button>
                </form>
            </div>
        </div>
    );
}

export default AddBookPopup;