import express, {Router} from "express";
import UserController from "./controllers/UserController";
const app = express();
const router = Router();

app.use(express.json());
app.use(router);

app.listen(3333, () => console.log('Server is running.'));


router.get('/', (req, res) => {
    res.status(200).send('meu piru');
});

router.get('/users',  UserController.findAll);
router.post('/user/create',  UserController.createUser);
