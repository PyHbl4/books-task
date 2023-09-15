import { useState, useEffect } from "react";
function EditAuthorPopup(props) {
    const [bookTitle, setBookTitle] = useState('');
    useEffect(() => {
        setBookTitle(props.book.title);
    }, [props.book]);
    function handleBookTitle(evt) {
        setBookTitle(evt.target.value);
    }
    function handleSubmit(evt) {
        evt.preventDefault();
        props.editBook({
            bookId: props.book.id,
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
                    <span className="form__label">Название книги</span>
                    <input type="text" value={bookTitle} onChange={handleBookTitle} minLength="2" maxLength="100" name="book-title" className="form__input" placeholder="Название книги" />
                    <button type="submit" className="orange-button form__submit-button"><span className="button-text">Сохранить</span></button>
                </form>
            </div>
        </div>
    );
}

export default EditAuthorPopup;