import AWS from "aws-sdk";

AWS.config.update({
  credentials: {
    accessKeyId: process.env.AWS_KEY,
    secretAccessKey: process.env.AWS_SECRET,
  },
  region: process.env.AWS_REGION,
});

const Bucket = "denev-instaclone-uploads";
const bucketInstance = new AWS.S3();

export const uploadToS3 = async (file, userId, folderName) => {
  const { filename, createReadStream } = await file;
  const readStream = createReadStream();
  const objectName = `${folderName}/${userId}-${Date.now()}-${filename}`;
  const { Location } = await bucketInstance
    .upload({
      Body: readStream,
      Bucket,
      Key: objectName,
      ACL: "public-read",
    })
    .promise();
  return Location;
};

export const deleteToS3 = async (fileUrl, folderName) => {
  const filePath = decodeURI(fileUrl).split("/uploads/")[1];
  const params = {
    Bucket: `${Bucket}/${folderName}`,
    Key: filePath,
  };
  await bucketInstance
    .deleteObject(params, (error, data) => {
      if (error) {
        console.log(error);
      } else {
        console.log(data);
      }
    })
    .promise();
};
