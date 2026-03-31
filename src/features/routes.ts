import { Router } from "express";
import { scryfallTest } from "./scryfall-test/scryfallTest.js";
import { deckBuilderController } from "./deckbuilder/main/deckBuilderController.js";

const router = Router();



// TEST
router.get("/testSearch", scryfallTest);


// DECKBUILDER
router.get("/deckbuilder", deckBuilderController);


export default router;