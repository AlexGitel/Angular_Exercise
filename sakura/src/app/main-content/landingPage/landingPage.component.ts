import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component'

@Component({
    selector: 'app-landingPage',
    standalone: true,
    imports: [CommonModule, NavbarComponent],
    template: `
    <section>
        <div class="nav_div"><app-navbar></app-navbar></div>
        <h1 class="fontRaleway"> SAKURA RAMEN </h1>
        <h6 class="fontRaleway"> BEST RAMEN IN TOWN</h6>
    </section>
    `,
    styleUrls: ['./landingPage.component.scss']
})

export class LandingPageComponent { }