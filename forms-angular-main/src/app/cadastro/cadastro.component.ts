import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-cadastro",
  templateUrl: "./cadastro.component.html",
  styleUrls: ["./cadastro.component.css"],
})
export class CadastroComponent implements OnInit {
  constructor(private router: Router) {}

  public ngOnInit(): void {}

  public cadastrar(form: NgForm): void {
    console.log(form.controls);
    if (form.valid) {
      this.router.navigate(["./sucesso"]);
      return;
    }
    alert("Formulário inválido!");
  }
}
