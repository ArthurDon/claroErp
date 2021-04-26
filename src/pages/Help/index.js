import React from 'react';
import Layout from '../../layout/External';
import FAQ from './faq.json';

const STYLE1 = {
  fontSize: '1.1rem',
  color: 'hsla(357, 77%, 52%, 1)',
};

const STYLE2 = {
  fontSize: '2.1rem',
  color: 'hsla(0, 0%, 34%, 1)',
  marginBottom: 20,
  marginTop: 20,
};

const STYLE3 = {
  fontSize: '1.4rem',
  color: 'hsla(0, 0%, 34%, 1)',
};

const Help = () => {
  /**
   * Function Render Content
   */
  const renderHelp = () =>
    FAQ.map((response) => (
      <details>
        <summary>{response.question}</summary>
        <div className="_content" style={{ whiteSpace: 'pre-line' }}>
          <p>{response.answer}</p>
        </div>
      </details>
    ));

  return (
    <Layout>
      <main className="main">
        <section>
          <header className="section-title">
            <div className="center-content">
              <a href="/" style={STYLE1}>
                Voltar
              </a>
              <br />
              <h2 style={STYLE2}>DÚVIDAS FREQUENTES</h2>
              <h3 style={STYLE3}>SOBRE O CLARO e-FINANÇAS</h3>
            </div>
          </header>
        </section>
        <section>
          <div className="center-content">{renderHelp()}</div>
        </section>
      </main>
    </Layout>
  );
};

export default Help;
