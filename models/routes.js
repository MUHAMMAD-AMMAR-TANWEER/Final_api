const express = require("express");
const Post = require("./Identifier"); // new
const router = express.Router();

const Customer = require("./Customer").Customer;

const d = new Date();

router.get("/data/:Device", async (req, res) => {
  try {
    const post = await Post.findOne(
      { Device: req.params.Device },
      { customer: 0 }
    );
    res.send(post);
  } catch {
    res.status(404);
    res.send({ error: "Post doesn't exist!" });
  }
});

// login API has been done
router.post("/login/", async (req, res) => {
  if (!req.body.email) {
    res.status(400).send({ message: "Please enter an email" });
    return;
  }

  if (!req.body.password) {
    res.status(400).send({ message: "Please enter password" });
    return;
  }

  const customer = await Customer.findOne({
    email: req.body.email,
    password: req.body.password,
  }).then((customer) => {
    if (!customer) {
      res.status(400).send("Please first SignUP");
    } else {
      res.send("Login");
    }
  });
});

router.post("/signup", async (req, res) => {
  if (!req.body.email) {
    res.status(400).send({ message: "Please enter an email" });
    return;
  }

  if (!req.body.password) {
    res.status(400).send({ message: "Please enter password" });
    return;
  }

  const customer = new Customer({
    email: req.body.email,
    password: req.body.password,
  });

  await customer
    .save()
    .then((customer) => {
      res.status(200).send({ message: "User Registered" });
    })
    .catch((err) =>
      res.status(400).send({ message: "Email Already registed" })
    );
});

router.post("/addDevice", async (req, res) => {
  if (!req.body.Device) {
    res.status(400).send({ message: "Please enter Device Name" });
    return;
  }

  const customer = await Customer.findOne({
    email: req.body.email,
  }).then((customer) => {
    console.log(customer)
    if (!customer) {
      res.status(400).send("Please first SignUP");
    } else {
      const newPost = new Post({
        Device: req.body.Device,
        customer
      });

      newPost
        .save()
        .then((newPost) => {
          res.status(200).send({ message: "Device Registered" });
        })
        .catch((err) =>
          res.status(400).send({ message: "Something went wrong" })
        );

    }
  });
});


router.put("/addDeviceu", async (req, res) => {
  if (!req.body.Device) {
    res.status(400).send({ message: "Please enter Device Name" });
    return;
  }

  const customer = await Customer.findOne({
    email: req.body.email,
  }).then((customer) => {
    console.log(customer)
    if (!customer) {
      res.status(400).send("Please first SignUP");
    } else {
      console.log(customer._id)
      Post.findOneAndUpdate({ "customer.email": req.body.email }, { Device: req.body.Device }, { new: true })
        .then((newPost) => {
          res.status(200).send({ message: "Device Registered" });
        })
        .catch((err) =>
          res.status(400).send({ message: "Something went wrong" })
        );

    }
  });
});


router.post("/addPattern", async (req, res) => {
  console.log(req.body)
  if (!req.body.Device) {
    res.status(400).send({ message: "Please enter Device Name" });
    return;
  }

  if (!req.body.Pattern) {
    res.status(400).send({ message: "Please select the pattern" });
    return;
  }

  if (!req.body.x || !req.body.y) {
    res.status(400).send({ message: "Please draw the pattern" });
    return;
  }
  if (req.body.Pattern == "pattern1") {
    const updating_pattern = await Post.updateOne(
      {
        Device: req.body.Device,
      },
      {
        $set: {
          "pos.X_cord.X_cord1": req.body.x,
          "pos.Y_cord.Y_cord1": req.body.y,
        },
      }
    )
      .then((updating_pattern) => {
        res.status(200).send({ message: "Pattern is updated" });
      })
      .catch((err) =>
        res.status(400).send({ message: "Something went wrong" })
      );
  }

  if (req.body.Pattern == "pattern2") {
    const updating_pattern = await Post.updateOne(
      {
        Device: req.body.Device,
      },
      {
        $set: {
          "pos.X_cord.X_cord2": req.body.x,
          "pos.Y_cord.Y_cord2": req.body.y,
        },
      }
    )
      .then((updating_pattern) => {
        res.status(200).send({ message: "Pattern is updated" });
      })
      .catch((err) =>
        res.status(400).send({ message: "Something went wrong" })
      );
  }

  if (req.body.Pattern == "pattern3") {
    const updating_pattern = await Post.updateOne(
      {
        Device: req.body.Device,
      },
      {
        $set: {
          "pos.X_cord.X_cord3": req.body.x,
          "pos.Y_cord.Y_cord3": req.body.y,
        },
      }
    )
      .then((updating_pattern) => {
        res.status(200).send({ message: "Pattern is updated" });
      })
      .catch((err) =>
        res.status(400).send({ message: "Something went wrong" })
      );
  }
});

