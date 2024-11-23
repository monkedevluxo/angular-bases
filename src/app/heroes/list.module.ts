import { NgModule } from "@angular/core";
import { ListComponent } from "./components/list/list.component";

@NgModule({
  declarations: [
    ListComponent
  ],
  exports: [
    ListComponent
  ]
})

export class ListModule{}
