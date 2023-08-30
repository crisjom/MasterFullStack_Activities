import { Component } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { UserdataService } from 'src/app/services/userdata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  users: User[] | any = [];

  constructor(private userService: UserdataService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    })
  }
}
