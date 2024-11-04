import createImageUrlBuilder from '@sanity/image-url';
import { sanityClient } from '@/sanityClient';

const imageBuilder = createImageUrlBuilder(sanityClient);

export const urlFor = (source: any) => imageBuilder.image(source);
