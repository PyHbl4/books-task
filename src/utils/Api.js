import { initialInfo } from "./constants.js";
class Api {
    constructor(options) {
        this._apiUrl = options.apiUrl;
        this.pathToAuthors = options.pathToAuthors;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(`Ошибка ${res.status}`);
        }
    }

    _getApiData(requestUrl) {
        return fetch(requestUrl, {
            headers: {
                authorization: this._token,
            }
        })
            .then(this._checkResponse)
            .then((result) => {
                return result;
            });
    }

    _setApiData(requestUrl, options, method) {
        return fetch(requestUrl, {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(options)
        })
            .then(this._checkResponse)
            .then((result) => {
                return result;
            });
    }

    getBooks() {
        return this._getApiData(`${this._apiUrl}`);
    }

    addBook(options) {
        return this._setApiData(`${this._apiUrl}`, options, 'POST');
    }

    editAuthor(options) {
        return this._setApiData(`${this._apiUrl}${this.pathToAuthors}${options.authorId}`, options, 'PATCH');
    }

    editBook(options) {
        return this._setApiData(`${this._apiUrl}${options.bookId}`, options, 'PATCH');
    }

}

export const api = new Api(initialInfo);