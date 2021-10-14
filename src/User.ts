import faker from "faker";
import { Mappable } from "./CustomMap";

export class User implements Mappable{
  name: string
  location: {
    lat: number
    lng: number
  }
  constructor() {
    this.name = faker.name.firstName()
    this.location = {
      lat: +faker.address.latitude(),
      lng: +faker.address.longitude()
    }
  };

  markerContent(): string {
    return `
    <h1>${this.name}</h1>,
    <p>location is ${this.location.lat}, ${this.location.lng}</p>
    `
  }
}
