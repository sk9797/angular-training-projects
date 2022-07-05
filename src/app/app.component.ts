import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Practice Apps';

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title) {}

ngOnInit() {
 
  this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
    )
    .subscribe(() => {

      var rt = this.getChild(this.activatedRoute)

      rt.data.subscribe((data: {title: string}) => {
        // console.log(data);
        this.titleService.setTitle(data.title)})
    })

}

getChild(activatedRoute: ActivatedRoute):any {
  if (activatedRoute.firstChild) {
    return this.getChild(activatedRoute.firstChild);
  } else {
    return activatedRoute;
  }
}
}
