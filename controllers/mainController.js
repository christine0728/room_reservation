const result  = require("lodash");
const con = require("../db/connection");

const argon2  = require("argon2");

exports.getIndex = (req, res) => {
  res.render("mains/main",); 
};
exports.getdashboard = (req, res) => {
  // Query to get the count of rooms
  const getRoomsCountQuery = "SELECT COUNT(*) AS roomCount FROM rooms";
  
  // Query to get the count of users
  const getUsersCountQuery = "SELECT COUNT(*) AS userCount FROM users";
  
  // Query to get the count of reservations
  const getReservationsCountQuery = "SELECT COUNT(*) AS reservationCount FROM reservations";

  // Execute the queries
  con.query(getRoomsCountQuery, (errRooms, resultRooms) => {
    if (errRooms) {
      console.error(errRooms.message);
      return res.status(500).json({ error: 'Internal server error' });
    }

    con.query(getUsersCountQuery, (errUsers, resultUsers) => {
      if (errUsers) {
        console.error(errUsers.message);
        return res.status(500).json({ error: 'Internal server error' });
      }

      con.query(getReservationsCountQuery, (errReservations, resultReservations) => {
        if (errReservations) {
          console.error(errReservations.message);
          return res.status(500).json({ error: 'Internal server error' });
        }

        // Render the dashboard view with the obtained counts
        res.render("dashboard", {
          roomCount: resultRooms[0].roomCount,
          userCount: resultUsers[0].userCount,
          reservationCount: resultReservations[0].reservationCount
        });
      });
    });
  });
};
exports.getdashboard = (req, res) => {
  // Query to get the count of rooms
  const getRoomsCountQuery = "SELECT COUNT(*) AS roomCount FROM rooms";
  
  // Query to get the count of users
  const getUsersCountQuery = "SELECT COUNT(*) AS userCount FROM users";
  
  // Query to get the count of reservations
  const getReservationsCountQuery = "SELECT COUNT(*) AS reservationCount FROM reservations";

  // Execute the queries
  con.query(getRoomsCountQuery, (errRooms, resultRooms) => {
    if (errRooms) {
      console.error(errRooms.message);
      return res.status(500).json({ error: 'Internal server error' });
    }

    con.query(getUsersCountQuery, (errUsers, resultUsers) => {
      if (errUsers) {
        console.error(errUsers.message);
        return res.status(500).json({ error: 'Internal server error' });
      }

      con.query(getReservationsCountQuery, (errReservations, resultReservations) => {
        if (errReservations) {
          console.error(errReservations.message);
          return res.status(500).json({ error: 'Internal server error' });
        }

        // Render the dashboard view with the obtained counts
        res.render("dashboard", {
          roomCount: resultRooms[0].roomCount,
          userCount: resultUsers[0].userCount,
          reservationCount: resultReservations[0].reservationCount
        });
      });
    });
  });
};
exports.getdashboard = (req, res) => {
  // Query to get the count of rooms
  const getRoomsCountQuery = "SELECT COUNT(*) AS roomCount FROM rooms";
  
  // Query to get the count of users
  const getUsersCountQuery = "SELECT COUNT(*) AS userCount FROM users";
  
  // Query to get the count of reservations
  const getReservationsCountQuery = "SELECT COUNT(*) AS reservationCount FROM reservations";

  // Execute the queries
  con.query(getRoomsCountQuery, (errRooms, resultRooms) => {
    if (errRooms) {
      console.error(errRooms.message);
      return res.status(500).json({ error: 'Internal server error' });
    }

    con.query(getUsersCountQuery, (errUsers, resultUsers) => {
      if (errUsers) {
        console.error(errUsers.message);
        return res.status(500).json({ error: 'Internal server error' });
      }

      con.query(getReservationsCountQuery, (errReservations, resultReservations) => {
        if (errReservations) {
          console.error(errReservations.message);
          return res.status(500).json({ error: 'Internal server error' });
        }

        // Render the dashboard view with the obtained counts
        res.render("dashboard", {
          roomCount: resultRooms[0].roomCount,
          userCount: resultUsers[0].userCount,
          reservationCount: resultReservations[0].reservationCount
        });
      });
    });
  });
};
exports.getdashboard = (req, res) => {
  // Query to get the count of rooms
  const getRoomsCountQuery = "SELECT COUNT(*) AS roomCount FROM rooms";
  
  // Query to get the count of users
  const getUsersCountQuery = "SELECT COUNT(*) AS userCount FROM users";
  
  // Query to get the count of reservations
  const getReservationsCountQuery = "SELECT COUNT(*) AS reservationCount FROM reservations";

  // Execute the queries
  con.query(getRoomsCountQuery, (errRooms, resultRooms) => {
    if (errRooms) {
      console.error(errRooms.message);
      return res.status(500).json({ error: 'Internal server error' });
    }

    con.query(getUsersCountQuery, (errUsers, resultUsers) => {
      if (errUsers) {
        console.error(errUsers.message);
        return res.status(500).json({ error: 'Internal server error' });
      }

      con.query(getReservationsCountQuery, (errReservations, resultReservations) => {
        if (errReservations) {
          console.error(errReservations.message);
          return res.status(500).json({ error: 'Internal server error' });
        }

        // Render the dashboard view with the obtained counts
        res.render("dashboard", {
          roomCount: resultRooms[0].roomCount,
          userCount: resultUsers[0].userCount,
          reservationCount: resultReservations[0].reservationCount
        });
      });
    });
  });
};

