import React, { useState } from 'react';
import { ModalTemplate } from '../../../Presentations';

const H1 = {
  textAlign: 'left',
};

const ModalHelp = () => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <a
        href="/#"
        onClick={() => setModal(true)}
        className="recover-pass"
        style={{ marginTop: 20, textDecoration: 'underline', color: 'blue' }}
      >
        Preciso de Ajuda
      </a>

      {modal !== false && (
        <ModalTemplate>
          <>
            <header
              style={{
                maxHeight: 'calc(100vh - 200px)',
                overflow: 'scroll',
                display: 'block',
              }}
            >
              <h1>
                <strong style={{ fontSize: 22 }}>
                  Como realizar login no site do <br /> Claro E-Finanças
                </strong>
              </h1>
              <br />
              <h1 style={H1}>
                <strong>Primeiro Login:</strong> O login estar disponivel em até
                72hrs após a assinatura do serviço Claro E-Finanças.
              </h1>
              <br />
              <h1 style={H1}>
                <strong>Acesse:</strong>{' '}
                <a
                  href="https://claroefinancas.com.br/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  https://claroefinancas.com.br
                </a>{' '}
                e clique em Criar Cadastro, siga os passos abaixo:
                <br />
                <br />
                - Insira o número de celular Claro que recebeu o SMS de
                Boas-Vindas;
                <br /> - Você receber um novo SMS com código de confirmação do
                acesso;
                <br />- Insira o código recebido e pronto! Basta concluir o seu
                cadastro. Você receber a confirmação do cadastro no e-mail
                indicado.
              </h1>
              <br />
              <h1 style={H1}>
                <strong>Depois do cadastro?</strong> Após realizar o cadastro,
                acessar{' '}
                <a
                  href="https://claroefinancas.com.br/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  https://claroefinancas.com.br
                </a>{' '}
                e realizar o login com o e-mail e senha cadastrados.
              </h1>
              <br />
              <h1 style={H1}>
                <strong style={{ color: 'red', fontSize: 16 }}>
                  Não encontrou o que precisa?
                </strong>
                <br />
                <a
                  href="/ajuda"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="bt-register"
                  style={{ backgroundColor: 'red', color: 'white' }}
                >
                  Ajuda
                </a>
                <a
                  href="/#"
                  className="bt-register"
                  onClick={() => document.getElementById('chat-icon').click()}
                  style={{ backgroundColor: 'red', color: 'white' }}
                >
                  Fale Conosco
                </a>
                <br />
                <br />
                Horário de atendimento de domingo a domingo das 08h00 às 23h00.
                <br /> <br />
                Escreva para:{' '}
                <a
                  href="mailto:suporte@claroefinancas.com.br"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  suporte@claroefinancas.com.br
                </a>
              </h1>
              <br />
            </header>
          </>
          <a href="/#" className="go-back" onClick={() => setModal(false)}>
            Voltar
          </a>
        </ModalTemplate>
      )}
    </>
  );
};

export default ModalHelp;
