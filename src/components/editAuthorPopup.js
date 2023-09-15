import { useState, useEffect } from "react";
function EditAuthorPopup(props) {
    const [authorName, setAuthorName] = useState('');
    const [authorBio, setAuthorBio] = useState('');
    useEffect(() => {
        setAuthorName(props.book.author);
        setAuthorBio(props.book.authorBio);
    }, [props.book]);
    function handleAuthorName(evt) {
        setAuthorName(evt.target.value);
    }
    function handleAuthorBio(evt) {
        setAuthorBio(evt.target.value);
    }
    function handleSubmit(evt) {
        evt.preventDefault();
        props.editAuthor({
            authorId: props.book.authorStrId,
            author: authorName,
            bio: authorBio
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
                    <span className="form__label">Имя Автора:</span>
                    <input type="text" value={authorName} onChange={handleAuthorName} minLength="2" maxLength="50" name="author-name" className="form__input" placeholder="Имя автора" />
                    <span className="form__label">Цитата:</span>
                    <textarea type="text" value={authorBio} onChange={handleAuthorBio} minLength="2" maxLength="1000" name="author-bio" className="form__input form__textarea" placeholder="Цитата автора" ></textarea>
                    <button type="submit" className="orange-button form__submit-button"><span className="button-text">Сохранить</span></button>
                </form>
            </div>
        </div>
    );
}

export default EditAuthorPopup;