exports.getRoom = (req, res)=>{
  const alert = req.query.alert || "";
  // const sql = "SELECT * FROM rooms";

  const sql = "SELECT * FROM rooms";
  const sql2 = "SELECT * FROM amenities";
  con.query(sql, (err, result) => {
    if (err) throw err; 
    con.query(sql2, (err, result1) => {
      if (err) throw err; 
      res.render("room", {result, result1,  alert });
    });
  });
 
  // con.query(sql, (err, result) => {
  //   if (err) {
  //     console.log(err.message);
  //     return;
  //   } 
  //   res.render("room", {result,  alert });
  // });
};

exports.getAmenities = (req, res)=>{
  const alert = req.query.alert || "";
  const sql = "SELECT * FROM amenities";
  con.query(sql, (err, result) => {
    if (err) {
      console.log(err.message);
      return;
    } 
    res.render("admin_amenities", {result,  alert });
  });
};
// Assuming mainCon.js


//reservation controller
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
    const alert = "reservation successfully updated!";
    // Successful update
    res.redirect("/admin/reservations?alert=" + encodeURIComponent(alert));
  });
};
exports.updatePayment = (req, res) => {
  const { id } = req.params; 
  console.log(id);

  // Fetch the current value of 'paid' for the reservation_id
  const getPaymentStatusQuery = "SELECT paid FROM reservations WHERE reservation_id = ?";
  con.query(getPaymentStatusQuery, [id], (err, rows) => {
    if (err) {
      console.error(err.message);
      return res.status(500).json({ error: 'Internal server error' });
    }

    if (rows.length === 0) {
      return res.status(404).json({ error: 'Reservation not found' });
    }

    const currentPaymentStatus = rows[0].paid;

    // Toggle the 'paid' status (0 to 1, 1 to 0)
    const newPaymentStatus = currentPaymentStatus === 0 ? 1 : 0;

    // Set paid_date to NOW() if newPaymentStatus is 0, else set it to NULL
    const paidDateValue = newPaymentStatus === 0 ? 'NOW()' : 'NULL';

    // Update the 'paid' status and 'paid_date' for the reservation_id
    const updatePaymentQuery = "UPDATE reservations SET paid = ?, paid_date = " + paidDateValue + " WHERE reservation_id = ?";
    con.query(updatePaymentQuery, [newPaymentStatus, id], (updateErr, result) => {
      if (updateErr) {
        console.error(updateErr.message);
        return res.status(500).json({ error: 'Internal server error' });
      }

      if (result.affectedRows === 0) {
        return res.status(404).json({ error: 'Reservation not found' });
      }

      const alert = "Reservation payment status successfully updated!";
      res.redirect("/admin/reservations?alert=" + encodeURIComponent(alert));
    });
  });
};



