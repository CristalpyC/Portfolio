import './technologiesStyle.css';
import { useContext } from 'react';
import LanguageContext from '../../hooks/useLanguage';
import { Zoom } from "react-awesome-reveal";

export const Technologies = () => {
  const {texts} = useContext(LanguageContext);
  const title = `<${texts.techTitle}/>`
  const technologies = [
    {name: 'HTML', src:"html3dIcon.webp"},
    {name: 'CSS', src:"css3dIcon.webp"},
    {name: 'JavaScript',src:"JS3dIcon.webp"},
    {name: 'React.Js',src:"react3dIcon.png"},
    {name: 'Bootsrap', src:"bootstrap3dIcon.webp"},
    {name: 'Python',src:"python3dIcon.webp"},
    {name: 'Git',src:"git3dIcon.webp"},
    {name: 'MS SQL server',src:"sql3dIcon.png"},
    {name: 'Material UI',src:"materialUi3dImg.png"},
    {name: 'Figma', src:"figma3dicon.webp"},
    {name: 'SCSS', src:"scss3d.png"},
    {name: 'Next.JS', src:"next-3d.png"},
    {name: 'Angular', src:"angular-icon.webp"},
  ]
  return (
    <div id='technologies__container'>
      <Zoom><h2 className='technologies__title'>{title}</h2></Zoom>
        <div className="tech__container" >
            {technologies.map((items, index) => (
                <div className="technologie" key={index}>
                    <img src={items.src} alt="" />
                    <h3>{items.name}</h3>
                </div>
            ))}
        </div>
    </div>
  )
}
