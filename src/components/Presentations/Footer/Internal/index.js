import React from 'react';
import './styles.css';

export default () => (
  <section className="modulo-contato flex">
    <div className="center-content flex column">
      <header className="flex column">
        <p
          style={{
            fontSize: '1.4rem',
            marginBottom: 15,
            textTransform: 'uppercase',
            color: 'hsla(0, 0%, 34%, 1)',
          }}
        >
          Não encontrou o que precisa?
        </p>
        <p style={{ fontSize: '1rem', color: 'hsla(0, 0%, 34%, 1)' }}>
          <a
            rel="noopener noreferrer"
            href="https://www.youtube.com/results?search_query=egestor"
            target="_blank"
          >
            Acesse nosso canal no Youtube
          </a>
        </p>
      </header>
      <div className="flex flex-wrap">
        <div className="box-contato flex column">
          <p>Escreva para:</p>
          <a href="mailto:atendimento@zipline.com.br">
            atendimento@zipline.com.br
          </a>
        </div>
      </div>
    </div>
  </section>
);