exports.getUser = (req, res)=>{
  const alert = req.query.alert || "";
  const sql = "SELECT * FROM users where usertype='admin'";
  con.query(sql, (err, result) => {
    if (err) {
      console.log(err.message);
      return;
    } 
    const success = req.flash('success') || [];
    const error = req.flash('success') || []; 
   
    res.render("users", {result,  alert, error });
  });
};

exports.getReservation = (req, res) => {
  const alert = req.query.alert || "";
  const sql =
    "SELECT reservations.*, rooms.*, users.username " +
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

  const { email, password } = req.body;
  const userSql = "SELECT * FROM users WHERE email= ?";
  const postsSql = "SELECT * FROM rooms"; 
  const getRoomsCountQuery = "SELECT COUNT(*) AS roomCount FROM rooms";
  
  // Query to get the count of users
  const getUsersCountQuery = "SELECT COUNT(*) AS userCount FROM users";
  
  // Query to get the count of reservations
  const getReservationsCountQuery = "SELECT COUNT(*) AS reservationCount FROM reservations";
  if (!email || !password) { 
    return res.render('login', { alertMessage: 'email and password are required.' });
  } 
  let alert = ""; 
  
  con.query(userSql, [email], async (err, userResult) => {
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
            return res.redirect(`/admin/dashboard`);
         
          }
          if (userResult[0].usertype === 'client') {
            let client_id = userResult[0].id;
            const id = req.params.id;
            const sql = "SELECT * FROM rooms";
            con.query(sql, (err, rooms) => { 
              // res.render("home", { rooms, client_id });
              // return res.redirect('/home');
              return res.redirect(`/home/${client_id}`);
            });
          }
          // res.render('index', { user: userResult[0], result });
        });
      } 
      else {
        req.flash('error', 'Invalid password');
        res.render("login", { error: req.flash('error')  });
      }
    }  
    else {
      console.log('d'); 
      req.flash('error', 'Invalid email'); 
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
        // res.render("login", { result: posts });
        res.redirect(`/login`);
      });
    });
  });
};
 
exports.registerAdmin = async (req, res) => {
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
    const insertValues = [firstname, lastname, birthday, gender, address, contact_no, username, email, hashpass, 'admin']; 
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
        // res.render("login", { result: posts });
        res.redirect(`/users`);
      });
    });
  });
};

exports.home = (req, res) => {
  // res.json(req.body); 
  const client_id = req.params.client_id;
  let roomsavail = "can";
  const ifsql = "SELECT * FROM reservations WHERE user_id = ?";
  con.query(ifsql, [client_id], (err, result) => {
    result.forEach(res => {
      id = res.id;
      if (id === null){
        console.log("okay");
        roomsavail = "can";
      }
      else { 
        // console.log("di");
        roomsavail = "cannot";
      } 
    }); 
  }); 

  const sql = "SELECT * FROM rooms";
  con.query(sql, (err, rooms) => { 
    res.render("clients/home", { rooms, client_id, roomsavail });
  });
}; 

exports.filterAvails = (req, res) => {
  const client_id = req.body.client_id;
  const from_date = req.body.from_date;
  const to_date = req.body.to_date;

  const sql = `
    SELECT rooms.*
    FROM rooms
    WHERE NOT EXISTS (
      SELECT 1
      FROM reservations
      WHERE reservations.room_id = rooms.room_id
      AND (reservations.start_date <= ? AND reservations.end_date >= ?)
    );
  `;

  console.log(from_date);
  console.log(to_date);
  con.query(sql, [from_date, to_date], (err, availableRooms) => {  
    // res.redirect(`home/${client_id}`);
    res.render('clients/home', { client_id, rooms: availableRooms });
  });
  
}

exports.availRoom = (req, res) => {
  // res.json(req.body);
  const roomid = req.params.room_id;
  const client_id = req.params.client_id;
  // req.session.id = client_id;
  // console.log('here');
  // console.log(req.session.id);
  const sql = "SELECT * FROM users WHERE id = ?";
  const sql2 = "SELECT * FROM rooms WHERE room_id = ?";
  con.query(sql, [client_id], (err, results1) => {
    if (err) throw err; 
    con.query(sql2, [roomid], (err, results2) => {
      if (err) throw err; 
      res.render("clients/avail_room", { results1, results2, client_id });
    });
  });
}; 

