import express from "express";
import ideasRouter from "./routes/ideas";

const app = express();
app.use(express.json());

const PORT = 3000;

app.get('/ping', (req, res) => {
    console.log(req.originalUrl);
    res.send('pong');
}
);

app.use('/api/ideas', ideasRouter);

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});