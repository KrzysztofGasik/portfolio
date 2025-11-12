'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import ProfilePhoto from '@/public/profile_photo.jpg';
import React from 'react';
import classes from './introduction-avatar.module.css';

export default function IntroductionAvatar() {
  return (
    <div className={classes.avatar}>
      <div className={classes.avatarPhotoWrapper}>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: 'tween',
            duration: 0.3,
          }}
        >
          <Image
            src={ProfilePhoto}
            alt="profile-photo"
            width={200}
            height={250}
            quality={80}
            priority={true}
            className={classes.avatarPhoto}
          />
        </motion.div>
        <motion.span
          role="img"
          className={classes.avatarEmoji}
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{
            type: 'spring',
            stiffness: 125,
            delay: 0.25,
            duration: 0.5,
          }}
        >
          &#128077;
        </motion.span>
      </div>
    </div>
  );
}
