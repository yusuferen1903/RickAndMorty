import { Component ,  ViewChild , HostListener  } from '@angular/core';
import { CharactersService } from '../services/characters.service';
import { PageEvent } from '@angular/material/paginator';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
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
  colsNumber! : number
  statusValue: string | undefined
  genderValue: string | undefined
  nameValue: string | undefined
  typeValue: string | undefined
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (window.innerWidth <= 800) {
      this.colsNumber = 1
    } else if (window.innerWidth < 1100) {
      this.colsNumber = 2
    }
    else if (window.innerWidth < 1500) {
      this.colsNumber = 3
    }
    else if (window.innerWidth < 1800) {
      this.colsNumber = 4
    }
    else if (window.innerWidth < 2100) {
      this.colsNumber = 5
    }
    else if (window.innerWidth < 2700) {
      this.colsNumber = 6
    }
  }
  constructor(
    private characterService: CharactersService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.onResize(1)
    this.getCharacters();
  }

  getCharacters(): void {

    this.characterService.getCharacters(this.currentPage , 20, this.statusValue , this.genderValue , this.nameValue , this.typeValue)
      .subscribe(response => {
        this.characters = response.results;
        this.totalCharacters = response.info.count;
      },
      (err)=>{
        this.characters = []
        
      })
  }
  goToDetail(id : number){
    this.router.navigate(['character' , id]);
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
