import { Flex, Input, Button } from '@chakra-ui/react';
import { useState } from 'react';

const TimerSetting = ({ setTime }) => {
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');

  const handleSetTime = () => {
    const timeInSeconds =
      parseInt(minutes) * 60 + parseInt(seconds);
    if (
      !isNaN(timeInSeconds) &&
      timeInSeconds > 0 &&
      parseInt(seconds) < 60
    ) {
      setTime(timeInSeconds);
      setMinutes('');
      setSeconds('');
    } else {
      alert('Masukkan waktu yang valid');
    }
  };

  return (
    <Flex gap={2} alignItems="center" justifyContent="center" mt={4}>
      <Input
        placeholder="Menit"
        value={minutes}
        onChange={(e) => setMinutes(e.target.value)}
        size="md"
        type="number"
        maxW="100px"
        min={0}
      />
      <Input
        placeholder="Detik"
        value={seconds}
        onChange={(e) => setSeconds(e.target.value)}
        size="md"
        type="number"
        maxW="100px"
        min={0}
        max={59}
      />
      <Button colorScheme="teal" onClick={handleSetTime}>
        Atur Timer
      </Button>
    </Flex>
  );
};

export default TimerSetting;
