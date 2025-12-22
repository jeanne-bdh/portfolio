import Softskills from "./components/Softskills";
import Experiences from "./components/Experiences";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { useTranslation, Trans } from 'react-i18next'
import { useState, useEffect, Suspense } from 'react'

type LngRet = { [lng: string]: { nativeName: string } }

function App() {

  const [count, setCount] = useState(0)
  const { t, i18n } = useTranslation()
  const [lngs, setLngs] = useState<LngRet>({ en: { nativeName: 'English' } })

  useEffect(() => {
    i18n.services.backendConnector.backend.getLanguages().then((ret: LngRet) => setLngs(ret))
  }, [i18n])

  return (
    <>

      <div className="bg-brown2">
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <Experiences />
        <Softskills />
        <Footer />
      </div >

      <h1>Vite + React + TypeScript + i18next + locize</h1>
      <div className="card">
        {Object.keys(lngs).map((lng) => {
          const isSelected = i18n.resolvedLanguage === lng
          return (
            <button
              key={lng}
              type="submit"
              disabled={isSelected}
              onClick={() => {
                i18n.changeLanguage(lng)
                setCount(count + 1)
              }}
            >
              {lngs[lng].nativeName.split(',')[0]}
            </button>
          )
        })}
        <p>
          <i>{t('counter', { count })}</i>
        </p>

        <p>
          <Trans i18nKey="editCode">
            Edit <code>src/App.tsx</code> and save to test HMR
          </Trans>
        </p>
      </div>
      <p className="read-the-docs">
        {t('clickLogos')}
      </p>

    </>
  )
}

export default function WrappedApp() {
  return (
    <Suspense fallback={<img className="hourglass" alt="loading" />}>
      <App />
    </Suspense>
  )
}