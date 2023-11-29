import Logo from '../Logo/Logo'
import SocialMedia from '../SocialMedia/SocialMedia'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer>
      <div>
        <Logo />
        <SocialMedia />
      </div>
    </footer>
  )
}

export default Footer
