var express = require("express");
var router = express.Router();
const { TTScraper, fetchAllVideosFromUser } = require("tiktok-scraper-ts");
const TikTokScraper = new TTScraper();
/* GET home page. */
router.get("/", async function (req, res, next) {
  try {
    // const fetchVideo = await TikTokScraper.video(
    //   "https://www.tiktok.com/@shelvysilviaaa/video/7103496301215632666?is_copy_url=1&is_from_webapp=v1"
    // );
    const fetchVideoall = await fetchAllVideosFromUser("dian1up");
    res.json(fetchVideoall);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
