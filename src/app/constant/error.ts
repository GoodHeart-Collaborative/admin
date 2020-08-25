import { toTitleCase } from './messages';
import { PATTERN } from './patterns';

export const PATTERN_ERRORS = (pattern, key) => {
    if (pattern == PATTERN.email) {
        return `Please enter a valid ${key.toLowerCase()}`;
    }
    if (pattern == PATTERN.password) {
        return `${toTitleCase(key)} must fulfill the given requirements`;
    }
    if (pattern == PATTERN.name) {
        return `Invalid ${toTitleCase(key)} pattern `;
    }
    if (pattern == PATTERN.phone) {
        return `${toTitleCase(key)} must contain only digits`;
    }
    if (pattern == PATTERN.price) {
        return `${toTitleCase(key)} must be numeric`;
    }
};
