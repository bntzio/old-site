import React from 'react';
import Helmet from 'react-helmet';
import { Page } from 'hedron';
import { config } from 'config';
import Post from '../components/Post';

class MarkdownWrapper extends React.Component {
  render() {
    const { route } = this.props;
    const post = route.page.data;
    const layout = post.layout;
    let template;

    if (layout === 'post') {
      template = <Post {...this.props} />;
    }

    return (
     <Page>
       <Helmet title={`${config.siteTitle} - ${post.title}`} />
       {template}
     </Page>
   );
  }
}

export default MarkdownWrapper;
