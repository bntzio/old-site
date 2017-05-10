import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { WithNotes } from '@kadira/storybook-addon-notes';
import centered from '@kadira/react-storybook-decorator-centered';
import backgroundColor from 'react-storybook-decorator-background';

// Notes
const notes = {
  heroPage: 'The only thing that this component differs from the SectionPage is that the SectionPage has a css transition property.',
  heroPageContainer: 'This only has a css transition propery and opacity of 0, that\'s because of the overlay.',
  footerPageContainer: 'This inherits from SectionPageContainer with an added translateY(100px) to animate with GSAP.',
  footerSectionPage: 'This is where all the child styled components for the Footer react component live.',
};

// Components
import {
  SectionTitle,
  SectionDescription,
  SectionPage,
  HeroPage,
  HeroPageContainer,
  FooterPageContainer,
  FooterSectionPage,
  AboutSectionTitle,
  SkillsSectionTitle,
  SiteTitle,
  SiteSubtitle,
  SiteDescription,
  SiteMessage,
  SiteNav,
  SiteNavItem,
  HeadingOne,
  HeadingSix,
  GoodbyePage,
  GoodbyeTitle,
  GoodbyeMessage,
  ProfileImage,
} from '../components/styled/';

// SectionTitle story
storiesOf('SectionTitle', module)
  .addDecorator(centered)
  .addWithInfo(
    'SectionTitle',
    `
      The title for each section
    `,
    () => <SectionTitle>Hello World!</SectionTitle>,
    { inline: false, propTables: false }
  );

// SectionDescription story
storiesOf('SectionDescription', module)
  .addDecorator(centered)
  .addWithInfo(
    'SectionDescription',
    `
      The description for each section
    `,
    () => <SectionDescription>Hello World!</SectionDescription>,
    { propTables: false }
  );

// SectionPage story
storiesOf('SectionPage', module)
  .addDecorator(backgroundColor(['#fff']))
  .addWithInfo(
    'No fluid',
    `
      The page for each section (no fluid)
    `,
    () => <SectionPage>Hello World!</SectionPage>,
    { propTables: false }
  )
  .addWithInfo(
    'Fluid',
    `
      The page for each section (fluid)
    `,
    () => <SectionPage fluid>Hello World!</SectionPage>,
    { propTables: false }
  );

// HeroPage story
storiesOf('HeroPage', module)
  .addDecorator(backgroundColor(['#fff']))
  .addWithInfo(
    'No fluid',
    `
      The main hero container (no fluid)
    `,
    () => (
      <WithNotes notes={notes.heroPage}>
        <HeroPage>Hello World!</HeroPage>
      </WithNotes>
    ),
    { propTables: false }
  )
  .addWithInfo(
    'Fluid',
    `
      The main hero container (fluid)
    `,
    () => (
      <WithNotes notes={notes.heroPage}>
        <HeroPage fluid>Hello World!</HeroPage>
      </WithNotes>
    ),
    { propTables: false }
  );

// HeroPageContainer story
storiesOf('HeroPageContainer', module)
  .addWithInfo(
    'HeroPageContainer',
    `
      The container for the hero page (this usually goes after the HeroPage component wrapper)
    `,
    () => (
      <WithNotes notes={notes.heroPageContainer}>
        <HeroPageContainer>Hello World!</HeroPageContainer>
      </WithNotes>
    ),
    { propTables: false }
  );

// FooterPageContainer story
storiesOf('FooterPageContainer', module)
  .addWithInfo(
    'FooterPageContainer',
    `
      The container for the Footer page (this usually goes after the FooterPage component wrapper)

      The content can\'t be seen (read the notes)
    `,
    () => (
      <WithNotes notes={notes.footerPageContainer}>
        <FooterPageContainer>Hello World!</FooterPageContainer>
      </WithNotes>
    ),
    { propTables: false }
  );

// FooterSectionPage story
storiesOf('FooterSectionPage', module)
  .addWithInfo(
    'No fluid',
    `
      The main wrapper for the Footer react component (no fluid)
    `,
    () => (
      <WithNotes notes={notes.footerSectionPage}>
        <FooterSectionPage>Hello World!</FooterSectionPage>
      </WithNotes>
    ),
    { propTables: false }
  )
  .addWithInfo(
    'Fluid',
    `
      The main wrapper for the Footer react component (fluid)
    `,
    () => (
      <WithNotes notes={notes.footerSectionPage}>
        <FooterSectionPage fluid>Hello World!</FooterSectionPage>
      </WithNotes>
    ),
    { propTables: false }
  );

