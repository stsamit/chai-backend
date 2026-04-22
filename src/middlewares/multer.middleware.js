import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(process.cwd(), "public", "temp"));
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // we can do twigs here --> can save file with name as unique ids so that all files have different names
  },
});

export const upload = multer({ storage });
