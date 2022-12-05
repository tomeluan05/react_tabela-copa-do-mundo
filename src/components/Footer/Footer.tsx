import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div>
        <div className={`${styles.footer} text-white p-3 d-flex justify-content-center`}>&copy;Copyright 2022</div>
    </div>
  )
}

export default Footer