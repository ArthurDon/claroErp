import React from 'react';

const date = new Date();

export default () => (
  <div className="center-footer" data-limit={1000} style={{ maxWidth: 1000 }}>
    <footer id="footer" className="d-flex column">
      <div className="d-flex align-itens-center" style={{ width: '100%' }}>
        <ul className="opc-contato d-flex column-response align-itens-center">
          <li>
            <a
              style={{ display: 'flex' }}
              href="/static/termsconditions"
              className="up-text"
            >
              <p style={{ paddingRight: '10px', display: 'flex' }}>
                {' '}
                Termos de uso e Privacidade
              </p>
            </a>
          </li>
          <li>
            <a
              href="https://portal.privacytools.com.br/portal/109442da-deed-456c-8115-e60a99f13e17"
              target="_blank"
              rel="noopener noreferrer"
              className="up-text"
            >
              <p style={{ paddingRight: '10px', display: 'flex' }}>
                Portal de Privacidade
              </p>
            </a>
          </li>
        </ul>
      </div>
      <small className="copy">
        © {date.getFullYear()} Claro Finanças - Todos os direitos reservados
      </small>
    </footer>
  </div>
);
