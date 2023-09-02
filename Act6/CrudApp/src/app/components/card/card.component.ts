import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { UserdataService } from 'src/app/services/userdata.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() card: User | any

  constructor(private router: Router, private userService: UserdataService) { }

  viewDetails(userId: string) {
    this.router.navigate(['userdetails', userId]);
  }

  deleteUser(userId: string) {

    const confirmDelete = window.confirm(`Deseas borrar el usuraio ${this.card.username}`);
    let message: any;

    if (confirmDelete) {
      this.userService.deleteUserById(userId).subscribe(
        response => {
          alert(`El usuario ${this.card.username} ha sido borrado exitosamente`);
          window.location.reload();
        },
        error => {
          console.error("Error al borrar el usuario", error);
        }
      );
    }

  }

  updateUser(userId: string) {
    this.router.navigate(['updateuser', userId]);
  }

}
