const express = require("express");
const router = express.Router();
const Nasa = require("../model/Nasa");
const axios = require("axios");
const NoImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"


router.get("/nasa/home", async (req, res) => {
  try {
    //await Nasa.deleteMany({})
    const response = await axios.get(
      `https://api.nasa.gov/planetary/apod?api_key=UAcyWWjIOcc29HxT5eqDsYLC1GvL1vim7rVwPTYI`
    );
    const nasa = {
      title: response.data.title,
      explanation: response.data.explanation,
      media_type: response.data.media_type,
      url: response.data.url,
    };
    res.status(201).send(nasa)
  } catch (error) {
    res.status(424).send({ error: "Faild to get data from external api" + error });
  }
});

router.get("/nasa/search/:search", async (req, res) => {
  try {
    const response = await axios.get(`https://images-api.nasa.gov/search?q=${req.params.search}`)
    let newData = response.data.collection.items.map((i) => {
      let urlValue = i.links ? i.links[0].href : NoImage
      return {
        title: i.data[0].title,
        explanation: i.data[0].description,
        media_type: i.data[0].media_type,
        url: urlValue,
      }
    })
    res.status(201).send(newData);
  } catch (error) {
    res.status(424).send({ error: "Faild to get data from the searched item" + error });
  }
});

router.post("/nasa/favourites", async (req, res) => {
  try {
    let postExistence
    const nasa2 = await Nasa.find({});
    for (let item of nasa2) {
      if (item.title === req.body.title) {
        postExistence = true
      }
    }

    if (postExistence == true) {
      res.status(208).send({ status: "Already exists" })
    } else {

      let nasa = new Nasa(req.body);
      await nasa.save();
      res.status(201).send({ status: "added" })
    }
  } catch (error) {
    res.status(424).send({ error: "Faild to add a new favourite card" + error });
  }
});

router.get("/nasa/favourites", async (req, res) => {
  try {
    const nasa = await Nasa.find({});
    res.status(201).send(nasa);
  } catch (error) {
    res.status(424).send({ error: "Faild to get the favourties cards" + error });
  }
});



router.delete("/nasa/:title", async (req, res) => {
  const nasaTitle = req.params.title;
  const nasa = await Nasa.deleteMany({
    title: nasaTitle,
  });
  await Nasa.deleteMany({
    title: nasaTitle + "?"
  })

  res.status(204).send(nasa);
});

module.exports = router;
