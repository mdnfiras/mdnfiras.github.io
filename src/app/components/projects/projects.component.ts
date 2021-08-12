import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects
  constructor() { }

  ngOnInit(): void {
    this.projects = [
      {
        title: "Cloud Infrastructure Engineer",
        order: 0,
        real_order: 0,
        date: "Feb 2021 - Jul 2021",
        description: "\
          Unlocking the operators and developers innovation potential by modernizing the applications and network infrastructure.\
            <br><br>\
            <ul>\
              <li>Implementing the organization's servers management solution.</li>\
              <li>Researching and implementing open source SIEM solutions.</li>\
              <li>Leveraging the Zero Trust security model principles.</li>\
              <li>Leading an on-production network transformation toward a highly available and layered network architecture.</li>\
              <li>Researching and implementing PAM solutions.</li>\
            </ul>\
        "
      },
      {
        title: "DevOps Instructor",
        order: 4,
        real_order: 1,
        date: "Dec 2020 - Dec 2021",
        description: "\
        Providing professionals with a project oriented DevOps training.\
        "
      },
      {
        title: "DevOps Engineering Intern",
        date: "Jun 2020 - Sep 2020",
        order: 1,
        real_order: 2,
        description: "\
        Designing and implementing a proper DevOps workflow.\
        <br><br><ul>\
        <li>Aspiring to learn good development, system and security best practices, as well as collaborating with a polyvalent and an Agile team of engineers.</li>\
        <li>Building, optimizing, securing, and auditing CI/CD pipelines for multiple web app microservices. </li>\
        </ul>\
        \
        "
      },
      {
        title: "Software Development Intern",
        order: 2,
        real_order: 3,
        date: "Jul 2019 - Sep 2019",
        description: "\
        Automating various administrative and applications specific tasks.\
        "
      },
      {
        title: "Software Development Intern",
        order: 3,
        real_order: 4,
        date: "Jun 2017 - Jul 2017",
        description: "\
        Developing cross-platform libraries to operate security devices\
        "
      }
    ]

    this.sort_for_grid()
  }

  sort_for_grid() {
    this.projects.sort(function (a, b) {
      return a.order - b.order;
    });
  }

  sort_for_list() {
    this.projects.sort(function (a, b) {
      return a.real_order - b.real_order;
    });
  }
}
