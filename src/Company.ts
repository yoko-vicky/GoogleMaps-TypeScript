import faker from "faker"
import { Mappable } from "./CustomMap";

export class Company implements Mappable{
  companyName: string
  catchPhrase: string
  location: {
    lat: number
    lng: number
  }

  constructor() {
    this.companyName = faker.company.companyName()
    this.catchPhrase = faker.company.catchPhrase()
    this.location = {
      lat: +faker.address.latitude(),
      lng: +faker.address.longitude()
    }
  }

  markerContent(): string {
    return `
    <h1>${this.companyName}</h1>,
    <p>${this.catchPhrase}</p>
    `
  }
}
