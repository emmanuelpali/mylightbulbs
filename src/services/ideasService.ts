import ideaData from '../data/ideas';
import { IdeaType, NewIdeaType, NonSensitiveIdeaType } from '../types';

const getIdeas = (): IdeaType[] => {
    return ideaData;
};

const getPublicIdeas = (): NonSensitiveIdeaType[] => {
    return ideaData.map(({ id, date, title }) => ({
        id,
        date,
        title
    }));
};

const findIdeaById = (id: number): IdeaType | undefined => {
    return ideaData.find(idea => idea.id === id);
};

const createIdea = (entry: NewIdeaType ): IdeaType => {
    const newIdea = {
        id: Math.max(...ideaData.map(idea => idea.id)) + 1,
        ...entry
    };
    ideaData.push(newIdea);
    return newIdea;
};

export default {
    getIdeas,
    createIdea,
    getPublicIdeas,
    findIdeaById
};