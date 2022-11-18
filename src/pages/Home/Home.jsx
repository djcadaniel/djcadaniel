import ImageDaniel from '../../assets/img/logo/daniel.jpeg'
import { About, Ability, Contact, Proyects } from '../../pages';
import { ButtonHome } from './components/ButtonHome';
import  './Home.css'

export const Home = () => {
  return (
    <>
      <section className='home content'>
        <div className="home__text">
          <p>Hola, soy</p>
          <h1>Daniel Castro</h1>
          <h1>frontend developer</h1>
          <p className='home__text--pasion'>Soy un apasionado por la programación y <br />
            hago que tu página web sea más atractiva <br />
            e interesante para tus consumidores.</p>
          <ButtonHome />
        </div>
        <div className="home__image">
          <img className='rounded-xl' src={ImageDaniel} alt="Foto de Daniel Castro" />
        </div>
      </section>
      <About />
      <Ability />
      <Proyects />
      {/* <Contact /> */}
    </>
  )
}