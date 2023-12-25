import "./homeStyle.css";
import { DesktopMenu } from "../../components/menu/desktop/DesktopMenu";
import user from '../../imgs/user.png';
import user2 from '../../imgs/userAnimated2.png';
import user3 from '../../imgs/userAnimated3.png';
import user4 from '../../imgs/userAnimated4.png';
import user5 from '../../imgs/userAnimated5.png';
import { useContext, useEffect, useState } from "react";
import LanguageContext from "../../hooks/useLanguage";
//import 'animate.css';

export const Home = () => {
  const [userImg, setUserImg] = useState(user);
  const [currentIndex, setCurrentIndex] = useState(0);
  const {texts} = useContext(LanguageContext);

  const userImages = [user, user2, user3, user4, user5];
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % userImages.length);
    }, 1000);

    return () => clearInterval(intervalId); 
  }, [userImages.length]);

  useEffect(() => {
    setUserImg(userImages[currentIndex]);
  }, [currentIndex, userImages]);

  return (
    <>
      <DesktopMenu />
      <div id="home__container">
          <div className="home__info">
            <h1>{texts.homeTitle}</h1>
            <div className="location__container">
              <svg className="location__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37 50" fill="none">
                <path d="M37 17.5C37 15.2019 36.5215 12.9262 35.5918 10.803C34.6621 8.67984 33.2994 6.75066 31.5815 5.12563C29.8636 3.50061 27.8242 2.21157 25.5796 1.33211C23.3351 0.452651 20.9295 0 18.5 0C16.0705 0 13.6649 0.452651 11.4204 1.33211C9.17583 2.21157 7.13641 3.50061 5.41852 5.12563C3.70064 6.75066 2.33794 8.67984 1.40823 10.803C0.478516 12.9262 -3.62017e-08 15.2019 0 17.5C0 20.9675 1.08093 24.1925 2.92036 26.9125H2.89921L18.5 50L34.1008 26.9125H34.0823C35.9874 24.104 37.0001 20.837 37 17.5ZM18.5 25C16.3972 25 14.3805 24.2098 12.8937 22.8033C11.4068 21.3968 10.5714 19.4891 10.5714 17.5C10.5714 15.5109 11.4068 13.6032 12.8937 12.1967C14.3805 10.7902 16.3972 10 18.5 10C20.6028 10 22.6195 10.7902 24.1063 12.1967C25.5932 13.6032 26.4286 15.5109 26.4286 17.5C26.4286 19.4891 25.5932 21.3968 24.1063 22.8033C22.6195 24.2098 20.6028 25 18.5 25Z" fill="#EC4D73"/>
              </svg>
              <h2>{texts.countryTitle}</h2>
            </div>
            <div className="socials">
                <a href="mailto:cristaltn03@gmail.com">
                  <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" fill="none">
                      <path d="M25 3.125C25 1.40625 23.875 0 22.5 0H2.5C1.125 0 0 1.40625 0 3.125V21.875C0 23.5938 1.125 25 2.5 25H22.5C23.875 25 25 23.5938 25 21.875V3.125ZM22.5 3.125L12.5 10.9375L2.5 3.125H22.5ZM22.5 21.875H2.5V6.25L12.5 14.0625L22.5 6.25V21.875Z" fill="#6CC1C1"/>
                  </svg>
                  </li>
                </a>

                <a href="https://t.me/Cristaltn">
                  <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" fill="none">
                    <g clipPath="url(#clip0_42_39)">
                      <path fillRule="evenodd" clipRule="evenodd" d="M22.7501 6.30833C22.7955 6.03262 22.7662 5.74977 22.6651 5.48925C22.5641 5.22873 22.395 5.00007 22.1756 4.8271C21.9561 4.65413 21.6943 4.54317 21.4174 4.50579C21.1404 4.46842 20.8586 4.50599 20.6011 4.61458L2.7886 12.1146C1.54693 12.6375 1.48339 14.4333 2.7886 14.975C4.08101 15.514 5.39227 16.0067 6.71985 16.4521C7.93652 16.8542 9.2636 17.226 10.3271 17.3313C10.6178 17.6792 10.9834 18.0135 11.3563 18.3208C11.9261 18.7896 12.6115 19.2719 13.3198 19.7344C14.7386 20.6615 16.3126 21.5479 17.373 22.125C18.6407 22.8125 20.1584 22.0208 20.3855 20.6385L22.7501 6.30833ZM4.78548 13.5333L20.5396 6.90104L18.3334 20.276C17.2928 19.7104 15.7938 18.8635 14.4584 17.9906C13.8429 17.5955 13.2487 17.1681 12.6782 16.7104C12.5257 16.5859 12.3777 16.4559 12.2344 16.3208L16.3605 12.1958C16.5559 12.0005 16.6658 11.7355 16.6659 11.4592C16.666 11.1829 16.5563 10.9179 16.361 10.7224C16.1657 10.5269 15.9007 10.4171 15.6244 10.417C15.3481 10.4169 15.083 10.5266 14.8876 10.7219L10.3699 15.2396C9.60527 15.1417 8.54068 14.8583 7.37193 14.4729C6.50183 14.1831 5.63866 13.8698 4.78548 13.5333Z" fill="#6CC1C1"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_42_39">
                        <rect width="25" height="25" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                  </li>
                </a>

                <a href="https://www.linkedin.com/in/cristal-melissa-tav%C3%A1rez-novas-793b042a6">
                  <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M3.35366 0C2.46421 0 1.6112 0.353331 0.982264 0.982264C0.353331 1.6112 0 2.46421 0 3.35366C0 4.2431 0.353331 5.09612 0.982264 5.72505C1.6112 6.35399 2.46421 6.70732 3.35366 6.70732C4.2431 6.70732 5.09612 6.35399 5.72505 5.72505C6.35399 5.09612 6.70732 4.2431 6.70732 3.35366C6.70732 2.46421 6.35399 1.6112 5.72505 0.982264C5.09612 0.353331 4.2431 0 3.35366 0ZM1.82927 3.35366C1.82927 2.94937 1.98987 2.56163 2.27575 2.27575C2.56163 1.98987 2.94937 1.82927 3.35366 1.82927C3.75795 1.82927 4.14569 1.98987 4.43157 2.27575C4.71744 2.56163 4.87805 2.94937 4.87805 3.35366C4.87805 3.75795 4.71744 4.14569 4.43157 4.43157C4.14569 4.71744 3.75795 4.87805 3.35366 4.87805C2.94937 4.87805 2.56163 4.71744 2.27575 4.43157C1.98987 4.14569 1.82927 3.75795 1.82927 3.35366ZM0 8.23171C0 7.98913 0.0963629 7.75649 0.26789 7.58496C0.439417 7.41344 0.672058 7.31707 0.914634 7.31707H5.79268C6.03526 7.31707 6.2679 7.41344 6.43943 7.58496C6.61095 7.75649 6.70732 7.98913 6.70732 8.23171V24.0854C6.70732 24.3279 6.61095 24.5606 6.43943 24.7321C6.2679 24.9036 6.03526 25 5.79268 25H0.914634C0.672058 25 0.439417 24.9036 0.26789 24.7321C0.0963629 24.5606 0 24.3279 0 24.0854V8.23171ZM1.82927 9.14634V23.1707H4.87805V9.14634H1.82927ZM8.53659 8.23171C8.53659 7.98913 8.63295 7.75649 8.80448 7.58496C8.976 7.41344 9.20864 7.31707 9.45122 7.31707H14.3293C14.5718 7.31707 14.8045 7.41344 14.976 7.58496C15.1475 7.75649 15.2439 7.98913 15.2439 8.23171V8.76098L15.7744 8.53293C16.689 8.14204 17.6594 7.89719 18.65 7.80732C22.0341 7.5 25 10.1585 25 13.5732V24.0854C25 24.3279 24.9036 24.5606 24.7321 24.7321C24.5606 24.9036 24.3279 25 24.0854 25H19.2073C18.9647 25 18.7321 24.9036 18.5606 24.7321C18.389 24.5606 18.2927 24.3279 18.2927 24.0854V15.5488C18.2927 15.1445 18.1321 14.7568 17.8462 14.4709C17.5603 14.185 17.1726 14.0244 16.7683 14.0244C16.364 14.0244 15.9763 14.185 15.6904 14.4709C15.4045 14.7568 15.2439 15.1445 15.2439 15.5488V24.0854C15.2439 24.3279 15.1475 24.5606 14.976 24.7321C14.8045 24.9036 14.5718 25 14.3293 25H9.45122C9.20864 25 8.976 24.9036 8.80448 24.7321C8.63295 24.5606 8.53659 24.3279 8.53659 24.0854V8.23171ZM10.3659 9.14634V23.1707H13.4146V15.5488C13.4146 14.6593 13.768 13.8063 14.3969 13.1774C15.0258 12.5485 15.8788 12.1951 16.7683 12.1951C17.6577 12.1951 18.5108 12.5485 19.1397 13.1774C19.7686 13.8063 20.122 14.6593 20.122 15.5488V23.1707H23.1707V13.5732C23.1707 11.2512 21.1451 9.41707 18.8171 9.62927C18.0173 9.70203 17.2338 9.89954 16.4951 10.2146L14.6902 10.989C14.551 11.0488 14.3991 11.0731 14.2482 11.0597C14.0973 11.0463 13.9521 10.9955 13.8256 10.9121C13.6992 10.8287 13.5954 10.7152 13.5237 10.5817C13.4519 10.4483 13.4145 10.2991 13.4146 10.1476V9.14634H10.3659Z" fill="#6CC1C1"/>
                  </svg>
                  </li>
                </a>

                <a href="https://github.com/CristalpyC">
                    <li>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" fill="none">
                      <path d="M6.12922 19.4302C5.81672 19.2219 5.54797 18.9552 5.23339 18.5802C5.07011 18.3804 4.9083 18.1793 4.74797 17.9771C4.26568 17.3781 3.96151 17.101 3.64797 16.9875C3.51604 16.9438 3.39419 16.8742 3.28958 16.7827C3.18496 16.6913 3.09971 16.5798 3.03884 16.4549C2.97797 16.3299 2.94271 16.1941 2.93514 16.0554C2.92757 15.9166 2.94784 15.7777 2.99475 15.6469C3.04167 15.5161 3.11428 15.396 3.20831 15.2937C3.30235 15.1914 3.41591 15.1089 3.5423 15.0512C3.66869 14.9934 3.80536 14.9615 3.94426 14.9574C4.08316 14.9532 4.22149 14.9769 4.35109 15.0271C5.13443 15.3083 5.66464 15.7927 6.37922 16.6813C6.2813 16.5594 6.73339 17.126 6.83026 17.2427C7.02818 17.4792 7.17401 17.6229 7.28859 17.699C7.50109 17.8417 7.90109 17.9031 8.48651 17.8448C8.51151 17.4469 8.58443 17.0604 8.69693 16.7031C5.60526 15.9479 3.85526 13.9531 3.85526 10.0406C3.85526 8.75104 4.24068 7.5875 4.95734 6.6125C4.73026 5.68125 4.76464 4.55521 5.27193 3.2875C5.32937 3.14391 5.41807 3.01491 5.53158 2.90986C5.64509 2.80482 5.78057 2.72637 5.92818 2.68021C6.01255 2.65521 6.06047 2.64479 6.14484 2.63125C6.9813 2.50313 8.16255 2.80834 9.70214 3.77396C10.6196 3.55946 11.5589 3.4518 12.5011 3.45313C13.4511 3.45313 14.3959 3.56042 15.2969 3.77396C16.8355 2.80209 18.0198 2.49584 18.8615 2.63125C18.9501 2.64584 19.0261 2.66459 19.0886 2.68438C19.2332 2.73206 19.3656 2.81087 19.4765 2.91525C19.5873 3.01964 19.674 3.14706 19.7303 3.28854C20.2376 4.55417 20.2719 5.68021 20.0448 6.61146C20.7646 7.58646 21.1469 8.74167 21.1469 10.0406C21.1469 13.9552 19.4032 15.9427 16.3115 16.7C16.4417 17.1323 16.5094 17.6146 16.5094 18.1375C16.5094 18.8292 16.5073 19.4906 16.5021 20.2313C16.5021 20.4292 16.5001 20.6417 16.4969 20.9667C16.7303 21.0181 16.939 21.1482 17.0878 21.3351C17.2367 21.5221 17.3167 21.7546 17.3145 21.9935C17.3123 22.2325 17.228 22.4635 17.0758 22.6477C16.9235 22.8319 16.7125 22.9581 16.4782 23.0052C15.2907 23.2427 14.4115 22.451 14.4115 21.4177L14.4136 20.9521L14.4188 20.2177C14.424 19.4813 14.4271 18.824 14.4271 18.1375C14.4271 17.4115 14.2355 16.9375 13.9834 16.7198C13.2948 16.126 13.6438 14.9969 14.5469 14.8958C17.6365 14.5479 19.0636 13.351 19.0636 10.0417C19.0636 9.04688 18.7386 8.22396 18.1126 7.53646C17.981 7.39191 17.8928 7.21328 17.858 7.02097C17.8232 6.82867 17.8432 6.63045 17.9157 6.44896C18.0886 6.01667 18.1615 5.45209 18.0146 4.76771L18.0042 4.76979C17.4928 4.91563 16.848 5.22813 16.0688 5.75938C15.9432 5.84464 15.8004 5.90141 15.6505 5.9257C15.5006 5.94999 15.3472 5.94122 15.2011 5.9C14.3219 5.6562 13.4135 5.53354 12.5011 5.53542C11.574 5.53542 10.6553 5.66042 9.80109 5.9C9.65572 5.94089 9.50319 5.94967 9.35408 5.92575C9.20497 5.90183 9.06284 5.84577 8.93755 5.76146C8.15318 5.23334 7.5063 4.92084 6.98964 4.775C6.84068 5.45521 6.91464 6.01875 7.08651 6.44896C7.15901 6.63045 7.179 6.82867 7.14419 7.02097C7.10937 7.21328 7.02116 7.39191 6.88964 7.53646C6.26776 8.21979 5.93859 9.05625 5.93859 10.0406C5.93859 13.3448 7.36672 14.551 10.4407 14.8948C11.3417 14.9969 11.6928 16.1219 11.0084 16.7167C10.8073 16.8906 10.5605 17.4792 10.5605 18.1375V21.4177C10.5605 22.4448 9.69172 23.2156 8.5188 23.0104C8.28049 22.9692 8.06394 22.8464 7.9063 22.663C7.74866 22.4795 7.65975 22.247 7.65483 22.0052C7.6499 21.7634 7.72926 21.5274 7.8793 21.3377C8.02934 21.1481 8.2407 21.0165 8.47714 20.9656V19.9344C7.52922 19.999 6.74693 19.8438 6.12922 19.4302Z" fill="#6CC1C1"/>
                    </svg>
                    </li>
                </a>
            </div>
          </div>

          <div className="profile__container">
              <img src={userImg} alt="" />
          </div>
      </div>

      {/*<div className="custom-cursor" ref={cursorRef} onMouseMove={mouseMove}></div> */}
    </>
  );
}
