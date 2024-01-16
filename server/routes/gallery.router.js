const express = require('express');
const router = express.Router();
const pool = require("../modules/pool");

// PUT /gallery/like/:id
router.put('/like/:id', (req, res) => {
  // code here
  let galleryId = req.params.id;
  let galleryLikes = req.body.likes;

  console.log("req body:", req.body);
  console.log("likes:", galleryLikes);

  

  const queryText = `UPDATE "gallery" SET "likes" = "likes" +1 WHERE "id" = $1;`;
  const queryParams = [galleryId]
  
  pool.query(queryText, queryParams)
  .then((result) => {
    console.log("Put returned info:", result)
    res.sendStatus(200);
  })
  .catch((error)=> {
    console.log("Error:", error);
  });
});



// GET /gallery
router.get('/', (req, res) => {
  // code here
  const queryText = `SELECT * FROM gallery;`;
  pool.query(queryText)
      .then((result) => {
          console.log(`Got stuff back from the database`, result);
          res.send(result.rows);
      })
      .catch((error) => {
          console.log(`Error making database query ${queryText}`, error);
          res.sendStatus(500); // Good server always responds
      })
});

module.exports = router;
