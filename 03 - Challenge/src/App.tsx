import { useState, MouseEvent } from 'react';
import './App.css'

/*
* CHALLENGE progresso do formulário
* INSTRUÇÕES
Neste desafio sua missão é criar um formulário e seus 4 campos (com controlled inputs),
juntamente com uma barra de progresso que altera-se conforme o usuário preenche os campos.
- Crie também validações para cada campo conforme instruções abaixo.
* BARRA DE PROGRESSO
Para aproveitar estilização já definida, crie:
- a barra com um elemento pai chamado .bar-container e seu filho .bar
* CAMPOS DO FORMULÁRIO:
input - nome completo - válido se digitar no mínimo dois nomes,
input - email - válido se digitar um e-mail,
select - estado civil,
radio - gênero
Para validação de e-mail use a seguinte RegEx: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
* FUNCIONAMENTO
Espera-se que o formulário tenha 4 campos ao todo. Portanto, quando o usuário preencher
o primeiro campo, a barra de progresso deve assumir 25% do tamanho total;
o segundo campo, 50% e assim por diante...
Caso o usuário não tenha definido valores para os elementos de select e radio,
os mesmos não devem ser considerados como preenchidos até então.
Se o usuário preencher um campo e apagar seu valor, este campo deve ser considerado como vazio,
fazendo com que a barra de progresso regrida novamente.
Desabilitar o botão de enviar caso todos os campos não estejam preenchidos/válidos.
Ao enviar, deve-se apresentar um alert javascript com sucesso, limpar todos os campos
do formulário e zerar a barra de progresso novamente.
*/

type FormInputs = {
  nome: string,
  email: string,
  estadoCivil: string,
  genero: undefined,
}

export function App() {
  const [form, setForm] = useState<FormInputs>({} as FormInputs);
  const validaçãoInput = validação();
  

  return (
    <div className="App">
      <h1>Progresso do Formulário</h1>

      <main>
        <div className='progress-bar'>
          <div className='progress' style={{width: `${validaçãoInput * 25}%`}}></div>
        </div>
        <form>
          <div className='form-group'>
            <label htmlFor=''>Nome Completo</label>
            <input name='nome' value={form.nome} onChange={e => handleChangeInput(e)}/>
          </div>
          <div className='form-group'>
            <label htmlFor=''>E-mail</label>
            <input name='email' value={form.email} onChange={e => handleChangeInput(e)} pattern='/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/' />
            
          </div>
          <div className='form-group'>
            <label htmlFor=''>Estado Civil</label>
            <select name='estadoCivil' value={form.estadoCivil} onChange={e => handleChangeInput(e)}>
              <option value=''>- selecione...</option>
              <option value='solteiro'>Solteiro</option>
              <option value='casado'>Casado</option>
              <option value='divorciado'>Divorciado</option>
            </select>
          </div>
          <div className='form-group'>
            <label htmlFor=''>Gênero</label>
            <div className='radios-container'>
              <span>
                <input type='radio' value="Masculino" name='genero' checked={form.genero == "Masculino" ? true : false} onChange={e => handleChangeInput(e)} /> Masculino
              </span>
              <span>
                <input type='radio' value="Feminino" name='genero' checked={form.genero == "Feminino" ? true : false} onChange={e => handleChangeInput(e)} /> Feminino
              </span>
            </div>
          </div>
          <button className={`${validaçãoInput == 4 ? "active": "disabled"}`} onClick={handleSubmit} disabled={validaçãoInput == 4 ? false : true}>Enviar Formulário</button>
        </form>
      </main>
    </div>
  )

  function validação(){
    let validação = 0;
    if(form.nome != "" && form.nome != undefined)
      validação += 1;

    if(form.email != ""  && form.email != undefined)
      validação += 1;

    if(form.estadoCivil != "" && form.estadoCivil != undefined)
      validação += 1;

    if(form.genero != null)
      validação += 1;
    
    
    return validação;
  }

  function handleChangeInput(e: any){
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  }

  function handleSubmit(){
    const aux: FormInputs = {
      nome: "",
      email: "",
      estadoCivil: "",
      genero: undefined,
    }
    setForm(aux);

    alert("Cadastro Realizado");
  }
}