import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: 'uy289qg9', // replace with your project ID
  dataset: 'production',       // replace with your dataset
  useCdn: true,                  // `false` if you want to ensure fresh data
  apiVersion: '2023-10-27',      // use current date as API version
});
