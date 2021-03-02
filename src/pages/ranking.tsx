import React from 'react'
import Head from 'next/head'
import { SideBar } from '../components/SideBar'
import styles from '../styles/pages/rankingPage.module.css'

export default function rankingPage() {
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
                        <tr>
                            <td>1</td>
                            <td>
                                <div>
                                    <img src="https://avatars.githubusercontent.com/u/69125371?s=460&u=9935753a9ad1f17a1530f834741c7ddba4d23008&v=4" alt="Avatar" />
                                    <div className={styles.spanContainer}>
                                        <span>Lucas Rodrigues</span>
                                        <span> <img src="/icons/level.svg" alt="" /> Level 3</span>
                                    </div>
                                </div>
                            </td>
                            <td> <span>127</span> completados</td>
                            <td> <span>154000</span> xp</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}