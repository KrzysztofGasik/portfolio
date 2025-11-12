import React from 'react';
import IntroductionLinks from '@/components/introduction/introduction-links';
import IntroductionAvatar from '@/components/introduction/introduction-avatar';
import IntroductionText from '@/components/introduction/introduction-text';
import classes from './introduction.module.css';
import Overview from '../overview/overview';

export default function Introduction() {
  return (
    <section className={classes.introduction}>
      <IntroductionAvatar />
      <IntroductionText />
      <Overview />
      <IntroductionLinks />
    </section>
  );
}
