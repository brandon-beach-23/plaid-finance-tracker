import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-label',
  standalone: true,
  imports: [NgClass],
  templateUrl: './label.component.html',
  styleUrl: './label.component.css'
})

export class LabelComponent {
  @Input({ required: true }) forId!: string;
  @Input({ required: true }) labelText!: string;
  @Input() className: string | string [] | Set<string> = '';
  @Input() required: boolean = false;
}
