import { Client } from 'minio'

// Initialize the Minio client
const minioClient = new Client({
  endPoint: 'localhost', // e.g., 'localhost' or 'play.min.io'
  port: 9000, // Default MinIO port
  useSSL: false, // Set to true if using HTTPS
  accessKey: 'my-access-key',
  secretKey: 'my-secret-key'
})

const bucketName = 'my-bucket'
const objectName = 'my-file.txt'
const expiry = 24 * 60 * 60 // Expiry in seconds (e.g., 24 hours)

minioClient.presignedPutObject(bucketName, objectName, expiry, function(err, presignedUrl) {
  if (err) {
    return console.log(err);
  }
  console.log('Presigned URL for upload:', presignedUrl)
  // This presignedUrl can now be used by a client to upload the object
})
