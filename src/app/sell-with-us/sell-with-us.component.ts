import { Component } from '@angular/core';

@Component({
  selector: 'app-sell-with-us',
  templateUrl: './sell-with-us.component.html',
  styleUrls: ['./sell-with-us.component.css'],
})
export class SellWithUsComponent {
  imageUrl!: string;
  file!: File;

  onFileSelected(event: any): void {
    this.file = event.target.files[0];
    this.convertToBase64(this.file);
  }

  convertToBase64(file: File): void {
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
    reader.readAsDataURL(file);
  }
  uploadImage() {
    if (this.file) {
      // Perform the upload logic here
      // You can use services or APIs to handle the actual upload process
      console.log('Uploading image:', this.file);
    }
  }
  // selectedFile!: File | null;

  // onFileSelected(event: any) {
  //   this.selectedFile = <File>event.target.files[0];
  // }
  // uploadImage() {
  //   if (this.selectedFile) {
  //     // Perform the upload logic here
  //     // You can use services or APIs to handle the actual upload process
  //     console.log('Uploading image:', this.selectedFile);
  //   }
  // }
}
