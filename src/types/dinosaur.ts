type Country = {
  id: number;
  country: string;
  continent: {
    id: number;
    continent: string;
  };
};

export type Dinosaur = {
  id: number;
  genus: string;
  uri: string;
  period: {
    id: number;
    period: string;
  };
  bodyShape: {
    id: number;
    bodyShape: string;
  };
  species: string;
  mediaCollection: [{identifier: string}];
  countries: Country[];
};

export type Dino = {
  id: number;
  genus: string;
  uri: string;
  continent: string;
  country: string;
  period: string;
  species: string;
  bodyShape: string;
};
