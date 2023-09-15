function BookItem(props) {
    return (
        <tr className='book-item'>
            <td className='book-number'>{props.number}</td>
            <td className='author-name'>{props.author}</td>
            <td className='book-name'>{props.title}</td>
            <td className='edit-button'>Редактировать</td>
        </tr>
    );
}

export default BookItem;