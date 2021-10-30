import { Request, Response } from 'express';

import { getBucketName, connect } from 's3-bucket-test-ts';

export const rootHandler = async (
  req: Request,
  res: Response
): Promise<void> => {
  console.log(
    'connecting to s3 for deployment',
    process.env.GOLDSTACK_DEPLOYMENT
  );
  const s3 = await connect(process.env.GOLDSTACK_DEPLOYMENT);

  const acl = await s3
    .putObject({
      Bucket: await getBucketName(),
      Key: 'test',
      Body: 'hello',
    })
    .promise();

  console.log(acl);

  res.status(200).json('success put object');
};
