export class Movie {
  id: string;
  title: string;
  description: string;
  director: string;
  producer: string;
  releaseDate: string;
  rtScore: string;
  peoples: any[];
  species: string[];
  locations: string[];
  vehicles: string[];
  url: string;
  pictureUrl: string;

  constructor(json) {
    this.id = json.id;
    this.title = json.title;
    this.description = json.description;
    this.director = json.director;
    this.producer = json.producer;
    this.releaseDate = json.release_date;
    this.rtScore = json.rt_score;
    this.species = json.species;
    this.locations = json.locations;
    this.vehicles = json.vehicles;
    this.url = json.url;
    this.pictureUrl = json.picture_url;
    this.peoples = json.peoples;
  }
}
