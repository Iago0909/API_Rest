# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.


2. Relatório Técnico

Processo de Desenvolvimento

O projeto foi desenvolvido com o objetivo de praticar o consumo de APIs REST em um app React Native. Comecei estruturando a aplicação com uma tela principal que lista usuários aleatórios consumidos da API Random Data API. Em seguida, implementei uma navegação simples entre a tela de listagem e os detalhes do usuário selecionado.
Utilizei useEffect para buscar os dados assim que a tela carrega e useState para gerenciar o estado da lista, carregamento e erros. Também adicionei a funcionalidade de pull-to-refresh, permitindo que o usuário atualize a lista deslizando a tela para baixo.

⚠️ Desafios Encontrados e Soluções

Erro na requisição da API: Em algumas chamadas, a API retornava uma lista vazia ou com apenas um item. Para resolver isso, ajustei a URL incluindo o parâmetro ?size=10, garantindo que sempre fossem retornados 10 usuários.
Imagem de avatar quebrando layout: Em alguns casos, a imagem do avatar era inválida ou demorava a carregar, o que afetava o visual da lista. Para isso, adicionei um estilo com borderRadius e size fixo, garantindo que mesmo imagens com erro mantivessem o layout estável.
Gerenciamento de estados entre telas: Para alternar entre a lista e os detalhes, implementei a lógica diretamente no App.js, usando um estado selectedUser que controla a tela exibida. Isso manteve a navegação leve e sem necessidade de bibliotecas externas.

🔄 Fetch vs. Axios

Durante o desenvolvimento, optei por utilizar o fetch, que é nativo do JavaScript e já está disponível sem necessidade de instalação. Ele é suficiente para chamadas simples como as desse projeto.
No entanto, vale a pena destacar algumas comparações:
Característica	Fetch	Axios
Instalação	Nativo, sem instalação	Requer instalação via npm ou yarn
Suporte a JSON	Requer res.json() manualmente	Já retorna os dados convertidos
Interceptadores	Não possui	Possui interceptadores nativos
Cancelamento de requisições	Complexo	Fácil de usar com CancelToken
Se o projeto crescesse ou tivesse autenticação, tratamentos globais de erro ou loading, o Axios provavelmente seria a escolha mais robusta.
Random Data API | Effortless Random Data at Your Fingertips
Random Data API Landing Page
