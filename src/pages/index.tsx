import Head from 'next/head'
import { GetServerSideProps } from 'next'
// import { signIn, signOut, useSession } from 'next-auth/client'

import { Section } from '../components/Section'
import { SideBar } from '../components/SideBar'
import { ExperienceBar } from '../components/ExperienceBar'
import { CountdownProvider } from '../contexts/CountdownContext'
import { ChallengesProvider } from '../contexts/ChallengesContext'

import styles from '../styles/pages/Home.module.css'
import React from 'react'

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  // const [session, loading] = useSession()

  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <div className={styles.gridContainer}>
        <SideBar />
        <div className={styles.container}>
          <Head>
            <title>Início | move.it</title>
          </Head>
          <ExperienceBar />
          <div style={{ marginTop: '2rem' }}>
            {/* {!session && (
              <>
                Not signed in <br />
                <button onClick={(): Promise<void> => signIn("auth0")}>Sign In</button>
              </>
            )}
            {session && (
              <>
                Signed in as {session.user.email} <br />
                <button onClick={(): Promise<void> => signOut()}>Sign Out</button>
              </>

            )
            }
            {loading && (
              <div>
                <h1>Carregando</h1>
              </div>
            )} */}
          </div>

          <CountdownProvider>
            <Section />
          </CountdownProvider>
        </div>
      </div>
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { level, currentExperience, challengesCompleted } = context.req.cookies
  return {
    props: {
      level: Number(level ?? 1),
      currentExperience: Number(currentExperience ?? 0),
      challengesCompleted: Number(challengesCompleted ?? 0)
    }
  }
}
