import styles from '../styles/components/Profile.module.css'

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/69125371?s=460&u=9935753a9ad1f17a1530f834741c7ddba4d23008&v=4" alt="LucasRodrigues" />
            <div>
                <strong>Lucas Rodrigues</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level 9
                </p>
            </div>
        </div>
    )
}