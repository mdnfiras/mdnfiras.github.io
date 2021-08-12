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
        title: "Deep Learning for photographic defects detection",
        order: 0,
        real_order: 0,
        date: "Feb 2020 - May 2020",
        description: "\
        Enabeling faster Deep Learning development through automation.\
            <br><br>\
            <ul>\
              <li>Version control management.</li>\
              <li>Cloud resources provisioning.</li>\
              <li>Model training and monitoring, and artifact collection.</li>\
            </ul>\
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
