import { Client } from 'pg';


// Create a client using the connection information provided on bit.io.
const client = new Client({
    user: 'jacoblurie29_demo_db_connection',
    host: 'db.bit.io',
    database: 'bitdotio',
    password: '376R2_tTBP2KD75AyLRcGnux8P8vt',
    port: 5432,
});
client.connect();

function newUser() {
    alert("This worked");
    var email = document.getElementById(main_login_email).value;
    var pword = document.getElementById(main_login_passworc).value;

    client.query('INSERT INTO "jacoblurie29/CollegeWebDevProject"."logininfo" VALUE(' + email + ',' + pword + ');', (err, res) => {
        console.table(res.rows); // you could also just console.log, but console.table is neat :)
    });
}
