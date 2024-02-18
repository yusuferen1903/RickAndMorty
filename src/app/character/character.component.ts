import { Component ,  ViewChild } from '@angular/core';
import { CharactersService } from '../services/characters.service';
import { PageEvent } from '@angular/material/paginator';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrl: './character.component.scss'
})
export class CharacterComponent {
  characters: any[] = [];
  totalCharacters: number = 0;
  pageSize: number = 20;
  currentPage: number = 1;
  statusValue: string | undefined
  genderValue: string | undefined
  nameValue: string | undefined
  typeValue: string | undefined
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private characterService: CharactersService) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(): void {

    this.characterService.getCharacters(this.currentPage , 20, this.statusValue , this.genderValue , this.nameValue , this.typeValue)
      .subscribe(response => {
        this.characters = response.results;
        this.totalCharacters = response.info.count;
      });
  }

  onPageChange(event: PageEvent): void {
    this.currentPage = event.pageIndex + 1;
    this.getCharacters();
  }


  onStatusChange(status: any): void {
    this.currentPage = 1
    this.paginator.pageIndex = 0;
    this.statusValue= status.value
    this.getCharacters();
  }

  onGenderChange(gender: any): void {
    this.currentPage = 1
    this.paginator.pageIndex = 0;
    this.genderValue= gender.value
    this.getCharacters();
  }
  onNameChange(name: any): void {
    this.currentPage = 1
    this.paginator.pageIndex = 0;
    this.nameValue= name.value
    this.getCharacters();
  }
  onTypeChange(type: any): void {
    this.currentPage = 1
    this.paginator.pageIndex = 0;
    this.typeValue= type.value
    this.getCharacters();
  }
}
