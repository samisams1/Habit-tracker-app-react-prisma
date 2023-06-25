import React from 'react'
import { useMutation } from '@apollo/client'
import { Badge, Box, Flex, Text } from '@chakra-ui/core'
import { INCREMENT_STREAK_MUTATION } from '../graphql/index'
import { getIcon } from '../utils/index'
import { DeleteHabit } from './DeleteHabit'

const colors = [
  'tomato',
  'green.400',
  'yellow.300',
  'cornflowerblue',
  'antiquewhite',
  'aquamarine',
  'lightpink',
  'navajowhite',
  'red.500',
  'lightcoral'
]

export const Habit = ({ index, habit }) => {
  const { id, name, streak } = habit
  const bgColor = colors[index % colors.length]
  //const [res, executeMutation] = useMutation(INCREMENT_STREAK_MUTATION) // eslint-disable-line no-unused-vars
  //const [res, executeMutation] = useMutation(INCREMENT_STREAK_MUTATION) // eslint-disable-line no-unused-vars
  //const [incrementTrackViews] = useMutation(INCREMENT_STREAK_MUTATION);
  const [incrementTrackViews] = useMutation(INCREMENT_STREAK_MUTATION, {
    variables: { name: name },
    onCompleted: (data) => {
      console.log(data);
    },
  });
  return (
    <Flex
    align='center'
    justify='flex-end'
    direction='column'
    bg={bgColor}
    width='300px'
    height='300px'
    borderRadius='40px'
    margin='16px'
    padding='16px'
    >
     <Box as={getIcon(name)} size='144px' />
      <Text fontWeight='hairline' fontSize='3xl' textAlign='center'>
        {name}
        <Badge
          as='span'
          fontWeight='hairline'
          fontSize='xl'
          rounded='full'
          mx='2'
          px='3'
          textTransform='lowercase'
          cursor='pointer'
          onClick={() => incrementTrackViews}
        >
          {streak +  name}
        </Badge>
        <DeleteHabit id={id} name={name} />
      </Text>
    </Flex>
  )
}