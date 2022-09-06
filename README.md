# Membrane test | Sr. Frontend Developer

This project was created with [Nextjs](https://nextjs.org/)

# Preview in vercel.
https://membrane-test-three.vercel.app


https://user-images.githubusercontent.com/39039038/188738841-3c78b91b-d618-4fe0-afdc-4f4d36945895.mp4


### Connect Wallet (Metamask)
![connect](/public/connect-wallet.png)

### Dashboard
![connect](/public/dashboard.png)

### Menu Account
![connect](/public/menu-account.png)

### Start Survey
![connect](/public/start-survey.png)

### Answering Survey
![connect](/public/start-survey2.png)

### Submit Survey
![connect](/public/start-survey3.png)

# Requirements:
- Next.js (preferred), CRA or custom webpack for the front end infrastructure, taking into
account for the architecture of the project hierarchy and organization of directories,
routing, conventions and good practices of clean code, good design patterns for the app
itself but also for the react components 
- For the app state, Mobx State Tree (preferred) or React Hooks 
- Ant Design for components (plus)
- Add a descriptive “readme” file, it should also include links to any resources and
documentation used to solve the challenge.

## What does this project/test do?

- Connect Metamask wallet
- Ensure user is connected to Ropsten and if not show a button to switch networks
automatically.
- Show balance of $QUIZ token (address below).
- Once the page is loaded, present the title of the daily trivia with its picture and a button
that allows you to begin answering.
- Once the survey starts, display the current question, which will be available for the amount
of seconds in the lifetimeSeconds property.
- Answered or not it should move onto the next question.
- Once all the questions are finished, show an overview with all the answers.
- Show a button to submit the questions to the validator contract
- Refresh the balance of $QUIZ

# Resources
1. [Survey contract repo](https://github.com/rather-labs/blockchain-challenge-utils)
2. [Survey sample](https://github.com/rather-labs/blockchain-challenge-utils/blob/main/survey-sample.json)
3. [$QUIZ Token in ropsten](https://ropsten.etherscan.io/address/0x74f0b668ea3053052deaa5eedd1815f579f0ee03#readContract)
4. [Antd](https://ant.design/)

# Configure Project
Create a new file named **.env** in the root project directory.
Introduce the next vars:

```dotenv
NEXT_PUBLIC_TOKEN_ADDRESS=0x74F0B668Ea3053052DEAa5Eedd1815f579f0Ee03
# Optional env var
NEXT_PUBLIC_INFURA_ETH_KEY=your_infura_api_key
```

1. The direction 0x74F0B668Ea3053052DEAa5Eedd1815f579f0Ee03 is the contract upload in Ropsten Network in Etherscan https://ropsten.etherscan.io/address/0x74f0b668ea3053052deaa5eedd1815f579f0ee03#readContract

2. NEXT_PUBLIC_INFURA_ETH_KEY is a optional var, used in prod like required.

Now install the dependencies using the next command in terminal

    yarn install

or

    npm install


# Start Project
Run:

    yarn dev

or

    npm run dev


# Important things

You have the next extensions in your editor (like vsCode, Atom, vim, etc.)
1. [editorConfig](https://editorconfig.org/)
2. [eslint](https://eslint.org/)
3. [prettier](https://prettier.io/)

> **_NOTE:_**  In addition to having these extensions installed, make sure they are active and working properly.

# This project used some libs like:

1. [styled-components](https://styled-components.com/)
2. [antd](https://ant.design/)
3. [useDapp](https://usedapp.io/)
4. [ethers](https://docs.ethers.io/v5/)

# Architecture in the project
This project was created with [Atomic Design Pattern](https://bradfrost.com/blog/post/atomic-web-design/)
Some of the components are:

### Atoms
- Button
- Container
- GroupOption
- Image
- MenuWrapper
- Modal
- Text
- Title
- WrapperWithBorder
- Input
- Loading

## Molecules
- AccountAndNetwork
- BalanceToken
- ConnectWalletCard
- MenuPersonalLinks
- ModalNetworkNotValid
- ModalNotExtension

## Organisms
- Layout
- Navbar
- QuizPresentation
- SurveyQuestion
- SurveyResult

## Templates
- ConnectWallet
- Dashboard
- Survey

## Custom Hooks
- useModal: Hook for admin open modal, toggleState, closeModal, openModal.

      const {
        isOpen,
        openModal,
        closeModal,
        toggleModal
      } = useModal();

- useTime: Hook countdown.

       const time = 30; // 30 seconds
       const startImmediately = true; // Optional - Start immediately on hook load 
       const { setItem, getItem, removeItem } = useTime(time, startImmediately);

## File System Tree

```
.
├── README.md
├── tsconfig.json
└── src
    ├── components
    │ ├── Atoms
    │ │ ├── Button
    │ │ │ ├── Button.tsx
    │ │ │ ├── routes.ts
    │ │ │ └── style.ts
    │ │ ├── ...
    │ ├── Molecules
    │ │ ├── AccountAndNetwork
    │ │ │ ├── AccountAndNetwork.tsx
    │ │ │ ├── routes.ts
    │ │ │ └── style.ts
    │ │ ├── ...
    │ ├── Organisms
    │ │ └── Layout
    │ │     ├── Layout.tsx
    │ │     ├── routes.ts
    │ │     └── style.ts
    │ ├── Template
    │ │ └── ConnectWallet
    │ │     ├── ConnectWallet.tsx
    │ │     ├── routes.ts
    │ │     └── style.ts
    ├── config
    │ ├── abi.json                              # abi for generate interfaz with ethers.js
    │ ├── routes.ts
    │ └── index.ts
    ├── context
    │ ├── SurveyConext
    │ └── Web3Context
    ├── hooks
    │ ├── useModal.ts
    │ └── useTime.ts
    │ ├── shared
    │ │ └── layout
    │ │     ├── PrivateRoute.tsx
    │ │     └── PublicRoute.tsx
    ├── pages
    │ ├── 404.tsx
    │ ├── _app.tsx                               # optional if project is with Nextjs
    │ ├── app
    │ │ └── index.tsx
    │ ├── auth
    │ │ └── Logout.tsx
    │ └── index.tsx
    └── styles
        ├── antd.less
        ├── global.ts
        └── theme.ts
   
```

Created with love ❤️ by [**rivaslive**](https://www.kevin-rivas.com/)
