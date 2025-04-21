const { createUser, deleteUser, getUser, getUsers, editUser } = require('../routes/apis/restApis');
const User = require('../models/user');
const express = require("express");
const router = express.Router();

const JSON_TYPE = { Content_type: "application/json" };

// Allows all access control 
router.use((req, res, next) => {
  res.set({
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,OPTIONS",
    "Access-Control-Allow-Headers":
      "Content-Type, Access-Control-Allow-Headers",
  });
  next();
});

// listings all
router.get("/", async (req, res) => {
  try {
    const result = await getUsers();
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error });
  }
});

// listing user
router.get("/:userid", async (req, res) => {
  try {
    const result = await getUser(req.params.id);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error });
  }
});

// Creates user
router.post("/", uploader.single("image"), async (req, res, next) => {
  const { name, email, gender, status } = req.body;
  const user = new User(name, email, gender, status);

  try {
    const result = await createUser(user);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error });
  }
});

/**
 * Updates listing in db and navigates back to user paged
 */
router.put("/:id", async (req, res, next) => {
  const { name, email, gender, status } = req.body;
  const updatedUser = new User(name, email, gender, status);

  try {
    const result = await editUser(user);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error });
  }
});

router.delete("/:id",async (req, res, next) => {
  try {
    const result = await deleteUser(user);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error });
  }
});

module.exports = router;
