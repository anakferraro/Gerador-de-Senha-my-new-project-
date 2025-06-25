
# Gerador de Senhas Seguras

Aplicativo mobile feito com Expo e React Native para gerar, salvar e visualizar senhas de forma segura.

## Visual do Aplicativo

<p align="center">
  <img src="https://github.com/user-attachments/assets/afe757e0-9613-4888-a42c-a72c012c5aec" alt="iOS" width="250"/>
  <img src="https://github.com/user-attachments/assets/844e44ab-1833-4858-aa0d-2e7c48276d9b" alt="Android" width="250"/>
  &nbsp;&nbsp;&nbsp;
</p>

<p align="center">
  <b>Android (esquerda) | iOS (direita)</b>
</p>

---

## Funcionalidades

- Geração de senhas seguras e aleatórias com tamanho customizável.
- Cópia da senha para a área de transferência.
- Salvamento seguro de senhas localmente, com `expo-secure-store`.
- Visualização de senhas salvas.
- Interface estilizada com `expo-linear-gradient`.

---

## Tecnologias Utilizadas

- [Expo](https://expo.dev/)
- [React Native](https://reactnative.dev/)
- [expo-secure-store](https://docs.expo.dev/versions/latest/sdk/securestore/)
- [expo-clipboard](https://docs.expo.dev/versions/latest/sdk/clipboard/)
- [expo-linear-gradient](https://docs.expo.dev/versions/latest/sdk/linear-gradient/)

---

## Como testar o aplicativo sem clonar o repositório

Este aplicativo está publicado no Expo e pode ser executado em qualquer dispositivo ou emulador, sem necessidade de instalação local.

### Acesso pelo celular (Android ou iOS)

1. Instale o app [Expo Go](https://expo.dev/go)
2. Abra o Expo Go e escaneie o QR Code gerado pela publicação  
   ou acesse diretamente o link abaixo:

**[Abrir no Expo Go](https://expo.dev/@SEU_USUARIO/SEU_APP)**  
*Substitua esse link pelo link real após rodar `npx expo publish`.*

---

## Como usar

1. Instale as dependências:

```bash
npm install
````

2. Execute o projeto:

```bash
npx expo start
```

Você poderá abrir o aplicativo em:

* Um emulador Android ou iOS.
* Dispositivo físico usando o aplicativo [Expo Go](https://expo.dev/go).
* Navegador, usando a versão web do Expo.

---

## Como funciona

1. Digite um nome descritivo para a senha (ex.: "Email", "Banco").
2. Escolha o comprimento da senha.
3. Toque em "Gerar Senha" para criar uma senha aleatória.
4. Opções disponíveis após a geração:

   * Copiar Senha: envia a senha para a área de transferência.
   * Salvar Senha: armazena a senha de forma segura no dispositivo.
5. Visualize as senhas salvas na lista abaixo.

---

## Estrutura de arquivos

* `App.js`: Tela principal e lógica de geração, cópia e salvamento de senhas.
* `package.json`: Dependências e scripts.
* `app.json`: Configurações do Expo.
* `eslint.config.js`: Configuração de linting.
* `tsconfig.json`: Configurações do TypeScript.
* `.gitignore`: Arquivos e pastas ignoradas pelo Git.

---

## Scripts disponíveis

* `npm start`: Inicia o Expo.
* `npm run android`: Executa no emulador Android.
* `npm run ios`: Executa no simulador iOS.
* `npm run web`: Executa no navegador.
* `npm run lint`: Executa o linter.
* `npm run reset-project`: Reseta o projeto para o estado inicial.

---

## Pré-requisitos

* Node.js e npm instalados.
* Expo CLI instalado globalmente:

```bash
npm install -g expo-cli
```

---

## Segurança

As senhas são armazenadas de forma local e segura utilizando `expo-secure-store`, garantindo que somente o aplicativo possa acessar as informações salvas.

```

---


