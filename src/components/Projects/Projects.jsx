import styles from '../Projects/Projects.module.scss'

function Projects() {
    return ( 
        <div className={styles.projects}>
            <div className={styles.projects__container}>
                <h2>My projects</h2>
                <div className={styles.projects__images}>
                    <div className={styles.projectsImg}></div>
                    <div className={styles.projectsImg}></div>
                    <div className={styles.projectsImg}></div>
                    <div className={styles.projectsImg}></div>
                    {/* <img src={site} alt="" />
                    <img src={site} alt="" />
                    <img src={site} alt="" /> */}
                </div>
            </div>
        </div>
     );
}

export default Projects;