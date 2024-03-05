import ImageKit from 'imagekit';

// Helper function to assert that an environment variable is defined
function getEnvVariable(key: string): string {
  const value = process.env[key];
  if (value === undefined) {
    throw new Error(`Environment variable ${key} is not defined`);
  }
  return value;
}

const imagekit = new ImageKit({
  publicKey: getEnvVariable('IMAGEKIT_PUBLIC_KEY'),
  privateKey: getEnvVariable('IMAGEKIT_PRIVATE_KEY'),
  urlEndpoint: getEnvVariable('IMAGEKIT_ENDPOINT'),
});

export async function fetchImageNames(): Promise<string[]> {
  let skip = 0;
  const limit = 100; // Adjust based on the API's maximum limit per batch
  let allImageNames: string[] = [];

  const fetchBatch = () => new Promise<void>((resolve, reject) => {
    imagekit.listFiles({
      path: '/hgt_website/',
      skip: skip,
      limit: limit,
    }, (error, result, response) => {
      if (error) {
        if (response && response.status === 429) {
          // Too Many Requests, pause based on X-RateLimit-Reset header
          const rateLimitReset = response.headers['X-RateLimit-Reset']; // Time in milliseconds
          console.log(`Rate limit exceeded, pausing for ${rateLimitReset}ms`);
          setTimeout(() => {
            // Retry the request after the pause
            fetchBatch().then(resolve).catch(reject);
          }, parseInt(rateLimitReset));
        } else {
          console.error('Failed to fetch images:', error);
          reject(error);
        }
      } else {
        const imageNames = result.map((file: { name: string }) => file.name);
        allImageNames = allImageNames.concat(imageNames);
        if (result.length < limit) {
          resolve(); // Finished fetching all images
        } else {
          skip += limit;
          fetchBatch().then(resolve).catch(reject); // Fetch next batch
        }
      }
    });
  });

  await fetchBatch();
  return allImageNames;
}

