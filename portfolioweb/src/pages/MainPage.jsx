import { Home } from './home/Home';
import { AboutMe } from './about-me/AboutMe';
import { Projects } from './projects/Projects';
import { Technologies } from './technologies/Technologies';
import { Footer } from '../components/footer/footer';

export const MainPage = () => {
  return (
    <div>
        <Home />
        <AboutMe />
        <Projects />
        <Technologies />
        <Footer />
    </div>
  );
}
