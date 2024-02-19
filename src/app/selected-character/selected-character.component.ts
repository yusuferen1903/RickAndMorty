import { Component } from '@angular/core';
import { CharactersService } from '../services/characters.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-selected-character',
  templateUrl: './selected-character.component.html',
  styleUrl: './selected-character.component.scss'
})
export class SelectedCharacterComponent {
  character : any
  id
  constructor(
    private characterService: CharactersService,
    private route: ActivatedRoute,
    ) {
      this.id = this.route.snapshot.paramMap.get('id');
     }

    ngOnInit(): void {
      this.getCharacterWithId(this.id);
    }

    getCharacterWithId(id:any): void {

      this.characterService.getCharacterWithId(id)
        .subscribe(response => {
          this.character = response
        },
        (err)=>{
          this.character = []
          
        })
    }
}
