const result  = require("lodash");
const con = require("../db/connection");

const argon2  = require("argon2");

exports.getIndex = (req, res) => {
  res.render("index",); 
};

exports.getRoom = (req, res)=>{
  const alert = req.query.alert || "";
  const sql = "SELECT * FROM rooms";
  con.query(sql, (err, result) => {
    if (err) {
      console.log(err.message);
      return;
    }

    res.render("room", {result,  alert });
  });
};
// Assuming mainCon.js
exports.updateStatus = (req, res) => {
  const { reservation_id, status } = req.body;

  const sql = "UPDATE reservations SET status = ? WHERE reservation_id = ?";

  con.query(sql, [status, reservation_id], (err, result) => {
    if (err) {
      console.error(err.message);
      return res.status(500).json({ error: 'Internal server error' });
    }

    if (result.affectedRows === 0) {
      // No rows were affected, meaning the reservation_id was not found
      return res.status(404).json({ error: 'Reservation not found' });
    }

    // Successful update
    return res.status(200).json({ message: 'Status updated successfully' });
  });
};

exports.getUser = (req, res)=>{
  const alert = req.query.alert || "";
  const sql = "SELECT * FROM users";
  con.query(sql, (err, result) => {
    if (err) {
      console.log(err.message);
      return;
    }

    res.render("users", {result,  alert });
  });
};
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
exports.getReservation = (req, res) => {
  const alert = req.query.alert || "";
  const sql =
    "SELECT reservations.*, rooms.room_number, rooms.price, users.username " +
    "FROM reservations " +
    "JOIN rooms ON reservations.room_id = rooms.room_id " +
    "JOIN users ON reservations.user_id = users.id";

  con.query(sql, (err, result) => {
    if (err) {
      console.log(err.message);
      return res.status(500).send("Internal Server Error");
    }

    // Assuming you have a 'users' view for rendering
    res.render("reservation", { result, alert });
  });
};

exports.loginUser = (req, res)=>{
  console.log('f');
  const { username, password } = req.body;
  const userSql = "SELECT * FROM users WHERE username= ?";
  const postsSql = "SELECT * FROM rooms";

  if (!username || !password) {
    
    return res.render('login', { alertMessage: 'Username and password are required.' });
  }

  let alert = "";

  con.query(userSql, [username], async (err, userResult) => {
    if (err) {
      console.log(err.message);
      return res.status(500).send('Internal Server Error');
    }

    if (userResult.length > 0) {
      const hashpass = userResult[0].password;

      if (await argon2.verify(hashpass, password)) {

        con.query(postsSql, (err, result) => {
          if (err) {
            console.log(err.message);
            return res.status(500).send('Internal Server Error');
          }

          console.log('Session user:', userResult[0]);
          req.session.user = userResult[0];
       
        if (userResult[0].usertype === 'admin') {
 
          return res.redirect('/add-post');
        }

          res.render('index', { user: userResult[0], result });
        });
      } else {

        req.flash('error', 'Invalid password');
        res.render("login", { error: req.flash('error')  });
      }
    } else {
      console.log('d');

      req.flash('error', 'Invalid username');
  
      res.render("login", { alert,  error: req.flash('error')  });
    }
  });

}


exports.registerUser = async (req, res) => {
  const { firstname, lastname, birthday, gender, address, contact_no, username, email, password, confirmPassword } = req.body;
  const hashpass = await argon2.hash(password);
 
  if (!firstname || !lastname || !birthday || !gender || !address || !contact_no || !username || !email || !password || !confirmPassword) {
    req.flash('error', 'All fields are required.');
    return res.render('register', { error: req.flash('error') });
  }

  if (password.length < 8) {
    req.flash('error', 'Password must be at least 8 characters long.');
    return res.render('register', { error: req.flash('error') });
  }

  if (password !== confirmPassword) {
    req.flash('error', 'Passwords do not match.');
    return res.render('register', { error: req.flash('error') });
  }

  const checkExistingSql = "SELECT COUNT(*) AS count FROM users WHERE username = ? OR email = ?";
  const checkExistingValues = [username, email];

  con.query(checkExistingSql, checkExistingValues, (checkErr, checkResult) => {
    if (checkErr) {
      req.flash('error', 'Error checking existing username and email.');
      return res.render('register', { error: req.flash('error') });
    }

    const existingCount = checkResult[0].count;

    if (existingCount > 0) {
 
      req.flash('error', 'Username or email already in use.');
      return res.render('register', { error: req.flash('error') });
    }

    const insertSql = "INSERT INTO users (firstname, lastname, birthday, gender, address, contact_no, username, email, password, usertype) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const insertValues = [firstname, lastname, birthday, gender, address, contact_no, username, email, hashpass, 'client'];

    con.query(insertSql, insertValues, (insertErr, insertResult) => {
      if (insertErr) {
        req.flash('error', 'Error registering user.');
        return res.render('register', { error: req.flash('error') });
      }

      req.session.username = username;
      req.session.email = email;
      const sqlPosts = "SELECT * FROM rooms";
   
      con.query(sqlPosts, (selectErr, posts) => {
        if (selectErr) {
          req.flash('error', 'Error fetching posts.');
          return res.render('register', { error: req.flash('error') });
        }
    
        // Render the 'index' view with the updated list of posts
        res.render("index", { result: posts });
      });
    });
  });
};

  

exports.postInsert = (req, res) => {

  let room_number = req.body.room_number;
  let description = req.body.description;

  let capacity = req.body.capacity;
  let amenities = req.body.amenities;
  let price = req.body.price;

  let alert;

  const sql =
    "INSERT INTO rooms (room_number, description, capacity, amenities, price) VALUES (?, ?, ?, ?, ?)";

  con.query(sql, [room_number, description, capacity, amenities, price], (err, result) => {
    if (err) {
      console.error(err.message);
      alert = err.message;
    } else {
      alert = "Room successfully inserted!";
    }

    // Redirect with the alert message
    res.redirect("/room?alert=" + encodeURIComponent(alert));

  });
};

// mainCon.js (or your main controller file)
exports.postDelete = (req, res) => {
  const roomId = req.params.id; // Extract room ID from the URL parameter
console.log(roomId);
  const sql = "DELETE FROM rooms WHERE room_id = ?";
  
  con.query(sql, [roomId], (err, result) => {
    if (err) {
      console.error(err.message);
      // Handle the error, send an error response, or redirect to an error page
      res.status(500).send("Internal Server Error");
    } else {
      // Check if any rows were affected (indicating a successful deletion)
      if (result.affectedRows > 0) {
        const alert = "Room successfully deleted!";
        res.redirect("/room?alert=" + encodeURIComponent(alert));
      } else {
        // Room not found (ID might be invalid)
        const alert = "Room not found";
        res.redirect("/room?alert=" + encodeURIComponent(alert));
      }
    }
  });
};
