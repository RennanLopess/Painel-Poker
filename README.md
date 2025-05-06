# 🃏 Gerenciador de Poker - Painel Administrativo Moderno

Este é um **sistema completo para controle de partidas de poker**, desenvolvido com foco em usabilidade, praticidade e visual moderno. Ele permite o gerenciamento detalhado de jogadores nas modalidades **Cash Game** e **Torneio**, facilitando o controle de entradas, reentradas, add-ons e saídas com **cálculos automáticos de lucro** e **total em caixa**.

---

## 🎯 Objetivo do Projeto

Este sistema foi desenvolvido por **Rennan Rentz**, um apaixonado por poker e entusiasta da programação front-end. Como jogador e organizador de jogos, percebi a dificuldade em gerenciar partidas de maneira eficiente usando planilhas ou papel. Por isso, resolvi criar **uma ferramenta intuitiva e poderosa** para uso pessoal e também para ajudar outros organizadores, clubes e amantes do poker a manterem o controle financeiro de suas mesas com facilidade e profissionalismo.

---

## 🛠️ Funcionalidades Principais

✅ **Suporte a dois modos de jogo:**
- **Torneio**: com reentradas e add-on únicos por jogador.
- **Cash Game**: com reentradas ilimitadas, sem add-on.

✅ **Cadastro de jogadores** com nome e chave Pix.  
✅ **Entrada padrão configurável** (entrada, reentrada e addon).  
✅ **Modal de edição de jogador** para ajustar reentradas, add-on e saída.  
✅ **Cálculo automático de lucro individual**.  
✅ **Cálculo do total em caixa** com base nas entradas e reentradas.  
✅ **Remoção de jogadores** com confirmação.  
✅ **Estilo visual dark moderno e responsivo** com Bootstrap 5.

---

## 🧠 Como Funciona

1. **Selecione o modo de jogo** (Torneio ou Cash Game).
2. **Informe os valores padrão** para entrada, reentrada e (quando aplicável) addon.
3. **Cadastre os jogadores** com nome e chave Pix.
4. **Edite a qualquer momento** os dados de reentradas, addon (somente uma vez) e valores de saída.
5. **Acompanhe o lucro individual** de cada jogador e o **total acumulado na caixa** da mesa.
6. **Remova jogadores** quando necessário — com confirmação de segurança.

---

## 💻 Tecnologias Utilizadas

- **HTML5** — marcação da interface
- **CSS3** — estilos personalizados em dark mode
- **JavaScript** — lógica de controle e interação dinâmica
- **Bootstrap 5** — componentes estilizados e modais

---

## 🎨 Design e Usabilidade

A interface foi pensada para ser:

- **Moderna**, com cores escuras agradáveis à vista.
- **Intuitiva**, para que qualquer pessoa consiga usar sem precisar de manuais.
- **Responsiva**, funcionando bem tanto em computadores quanto em tablets e celulares.
- **Eficiente**, reduzindo drasticamente o tempo de controle manual de partidas.

---

## 📈 Lógica de Cálculo

- **Total de Entrada (por jogador)** =  
  `Entrada + (Reentradas × Valor de Reentrada) + (Addon se houver)`
- **Lucro (por jogador)** =  
  `Saída - Total de Entrada`
- **Total em Caixa (geral)** =  
  `Soma de todas as entradas e reentradas (sem considerar saídas)`

---

## 🧩 Possibilidades Futuras

- 📤 Exportação para PDF ou Excel
- 💾 Armazenamento local ou em nuvem com histórico
- 🔍 Filtros por nome ou chave Pix
- 📱 App mobile (PWA)
- 🔐 Área de login para múltiplos organizadores

---

## 🤝 Contribuição e Finalidade

Este projeto não foi criado para fins comerciais, mas sim **por amor ao poker e à organização**. Se você também joga ou organiza partidas e precisa de uma solução prática, este painel é para você.

Sinta-se à vontade para contribuir com melhorias, adaptar para seu próprio clube ou até mesmo expandir este projeto conforme suas necessidades!

---

## 👤 Autor

**Rennan Rentz**  
Amante de poker, desenvolvedor autodidata e jogador no **A7 Sports Club**.  
Este projeto foi feito com dedicação e carinho, para tornar a experiência de gerenciar mesas mais fluida, clara e divertida.

---

## 📄 Licença

Este projeto está sob a licença **MIT**.  
Você pode usá-lo, modificá-lo e distribuí-lo livremente, desde que preserve os créditos ao autor.

---

## 🧾 Exemplo de Uso

> Exemplo:  
> - Modo Torneio selecionado  
> - Entrada: R$ 100, Reentrada: R$ 100, Addon: R$ 200  
> - Jogador "Rennan" entra com 1 entrada, faz 2 reentradas e 1 addon  
> - Saída: R$ 500  
> - Lucro: R$ 500 - (100 + 2×100 + 50) = **R$ 150**

---

🎯 **Poker é mais do que um jogo — é estratégia, controle e paixão.**  
Este sistema foi feito para que você se preocupe apenas com as cartas na mesa — o resto, ele cuida pra você.

...

## 🖼️ Exemplos Visuais

Veja abaixo capturas reais do sistema em funcionamento:

### 📸 Tela - Modo Torneio

![Tela do Torneio](Tela-Torneio.png)  
*Exemplo de gerenciamento de torneio com jogadores, reentradas e add-on registrados.*

---

### 📸 Tela - Modo Cash Game

![Tela do Cash Game](Tela-Cash.png)  
*Exemplo de painel de controle em modo cash, com entradas, rebuys e saídas de cada jogador.*

---
