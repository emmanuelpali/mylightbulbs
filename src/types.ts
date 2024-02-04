export interface IdeaType {
    id: number;
    date: string;
    title: string;
    description: string;
    }

    export type NonSensitiveIdeaType = Omit<IdeaType, 'description'>;

    export type NewIdeaType = Omit<IdeaType, 'id'>;