import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu-bar',
  templateUrl: './menu-bar.component.html',
  styles: [],
})
export class MenuBarComponent {
  public items: MenuItem[] = [
    {
      label: 'Pipes de angular',
      icon: 'pi pi-desktop',
      items: [
        {
          label: 'Basicos',
          routerLink: "/basicos",
          icon: 'pi pi-verified',
        },
        {
          label: 'Numeros',
          routerLink: "/numbers",
          icon: 'pi pi-calculator',
        },
        {
          icon: 'pi pi-compass',
          label: 'No comunes',
          routerLink: "/uncommon",
        },
      ]
    },
    {
      label: 'Pipes personalizados',
      icon: 'pi pi-book',
      items: [
        {
          label: 'Primer pipe',
          routerLink: "/custom",
          icon: 'pi pi-cog',
        }
      ]
    },
  ];
}
