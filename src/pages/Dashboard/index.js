import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import queryString from 'query-string';
import Layout from '../../layout/Internal';
import {
  CardEGestor,
  CardUserData,
  CardContributors,
  CardRegisterContributors,
} from '../../components/Containers';

import { AlertsErrors, Loader } from '../../components/Presentations';

import { getPlans, sendExternalToken } from '../../services';
import { validateToken } from '../../utils';
import FAQ from './faq.json';

const Dashboard = () => {
  /**
   * Hooks
   */
  const [tabs, setTabs] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');
  const [loader, setLoader] = useState(true);
  const [footer, setFooter] = useState(false);
  const [productsData, setProductsData] = useState([]);
  const [usersData, setUsersData] = useState([]);

  /**
   * Function Get Plans
   */
  const getProducts = async () => {
    const getPlan = await getPlans();

    if (!getPlan.status) {
      setLoader(false);
      setProductsData([]);
      return;
    }

    setLoader(false);
    setProductsData(getPlan.subscriptions);
    setUsersData(getPlan.user);
  };

  /**
   * Function On Click Button Card
   * @param {obj} event
   */
  const handleClickButtonCard = async (event, code) => {
    event.preventDefault();
    setLoader(true);

    const sendExternalTokenResponse = await sendExternalToken(code);

    if (!sendExternalTokenResponse.status) {
      setLoader(false);
      setErrorMessage(sendExternalTokenResponse.message);
      return;
    }

    setTimeout(() => {
      setLoader(false);
      window.open(sendExternalTokenResponse.accessUrl, '_blank');
    }, 1000);
  };

  /**
   * Function Render Products
   */
  const renderProducts = () =>
    productsData.map((response) => (
      <div className="product-card">
        <CardEGestor
          namePlan={response.product_name}
          onClickButtonCard={(event) =>
            handleClickButtonCard(event, response.code)
          }
        />
      </div>
    ));

  /**
   * Function Render Workplace
   */
  const renderWorkPlace = () =>
    productsData.map((response) => (
      <section className="company">
        <header>
          <span className="subtitle">Empresa</span>
          <h1>{response.workPlace.name}</h1>
          <h2>{response.product_name}</h2>
        </header>
        <div className="collaborator-card">
          {response.code === 1 && (
            <CardContributors
              code={response.code}
              phone={usersData.phone}
              tittleContributors="Administrador"
              name={validateToken('email')}
              email={validateToken('email')}
            />
          )}

          {response.workPlace.contributors.map((rows) => {
            if (rows.code > 1) {
              return (
                <CardContributors
                  tittleContributors="Colaborador"
                  phone={usersData.phone}
                  code={rows.code}
                  name={rows.name}
                  email={rows.email}
                />
              );
            }
            return '';
          })}

          <CardRegisterContributors workPlaceName={response.workPlace.name} />
        </div>
      </section>
    ));

  /**
   * Function On Click Button Select Tabs
   * @param {int} index
   */
  const onSelectTabs = (index) => {
    setTabs(index);
    setFooter(false);

    productsData.map((response) => {
      if (response.code === 1 && index === 2) {
        setFooter(true);
      }

      if (response.code > 1 && index === 1) {
        setFooter(true);
      }
      return '';
    });
  };

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

  /**
   * Function Use Effect
   */
  useEffect(() => {
    const url = queryString.parse(window.location.search);

    if (url.tabList) {
      setTabs(parseInt(url.tabList, 10));
    }
    getProducts();
    setErrorMessage('');
  }, []);

  if (loader) {
    return <Loader display={loader} />;
  }

  return (
    <Layout displayFooter={footer}>
      <main className="main">
        <section>
          <header className="section-title">
            <div className="center-content">
              <h1>Minha Conta</h1>
            </div>
          </header>
        </section>
        <section>
          <div className="center-content">
            <Tabs
              selectedIndex={tabs}
              onSelect={(index) => onSelectTabs(index)}
              className="tabs"
            >
              <TabList className="tabs-nav">
                <Tab>Meus Produtos</Tab>

                {productsData.map((response) => {
                  if (response.code === 1) {
                    return <Tab>Colaboradores</Tab>;
                  }
                  return '';
                })}
                {/* <Tab>Colaboradores</Tab> */}
                <Tab>Perguntas e Respostas</Tab>
                <Tab>Meus Dados</Tab>
              </TabList>

              <TabPanel>
                {renderProducts()}
                {errorMessage !== '' && <AlertsErrors message={errorMessage} />}
              </TabPanel>
              {productsData.map((response) => {
                if (response.code === 1) {
                  return <TabPanel>{renderWorkPlace()}</TabPanel>;
                }
                return '';
              })}
              <TabPanel>{renderHelp()}</TabPanel>
              <TabPanel>
                <div className="product-card">
                  <CardUserData
                    userName={usersData.name || ''}
                    email={usersData.email || ''}
                    phone={usersData.phone || ''}
                  />
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Dashboard;
