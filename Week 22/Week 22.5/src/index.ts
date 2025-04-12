import { Pool } from "pg";
import express, {Request, Response} from 'express';
import dotenv from "dotenv"

dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());



// This is one way to do it
// const pool = new Pool({
    //     user : "test_user",
    //     password : "test_password",
    //     port : 1111,
    //     host : "test_host",
    //     database : "test_db",
    //     ssl : ture
    // })
    
    // This is one more way to connect
    const pool = new Pool({
        connectionString : process.env.DATABASE
    })
    
    pool.query('SELECT NOW()').then(res => {
        console.log(`PostgreSQL connection Successful`);
        console.log(`Current Time from Database : `, res.rows[0].now);
    }).catch(err => {
        console.log(`Error connecting to PostgreSQL` , err);
    })

    app.post('/signin', async (req: Request, res: Response) => {
        const { username, email,  password } = req.body;
      
        if (username && password && email) {
          // In a REAL app, you would validate credentials against a database here!
          // For this very basic example, we're just acknowledging the attempt.
          console.log(`Sign-in attempt for user: ${username}`); // Log for now

          const insertQuery = `INSERT INTO users (username, email, password) VALUES ('${username}', '${email}', '${password}')`

          const response = await pool.query(insertQuery);

          res.status(200).json({ message: 'Sign-in successful', response });
        } else {
          res.status(400).json({ error: 'Username and password are required.' });
        }
      });
    
    
    app.listen(port, ()=> {
        console.log(`Server listening on ${port}`);
    })