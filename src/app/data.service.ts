import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  static my_name: string = "Firas Medini"
  static github: string = "github.com/mdnfiras"
  static github_link: string = "https://github.com/mdnfiras"
  static linkedin: string = "linkedin.com/in/mdnfiras/"
  static linkedin_link: string = "https://www.linkedin.com/in/mdnfiras/"
  static gender: string = "Male"
  static email: string = "firas.medini@insat.u-carthage.tn"
  static phone: string = "+216 28 107 680"
  static phone_link: string = "tel:+21628107680"
  static email_link: string = "mailto:firas.medini@insat.u-carthage.tn"
  static location: string = "Ariana - Tunisia"
  static location_link: string = "https://www.google.com/maps/place/Ariana/@37.3281163,4.4033598,5.89z/data=!4m5!3m4!1s0x12e2cb34bd64ca87:0xcba9f5235ee1ba8b!8m2!3d36.8596907!4d10.1975119"
  constructor() {

  }

  get_age() {
    let birthDate = new Date()
    birthDate.setDate(14)
    birthDate.setMonth(4)
    birthDate.setFullYear(1997)
    var today = new Date();
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
}
