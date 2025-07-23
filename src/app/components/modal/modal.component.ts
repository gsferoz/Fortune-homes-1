import {Component, Input} from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
    selector: 'app-modal-content',
    template: `
   <form (ngSubmit)="submitForm()" #contactForm="ngForm">
  <div class="modal-header">
    <h5 class="modal-title text-center">How can we reach you?</h5>
    <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>

  <div class="modal-body">
    <div class="row">
      <div class="col-sm-12">
        <div class="form-group">
          <input type="text" name="fullname" [(ngModel)]="formData.fullname" class="form-control" placeholder="Full Name*" required>
        </div>
      </div>
      <div class="col-sm-12">
        <div class="form-group">
          <input type="tel" name="phone" [(ngModel)]="formData.phone" class="form-control" placeholder="Phone*" required>
        </div>
      </div>
      <div class="col-sm-12">
        <div class="form-group">
          <input type="email" name="email" [(ngModel)]="formData.email" class="form-control" placeholder="Email*" required>
        </div>
      </div>
    </div>
  </div>

  <div class="modal-footer">
    <div class="left-side">
      <button type="button" class="btn btn-default btn-link" (click)="activeModal.close('Close click')">Cancel</button>
    </div>
    <div class="divider"></div>
    <div class="right-side">
      <button type="submit" class="btn btn-danger btn-link">Submit</button>
    </div>
  </div>
</form>

`
})
export class NgbdModalContent {
    @Input() name;
    public formData = {
    fullname: '',
    phone: '',
    email: ''
  };

    constructor(public activeModal: NgbActiveModal, private http: HttpClient) {}

   submitForm() {
    if (!this.formData.fullname || !this.formData.phone || !this.formData.email) {
      alert('Please fill in all required fields.');
      return;
    }
    const endpoint = 'https://formspree.io/f/meozegww'; // Replace with your actual Formspree form URL

    const headers = new HttpHeaders({
      'Accept': 'application/json'
    });

    const body = {
      name: this.formData.fullname,
      phone: this.formData.phone,
      email: this.formData.email
    };

    this.http.post(endpoint, body, { headers }).subscribe({
      next: (res) => {
        alert('Your information is submitted successfully!');
        this.formData = { fullname: '', phone: '', email: '' }; // Reset form
        this.activeModal.close('Form submitted');
      },
      error: (err) => {
        alert('Failed to submit. Please try again.');
        console.error(err);
      }
    });
  }

}

@Component({
    selector: 'app-modal-component',
    templateUrl: './modal.component.html'
})
export class NgbdModalComponent {
    constructor(private modalService: NgbModal) {}
    open() {
        const modalRef = this.modalService.open(NgbdModalContent);
        modalRef.componentInstance.name = 'World';
    }
}
