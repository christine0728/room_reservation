const router = require("express").Router();
const mainCon = require("../controllers/mainController");

const islogin = (req, res, next) => {  
  if (req.session && req.session.user) {
    console.log(req.session.user); 
    next();
  } else { 
    console.log("Redirecting to login");
    res.redirect("/login");
  }
};

const isAdmin = (req, res, next) => {
  if (req.session.user && req.session.user.usertype === 'admin') { 
    next();
  } else { 
    res.status(403).render('access-denied', { message: 'You do not have permission to access this page. Only admins are allowed.' });  
  }
};


router.get("/", islogin ,mainCon.getIndex);
router.get("/index",islogin , (req, res) => {
  res.redirect("/");
});

router.post("/login-user",  mainCon.loginUser);
router.get("/login", (req, res) => {
  const error = req.flash('error') || [];  
  res.render("login", { error }); 
});

router.post("/register-user", mainCon.registerUser);
router.get('/register', (req, res) => { 
  const success = req.flash('success') || [];
  const error = req.flash('success') || []; 
  res.render('register', { success,error });
});


// client side
router.get('/home/:client_id', mainCon.home);
router.get("/avail_room/:client_id/:room_id", mainCon.availRoom); 
router.post("/add_reservation", mainCon.addReservation); 
router.get("/view_reservations/:client_id", mainCon.viewReservations); 


// admin sides
router.get("/room", mainCon.getRoom);
//rooms
router.get("/room", mainCon.getRoom);
router.post("/insert-room", mainCon.postInsert);
router.get("/delete-room/:id", mainCon.postDelete);
router.post("/update-room", mainCon.postUpdate);
//users
router.get("/users", mainCon.getUser);

//reservations
router.get("/reservations", mainCon.getReservation);
router.post("/update-reservation", mainCon.updateStatus);
  
router.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect('/');
});



module.exports = router;
