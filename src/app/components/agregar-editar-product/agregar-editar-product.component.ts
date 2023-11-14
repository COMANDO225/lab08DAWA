import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Product } from "src/app/interfaces/product.interface";
import { ProductService } from "../../services/product.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
	selector: "app-agregar-editar-product",
	templateUrl: "./agregar-editar-product.component.html",
	styleUrls: ["./agregar-editar-product.component.css"],
})
export class AgregarEditarProductComponent {
	formProducto: FormGroup;
	productoId: number | undefined;
	title: string = "";

	constructor(
		private fb: FormBuilder,
		private productService: ProductService,
		private router: Router,
		private route: ActivatedRoute
	) {
		this.formProducto = this.fb.group({
			nombre: ["", Validators.required],
			descripcion: ["", Validators.required],
			precio: ["", Validators.required],
		});
	}

	ngOnInit(): void {
		// Obtener el id del producto de los parámetros de la ruta
		this.route.params.subscribe((params) => {
			this.productoId = +params["id"];
			if (this.productoId) {
				// Si hay un id, obtener el producto del servicio y prellenar el formulario
				const productToEdit = this.productService.getProduct(
					this.productoId
				);
				if (productToEdit) {
					this.formProducto.patchValue({
						nombre: productToEdit.nombre,
						descripcion: productToEdit.descripcion,
						precio: productToEdit.precio,
					});
				}
			}
		});
	}

	guardarProducto() {
		console.log(this.formProducto);

		const editedProduct: Product = {
			id: this.productoId || this.productService.productList.length + 1,
			nombre: this.formProducto.get("nombre")?.value,
			descripcion: this.formProducto.get("descripcion")?.value,
			precio: this.formProducto.get("precio")?.value,
		};

		// Guardar o editar el producto según si se proporciona un id
		if (this.productoId) {
			this.productService.editProduct(editedProduct);
			this.title = "Editar producto";
		} else {
			this.productService.addProduct(editedProduct);
			this.title = "Agregar producto";
		}

		// Limpiar el formulario como best practices
		this.formProducto.reset();

		// Mostrar un mensaje al usuario con alerta
		alert("Producto agregado con éxito");

		// Redireccionar al usuario a la lista de productos usando el modulo Router
		this.router.navigate(["/list-products"]);
	}
}
