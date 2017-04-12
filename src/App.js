import React from 'react'
import glamorous from 'glamorous'
import GithubRepo from './GithubRepo'
import Background from './Background'
import { Hero, Heading } from './Typo'

const CardLayout = glamorous.div({
  display: 'flex',
  padding: '0 5vw',
  justifyContent: 'center',
  flexWrap: 'wrap'
})

export default function App () {
  return (
    <Background>
      <Hero>Ryan Delaney</Hero>
      <Heading>Projects</Heading>
      <CardLayout>
        <GithubRepo owner='rrdelaney' name='material-resume' />
        <GithubRepo owner='rrdelaney' name='bs-loader' />
      </CardLayout>
    </Background>
  )
}
