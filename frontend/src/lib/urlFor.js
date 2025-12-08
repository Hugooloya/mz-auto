import imageUrlBuilder from '@sanity/image-url';
import { sanityClient } from 'sanity:client';

export const imageBuilder = imageUrlBuilder(sanityClient);

export function urlFor(source) {
    return imageBuilder.image(source);
}
