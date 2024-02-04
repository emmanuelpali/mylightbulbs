import { NewIdeaType } from "./types";

// const parseComment = (string: unknown): string => {
//     if (!string || !isString(comment)) {
//         throw new Error('Incorrect or missing value: ');
//     }
//     return string;
// };

const parseString = (string: unknown): string => {
    if (!string || !isString(string)) {
        throw new Error('Incorrect or missing string: ');
    }
    return string;
};

const isString = (text: unknown): text is string => {
    return typeof text === 'string' || text instanceof String;
};

const isDate = (date: string): boolean => {
    return Boolean(Date.parse(date));
};

const parseDate = (date: unknown): string => {
    if (!date || !isString(date) || !isDate(date)) {
        throw new Error('Incorrect or missing date: ');
    }
    return date;
};



const toNewIdeaData = (object: unknown): NewIdeaType => {
    if( !object || typeof object !== 'object') {
        throw new Error('Incorrect or missing object data');
    }
    if ('description' in object && 'date' in object && 'title' in object) {
        const newIdea: NewIdeaType = {
            date: parseDate(object.date),
            title: parseString(object.title),
            description: parseString(object.description)
   
    };
    return newIdea;
}
throw new Error('Incorrect or missing object data');
};

export default toNewIdeaData;