import { createImageUrlBuilder } from '@sanity/image-url';
import { sanityClient } from 'sanity:client';

export const imageBuilder = createImageUrlBuilder(sanityClient);

export function urlFor(source) {
    return imageBuilder.image(source);
}
