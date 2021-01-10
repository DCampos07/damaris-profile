import React from 'react';
import { Card, Button, CardTitle, CardText, CardImg, Row, Col } from 'reactstrap';

function Projects() {
  return (
    <Row>
      <Col sm={{ size: 'auto', offset: 1 }}>
        <Card body>
        <CardImg top width="100%" src="../../assets/318x180.svg" alt="Card image cap" />
          <CardTitle tag="h5">Project #1</CardTitle>
          <CardText>Summary of first projet.</CardText>
          <Button outline color="primary">take me to GitHub for this button</Button>{''}
        </Card>
      </Col>
      <Col sm={{ size: 'auto', offset: 1 }}>
        <Card body>
        <CardImg top width="100%" src="../../assets/318x180.svg" alt="Card image cap" />
          <CardTitle tag="h5">Project #2</CardTitle>
          <CardText>Summary of projet.</CardText>
          <Button outline color="primary">take me to GitHub for this button</Button>{''}
        </Card>
      </Col>
      <Col sm={{ size: 'auto', offset: 1 }}>
        <Card body>
        <CardImg top width="100%" src="../../assets/318x180.svg" alt="Card image cap" />
          <CardTitle tag="h5">Project #3</CardTitle>
          <CardText>Summary of projet.</CardText>
          <Button outline color="primary">take me to GitHub for this button</Button>{''}
        </Card>
      </Col>
      <Col sm={{ size: 'auto', offset: 1 }}>
        <Card body>
        <CardImg top width="100%" src="../../assets/318x180.svg" alt="Card image cap" />
          <CardTitle tag="h5">Project #4</CardTitle>
          <CardText>Summary of projet.</CardText>
          <Button outline color="primary">take me to GitHub for this button</Button>{''}
        </Card>
      </Col>
      <Col sm={{ size: 'auto', offset: 1 }}>
        <Card body>
        <CardImg top width="100%" src="../../assets/318x180.svg" alt="Card image cap" />
          <CardTitle tag="h5">Project #5</CardTitle>
          <CardText>Summary of projet.</CardText>
          <Button outline color="primary">take me to GitHub for this button</Button>{''}
        </Card>
      </Col>
      <Col sm={{ size: 'auto', offset: 1 }}>
        <Card body>
        <CardImg top width="100%" src="../../assets/318x180.svg" alt="Card image cap" />
          <CardTitle tag="h5">Project #6</CardTitle>
          <CardText>Summary of projet.</CardText>
          <Button outline color="primary">take me to GitHub for this button</Button>{''}
        </Card>
      </Col>
      <Col sm={{ size: 'auto', offset: 1 }}>
        <Card body>
        <CardImg top width="100%" src="../../assets/318x180.svg" alt="Card image cap" />
          <CardTitle tag="h5">Project #7</CardTitle>
          <CardText>Summary of projet.</CardText>
          <Button outline color="primary">take me to GitHub for this button</Button>{''}
        </Card>
      </Col>
    </Row>

  );
}

export default Projects;
