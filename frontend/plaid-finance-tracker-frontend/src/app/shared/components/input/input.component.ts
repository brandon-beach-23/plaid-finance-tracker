import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [NgClass, ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})

export class InputComponent {
  @Input() label!: string;
  @Input() type!: string;
  @Input() control!: FormControl;
  @Input() errorMessage!: string;
  @Input({ required: true }) inputId!: string;
  @Input() className: string | string [] | Set<string> = ''; 
}