router.post("/addSchedule", async (req, res) => {
  if (!req.body.Device) {
    res.status(400).send({ message: "Please enter Device Name" });
    return;
  }

  if (!req.body.Date) {
    res.status(400).send({ message: "Please select Date" });
    return;
  }

  if (!req.body.Start_Time) {
    res.status(400).send({ message: "Please select Start_time" });
    return;
  }

  if (!req.body.End_Time) {
    res.status(400).send({ message: "Please select END_time" });
    return;
  }

  if (!req.body.Sound) {
    res.status(400).send({ message: "Sound" });
    return;
  }

  if (req.body.Pattern == "pattern1") {
    const updating_pattern = await Post.updateOne(
      {
        Device: req.body.Device,
      },
      {
        $set: {
          "Schedule.Schedule1.Date": req.body.Date,
          "Schedule.Schedule1.StartTime": req.body.Start_Time,
          "Schedule.Schedule1.End_Time": req.body.End_Time,
          "Schedule.Schedule1.Sound": req.body.Sound,
          "Schedule.Schedule1.Day": req.body.Day,
          "Schedule.Schedule1.Status": req.body.Status,
        },
      }
    )
      .then((updating_pattern) => {
        res.status(200).send({ message: "Schedule  is set" });
      })
      .catch((err) =>
        res.status(400).send({ message: "Something went wrong" })
      );
  }

  if (req.body.Pattern == "pattern2") {
    const updating_pattern = await Post.updateOne(
      {
        Device: req.body.Device,
      },
      {
        $set: {
          "Schedule.Schedule2.Date": req.body.Date,
          "Schedule.Schedule2.Start_Time": req.body.Start_Time,
          "Schedule.Schedule2.End_Time": req.body.End_Time,
          "Schedule.Schedule2.Sound": req.body.Sound,
          "Schedule.Schedule2.Day": req.body.Day,
          "Schedule.Schedule2.Status": req.body.Status,
        },
      }
    )
      .then((updating_pattern) => {
        res.status(200).send({ message: "Schedule  is set" });
      })
      .catch((err) =>
        res.status(400).send({ message: "Something went wrong" })
      );
  }
  if (req.body.Pattern == "pattern3") {
    const updating_pattern = await Post.updateOne(
      {
        Device: req.body.Device,
      },
      {
        $set: {
          "Schedule.Schedule3.Date": req.body.Date,
          "Schedule.Schedule3.StartTime": req.body.Start_Time,
          "Schedule.Schedule3.End_Time": req.body.End_Time,
          "Schedule.Schedule3.Sound": req.body.Sound,
          "Schedule.Schedule3.Day": req.body.Day,
          "Schedule.Schedule3.Status": req.body.Status,
        },
      }
    )
      .then((updating_pattern) => {
        res.status(200).send({ message: "Schedule  is set" });
      })
      .catch((err) =>
        res.status(400).send({ message: "Something went wrong" })
      );
  }
});

module.exports = router;
