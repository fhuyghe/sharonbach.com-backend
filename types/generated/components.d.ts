import type { Attribute, Schema } from '@strapi/strapi';

export interface ContentBlockImage extends Schema.Component {
  collectionName: 'components_content_block_images';
  info: {
    displayName: 'image';
    icon: 'address-card';
  };
  attributes: {
    image: Attribute.Media<'images'>;
  };
}

export interface ContentBlockImages extends Schema.Component {
  collectionName: 'components_content_block_gallery';
  info: {
    description: '';
    displayName: 'gallery';
    icon: 'layer-group';
  };
  attributes: {
    columns: Attribute.Enumeration<['one', 'two', 'three']>;
    images: Attribute.Media<'images', true>;
  };
}

export interface ContentBlockText extends Schema.Component {
  collectionName: 'components_content_block_texts';
  info: {
    description: '';
    displayName: 'text';
    icon: 'align-justify';
  };
  attributes: {
    text: Attribute.RichText;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'content-block.image': ContentBlockImage;
      'content-block.images': ContentBlockImages;
      'content-block.text': ContentBlockText;
    }
  }
}
