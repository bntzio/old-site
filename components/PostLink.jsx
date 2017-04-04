import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import { Column } from 'hedron';
import { PostLinkTitle, PostLinkDescription } from './styled/';

export default class PostLink extends React.Component {
  render() {
    const { title, description, path } = this.props.postData;

    return (
      <Column>
        <PostLinkTitle>
          <Link to={prefixLink(path)}>{title}</Link>
        </PostLinkTitle>
        <PostLinkDescription>{description}</PostLinkDescription>
      </Column>
    );
  }
}
