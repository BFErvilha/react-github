import React from 'react';
import { Card } from 'react-bootstrap';

const CardUser = ({ user }) => {
  return (
    <div>
      <Card
        border="gradient"
        bg="dark"
        style={{ maxWidth: '18rem', margin: '0 auto' }}
      >
        <Card.Img variant="top" src={user.avatar_url} />
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Text>id: {user.id}</Card.Text>
          <Card.Text>Repositórios: {user.public_repos}</Card.Text>
          <Card.Text>Seguidores: {user.followers}</Card.Text>
          <Card.Text>Seguindo: {user.following}</Card.Text>
          {user.blog && (
            <Card.Text>
              Site:{' '}
              <a href={user.blog} target="_blank">
                {user.blog}
              </a>
            </Card.Text>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardUser;
