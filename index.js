const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "success" });
});
app.post("/", (req, res) => {
  const { email, password } = req.body;
  if (email === "daniel" && password === "123456") {
    res.status(200).json({
      isSuccessful: true,
      message: "success",
      user: {
        id: 1,
        email: "daniel@ad.com",
        name: "daniel kao",
        created_at: new Date(),
        updated_at: new Date(),
      },
    });
  } else {
    res.status(401).json({
      isSuccessful: false,
      message: "invalid email or password",
    });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
