import styles from './page.module.scss'
import Image from 'next/image'
import ClientSideActions from './components/ClientContent'

export default function Home() {
  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <div className={styles.profile}>
          <div className={styles.avatar}>
            <Image src='/perfil_Blanco.png' alt="Profile" width={192} height={192} />
          </div>
          <h1 className={styles.name}>RICHARD</h1>
          <div className={styles.bio}>
            <p>born in Hamburg</p>
            <p>design enthusiast</p>
            <p>studying industrial design in kiel</p>
            <p>wip</p>
            <p>le monde est à vous</p>
          </div>
        </div>
        <ClientSideActions />
      </aside>
      <main className={styles.content}>
        <div className={styles.grid}>
          <div className={`${styles.card} ${styles.largeCard}`}>
            <div className={styles.imageWrapper}>
              <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                <Image src="/placeholder.svg" alt="Architecture" fill style={{ objectFit: 'cover' }} />
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <p>*my resume (wip)</p>
            <p>read.cv</p>
          </div>
          <div className={`${styles.card} ${styles.hamburgCard}`}>
            <p>Designed</p>
            <p>in Hamburg.</p>
            <p>Germany.</p>
          </div>
          <div className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image src="/placeholder.svg" alt="Denim" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image src="/placeholder.svg" alt="Street scene" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </div>
          </div>
          <div className={`${styles.card} ${styles.largeCard}`}>
            <div className={styles.imageWrapper}>
              <Image src="/placeholder.svg" alt="Map of Hamburg" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </div>
          </div>
          <div className={styles.card}>
            <p>*personal widget</p>
            <p>project for KWGT</p>
            <p>reddit.com</p>
          </div>
          <div className={`${styles.card} ${styles.wideCard}`}>
            <p>*what I listen too</p>
            <p>327 songs</p>
            <button className={styles.playButton}>Play</button>
          </div>
        </div>
      </main>
    </div>
  )
}