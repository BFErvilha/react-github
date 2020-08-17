import React from 'react';
import CardUser from './CardUser';
import Reposlist from './Reposlist';
import { Container, Col, Row } from 'react-bootstrap';

const Home = () => {
  const [username, setUsername] = React.useState('');
  const [user, setUser] = React.useState('');
  const [repo, setRepo] = React.useState('');
  const [error, setError] = React.useState('');

  const adminLogin = window.localStorage.getItem('adminLogin');
  if (!adminLogin) {
    window.location.href = '/';
  } else {
    async function handleSubmit(event) {
      event.preventDefault();

      const user = await fetch(`https://api.github.com/users/${username}`);

      const repo = await fetch(
        `https://api.github.com/users/${username}/repos`,
      );

      const jsonUser = await user.json();
      const jsonRepo = await repo.json();

      if (!jsonUser.login) {
        setError(`Usuário ${username} não encontrado ou inexistente!`);
        setTimeout(() => {
          window.location.href = '/home';
        }, 1500);
      } else {
        setUser(jsonUser);
        setRepo(jsonRepo);

        console.log(jsonUser.login);
        console.log(jsonRepo);
      }
    }

    return (
      <div>
        <section className="bg-search">
          <div className="container">
            <div className="row">
              <div className="col-md-8 searchField">
                <div className="search-title">
                  <h1>Digite o nome do usuário do Github</h1>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      value={username}
                      onChange={({ target }) => setUsername(target.value)}
                    />
                    <button className="btn btn-default btn-search">
                      Buscar
                    </button>
                  </div>
                  {error && <p className="errorText"> {error}</p>}
                </form>
              </div>
            </div>
          </div>
        </section>
        <Container fluid="lg">
          <Row>
            {!user && !repo && (
              <Col className="text-center mt-6">
                <h4>
                  Pesquisa de usuario gitHub com resultado de repositórios{' '}
                </h4>
              </Col>
            )}
            {!error && user && (
              <Col
                md="3"
                xs="12"
                style={{ margin: '15px auto 10px', padding: '.5rem' }}
              >
                <CardUser user={user} />
              </Col>
            )}
            {!error && repo && (
              <Col md="9" xs="12" className="repoContainer">
                <div className="repoBlock">
                  <Reposlist repo={repo} />
                </div>
              </Col>
            )}
          </Row>
        </Container>
      </div>
    );
  }
};
export default Home;
