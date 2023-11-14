import { Injectable } from "@angular/core";
import { Product } from "../interfaces/product.interface";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class ProductService {
	private productListSubject: BehaviorSubject<Product[]> =
		new BehaviorSubject<Product[]>([
			{
				id: 1,
				nombre: "Curso de React",
				descripcion: "Curso de React desde cero con Anderson Almeyda",
				precio: 80,
			},
			{
				id: 2,
				nombre: "Curso de Angular",
				descripcion: "Curso de Angular desde cero con Prof. Castañeda",
				precio: 50,
			},
			{
				id: 3,
				nombre: "Curso de Spring Boot",
				descripcion:
					"Curso de Spring Boot hasta microservicios con Almeydini",
				precio: 150,
			},
		]);
	public productList$: Observable<Product[]> =
		this.productListSubject.asObservable();

	constructor() {}

	get productList(): Product[] {
		return this.productListSubject.getValue();
	}

	set productList(product: Product[]) {
		this.productListSubject.next(product);
	}

	getProduct(id: number): Product | undefined {
		return this.productList.find((product) => product.id === id);
	}

	addProduct(product: Product): void {
		const updatedProductList = [...this.productList, product];
		this.productList = updatedProductList;
	}

	editProduct(product: Product): void {
		const updatedProductList = this.productList.map((p) =>
			p.id === product.id ? product : p
		);
		this.productList = updatedProductList;
	}

	deleteProduct(id: number): void {
		const updatedProductList = this.productList.filter((p) => p.id !== id);
		this.productList = updatedProductList;
	}
}
