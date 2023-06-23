import { useQuery } from '@apollo/client'
import { Flex, Text } from '@chakra-ui/core'
import React from 'react'
import { LIST_ALL_HABITS_QUERY } from '../graphql/index'
import { Error, Habit, Loading } from './index'

export const ListAllHabits = () => {

  const { loading, error, data } = useQuery(LIST_ALL_HABITS_QUERY);
  console.log(data)
  if (loading) return <Loading />
  if (error) return <Error />
  const noHabits = !data.habits.length
    return (
    <Flex
      justify='center'
      align='center'
      flexWrap='wrap'
      flexDirection={noHabits ? 'column' : 'row'}
    >
      {noHabits && (
        <Text fontWeight='bold' fontSize='3xl' color='tomato'>
          You currently track 0 habits. Add one.
        </Text>
      )}
      {data.habits.map((habit, i) => (
        <h1>{habit.name}</h1>
      ))}
    </Flex>
  )
}
