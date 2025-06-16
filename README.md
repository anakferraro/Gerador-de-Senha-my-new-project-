## Visual do Aplicativo

### Android
<img src="https://raw.githubusercontent.com/SEU_USUARIO/SEU_REPOSITORIO/main/caminho/para/3068057f-f3a3-4f79-a124-aa24d568eab2.png" alt="Android App Screenshot" width="300"/>

### iOS
<img src="https://raw.githubusercontent.com/SEU_USUARIO/SEU_REPOSITORIO/main/caminho/para/ffcababe-d6f3-4777-a4e8-11f7e0dd823a.png" alt="iOS App Screenshot" width="300"/>

 FuncionalidadesAdd commentMore actions

✅ Geração de senhas seguras e aleatórias com tamanho customizável.

✅ Cópia da senha para a área de transferência.

✅ Salvamento seguro de senhas localmente, com `expo-secure-store`.

✅ Visualização de senhas salvas.

✅ Interface estilizada com `expo-linear-gradient`.

---

## 📱 Tecnologias Utilizadas

* [Expo](https://expo.dev/)
* [React Native](https://reactnative.dev/)
* [expo-secure-store](https://docs.expo.dev/versions/latest/sdk/securestore/)
* [expo-clipboard](https://docs.expo.dev/versions/latest/sdk/clipboard/)
* [expo-linear-gradient](https://docs.expo.dev/versions/latest/sdk/linear-gradient/)

---

 Como usar

1. Instale as dependências

```bash
npm install
```

2. Execute o projeto

```bash
npx expo start
```

Você poderá abrir o aplicativo em:

* Um emulador Android ou iOS.
* Dispositivo físico usando o aplicativo [Expo Go](https://expo.dev/go).
* Navegador, usando a versão web do Expo.

---

 Como funciona

1. Digite um nome descritivo para a senha (ex.: "Email", "Banco").
2. Escolha o comprimento da senha.
3. Toque em "Gerar Senha" para criar uma senha aleatória.
4. Opções disponíveis após a geração:

   * **Copiar Senha**: envia a senha para a área de transferência.
   * **Salvar Senha**: armazena a senha de forma segura no dispositivo.
5. Visualize as senhas salvas na lista abaixo.

---

 Estrutura de arquivos

* `App.js`: Tela principal e lógica de geração, cópia e salvamento de senhas.
* `package.json`: Dependências e scripts.
* `app.json`: Configurações do Expo.
* `eslint.config.js`: Configuração de linting.
* `tsconfig.json`: Configurações do TypeScript.
* `.gitignore`: Arquivos e pastas ignoradas pelo Git.

---

 Scripts disponíveis

* `npm start`: Inicia o Expo.
* `npm run android`: Executa no emulador Android.
* `npm run ios`: Executa no simulador iOS.
* `npm run web`: Executa no navegador.
* `npm run lint`: Executa o linter.
* `npm run reset-project`: Reseta o projeto para o estado inicial.

---

 Pré-requisitos

* Node.js e npm instalados.
* Expo CLI (`npm install -g expo-cli`).

---

Segurança

As senhas são armazenadas de forma **local e segura** utilizando `expo-secure-store`, garantindo que somente o aplicativo possa acessar as informações salvas.

---
