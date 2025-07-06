const {Client} = require('pg')
const express = require('express')

const app = express();

app.use(express.json());


const con=new Client ({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "Mexy115$.com",
    database: "3mttbd",

})

app.get('/users', (req, res ) => {

    const geQuery = 'SELECT * FROM users';
    con.query(geQuery, (err, result) => {
        if (err) {
            res.send('Error fetching data');
        } else {    
            res.json(result.rows);
        }
    });

})

app.get('/users/:id', (req, res) => {
    const id = req.params.id 
    const getQuery = 'SELECT * FROM users WHERE id = $1'
    con.query(getQuery, [id], (err, result) => {

        if (err) {
            res.send("Error fetching data");
        } else {
            res.json(result.rows);
        }
    });
});

app.post('/users', (req, res ) =>{

    const {name, email, age} = req.body;

    const insertQuery = 'INSERT INTO users (name, email, age) VALUES ($1, $2, $3) ';

    con.query(insertQuery, [name, email, age], (err, result) => {
        if (err) {
            res.send('Error inserting data');
        } else {
            res.send('Data inserted successfully');
        }
    });

})

app.put('/users/:id', (req, res) => {
    const id = req.params.id 
    const name = req.body.name;
    const email = req.body.email;
    const age = req.body.age;
    const updateQuery = 'UPDATE users SET name=$1, email=$2, age=$3 WHERE id=$4'
    con.query(updateQuery, [name, email, age, id], (err, result) => {
        if (err) {
            res.send("Error updating data");
        } else {
            res.send("Data updated successfully");
        }
    });
});

app.delete('/users/:id', (req, res) => {
    const id = req.params.id
    const deleteQuery = 'DELETE FROM users WHERE id=$1'
    con.query(deleteQuery, [id], (err, result) => {
        if (err) {
            res.send("Error deleting data");
        } else {
            res.send('Data Deleted Successfully')
        }
    })
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

con.connect().then(()=> console.log("connected"))