import React from 'react';
import styled from 'styled-components';
import { rem } from '../utils/style-utils';

export default class Repository extends React.Component {
  render() {
    return (
      <RepositoryContainer>
        <RepositoryCategory href="#open-source" id="open-source">Open Source Projects</RepositoryCategory>
        <RepositoryList>
          <RepositoryItem><RepositoryLink href="https://github.com/bntzio/wipe-modules" target="_blank">wipe-modules</RepositoryLink></RepositoryItem>
          <RepositoryItem><RepositoryLink href="https://github.com/bntzio/cliip" target="_blank">cliip</RepositoryLink></RepositoryItem>
          <RepositoryItem><RepositoryLink href="https://github.com/bntzio/fast-license" target="_blank">fast-license</RepositoryLink></RepositoryItem>
          <RepositoryItem><RepositoryLink href="https://github.com/bntzio/trello-json-parser" target="_blank">trello-json-parser</RepositoryLink></RepositoryItem>
          <RepositoryItem><RepositoryLink href="https://github.com/bntzio/gatsby-starter-alchemy" target="_blank">gatsby-starter-alchemy</RepositoryLink></RepositoryItem>
          <RepositoryItem><RepositoryLink href="https://github.com/bntzio/gatsby-starter-superstylin" target="_blank">gatsby-starter-superstylin</RepositoryLink></RepositoryItem>
        </RepositoryList>

        <RepositoryCategory href="#side-projects" id="side-projects">Side Projects</RepositoryCategory>
        <RepositoryList>
          <RepositoryItem>HexCandy</RepositoryItem>
          <RepositoryItem>GaryQuotes</RepositoryItem>
          <RepositoryItem>RejectionChallenges</RepositoryItem>
          <RepositoryItem>Gitsy</RepositoryItem>
          <RepositoryItem>Bulldozer</RepositoryItem>
        </RepositoryList>

        <RepositoryCategory href="#startups" id="startups">Startups</RepositoryCategory>
        <RepositoryList>
          <RepositoryItem>Suppbox</RepositoryItem>
          <RepositoryItem>Phoenix</RepositoryItem>
        </RepositoryList>

        <RepositoryCategory href="#learning-projects" id="learning-projects">Learning Projects</RepositoryCategory>
        <RepositoryList>
          <RepositoryItem>That's Delicious</RepositoryItem>
          <RepositoryItem>Score Keep</RepositoryItem>
          <RepositoryItem>Notes Node</RepositoryItem>
          <RepositoryItem>Invie</RepositoryItem>
          <RepositoryItem>Rails Todos TDD</RepositoryItem>
          <RepositoryItem>Parallels</RepositoryItem>
          <RepositoryItem>MazeRunner</RepositoryItem>
          <RepositoryItem>Wikitec</RepositoryItem>
          <RepositoryItem>BookmarkThis!</RepositoryItem>
          <RepositoryItem>Bloccit</RepositoryItem>
          <RepositoryItem>Man's Best Friend</RepositoryItem>
          <RepositoryItem>Python Ideas DB</RepositoryItem>
          <RepositoryItem>Python Todo</RepositoryItem>
          <RepositoryItem>Age of Laika</RepositoryItem>
          <RepositoryItem>Puls2014</RepositoryItem>
          <RepositoryItem>React Native Manager</RepositoryItem>
          <RepositoryItem>React Native Stacks</RepositoryItem>
          <RepositoryItem>React Native Auth</RepositoryItem>
          <RepositoryItem>React Native Albums</RepositoryItem>
          <RepositoryItem>ReactTodo</RepositoryItem>
          <RepositoryItem>ReactTimer</RepositoryItem>
          <RepositoryItem>ReactWeather</RepositoryItem>
          <RepositoryItem>Platzipalooza</RepositoryItem>
          <RepositoryItem>Instagram Clone</RepositoryItem>
          <RepositoryItem>Twitter Clone</RepositoryItem>
          <RepositoryItem>SpecTodos</RepositoryItem>
          <RepositoryItem>Catch of the Day</RepositoryItem>
          <RepositoryItem>Tvify</RepositoryItem>
          <RepositoryItem>Platzipalooza</RepositoryItem>
        </RepositoryList>
      </RepositoryContainer>
    );
  }
}

const RepositoryContainer = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  ${rem('margin-top', 100)};
  ${rem('padding-bottom', 100)};
`;

const RepositoryCategory = styled.a`
  ${rem('font-size', 16)};
  ${rem('margin-top', 25)};
  font-weight: bolder;
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  &:first-child {
    margin-top: 0;
  }
`;

const RepositoryList = styled.ul`
  ${rem('font-size', 15)};
`;

const RepositoryItem = styled.li`
  list-style-type: square;
`;

const RepositoryLink = styled.a`
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: line-through;
  }
`;