exports.updateAmenities = (req, res) => { 
  const { id, amenities, description} = req.body; 


  console.log(description);
  const sql = "UPDATE amenities SET name = ?, description = ? WHERE id = ?"; 
  con.query(sql, [amenities, description, id], (err, result) => {
    if (err) {
      console.error(err.message);
      return res.status(500).json({ error: 'Internal server error' });
    } 
    if (result.affectedRows === 0) {
      // No rows were affected, meaning the room_id was not found
      return res.status(404).json({ error: 'Amenities not found' });
    }
    const alert = "Amenities successfully updated!";
    res.redirect("/amenities?alert=" + encodeURIComponent(alert));
    // Successful update 
  });
};

exports.postAmenities = (req, res) => {
  let amenities = req.body.amenities;
  let desc = req.body.description;

  let alert = "Amenities successfully inserted!";
 
  const sql =
    "INSERT INTO amenities (name, description) VALUES ( ?, ?)";
  con.query(sql, [amenities, desc], (err, result) => {
    if (err) {
      // console.log(err.message);
      alert = err.message;
    } else {
      let alert = "Amenities successfully inserted!";
    }
    // res.json(req.body);
    res.redirect("/amenities?alert=" + encodeURIComponent(alert));
  });
};

exports.addReservation = (req, res) => {
  let room_id = req.body.room_id;
  let client_id = req.body.client_id;
  let start_date = req.body.start_date;
  let end_date = req.body.end_date;
  let alert = "Blog successfully inserted!";
 
  const sql =
    "INSERT INTO reservations (room_id, user_id, start_date, end_date, status, created_at) VALUES (?, ?, ?, ?, 'pending', NOW())";
  con.query(sql, [room_id, client_id, start_date, end_date], (err, result) => {
    if (err) {
      // console.log(err.message);
      alert = err.message;
    } else {
      alert = "your message has been recorded";
    }
    // res.json(req.body);
    res.redirect(`home/${client_id}`);
  });
};

exports.viewReservations = (req, res) => {
  const client_id = req.params.client_id;
  const alert = req.query.alert || "";
  const sql =
    "SELECT reservations.*, rooms.*, users.* " +
    "FROM reservations " +
    "JOIN rooms ON reservations.room_id = rooms.room_id " +
    "JOIN users ON reservations.user_id = users.id where users.id = ?";

  con.query(sql, [client_id], (err, results1) => {
    if (err) {
      console.log(err.message);
      return res.status(500).send("Internal Server Error");
    }

    // Assuming you have a 'users' view for rendering
    res.render("clients/view_reservations", { results1, client_id });
  });
};

exports.viewRooms = (req, res) => {
  // res.json(req.body);
  const client_id = req.params.client_id;
  let roomsavail = "can";
  const ifsql = "SELECT * FROM reservations WHERE user_id = ?";
  con.query(ifsql, [client_id], (err, result) => {
    result.forEach(res => {
      id = res.id;
      if (id === null){
        // console.log("okay");
        roomsavail = "can";
      }
      else { 
        // console.log("di");
        roomsavail = "cannot";
      } 
    }); 
  }); 

  const sql = "SELECT * FROM rooms";
  con.query(sql, (err, rooms) => { 
    res.render("clients/view_rooms", { rooms, client_id, roomsavail });
  });
}; 

exports.viewProfile = (req, res) => {
  const client_id = req.params.client_id;
  const alert = req.query.alert || "";
  const sql = "SELECT * FROM users WHERE id = ?";

  con.query(sql, [client_id], (err, results1) => {
    if (err) {
      console.log(err.message);
      return res.status(500).send("Internal Server Error");
    }

    // Assuming you have a 'users' view for rendering
    res.render("clients/profile", { results1, client_id });
  });
};

