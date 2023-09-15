import BookItem from './bookItem.js';


function BooksList(props) {
    const books = props.books;
    return (
        <table className='books-table'>
            <thead>
                <tr>
                    <th>№</th>
                    <th>автор</th>
                    <th>Название</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {books ? books.map((book, index) => (
                    <BookItem
                        key={index}
                        number={book.id}
                        author={book.author}
                        title={book.title}
                        book={book}
                        openEditAuthorPopup={props.openEditAuthorPopup}
                        openEditBookPopup={props.openEditBookPopup} />
                )) : ''}
            </tbody>
        </table>
    );
}

export default BooksList;