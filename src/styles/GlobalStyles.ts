import { createGlobalStyle } from 'styled-components';

// Estilo global
export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    min-height: 100%;
    background: var(--primary);
  }

  *, button, input {
    border: 0;
    background: none;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
    color: var(--black);

    /* todas as transições de cor  */
    transition: color .2s ease-out;
  }

  ul {
    list-style: none;
  }

  :root {
    /* declarando as cores de forma dinamica */
    ${(props) => {
      // pegando os temas
      const theme = props.theme;

      let append = '';

      // injetando do append todas as propriedades de cores armazenadas, ja injetando-as no global styles de forma dinamica
      Object.entries(theme).forEach(([prop, value]) => {
        append += `--${prop}: ${value};`;
      });

      return append;
    }}
  }
`;
