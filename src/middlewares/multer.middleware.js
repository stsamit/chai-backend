import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // we can do twigs here --> can save file with name as unique ids so that all files have different names
  },
});

export const upload = multer({ storage });
