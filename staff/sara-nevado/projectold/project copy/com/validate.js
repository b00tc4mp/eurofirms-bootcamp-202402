import errors from './errors.js';

const { ContentError, MatchError } = errors;

function validateName(name) {
    if (typeof name !== 'string') throw new TypeError('name must be a string');
    if (name.trim().length < 1) throw new RangeError('name is lower than 1 character');
    if (!name.trim()) throw new ContentError('name is blank');
}

function validateSurname(surname) {
    if (typeof surname !== 'string') throw new TypeError('surname must be a string');
    if (surname.trim().length < 1) throw new RangeError('surname is lower than 1 character');
    if (!surname.trim()) throw new ContentError('surname is blank');
}

function validateEmail(email) {
    if (typeof email !== 'string') throw new TypeError('email must be a string');
    if (email.length < 6) throw new RangeError('email is lower than 6 characters');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) throw new ContentError('invalid email format');
}

function validatePassword(password) {
    if (typeof password !== 'string') throw new TypeError('password must be a string');
    if (password.length < 8) throw new RangeError('password is lower than 8 characters');
    if (password.includes(' ')) throw new ContentError('password has space character');
}

function validateId(id, explain = 'id') {
    if (!id || typeof id !== 'string') throw new TypeError(`${explain} must be a non-empty string`);
    if (id.length !== 24) throw new RangeError(`${explain} length is not 24 characters`);
    if (id.includes(' ')) throw new ContentError(`${explain} has spaces`);
}

function validateText(text, explain = 'text') {
    if (typeof text !== 'string') throw new TypeError(`${explain} must be a string`);
    if (!text.trim().length) throw new ContentError(`${explain} cannot be empty`);
}

function validateDay(day) {
    if (!(day instanceof Date)) throw new TypeError('day is not a Date object');
}

function validateUrl(url, explain = 'url') {
    if (typeof url !== 'string') throw new TypeError(`${explain} must be a string`);
    if (!url.length) throw new ContentError(`${explain} is empty`);
    if (!url.startsWith('http')) throw new ContentError(`${explain} is not an http address`);
}

function validateDate(date, explain = 'date') {
    if (typeof date !== 'string') throw new TypeError(`${explain} must be a string`);
    if (!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/.test(date)) throw new ContentError(`${explain} must be in YYYY-MM-DDTHH:MM format`);

    const [datePart, timePart] = date.split('T');
    const [year, month, day] = datePart.split('-').map(Number);
    const [hour, minute] = timePart.split(':').map(Number);
    const dateObj = new Date(year, month - 1, day, hour, minute);

    if (dateObj.getFullYear() !== year || dateObj.getMonth() + 1 !== month || dateObj.getDate() !== day ||
        dateObj.getHours() !== hour || dateObj.getMinutes() !== minute) {
        throw new ContentError(`${explain} is not a valid date`);
    }
}

function validateDuration(duration) {
    if (typeof duration !== 'number') throw new TypeError('duration must be a number');
    if (![1, 2, 3].includes(duration)) throw new RangeError('duration must be 1, 2, or 3');
}

function validateMonth(month) {
    if (typeof month !== 'number' || month < 1 || month > 12) throw new RangeError('Month must be a number between 1 and 12');
}

function validateYear(year) {
    if (typeof year !== 'number' || !Number.isInteger(year) || year < 1000 || year > 9999) throw new RangeError('year must be an integer between 1000 and 9999');
}

function validateToken(token, explain = 'token') {
    if (typeof token !== 'string') throw new TypeError(`${explain} is not a string`);
    if (!token.length) throw new ContentError(`${explain} is empty`);

    try {
        const [, payload64,] = token.split('.');
        const payloadJSON = atob(payload64);
        const payload = JSON.parse(payloadJSON);

        const { exp } = payload;
        const now = Date.now() / 1000;

        if (exp < now) throw new MatchError(`${explain} expired`);
    } catch (error) {
        throw new ContentError(`${explain} is invalid`);
    }
}

function validateType(type) {
    if (typeof type !== 'string') throw new TypeError('type must be a string');
    if (!type.trim().length) throw new ContentError('type cannot be empty');
    if (!['event', 'training'].includes(type)) throw new RangeError('type must be "event" or "training"');
}

function validateAddress(address) {
    if (typeof address !== 'string') throw new TypeError('address must be a string');
    if (!address.trim().length) throw new ContentError('address cannot be empty');
}

function validateEvent(event) {
    if (!event || typeof event !== 'object') throw new TypeError('event must be an object');
    validateType(event.type);
    validateText(event.title, 'title');
    validateDate(event.date, 'date');
    validateDuration(event.duration);
    validateAddress(event.address);
    validateText(event.description, 'description');
}

const validate = {
    name: validateName,
    surname: validateSurname,
    email: validateEmail,
    password: validatePassword,
    id: validateId,
    text: validateText,
    day: validateDay,
    url: validateUrl,
    date: validateDate,
    duration: validateDuration,
    month: validateMonth,
    year: validateYear,
    token: validateToken,
    type: validateType,
    address: validateAddress,
    event: validateEvent
};

export default validate
