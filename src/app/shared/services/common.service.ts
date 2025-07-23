import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CommonService {
    constructor() { }
    public scrollToSection(sectionClass: string): void {
        const element = document.querySelector('.' + sectionClass);
        if (element) {
            const yOffset = -200; // adjust this value as needed
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    }
}