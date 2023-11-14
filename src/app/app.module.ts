import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

// components
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { ListProductsComponent } from "./components/list-products/list-products.component";
import { AgregarEditarProductComponent } from "./components/agregar-editar-product/agregar-editar-product.component";
import { ReactiveFormsModule } from "@angular/forms";
import { ProductService } from "./services/product.service";

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		ListProductsComponent,
		AgregarEditarProductComponent,
	],
	imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
	providers: [ProductService],
	bootstrap: [AppComponent],
})
export class AppModule {}
