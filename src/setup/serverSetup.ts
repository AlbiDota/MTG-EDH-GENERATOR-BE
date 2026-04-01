import express, { Router , Express} from "express";
import dotenv from "dotenv";
import cors from 'cors';

dotenv.config();

// routes
import routes from "../features/routes.js"

export function createServer() {
    const app:Express = express();

    /* --- 🦐 --- */

    app.use(express.json());

    app.use(cors({
        origin: [
            "http://localhost:3000",
        ]
    }));

    importRoutes(app);

    app.get("/", (req, res) => {
        res.send("NodeTS+Express running");
    });

    app.get("/healthCheck", (req, res) => {
        res.send("Ok");
    });

    app.use((req, res, next) => {
        res.status(404).send("404 not found");
    });

    return app;

}

function importRoutes(app: Express): void {
    app.use(routes)
}