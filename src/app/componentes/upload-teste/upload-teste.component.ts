import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'upload',
  templateUrl: './upload-teste.component.html',
  styleUrls: ['./upload-teste.component.css'],
})
export class UploadTesteComponent implements OnInit {
  constructor(private httpClient: HttpClient) {}
  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;
  cabecalhoAutorizacao: any;
  resultadoAutorizacao: any;
  reqHeader = new HttpHeaders({
    Authorization: this.cabecalhoAutorizacao,
  });
  corpo: any = {
    username: 'user',
    password: 'senha',
  };
  // Gets called when the user selects an image
  public onFileChanged(event) {
    // Select File
    this.selectedFile = event.target.files[0];
  }
  // Gets called when the user clicks on submit to upload the image

  onUpload() {
    console.log(this.selectedFile);
    const headers = new HttpHeaders({
      Authorization: this.cabecalhoAutorizacao,
      Observe: 'response'
    });
    // tslint:disable-next-line: object-literal-shorthand
    const options = { headers: headers };
    // FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const uploadImageData = new FormData();
    uploadImageData.append(
      'imageFile',
      this.selectedFile,
      this.selectedFile.name
    );

    // Make a call to the Spring Boot Application to save the image
    this.httpClient
      .post('http://localhost:4200/image/upload', uploadImageData, options)
      .subscribe((response:HttpResponse<any>) => {
        console.log(response);
        if (response.status == 200) {
          this.message = 'Image uploaded successfully';
        } else {
          this.message = 'Image not uploaded successfully';
        }
      });
  }
  getImage() {
    const headers = new HttpHeaders({
      Authorization: this.cabecalhoAutorizacao,
      Observe: 'response'
    });
    // tslint:disable-next-line: object-literal-shorthand
    const options = { headers: headers };
    this.httpClient
      .get('http://localhost:4200/image/get/' + this.imageName, options)
      .subscribe((res) => {
        this.retrieveResonse = res;
        this.base64Data = this.retrieveResonse.picByte;
        this.retrievedImage = 'data:image/png;base64,' + this.base64Data;
      });
  }

  ngOnInit() {
    const httpOptions = {
      headers: new HttpHeaders({ Authorization: '' }),
      observe: 'response' as 'response',
    };
    this.httpClient
      .post('http://localhost:4200/login', this.corpo, httpOptions)
      .subscribe((res: HttpResponse<any>) => {
        const editarString = res.headers.get('Authorization');
        const stringEditada = editarString.split(' ');
        this.cabecalhoAutorizacao = stringEditada[1];
        localStorage.setItem('token', this.cabecalhoAutorizacao);
      });
  }
}