exports.editProfile = (req, res) => {
  const client_id = req.params.client_id;
  const alert = req.query.alert || "";
  const sql = "SELECT * FROM users WHERE id = ?";

  con.query(sql, [client_id], (err, results1) => {
    if (err) {
      console.log(err.message);
      return res.status(500).send("Internal Server Error");
    }

    // Assuming you have a 'users' view for rendering
    res.render("clients/edit_profile", { results1, client_id });
  });
};

exports.updateProfile = (req, res) => {
  let client_id = req.body.client_id;
  const { firstname, lastname, address, email, contact_no, birthday, gender} = req.body; 
  const sql = "UPDATE users SET firstname = ?, lastname = ?, address = ?, email = ?, contact_no = ?, birthday = ?, gender = ? WHERE id = ?"; 
  con.query(sql, [firstname, lastname, address, email, contact_no, birthday, gender, client_id], (err, result) => {
    if (err) {
      console.error(err.message);
      return res.status(500).json({ error: 'Internal server error' });
    } 
    if (result.affectedRows === 0) {
      // No rows were affected, meaning the room_id was not found
      return res.status(404).json({ error: 'User not found' });
    }
    const alert = "User successfully updated!";
    res.redirect(`/profile/${client_id}`);
    // Successful update 
  });
};


exports.viewPost = (req, res) => {
  // res.json(req.body);
  const id = req.params.id;
  const sql = "SELECT * FROM posts WHERE id = ?";
  con.query(sql, [id], (err, result) => {
    if (err) {
      console.log(err.message);
      return res.status(500).send('Internal Server Error');
    }

    if (result.length === 0) {

      return res.status(404).send('Post not found');
    }

    const post = result[0]; 
    res.render("viewpost", { post });
  });

};

exports.addPost = (req, res) => {

  res.render("addpost", { });

};

// insert room

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

const fs = require('fs');
const path = require('path');
//roomController
const imageDir = path.join(__dirname, 'public', 'imgs');

exports.postInsert = (req, res) => {
  let room_type = req.body.room_type;
  let room_floor = req.body.room_floor;
  let area_sqm = req.body.area_sqm;
  let capacity = req.body.capacity;
  let amenities = req.body.amenities;
  let price = req.body.price;
  let image = req.body.image;
  let alert;
console.log(image);
  if (image ) {
    const imageFile = req.files.image;
    const imageFileName = 'image-' + Date.now() + path.extname(imageFile.name);
    const imagePath = path.join(imageDir, imageFileName);

    // Save the image to public/images
    fs.writeFileSync(imagePath, imageFile.data);

    const sql =
      "INSERT INTO rooms (room_type, room_floor, capacity, amenities, price_per_hour, area_sqm, image) VALUES (?, ?, ?, ?, ?, ?, ?)";

    con.query(sql, [room_type, room_floor, capacity, amenities, price, area_sqm, imageFileName], (err, result) => {
      if (err) {
        console.error(err.message);
        alert = "Error inserting room: " + err.message;
      } else {
        alert = "Room successfully inserted!";
      }

      // Redirect with the alert message
      res.redirect("/room?alert=" + encodeURIComponent(alert));
    });
  } else {
    // Handle the case where no file is provided
    alert = "Error: No image provided.";
    res.redirect("/room?alert=" + encodeURIComponent(alert));
  }
};

exports.postUpdate = (req, res) => { 
  console.log('Request Body:', req.body);
  const { room_id, room_type, room_floor, capacity, amenities, price, '\tarea_sqm': area_sqm } = req.body;

  const sql = "UPDATE rooms SET room_type = ?, room_floor = ?, capacity = ?, amenities = ?, price_per_hour = ? WHERE room_id = ?"; 
  con.query(sql, [room_type, room_floor, capacity, amenities, price, room_id], (err, result) => {
    if (err) {
      console.error(err.message);
      return res.status(500).json({ error: 'Internal server error' });
    } 
    if (result.affectedRows === 0) {
      // No rows were affected, meaning the room_id was not found
      return res.status(404).json({ error: 'Room not found' });
    }
    const alert = "Room successfully updated!";
    res.redirect("/room?alert=" + encodeURIComponent(alert));
    // Successful update 
  });
};