import React from 'react';
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalTitle,
  Card,
} from 'react-bootstrap';
import ModalHeader from 'react-bootstrap/esm/ModalHeader';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <ModalHeader closeButton>
        <ModalTitle id="contained-modal-title-vcenter">
          {props.repoContent ? props.repoContent.name : null}
        </ModalTitle>
      </ModalHeader>
      <ModalBody>
        <h4>
          <strong>Nome completo:</strong>
          <br />
          <span>{props.repoContent ? props.repoContent.full_name : null}</span>
        </h4>
        <p>
          <strong>Id:</strong>
          <span>{props.repoContent ? props.repoContent.id : null}</span>
        </p>
        <p>
          <strong>Forks:</strong>
          <span>{props.repoContent ? props.repoContent.forks : null}</span>
        </p>
        <p>
          <strong>Stars:</strong>
          <span>
            {props.repoContent ? props.repoContent.stargazers_count : null}
          </span>
        </p>
        <p>
          <strong>Inscritos:</strong>
          <span>
            {props.repoContent ? props.repoContent.subscribers_count : null}
          </span>
        </p>
        <p>
          <strong>Url Clone:</strong>
          <br />
          <span>
            <a
              href={props.repoContent ? props.repoContent.clone_url : null}
              target="_blank"
            >
              {props.repoContent ? props.repoContent.clone_url : null}
            </a>
          </span>
        </p>
        <p>
          <strong>Descrição:</strong>
          <br />
          <span>
            {props.repoContent ? props.repoContent.description : null}
          </span>
        </p>
      </ModalBody>
      <ModalFooter>
        <Button className="repoModalButton" onClick={props.onHide}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
}

const Reposlist = ({ repo }) => {
  const [modalShow, setModalShow] = React.useState(false);
  const [repoContent, setRepoContent] = React.useState(undefined);

  async function handleClick(id) {
    const repoId = id;
    const repoContent = await fetch(
      `https://api.github.com/repositories/${repoId}`,
    );

    const jsonRepoContent = await repoContent.json();

    setRepoContent(jsonRepoContent);
    setModalShow(true);

    console.log(jsonRepoContent);
  }

  return (
    <div className="row">
      {repo.map(({ id, full_name }) => (
        <div className="col-sm-6" style={{ marginBottom: '.5rem' }} key={id}>
          <Card bg="light" className="repoCard">
            <Card.Body>
              <Card.Title className="repoTitle">{full_name}</Card.Title>
              <Button
                className="repoCardButton"
                variant="primary"
                onClick={() => handleClick(id)}
              >
                Ver mais
              </Button>
            </Card.Body>
          </Card>
        </div>
      ))}
      <MyVerticallyCenteredModal
        show={modalShow}
        repoContent={repoContent}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

export default Reposlist;
