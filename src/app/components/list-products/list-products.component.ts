import { Component } from "@angular/core";
import { Product } from "src/app/interfaces/product.interface";
import { ProductService } from "src/app/services/product.service";

@Component({
	selector: "app-list-products",
	templateUrl: "./list-products.component.html",
	styleUrls: ["./list-products.component.css"],
})
export class ListProductsComponent {
	listProducts: Product[] = [];
	constructor(private productService: ProductService) {}

	ngOnInit(): void {
		this.productService.productList$.subscribe((productList) => {
			this.listProducts = productList;
		});
	}

	eliminarProducto(id: number) {
		if (confirm("¿Está seguro de eliminar el producto?")) {
			this.productService.deleteProduct(id);
		}
	}
}
