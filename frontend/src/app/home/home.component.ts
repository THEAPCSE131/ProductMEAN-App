import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../appModels/product.model';
import { ProductService } from '../appServices/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  productForm: FormGroup = new FormGroup({});
  showModal: boolean = false;
  editMode: boolean = false;
  products!: Product[];

  constructor(private fb: FormBuilder, private proService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
    this.productForm = this.fb.group({
      _id: [''],
      name: ['My Protine'],
      desc: ['This is good product'],
      price: [2000],
      image: ['http://www.google.com'],
      quntity: [1],
    });
  }

  getProducts() {
    this.proService.getProductList().subscribe((res: any) => {
      console.log(res);
      this.products = res;
    });
  }

  onProSubmit() {
    if (this.productForm.valid) {
      if (this.editMode) {
        this.proService.updateProduct(this.productForm.value).subscribe(
          (res) => {
            console.log(res);
            this.getProducts();
          },
          (err) => {
            console.log(err);
          }
        );
      } else {
        this.proService.addProduct(this.productForm.value).subscribe(
          (res) => {
            console.log(res);
            this.getProducts();
          },
          (err) => {
            console.log(err);
          }
        );
      }
      this.onReset();
      this.onCloseModal();
    } else {
      let key = Object.keys(this.productForm.controls);
      key.filter((data) => {
        let control = this.productForm.controls[data];
        if (control.errors != null) {
          control.markAsTouched();
        }
      });
    }
  }

  onEditProduct(pro: any) {
    this.editMode = true;
    this.showModal = true;
    this.productForm.patchValue(pro);
  }

  onDeleteProduct(id: any) {
    if (confirm('Do you want to delete this Product?')) {
      this.proService.deleteProduct(id).subscribe(
        (res) => {
          console.log('Deleted Successfully !!');
          this.getProducts();
        },
        (err) => {
          err;
        }
      );
    }
  }

  onAddProduct() {
    this.showModal = true;
  }

  onCloseModal() {
    this.showModal = false;
    this.onReset();
    this.editMode = false;
  }

  onReset() {
    this.productForm.reset({
      name: 'My Protine',
      desc: 'This is good product',
      image: 'http://www.google.com',
      price: 2000,
      quntity: 1,
    });
  }
}
