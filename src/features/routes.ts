import { Router } from "express";
import { scryfallTest } from "./scryfall-test/scryfallTest.js";

const router = Router();



// TEST
router.get("/testSearch", scryfallTest);



export default router;