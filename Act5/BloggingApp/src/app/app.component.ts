import { Component } from '@angular/core';

import { Post } from './interfaces/post.interface';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BloggingApp';
  userInfo: any[] = [
    {
      userName: 'Crisjom',
      userImage: 'assets/mascota.jpg'
    }
  ];
  blogDescription: string = `¡Bienvenidos al blog del año 2320! Aquí encontrarán los últimos descubrimientos científicos y tecnológicos.
  Desde avances en la medicina regenerativa hasta innovaciones en la inteligencia artificial, les mantendremos
  al tanto de los logros más emocionantes de nuestro tiempo. Explora el futuro con nosotros y deslúmbrate con
  los increíbles avances que la ciencia y la tecnología nos deparan en el año 2320.`;

 

  constructor(private dataService: DataService){
    this.dataService.posts = [
      {
        title: 'Avances revolucionarios en la medicina regenerativa',
        imageUrl: 'https://th.bing.com/th/id/OIG.4S8eAUhkzk6yXgRIxT37?pid=ImgGn',
        text: `La medicina regenerativa ha experimentado avances sin precedentes. Los científicos han descubierto 
        cómo regenerar órganos y tejidos humanos de manera eficiente y segura. Ahora, es posible reemplazar órganos dañados 
        o enfermos con versiones completamente funcionales creadas en el laboratorio.
        
        Este avance ha transformado por completo el campo de la medicina, ofreciendo esperanza a pacientes con enfermedades crónicas y 
        lesiones graves. La posibilidad de regenerar órganos ha abierto la puerta a tratamientos revolucionarios y ha prolongado la vida 
        de muchas personas.`,
        date: '27/06/2023'
      },
      {
        title: 'La inteligencia artificial redefine nuestro mundo',
        imageUrl: 'https://th.bing.com/th/id/OIG.fq64rr_R2mEQqtDetpHq?pid=ImgGn',
        text: `En el año 2320, la inteligencia artificial ha alcanzado niveles sorprendentes de desarrollo. Los sistemas de IA avanzados son 
        capaces de realizar tareas complejas y tomar decisiones basadas en análisis de datos y patrones. Esto ha llevado a una transformación 
        en prácticamente todos los aspectos de la vida cotidiana.
        
        Desde asistentes virtuales que nos ayudan a gestionar nuestras tareas diarias hasta robots autónomos que realizan trabajos peligrosos, 
        la inteligencia artificial ha revolucionado la forma en que interactuamos con la tecnología y el mundo que nos rodea.
        
        Sin embargo, este progreso también plantea preguntas éticas y desafíos en cuanto a la privacidad y el uso responsable de la inteligencia 
        artificial. A medida que continuamos explorando las capacidades de la IA, es crucial encontrar un equilibrio entre el avance tecnológico 
        y la protección de los valores humanos fundamentales.`,
        date: '26/06/2023'
      }
    ];    
  }

}
