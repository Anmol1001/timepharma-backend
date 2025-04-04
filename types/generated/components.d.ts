import type { Schema, Struct } from '@strapi/strapi';

export interface ProductBrands extends Struct.ComponentSchema {
  collectionName: 'components_product_brands';
  info: {
    displayName: 'Brands';
    icon: 'archive';
  };
  attributes: {
    Brand: Schema.Attribute.String;
    Composition: Schema.Attribute.Component<'product.composition', false>;
    Description: Schema.Attribute.String;
  };
}

export interface ProductComposition extends Struct.ComponentSchema {
  collectionName: 'components_product_compositions';
  info: {
    displayName: 'Composition';
    icon: 'crown';
  };
  attributes: {
    composition1: Schema.Attribute.String;
    composition2: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ProductContradiction extends Struct.ComponentSchema {
  collectionName: 'components_product_contradictions';
  info: {
    displayName: 'contradiction';
    icon: 'attachment';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ProductDose extends Struct.ComponentSchema {
  collectionName: 'components_product_doses';
  info: {
    displayName: 'Dose';
    icon: 'bell';
  };
  attributes: {
    description: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ProductIndications extends Struct.ComponentSchema {
  collectionName: 'components_product_indications';
  info: {
    displayName: 'Indications';
    icon: 'arrowDown';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ProductMechanismOfAction extends Struct.ComponentSchema {
  collectionName: 'components_product_mechanism_of_actions';
  info: {
    displayName: 'Mechanism of Action';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ProductPatentInformation extends Struct.ComponentSchema {
  collectionName: 'components_product_patent_informations';
  info: {
    displayName: 'Patent Information';
    icon: 'alien';
  };
  attributes: {
    administration: Schema.Attribute.Text;
    children: Schema.Attribute.Text;
    food_interaction: Schema.Attribute.String;
    missed_dose: Schema.Attribute.String;
    nursing_mothers: Schema.Attribute.String;
    patient_information: Schema.Attribute.Text;
    pregnancy: Schema.Attribute.String;
    storage: Schema.Attribute.String;
  };
}

export interface ProductPresentation extends Struct.ComponentSchema {
  collectionName: 'components_product_presentations';
  info: {
    displayName: 'Presentation';
    icon: 'chartPie';
  };
  attributes: {
    description: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ProductStorage extends Struct.ComponentSchema {
  collectionName: 'components_product_storages';
  info: {
    displayName: 'Storage';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'product.brands': ProductBrands;
      'product.composition': ProductComposition;
      'product.contradiction': ProductContradiction;
      'product.dose': ProductDose;
      'product.indications': ProductIndications;
      'product.mechanism-of-action': ProductMechanismOfAction;
      'product.patent-information': ProductPatentInformation;
      'product.presentation': ProductPresentation;
      'product.storage': ProductStorage;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
