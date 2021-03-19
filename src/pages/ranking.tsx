import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { SideBar } from '../components/SideBar'
import styles from '../styles/pages/rankingPage.module.css'
import connect from '../utils/database'

export default function rankingPage({ users }) {

    const [windowWidth, setWindowWidth] = useState(0)

    useEffect(() => {
        setWindowWidth(window.innerWidth)
        window.addEventListener('resize', () => {
            setWindowWidth(window.innerWidth)
        })
    })

    return (
        <div className={styles.gridContainer}>
            <SideBar />
            <div className={styles.container}>
                <Head>
                    <title>Ranking | move.it</title>
                </Head>
                <h1>Leaderboard</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Posição</th>
                            <th>Usuário</th>
                            <th>Desafios</th>
                            <th>Experiência</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, idx) => (
                                <tr key={idx + 1}>
                                    <td>{idx + 1}</td>
                                    <td>
                                        <div>
                                            <img src={user.avatar} alt="Avatar" />
                                            <div className={styles.spanContainer}>
                                                <span>{user.name}</span>
                                                <span> <img src="/icons/level.svg" alt="" /> Level {user.level}</span>
                                            </div>
                                        </div>
                                    </td>
                                    {
                                        windowWidth > 720 ?
                                            <td><span>{user.challengesFinished}</span> completados</td> :
                                            <td><span>{user.challengesFinished}</span></td>
                                    }
                                    {
                                        windowWidth > 720 ?
                                            <td><span>{user.currentExperience}</span> xp</td> :
                                            <td><span>{user.currentExperience}</span></td>
                                    }
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export async function getServerSideProps() {
    const { db } = await connect();
    const users = await db
        .collection("users")
        .find({})
        .sort({ currentExperience: -1 })
        .limit(20)
        .toArray();

    return {
        props: {
            users: JSON.parse(JSON.stringify(users))
        },
    };
}