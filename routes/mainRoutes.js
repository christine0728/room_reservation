const router = require("express").Router();
const mainCon = require("../controllers/mainController");

const islogin = (req, res, next) => {  
  if (req.session && req.session.user) {
    console.log(req.session.user); 
    next();
  } else { 
    console.log("Redirecting to login");
    const error = req.flash('error') || [];  
    res.render("login", { error }); 
  }
};

const isAdmin = (req, res, next) => {
  if (req.session.user && req.session.user.usertype === 'admin') { 
    next();
  } else { 
    res.status(403).render('access-denied', { message: 'You do not have permission to access this page. Only admins are allowed.' });  
  }
};

router.get("/",mainCon.getIndex);
router.get("/home",mainCon.getIndex);
router.get("/index",islogin , (req, res) => {
  res.redirect("/");
});
router.get("/admin/dashboard",mainCon.getdashboard);



router.post("/login-user",  mainCon.loginUser);
router.get("/login", islogin, (req, res) => {
  const error = req.flash('error') || [];  
  res.redirect("/admin/dashboard");

});
router.get('/registeradmin', (req, res) => { 
  const success = req.flash('success') || [];
  const error = req.flash('success') || []; 
  res.render('registeradmin', { success,error, });
});
router.post("/register-user", mainCon.registerUser);
router.post("/register-admin", mainCon.registerAdmin);
router.get('/register', (req, res) => { 
  const success = req.flash('success') || [];
  const error = req.flash('success') || []; 
  res.render('register', { success,error });
});

router.get('/about_us', (req, res) => {  
  res.render('mains/about_us');
});

router.get('/all_rooms', mainCon.getmainRooms);

// client side
router.get('/home/:client_id', mainCon.home);
router.post('/filter/:client_id', mainCon.filterAvails);
router.get("/avail_room/:client_id/:room_id", mainCon.availRoom); 
router.post("/add_reservation", mainCon.addReservation); 
router.get("/view_reservations/:client_id", mainCon.viewReservations); 
router.get("/view_rooms/:client_id", mainCon.viewRooms); 
router.get("/profile/:client_id", mainCon.viewProfile); 
router.get("/edit_profile/:client_id", mainCon.editProfile);
router.post("/update_profile/:client_id", mainCon.updateProfile);


// admin sides
router.get("/room", mainCon.getRoom);
//rooms
router.get("/room", mainCon.getRoom);
router.post("/insert-room", mainCon.postInsert);
router.get("/delete-room/:id", mainCon.postDelete);
router.post("/update-room", mainCon.postUpdate);
//users
router.get("/users", mainCon.getUser);
router.get("/add-post", mainCon.addPost);

//reservations
router.get("/admin/reservations", mainCon.getReservation);
router.post("/update-reservation", mainCon.updateStatus);
router.get("/update-payment/:id", mainCon.updatePayment);

router.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect('/');
});
//amenities
router.get("/amenities",mainCon.getAmenities);
router.post("/insert-amenities", mainCon.postAmenities);
router.post("/update-amenities", mainCon.updateAmenities);


module.exports = router;
