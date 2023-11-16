import { Injectable, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IDataService } from '../models/data.interface.service';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export abstract class EditData<
  TService extends IDataService<TForm, TList, TFull>,
  TForm,
  TList,
  TFull
> implements OnInit
{
  protected idSelecionado!: string | null;
  form!: FormGroup;

  constructor(
    protected dataService: TService,
    protected router: Router,
    protected route: ActivatedRoute
  ) {}

  public abstract ngOnInit(): void;

  protected updateData() {
    if (this.form.invalid) {
      //   for (let error of this.form.validate()) {
      //   }

      return;
    }

    const data: TForm = this.form.value;

    this.dataService.put(this.idSelecionado!, data).subscribe({
      next: (data: TList) => this.processSuccess(data),
      error: (error: Error) => this.processError(error),
    });
  }

  protected abstract processSuccess(data: TList): void;

  protected processError(error: Error) {}

  protected invalidField(name: string): boolean {
    return this.form.get(name)!.touched && this.form.get(name)!.invalid;
  }
}
