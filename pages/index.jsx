import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import { Page, Row, Column } from 'hedron';
import { config } from 'config';
import { Title } from '../components/styled/';

export default class Index extends React.Component {
  render() {
    return (
      <Page>
        <Helmet title={config.siteTitle} meta={[{ 'name': 'description', 'content': 'sample' }]} />
        <Row>
          <Column>
            <Title>Enrique Benitez</Title>
          </Column>
        </Row>
        <Row>
          <Column>
            <Link to={prefixLink('/about/')}>About</Link> | <Link to={prefixLink('/blog/')}>Blog</Link>
          </Column>
        </Row>
      </Page>
    )
  }
}
