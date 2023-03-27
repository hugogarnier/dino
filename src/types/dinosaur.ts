type Country = {
  id: number;
  country: string;
  continent: {
    id: number;
    continent: string;
  };
  dinosaurCount: number;
};

type Media = {
  id: number;

  identifier: string;
  isDefault: boolean;
  title: string;
  caption: string;
  mediaContentTypeName: string;
  mediaContentTypePath: string;
  copyright: string;
  creditType: string;
  mediaTypeName: string;
  mediaTypePath: string;
};

export type Dinosaur = {
  id: number;
  genus: string;
  uri: string;
  namePronounciation: string;
  nameHyphenated: string;
  nameMeaning: string;
  dentition: string;
  diet: string;
  massTo: string;
  massFrom: string;
  lengthFromQualifier: string;
  lengthToQualifier: string;
  lengthFrom: number;
  lengthTo: string;
  heightFromQualifier: string;
  heightToQualifier: string;
  heightFrom: string;
  heightTo: string;
  locomotion: string;
  myaFromQualifier: string;
  myaToQualifier: string;
  myaFrom: number;
  myaTo: number;
  taxTaxon: {
    taxon: string;
    authorshipYear: number;
    taxonomyCSV: string;
    taxonId: number;
  };
  countries: Country[];
  contexts: [];
  publish: boolean;
  isInGallery: boolean;
  mediaCollection: Media[];
  period: {
    id: number;
    period: string;
    myaFrom: number;
    myaTo: number;
    dinosaurCount: number;
  };
  bodyShape: {
    id: number;
    bodyShape: string;
    description: string;
    dinosaurCount: number;
  };
  textBlockCollection: [
    {
      id: number;
      identifier: string;
      title: string;
      textBlock: string;
      sortOrder: string;
      context: string;
    },
  ];
  linkCollection: [];
  dietTypeName: string;
  genusNamedBy: string;
  genusYear: number;
  species: string;
};
