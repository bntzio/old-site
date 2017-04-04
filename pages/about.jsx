import React from 'react';
import Helmet from 'react-helmet';
import { Row, Column, Page } from 'hedron';
import { config } from 'config';
import _ from 'lodash';
import { Title } from '../components/styled/';

export default class About extends React.Component {
  render() {
    const { route } = this.props;
    const post = route.page.file;

    return (
      <Page>
        <Helmet title={`${config.siteTitle} - ${_.capitalize(post.name)}`} />
        <Row>
          <Column>
            <Title>About</Title>
          </Column>
        </Row>
        <Row>
          <Column>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Column>
        </Row>
      </Page>
    );
  }
}