// AboutSectionTitle story
storiesOf('AboutSectionTitle', module)
  .addDecorator(centered)
  .addWithInfo(
    'With pushLeft prop',
    `
      The title for the AboutSection component
    `,
    () => <AboutSectionTitle pushLeft>Hello World!</AboutSectionTitle>,
    { propTables: false }
  )
  .addWithInfo(
    'Without pushLeft prop',
    `
      The title for the AboutSection component
    `,
    () => <AboutSectionTitle>Hello World!</AboutSectionTitle>,
    { propTables: false }
  );

// SkillsSectionTitle story
storiesOf('SkillsSectionTitle', module)
  .addDecorator(centered)
  .addWithInfo(
    'SkillsSectionTitle',
    `
      The title for the SkillsSection component
    `,
    () => <SkillsSectionTitle>Hello World!</SkillsSectionTitle>,
    { propTables: false }
  );

// SiteTitle story
storiesOf('SiteTitle', module)
  .addDecorator(centered)
  .addWithInfo(
    'SiteTitle',
    `
      The main title for the site (the logo)
    `,
    () => <SiteTitle>Hello World!</SiteTitle>,
    { propTables: false }
  );

// SiteSubtitle story
storiesOf('SiteSubtitle', module)
  .addDecorator(centered)
  .addWithInfo(
    'SiteSubtitle',
    `
      The main subtitle for the site (the slogan)
    `,
    () => <SiteSubtitle>Hello World!</SiteSubtitle>,
    { propTables: false }
  );

// SiteDescription story
storiesOf('SiteDescription', module)
  .addDecorator(centered)
  .addWithInfo(
    'SiteDescription',
    `
      The main description for the site (just a description)
    `,
    () => <SiteDescription>Hello World!</SiteDescription>,
    { propTables: false }
  );

// SiteMessage story
storiesOf('SiteMessage', module)
  .addDecorator(centered)
  .addWithInfo(
    'SiteMessage',
    `
      The main message for the site (a small message)
    `,
    () => <SiteMessage>Hello World!</SiteMessage>,
    { propTables: false }
  );

// SiteNav story
storiesOf('SiteNav', module)
  .addDecorator(centered)
  .addWithInfo(
    'With SiteNavItems',
    `
      The main site navigation menu
    `,
    () => (
      <SiteNav>
        <SiteNavItem>Hello World!</SiteNavItem>
        <SiteNavItem>Hello World!</SiteNavItem>
        <SiteNavItem>Hello World!</SiteNavItem>
      </SiteNav>
    ),
    { propTables: false }
  );

// Headings stories
storiesOf('Headings', module)
  .addDecorator(centered)
  .addDecorator(backgroundColor(['#fff']))
  .addWithInfo(
    'HeadingOne',
    `
      Just an h1
    `,
    () => <HeadingOne>Hello World!</HeadingOne>,
    { propTables: false }
  )
  .addWithInfo(
    'HeadingSix',
    `
      Just an h6
    `,
    () => <HeadingSix>Hello World!</HeadingSix>,
    { propTables: false }
  );

// Goodbye
storiesOf('Goodbye', module)
  .addWithInfo(
    'GoodbyePage',
    `
      The GoodbyePage
    `,
    () => <GoodbyePage></GoodbyePage>,
    { propTables: false }
  )
  .addWithInfo(
    'GoodbyeTitle',
    `
      The GoodbyeTitle
    `,
    () => <GoodbyeTitle>Hello World!</GoodbyeTitle>,
    { propTables: false }
  )
  .addWithInfo(
    'GoodbyeMessage',
    `
      The GoodbyeMessage
    `,
    () => <GoodbyeMessage>Hello World!</GoodbyeMessage>,
    { propTables: false }
  );

// ProfileImage story
storiesOf('ProfileImage', module)
  .addWithInfo(
    'ProfileImage',
    `
      My profile image
    `,
    () => <ProfileImage />,
    { propTables: false }
  );
