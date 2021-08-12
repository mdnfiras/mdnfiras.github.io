import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  events
  constructor() { }

  ngOnInit(): void {
    this.events = [
      {
        date: "Feb 2021 - Jul 2021",
        location: "Polytechnique Montréal",
        location_link: "https://www.polymtl.ca/",
        title: "Cloud Infrastructure Engineer",
        icon: "http",
        content: "\
          Unlocking the operators and developers innovation potential by modernizing the applications and network infrastructure.\
            <br><br>\
            <ul>\
              <li>Implementing the organization's servers management solution.</li>\
              <li>Researching and implementing open source SIEM solutions.</li>\
              <li>Leveraging the Zero Trust security model principles.</li>\
              <li>Leading an on-production network transformation toward a highly available and layered network architecture.</li>\
              <li>Researching and implementing PAM solutions.</li>\
            </ul>\
          ",
        links: [
          {
            display: "Recommendation Letter",
            link: "../../../assets/diplomas/"
          },
        ]
      },
      {
        date: "Dec 2020 - Dec 2021",
        location: "Go My Code",
        location_link: "https://www.linkedin.com/school/go-my-code/",
        title: "DevOps Instructor",
        icon: "laptop",
        content: "\
          Providing professionals with a project oriented DevOps training.\
          ",
        links: [
          {
            display: "Attestation",
            link: "../../../assets/diplomas/"
          },
          {
            display: "Report",
            link: "../../../assets/diplomas/"
          }
        ]
      },
      {
        date: "Jun 2020 - Sep 2020",
        location: "Eyacom",
        location_link: "https://www.linkedin.com/company/eyacomitsolutions/",
        title: "DevOps Engineering Intern",
        icon: "http",
        content: "\
          Designing and implementing a proper DevOps workflow.\
          <br><br><ul>\
          <li>Aspiring to learn good development, system and security best practices, as well as collaborating with a polyvalent and an Agile team of engineers.</li>\
          <li>Building, optimizing, securing, and auditing CI/CD pipelines for multiple web app microservices. </li>\
          </ul>\
          ",
        links: [
          {
            display: "Report",
            link: "../../../assets/diplomas/"
          }
        ]
      },
      {
        date: "Jul 2019 - Sep 2019",
        location: "LogiDAS",
        location_link: "https://www.linkedin.com/company/logidas---editeur-d'erp/",
        title: "Software Development Intern",
        icon: "http",
        content: "\
        A utomating various administrative and applications specific tasks.\
          ",
        links: [
          {
            display: "Report",
            link: "../../../assets/diplomas/"
          }
        ]
      },
      {
        date: "Jun 2017 - Jul 2017",
        location: "Waycon",
        location_link: "https://www.linkedin.com/company/waycon/",
        title: "Software Development Intern",
        icon: "http",
        content: "\
          Developing cross-platform libraries to operate security devices.\
          ",
        links: [
          {
            display: "Report",
            link: "../../../assets/diplomas/"
          }
        ]
      }
    ]
  }

}
