import { motion } from "framer-motion";
import Image from "next/image";
import ProfilePhoto from "@/public/profile_photo.jpg";
import React from "react";

export default function IntroductionAvatar() {
  return (
    <div className="avatar">
      <div className="avatar-photo-wrapper">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "tween",
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
            className="avatar-photo"
          />
        </motion.div>
        <motion.span
          role="img"
          className="avatar-emoji"
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{
            type: "spring",
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
