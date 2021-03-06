import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ConfirmationComponent } from "./confirmation-page/confirmation.component";
import { HeaderComponent } from "./header/header.component";

@NgModule({
    declarations: [HeaderComponent],
    imports: [CommonModule],
    exports: [HeaderComponent],
    providers: []
})
export class CommonCompsModule {}