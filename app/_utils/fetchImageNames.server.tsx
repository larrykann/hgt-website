import ImageKit from 'imagekit';
import { ImageKitFile } from '../_types/imageKitTypes'

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

    async function fetchBatch(): Promise<void> {
        try {
            const result = await imagekit.listFiles({
                path: '/hgt_website/',
                skip: skip,
                limit: limit,
            });

            if (!result) {
                console.error('Result is null');
                return; // Ends the recursive fetching
            }

            const imageNames = result.map((file: ImageKitFile) => file.name);
            allImageNames = [...allImageNames, ...imageNames];

            if (result.length >= limit) {
                skip += limit; // Prepare for the next batch
                await fetchBatch(); // Recursively fetch next batch
            }
        } catch (error:any) {
            if (error && error.response && error.response.status === 429) {
                // Handle rate-limiting
                const rateLimitReset = error.response.headers['X-RateLimit-Reset'] || '1000';
                console.log(`Rate limit exceeded, pausing for ${rateLimitReset}ms`);
                await new Promise((resolve) => setTimeout(resolve, parseInt(rateLimitReset)));
                await fetchBatch(); // Retry fetching after waiting
            } else {
                console.error('Failed to fetch images:', error);
                throw error; // Rethrow error to be caught by the caller
            }
        }
    }

    await fetchBatch();
    return allImageNames;
}

