import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  events
  constructor() { }

  ngOnInit(): void {
    this.events = [
      {
        date: "2016 - 2021",
        location: "National Institute of Applied Sciences and Technology",
        location_link: "http://www.insat.rnu.tn/",
        title: "National Engineering Diploma",
        icon: "laptop",
        content: "Major: Computer Networks and Telecommunication Engineering <br><br> This invovled a focus on ICT Infrastructure, Cloud Infrastructure, Network Design, Network Security, DevOps Practices, Automation and Testing.",
        links: [
          {
            display: "Transcripts",
            link: "../../../assets/diplomas/"
          }
        ]
      },
      {
        date: "2012 - 2016",
        location: "Rades Technical High School",
        title: "Baccalaureate with honors",
        icon: "school",
        content: "Specialization in Computer Science <br><br>This invloved a focus on mathematics and algorithms but also included technologies (mysql, html5, javascript and php) and physics.",
        links: [
          {
            display: "Diploma (arabic)",
            link: "../../../assets/diplomas/"
          },
          {
            display: "Diploma (french)",
            link: "../../../assets/diplomas/"
          }
        ]
      }
    ]
  }

}
