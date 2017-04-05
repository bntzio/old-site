import React from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';
import _ from 'lodash';
import moment from 'moment';
import uuid from 'uuid';
import PostLink from '../components/PostLink';
import {
  Page,
  Row,
  Column,
  HeadingOne
} from '../components/styled/';

export default class Blog extends React.Component {
  renderPosts(route) {
    const posts = [];
    route.pages.map(page => {
      if (page.data.layout === 'post') {
        posts.push(page);
      }
    });

    const ordered = _.sortBy(posts, o => {
      return new moment(o.data.date);
    }).reverse();

    return ordered.map(orderedPost => {
      return <PostLink key={uuid()} postData={orderedPost.data} />;
    });
  }

  render() {
    const { route } = this.props;

    return (
      <Page>
        <Helmet title={`${config.siteTitle} - Blog`} />
        <Row>
          <Column>
            <HeadingOne>Blog</HeadingOne>
          </Column>
        </Row>
        <Row>
          {this.renderPosts(route)}
        </Row>
      </Page>
    );
  }
}
