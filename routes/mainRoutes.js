const router = require("express").Router();
const mainCon = require("../controllers/mainController");

const islogin = (req, res, next) => {
  // Check if the user is authenticated (adjust this based on your authentication logic)

  if (req.session && req.session.user) {
    console.log(req.session.user);
    // User is authenticated, proceed to the next middleware or route handler
    next();
  } else {
    // User is not authenticated, redirect to the login page
    console.log("Redirecting to login");
    res.redirect("/login");
  }
};
const isAdmin = (req, res, next) => {
  if (req.session.user && req.session.user.usertype === 'admin') {
    // User is an admin, allow access
    next();
  } else {
    // User is not an admin, deny access
    res.status(403).render('access-denied', { message: 'You do not have permission to access this page. Only admins are allowed.' });


  }
};


router.get("/", islogin ,mainCon.getIndex);
router.get("/index",islogin , (req, res) => {
  res.redirect("/");
});
router.get("/login", (req, res) => {
  const error = req.flash('error') || []; // Use 'error' instead of 'success'

  res.render("login", { error }); // Pass the error variable as an object
});
router.get('/register', (req, res) => {
  // Get flash messages
  const success = req.flash('success') || [];
  const error = req.flash('success') || [];

  // Render the view with flash messages
  res.render('register', { success,error });
});
router.post("/login-user",  mainCon.loginUser);
router.post("/register-user", mainCon.registerUser);

router.get("/room", mainCon.getRoom);
router.post("/insert-post", mainCon.insertPost);
router.post("/update-post", mainCon.updatePost);
router.get("/view-post/:id", mainCon.viewPost);


router.get("/add-post",isAdmin, islogin , mainCon.addPost);

router.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect('/');
});

router.get("/edit-post/:id", isAdmin, mainCon.editPost);
router.get("/delete-post/:id", isAdmin, mainCon.deletePost);

//rooms
router.get("/room", mainCon.getRoom);
router.post("/insert-room", mainCon.postInsert);
router.get("/delete-room/:id", mainCon.postDelete);

//users
router.get("/users", mainCon.getUser);

//reservations
router.get("/reservations", mainCon.getReservation);
module.exports = router;
