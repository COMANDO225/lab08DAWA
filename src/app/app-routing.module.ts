import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListProductsComponent } from "./components/list-products/list-products.component";
import { AgregarEditarProductComponent } from "./components/agregar-editar-product/agregar-editar-product.component";

const routes: Routes = [
	{ path: "", component: ListProductsComponent },
	{ path: "agregar", component: AgregarEditarProductComponent },
	{ path: "editar/:id", component: AgregarEditarProductComponent },
	{ path: "**", redirectTo: "", pathMatch: "full" },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
