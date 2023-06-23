import { useQuery } from '@apollo/client'
import { Badge, Box, Flex, Text } from '@chakra-ui/core'
import React from 'react'
import { INCREMENT_STREAK_MUTATION } from '../graphql/incrementStreak'
import { LIST_ALL_HABITS_QUERY } from '../graphql/listAllHabits'
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
  //const { id, name, streak } = habit
  const bgColor = colors[index % colors.length]
  const { loading, error, data } = useQuery(LIST_ALL_HABITS_QUERY);
  if (loading) return <p>Loading...</p>
  return (
    <div>
      <Flex
       align='center'
       justify='flex-end'
       direction='column'
       //bg={bgColor}
       width='300px'
       height='300px'
       borderRadius='40px'
       margin='16px'
       padding='16px'
      >
        
    <Text fontWeight='hairline' fontSize='3xl' textAlign='center'>
      sasaw
      <Badge
          as='span'
          fontWeight='hairline'
          fontSize='xl'
          rounded='full'
          mx='2'
          px='3'
          textTransform='lowercase'
          cursor='pointer'
          //onClick={() => executeMutation({ name })}
        >
          {"streak"}
        </Badge>
     </Text>
      </Flex>
    </div>
  )
}

export default Habit
