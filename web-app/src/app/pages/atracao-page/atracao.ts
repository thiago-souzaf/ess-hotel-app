export interface image {
  url: string;
  alt: string;
}

export class Atracao {
  id!: string;
  name!: string;
  images!: image[];
  title!: string;
  descriptions!: string[];
  location!: string;
  day!: string;
  hour!: string;

  constructor(
    id: string,
    name: string,
    images: image[],
    title: string,
    descriptions: string[],
    location: string,
    day: string,
    hour: string
  ) {
    this.id = id;
    this.name = name;
    this.images = images;
    this.title = title;
    this.descriptions = descriptions;
    this.location = location;
    this.day = day;
    this.hour = hour;
  }
}
