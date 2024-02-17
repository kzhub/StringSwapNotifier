import { motion } from 'framer-motion';
import {
	Alert,
	AlertIcon,
	AlertTitle,
} from '@chakra-ui/react'

export const AlertDialog = ({ alertOpen,viewText }) => {
  const variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate={alertOpen ? 'visible' : 'hidden'}
      variants={variants}
      style={{ marginTop: '20px' }}
    >
      <Alert status='error'>
        <AlertIcon />
        <AlertTitle>{viewText}</AlertTitle>
      </Alert>
    </motion.div>
  );
};