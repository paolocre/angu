import { Component, OnInit } from '@angular/core';
import { TutorialService } from 'src/app/services/tutorial.service';
import { flattenStyles } from '@angular/platform-browser/src/dom/dom_renderer';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css']
})
export class AddTutorialComponent implements OnInit {

  tutorial = {
    title: '',
    description: '',
    published: false
  };
  submitted = false;

  constructor(
    private tutorialService: TutorialService
  ) { }

  ngOnInit() {}

  saveTutorial() {
    const data = {
      title: this.tutorial.title,
      description: this.tutorial.description
    };

    this.tutorialService.create(data)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        }
      );
    this.submitted = true;
  }

  newTutorial() {
    this.submitted = false;
    this.tutorial = {
      title: '',
      description: '',
      published : false
    };
  }

}
