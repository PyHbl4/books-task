function BookItem(props) {
    function openEditAuthorPopup() {
        props.openEditAuthorPopup(props.book);
    }
    function openEditBookPopup() {
        props.openEditBookPopup(props.book);
    }
    return (
        <tr className='book-item'>
            <td className='book-number'>{props.number}</td>
            <td className='author-name' onClick={openEditAuthorPopup}>{props.author}</td>
            <td className='book-name'>{props.title}</td>
            <td className='edit-button' onClick={openEditBookPopup}>Редактировать</td>
        </tr>
    );
}

export default BookItem;