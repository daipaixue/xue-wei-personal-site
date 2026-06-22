import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Mail, Phone, MapPin, GraduationCap, Sparkles } from 'lucide-react'
import './styles.css'

function App() {
  return (
    <main className="page-shell">
      <section className="hero" aria-labelledby="site-title">
        <div className="intro">
          <p className="eyebrow">Personal Card</p>
          <h1 id="site-title">
            薛玮
            <span>Xue Wei</span>
          </h1>
          <p className="identity">北京交通大学人工智能专业硕士在读</p>
          <p className="identity-en">
            Master's Student in Artificial Intelligence at Beijing Jiaotong University
          </p>
          <p className="summary">
            关注人工智能方向的学习与探索，保持对技术、研究和真实问题的持续好奇。
          </p>
          <p className="summary summary-en">
            Exploring artificial intelligence with steady curiosity for technology,
            research, and real-world problems.
          </p>

          <div className="quick-facts" aria-label="Profile highlights">
            <span>
              <GraduationCap aria-hidden="true" size={18} />
              AI Graduate Student
            </span>
            <span>
              <MapPin aria-hidden="true" size={18} />
              Beijing, China
            </span>
            <span>
              <Sparkles aria-hidden="true" size={18} />
              Research Mindset
            </span>
          </div>
        </div>

        <ProfilePhoto />
      </section>

      <section className="contact-section" aria-labelledby="contact-title">
        <div>
          <p className="section-kicker">Contact</p>
          <h2 id="contact-title">保持联系</h2>
        </div>
        <div className="contact-links">
          <a href="mailto:daipai.xue@gmail.com" className="contact-link">
            <Mail aria-hidden="true" size={20} />
            <span>daipai.xue@gmail.com</span>
          </a>
          <a href="tel:15630638885" className="contact-link">
            <Phone aria-hidden="true" size={20} />
            <span>15630638885</span>
          </a>
        </div>
      </section>
    </main>
  )
}

function ProfilePhoto() {
  const profilePhotoUrl = `${import.meta.env.BASE_URL}profile.jpg`

  const handleMissingPhoto = (event) => {
    event.currentTarget.closest('.photo-wrap')?.classList.add('photo-wrap--missing')
  }

  return (
    <figure className="photo-wrap">
      <img src={profilePhotoUrl} alt="薛玮的个人照片" onError={handleMissingPhoto} />
      <div className="photo-placeholder" aria-hidden="true">
        <span>薛玮</span>
      </div>
      <figcaption>Profile photo placeholder</figcaption>
    </figure>
  )
}

export default App

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
