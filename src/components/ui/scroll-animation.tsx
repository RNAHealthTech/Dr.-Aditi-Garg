'use client';

import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

type Direction = 'up' | 'down' | 'left' | 'right' | 'zoom' | 'fade';

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
  once?: boolean;
  amount?: number;
  scale?: number;
}

/**
 * ScrollReveal: Animates any component into view when scrolling up and down.
 * once: false ensures that when scrolling back up and down, animations trigger dynamically.
 */
export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.65,
  distance = 32,
  className = '',
  once = false,
  amount = 0.12,
  scale,
}) => {
  const getInitial = () => {
    switch (direction) {
      case 'up':
        return { opacity: 0, y: distance, scale: scale ?? 1 };
      case 'down':
        return { opacity: 0, y: -distance, scale: scale ?? 1 };
      case 'left':
        return { opacity: 0, x: distance, scale: scale ?? 1 };
      case 'right':
        return { opacity: 0, x: -distance, scale: scale ?? 1 };
      case 'zoom':
        return { opacity: 0, scale: scale ?? 0.94, y: 16 };
      case 'fade':
      default:
        return { opacity: 0, scale: scale ?? 1 };
    }
  };

  return (
    <motion.div
      initial={getInitial()}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
      }}
      viewport={{ once, amount, margin: '-40px' }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface ScrollStaggerProps {
  children: React.ReactNode;
  staggerDelay?: number;
  className?: string;
  once?: boolean;
  amount?: number;
}

export const ScrollStagger: React.FC<ScrollStaggerProps> = ({
  children,
  staggerDelay = 0.08,
  className = '',
  once = false,
  amount = 0.1,
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount, margin: '-40px' }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface ScrollStaggerItemProps {
  children: React.ReactNode;
  direction?: Direction;
  distance?: number;
  className?: string;
  duration?: number;
  scale?: number;
}

export const ScrollStaggerItem: React.FC<ScrollStaggerItemProps> = ({
  children,
  direction = 'up',
  distance = 26,
  className = '',
  duration = 0.6,
  scale,
}) => {
  const getHidden = () => {
    switch (direction) {
      case 'up':
        return { opacity: 0, y: distance, scale: scale ?? 1 };
      case 'down':
        return { opacity: 0, y: -distance, scale: scale ?? 1 };
      case 'left':
        return { opacity: 0, x: distance, scale: scale ?? 1 };
      case 'right':
        return { opacity: 0, x: -distance, scale: scale ?? 1 };
      case 'zoom':
        return { opacity: 0, scale: scale ?? 0.94, y: 12 };
      case 'fade':
      default:
        return { opacity: 0 };
    }
  };

  return (
    <motion.div
      variants={{
        hidden: getHidden(),
        show: {
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
          transition: {
            duration,
            ease: [0.16, 1, 0.3, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/**
 * Line-by-line / sentence-by-sentence text reveal animation on scroll
 * When scrolling up & down, each sentence or word glides up smoothly from an overflow mask
 */
interface ScrollParagraphProps {
  children?: React.ReactNode;
  text?: string;
  className?: string;
  once?: boolean;
  delay?: number;
  mode?: 'sentences' | 'words' | 'block';
}

export const ScrollParagraph: React.FC<ScrollParagraphProps> = ({
  children,
  text,
  className = '',
  once = false,
  delay = 0,
  mode = 'sentences',
}) => {
  const content = text || (typeof children === 'string' ? children : null);

  // If complex children or block mode requested
  if (!content || mode === 'block') {
    return (
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once, amount: 0.15, margin: '-20px' }}
        transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
        className={className}
      >
        {children}
      </motion.p>
    );
  }

  if (mode === 'words') {
    const words = content.split(/\s+/).filter(Boolean);
    return (
      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={{ once, amount: 0.15, margin: '-20px' }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.035,
              delayChildren: delay,
            },
          },
        }}
        className={className}
      >
        {words.map((word, idx) => (
          <span key={idx} className="inline-block overflow-hidden mr-[0.28em] align-baseline">
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 18 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.45,
                    ease: [0.16, 1, 0.3, 1],
                  },
                },
              }}
              className="inline-block"
            >
              {word}
            </motion.span>
          </span>
        ))}
      </motion.p>
    );
  }

  // Split into sentences / natural editorial lines
  const sentences = content
    .split(/(?<=[.!?])\s+/)
    .filter((s) => s.trim().length > 0);

  return (
    <motion.p
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.15, margin: '-20px' }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.12,
            delayChildren: delay,
          },
        },
      }}
      className={className}
    >
      {sentences.map((sentence, idx) => (
        <span key={idx} className="inline-block overflow-hidden mr-1.5 align-baseline">
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 22 },
              show: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.55,
                  ease: [0.16, 1, 0.3, 1],
                },
              },
            }}
            className="inline-block"
          >
            {sentence}
          </motion.span>
        </span>
      ))}
    </motion.p>
  );
};

/**
 * Animated Headline component that reveals with smooth easing
 */
interface ScrollHeadingProps {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4';
  className?: string;
  once?: boolean;
  delay?: number;
  direction?: Direction;
}

export const ScrollHeading: React.FC<ScrollHeadingProps> = ({
  children,
  as = 'h2',
  className = '',
  once = false,
  delay = 0,
  direction = 'up',
}) => {
  const Component = motion[as];
  const initialY = direction === 'up' ? 24 : direction === 'down' ? -24 : 0;
  const initialX = direction === 'left' ? 24 : direction === 'right' ? -24 : 0;

  return (
    <Component
      initial={{ opacity: 0, y: initialY, x: initialX }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once, amount: 0.2, margin: '-20px' }}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </Component>
  );
};

/**
 * Smooth Scroll Progress Indicator at top of page
 */
export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0e4e50] via-teal-400 to-[#1d7a7d] origin-left z-50 pointer-events-none"
    />
  );
};
