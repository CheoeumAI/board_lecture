import { GetObjectCommand, PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

function getS3Client() {
  const endpoint = process.env.S3_ENDPOINT;
  const region = process.env.S3_REGION;
  const accessKeyId = process.env.S3_ACCESS_KEY_ID;
  const secretAccessKey = process.env.S3_SECRET_ACCESS_KEY;

  if (!endpoint || !region || !accessKeyId || !secretAccessKey) {
    throw new Error("S3 storage environment variables are not configured.");
  }

  return new S3Client({
    endpoint,
    region,
    forcePathStyle: true,
    credentials: { accessKeyId, secretAccessKey }
  });
}

export function getBucketName() {
  const bucket = process.env.S3_BUCKET;
  if (!bucket) throw new Error("S3_BUCKET is not configured.");
  return bucket;
}

export async function uploadObject(params: {
  key: string;
  body: Buffer;
  contentType: string;
}) {
  const client = getS3Client();
  await client.send(
    new PutObjectCommand({
      Bucket: getBucketName(),
      Key: params.key,
      Body: params.body,
      ContentType: params.contentType
    })
  );
}

export async function getDownloadUrl(key: string, fileName: string) {
  const client = getS3Client();
  const command = new GetObjectCommand({
    Bucket: getBucketName(),
    Key: key,
    ResponseContentDisposition: `attachment; filename*=UTF-8''${encodeURIComponent(fileName)}`
  });

  return getSignedUrl(client, command, { expiresIn: 60 });
}
