import { Text, useColorModeValue } from '@chakra-ui/react';
import { formatTime } from '../utils';

const Time = ({ time }) => {
  const timeColor = useColorModeValue("gray.800", "gray.200");

  return (
    <Text
      fontSize={{ base: "6xl", md: "8xl", lg: "9xl" }}
      fontWeight="bold"
      color={timeColor}
    >
      {formatTime(time)}
    </Text>
  );
};

export default Time;
