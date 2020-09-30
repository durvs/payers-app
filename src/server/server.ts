import express, {Application} from 'express';

const app: Application = express();


app.listen(3000, function () {
    console.log(`⚡️[server]: Server is running at http://localhost:3000`);
});

export default app;