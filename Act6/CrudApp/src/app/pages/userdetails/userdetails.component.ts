import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { UserdataService } from 'src/app/services/userdata.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent {

  user: User | any;
  userId: string | any;

  constructor(private userService: UserdataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.userId = params['userId'];

      this.userService.getUserById(this.userId).subscribe(data => {
        this.user = data;
      })
      
    })

  }

  updateUser() {
    this.router.navigate(['updateuser', this.userId]);
  }

  backToHome() {
    this.router.navigate(['home']);
  }

  deleteUser() {

    const confirmDelete = window.confirm(`Deseas borrar el usuraio ${this.user.username}`);
    let message: any;

    if (confirmDelete) {
      this.userService.deleteUserById(this.userId).subscribe(
        response => {
          alert(`El usuario ${this.user.username} ha sido borrado exitosamente`);
          this.router.navigate(['home']);
        },
        error => {
          console.error("Error al borrar el usuario", error);
        }
      );
    }
    
  }

}
