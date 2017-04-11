import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';
import { config } from 'config';
import _ from 'lodash';
import {
  GoodbyePage,
  Row,
  Column,
  GoodbyeTitle,
  GoodbyeMessage
} from '../components/styled/';

export default class Goodbye extends React.Component {
  exitSite() {
    window.close();
  }
  render() {
    const { route } = this.props;
    const post = route.page.file;

    return (
      <GoodbyePage fluid>
        <Helmet title={`${config.siteTitle} - ${_.capitalize(post.name)}`} />
        <Row>
          <Column>
            <GoodbyeTitle className="headingFont">Goodbye 👋</GoodbyeTitle>
          </Column>
        </Row>
        <Row>
          <Column>
            <GoodbyeMessage className="primaryFont">
              Sorry to see you go, I thought we could be friends, anyway, just close this window 😢
            </GoodbyeMessage>
            <GoodbyeMessage className="primaryFont">
              Or knock the door <Link to="/">🚪</Link> to go back 😃
            </GoodbyeMessage>
          </Column>
        </Row>
      </GoodbyePage>
    );
  }
}
