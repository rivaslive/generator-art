import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  }

  a {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }

  * {
    box-sizing: border-box;
  }

  .ant-message {
    margin-top: 85px;
  }

  .ant-notification.ant-notification-topRight {
    top: 85px !important;
  }
`;

export default GlobalStyle;
