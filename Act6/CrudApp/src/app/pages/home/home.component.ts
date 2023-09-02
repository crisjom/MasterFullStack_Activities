import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { UserdataService } from 'src/app/services/userdata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  users: User[] | any = [];
  userId: string | any;
  currentPage: number = 1;
  totalPages: number = 1;
  actualPage: any;

  constructor(private userService: UserdataService, private route: ActivatedRoute, private router: Router) { }



  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.currentPage = params['page'];

      if (isNaN(this.currentPage)) {
        this.router.navigate(['home']);
      } else {
        this.userService.getPageByPageNumber(this.currentPage).subscribe(data => {
          this.actualPage = data;
          this.totalPages = data.total_pages;
          this.currentPage = data.page;
          this.users = data.results;
        })
      }
    })
  }

  previousPage() {

    if (this.currentPage > 1) {
      this.currentPage--;
      this.router.navigate(['home', this.currentPage]);
      this.userService.getUsersByPage(this.currentPage).subscribe(data => {
        this.users = data;
      }
      )
    }

  }

  nextPage() {

    if (this.currentPage < this.actualPage.total_pages) {
      this.currentPage++;
      this.router.navigate(['home', this.currentPage]);
      this.userService.getUsersByPage(this.currentPage).subscribe(data => {
        this.users = data;
      }
      )
    }
  }

}
