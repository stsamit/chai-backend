// very useful file can be used in any project
import { v2 as cloudinary } from "cloudinary";
import fs from "fs"; // nodejs file system  built in nodejs

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    //upload the file on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    //file has been uploaded successfully
    // console.log("File is uploaded on cloudinary", response.url);
    fs.unlinkSync(localFilePath);
    return response;
  } catch (error) {
    console.log("cloudinary error: ", error);
    fs.unlinkSync(localFilePath); // remove the locally saved temporary file as the upload operation got failed
    return null;
  }
};

const deleteFromCloudinary = async (public_id) => {
  try {
    if (!public_id) return null;
    const response = await cloudinary.uploader.destroy(public_id);
    console.log(`${public_id} file deleted successully`);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export { uploadOnCloudinary, deleteFromCloudinary };
