import express from 'express';
import ideasService from '../services/ideasService';
import  toNewIdeaData  from '../utils';

const router = express.Router();

router.get('/', (_req, res) => {
    res.send(ideasService.getPublicIdeas());
});

router.get('/:id', (req, res) => {
    const id = Number(req.params.id);
    const idea = ideasService.findIdeaById(id);
    if (idea) {
        res.send(idea);
    } else {
        res.status(404).send('Idea not found');
    }
});

router.post('/', (req, res) => {
    const  newIdeaData = toNewIdeaData(req.body);
    const newIdea = ideasService.createIdea(newIdeaData);
    res.json(newIdea);
});

export default router;