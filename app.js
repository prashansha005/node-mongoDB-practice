// const express = require("express");
// const app = express();

// const User = require("./userModel");

// app.get("/", (req, res) => {
//   res.send("Hello world");
// });
// app.listen(3000);

// app.get("/create", async (req, res) => {
//   const createdUser = await model.create({
//     name: "prashansha",
//     nickname: "banku",
//     email: "neupane.prashansha2005@gmail.com",
//   });
//   res.send(createdUser);
// });
// app.listen(3000);

//find one

// app.get("/read", async (req, res) => {
//   const readUser = await model.findOne({
//     name: "prashansha",
//     // "nickname":"banku",
//     // "email":"neupane.prashansha2005@gmail.com"
//   });
//   res.send(readUser);
// });
// app.listen(3000);

//findOneAndUpdate

// app.get("/update", async (req, res) => {
//   const updateUser = await model.findOneAndUpdate(
//     { name: "prashansha" },
//     { nickname: "hehe" },
//     { new: "true" }
//     //"nickname":"banku"
//     // "email":"neupane.prashansha2005@gmail.com"
//   );
//   res.send(updateUser);
// });
// app.listen(3000);

// delete

// app.get("/delete", async (req, res) => {
//   const deletedUser = await model.findOneAndDelete({ name: "prashansha" });
//   res.send(deletedUser);
// });
// app.listen(3000);

// app.get("/", (req, res) => {
//   res.send("hello!!!!!!");
// });

// app.post("/create", async (req, res) => {
//   const user = await User.create(req.body);
//   res.send(user);
// });

// app.listen(3000, () => {
//   console.log("Server running on 3000");
// });

//const u=new user(req.body);//creates an object
// await u.save();

// app.use(express.urlencoded({ extended: true })); //HTML form support

// app.get("/", (req, res) => {
//   res.send(`
//       <form action="/create" method="POST">
//          <input type="text" name="name" placeholder="Name"/>
//          <input type="email" name="email" placeholder="Email"/>
//          <input type="text" name="nickname" placeholder="Nickname"/>
//          <button type="submit">submit</button>
//       </form>
//    `);
// });

// app.post("/create", async (req, res) => {
//   const user = await User.create(req.body);
//   res.send(`User saved!Name:${user.name},Email:${user.email}`);
// });

// app.listen(3000, () => {
//   console.log("Server running on 3000");
// });

const express = require("express");
const app = express();
const User = require("./usermodel");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(`
        <h2>Register</h2>
        <form action="/create" method="POST">
           <lable for="name">Name:</lable><br>
            <input type="text" name="name" placeholder="Enter your name" required/>
            <br>

            <lable for="email">Email:</lable><br>
            <input type="email" name="email" placeholder="Enter your email" required/>
            <br>

            <lable for="nickname">Nickname:</lable><br>
            <input type="text" name="nickname" placeholder="Enter your nickname"/>
            <br>

            <lable for="password">Password:</lable><br>
            <input type="Password" name="password" 
            placeholder="Enter your password" required/><br><br>

            <button type="Submit">Submit</button>
        </form>
        <br>
        <p>Already have an account?</p>
        // This button triggers the redirect to the /login route

        <button onclick="" herf=""></button>
        
        `);
});

app.post("/create", async (req, res) => {
  const user = await User.create(req.body);
  res.send("click here to login <a href='/login'>Login</a>");
});

app.get("/login", (req, res) => {
  res.send(`
        <section style="display:flex; justify-content:center; align-items:center; height:100vh; background:#f4f4f9;">
            <div class="box" style="background:#fff; padding:30px; border-radius:10px; box-shadow:0 4px 10px rgba(0,0,0,0.2); width:300px; text-align:center;">
                <h1 class="header" style="font-family:Arial, sans-serif; font-size:24px; color:#333; margin-bottom:20px;">Signup Form</h1>
    
                <form method="post" action="#" enctype="multipart/form-data" style="display:flex; flex-direction:column; gap:15px;">
      
                    <label for="username" style="font-size:14px; font-weight:bold; text-align:left; color:#555;">Username</label>
                    <input type="text" placeholder="Enter your name" id="username" 
                    style="padding:10px; border:1px solid #ccc; border-radius:5px; font-size:14px;" />
      
                    <label for="password" style="font-size:14px; font-weight:bold; text-align:left; color:#555;">Password</label>
                    <input type="password" placeholder="Enter your password" id="password" 
                    style="padding:10px; border:1px solid #ccc; border-radius:5px; font-size:14px;" />
      
                    <button onclick="window.location.href='./login'" 
                        style="padding:10px; background:#4CAF50; color:#fff; border:none; border-radius:5px; font-size:16px; cursor:pointer;">
                        Sign In
                    </button>
                 </form>
            </div>
        </section>
    `);
});

app.post("/login", async (req, res) => {
  res.send("Helloo i am Prashansha");
});
app.listen(5000, () => {
  console.log("helloo");
});
