import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalContent } from 'app/components/modal/modal.component';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {
  focus: any;
  focus1: any;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {}

  public onBookNow(): void {
    // Logic to handle booking action
    console.log('Book Now button clicked');
    const modalRef = this.modalService.open(NgbdModalContent, { windowClass: 'modal-book' });
    modalRef.componentInstance.name = 'World';
    modalRef.result.then(
      (result) => {
        const backdrops = document.getElementsByTagName('ngb-modal-backdrop');
        Array.from(backdrops).forEach(b => {
          (b as HTMLElement).style.zIndex = '1040';
        });
        // Handle modal close result if needed
      },
      (reason) => {
        // Handle modal dismiss reason if needed
      }
    );
  }

  public scrollToSection(sectionClass: string): void {
    const element = document.querySelector('.' + sectionClass);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  

}
