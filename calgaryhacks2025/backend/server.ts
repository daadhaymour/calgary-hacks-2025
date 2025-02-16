import express,  {Request, Response} from 'express';
import mysql from 'mysql2';
import cors from 'cors';

//create connection to db
const db = mysql.createConnection({
    host: 'localhost',
    user: 'greenerdb',
    password: 'hack',
    database: 'greenerdb'
})

//connect to mysql

db.connect(err => {
    if (err) {
        console.error('Error connecting to the database: ', err);
        return;
    }
    console.log('Connected to database');
});

const app = express();
app.use(cors());
const PORT = 8082;

app.use(express.json());

//endpoint for handling submission
app.post('/submit',(req,res)=>{

    const{ location,mode,activity} = req.body;

    const quadrant = parseLocation(location);

    if (!quadrant) {
        res.status(400).json({ error: 'Invalid address or quadrant not found' });
        return;
    }

    //selecting the park

    let sql = `SELECT * FROM CALGARY_PARKS_INFO WHERE Activities LIKE '%${activity}%'`;

    if (mode === 'bike' || mode === 'walk') {
        sql += ` AND Quadrant='${quadrant}'`;
    }

    db.query(sql, (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Database error' });
            return;
        }
        res.json(results);
    });



})

function parseLocation(location:string):string|null{
    const match = location.match(/\b(NE|NW|SE|SW)\b$/);
    return match ? match[1]:null;
}

