import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { UserdataService } from 'src/app/services/userdata.service';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent {

  userForm: FormGroup | any;
  userId: string | any;
  userData: User | any;

  constructor(private formBuilder: FormBuilder, private userService: UserdataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    if (this.route.snapshot.url[0].path === "updateuser"){

      this.route.params.subscribe(params => {
        this.userId = params['userId'];
        
        this.userService.getUserById(this.userId).subscribe(user => {
          this.userForm = this.formBuilder.group({
            firstName: [user.first_name, [Validators.required, Validators.minLength(2), Validators.pattern(/^[A-Za-zÀ-ÖØ-öø-ÿ']+([- ][A-Za-zÀ-ÖØ-öø-ÿ']+)*$/)]],
            lastName: [user.last_name, [Validators.required, Validators.minLength(2), Validators.pattern(/^[A-Za-zÀ-ÖØ-öø-ÿ']+([- ][A-Za-zÀ-ÖØ-öø-ÿ']+)*$/)]],
            email: [user.email, [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]+$/)]],
            image: ['', [Validators.pattern(/\.(jpg)$/i)]]
          });
        });
       
      });

    }
  
    this.userForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(2), Validators.pattern(/^[A-Za-zÀ-ÖØ-öø-ÿ']+([- ][A-Za-zÀ-ÖØ-öø-ÿ']+)*$/)]],
      lastName: ['', [Validators.required, Validators.minLength(2), Validators.pattern(/^[A-Za-zÀ-ÖØ-öø-ÿ']+([- ][A-Za-zÀ-ÖØ-öø-ÿ']+)*$/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]+$/)]],
      image: ['', [Validators.pattern(/\.(jpg)$/i)]]
    });
  }

  submitUserForm() {

    if (this.userForm.valid) {
      const formData = this.userForm.value;

      if(this.route.snapshot.url[0].path === "updateuser"){
        this.userService.updateUser(this.userId, this.userData).subscribe(response => {
          if (response.username) {
            console.log('Usuario actualizado:', response);
            alert("Usuario actualizado correctamente");
            this.router.navigate(['/home']);
          } else {
            alert("No se ha actualizado el usuario");
          }
  
        });

      }else{
        this.userService.createUser(formData).subscribe(response => {

          if (response.id) {
            console.log('Usuario creado:', response);
            alert("Usuario creado correctamente");
            this.router.navigate(['/home']);
          } else {
            alert("No se ha creado el usuario");
          }
  
        });
      }

      

    }
  }

}
