// button-floating.component.ts
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-floating',
  templateUrl: './button-floating.component.html',
  styleUrls: ['./button-floating.component.scss'],
})
export class ButtonFloatingComponent {
  /**
   * Ícone a ser exibido no botão. Pode ser um ícone do Material Icons, Font Awesome, etc.
   */
  @Input() icone: string = 'check';

  /**
   * Rota para redirecionar quando o botão é clicado. Deve ser uma URL válida.
   */
  @Input() rota: string = '';

  /**
   * Cor do botão. Pode ser 'primary', 'accent', 'warn' ou qualquer cor personalizada.
   */
  @Input() color: string = 'primary';

  /**
   * Texto de dica e rótulo do botão. Aparece quando o mouse passa sobre o botão.
   */
  @Input() nome: string = 'Criar';

  /**
   * Tipo do botão. Pode ser 'submit', 'reset' ou 'button'. Especifica o comportamento padrão.
   */
  @Input() tipo: string = '';

  /**
   * Define se o botão é de tamanho mini. Se verdadeiro, o botão será menor.
   */
  @Input() mini: boolean = false;

  /**
   * Define a direção dos botões, row ou column. Adicione isso no button floating pai.
   */
  @Input() direcao: 'column' | 'row' = 'row';

  /**
   * Defina como true se adicionar mais de um button floating pelo ngContent. Adicione-o como true no button floating filho.
   */
  @Input() multi: boolean = false;

  /**
   * Evento acionado quando o botão é clicado. Pode ser usado para executar uma função no componente pai.
   */
  @Output() funcaoClick: EventEmitter<void> = new EventEmitter<void>();

  executarFuncao() {
    this.funcaoClick.emit();
  }
}
