import React , { Component } from 'react';
import { NavLink } from 'react-router-dom';


import classes from './CategoryNavigation.module.css';
import PixabayLogo from '../../../assets/Pixabay/pixabay-logo.png';
import UnsplashLogo from '../../../assets/Unsplash/unsplash-logo.png';
import ImagexLogo from '../../../assets/icons/camera.svg';



class CategoryNavigation extends Component {

    render(){
        let platformLogo = null;
        switch(this.props.platform) {
          case "unsplash":
            platformLogo = <img src={UnsplashLogo} />
            break;
          case "pixabay":
            platformLogo = <img src={PixabayLogo} />
            break;
          case "imagex":
            platformLogo = <img src={ImagexLogo} />
            break;
          // default:
          //   platformLogo = <ImagexLogo />;
        }

        return (
          <div className={classes["Category-navigation"]}>
            { !this.props.hideLogo ?   <div className={classes["platform-logo"]}> 
              {platformLogo}
            </div> : null}
            <ul className={classes["navlink-container"]}>
              <li className={classes["navlink-container__link"]} onClick={() => this.props.clicked('sustainability')}>
                <NavLink
                  strict
                  to={{
                    pathname: `/photos/${this.props.platform}`,
                    search: `?keyword=sustainability`,
                  }}
                >
                  Sustainability
                </NavLink>
              </li>
              <li className={classes["navlink-container__link"]} onClick={() => this.props.clicked('wallpapers')}>
                <NavLink
                  strict
                  to={{
                    pathname: `/photos/${this.props.platform}`,
                    search: `?keyword=wallpapers`,
                  }}
                >
                  Wallpapers
                </NavLink>
              </li>
              <li className={classes["navlink-container__link"]} onClick={() => this.props.clicked('covid-19')}>
                <NavLink
                  strict
                  to={{
                    pathname: `/photos/${this.props.platform}`,
                    search: `?keyword=covid-19`,
                  }}
                >
                  COVID-19
                </NavLink>
              </li>
              <li className={classes["navlink-container__link"]} onClick={() => this.props.clicked('travel')}>
                <NavLink
                  strict
                  to={{
                    pathname: `/photos/${this.props.platform}`,
                    search: `?keyword=travel`,
                  }}
                >
                  Travel
                </NavLink>
              </li>
              <li className={classes["navlink-container__link"]} onClick={() => this.props.clicked('nature')}>
                <NavLink
                  strict
                  to={{
                    pathname: `/photos/${this.props.platform}`,
                    search: `?keyword=nature`,
                  }}
                >
                  Nature
                </NavLink>
              </li>
              <li className={classes["navlink-container__link"]} onClick={() => this.props.clicked('textures and patterns')}>
                <NavLink
                  strict
                  to={{
                    pathname: `/photos/${this.props.platform}`,
                    search: `?keyword=textures and patterns`,
                  }}
                >
                  Textures and Patterns
                </NavLink>
              </li>
              <li className={classes["navlink-container__link"]} onClick={() => this.props.clicked('current events')}>
                <NavLink
                  strict
                  to={{
                    pathname: `/photos/${this.props.platform}`,
                    search: `?keyword=current events`,
                  }}
                >
                  Current Events
                </NavLink>
              </li>
              <li className={classes["navlink-container__link"]} onClick={() => this.props.clicked('people')}>
                <NavLink
                  strict
                  to={{
                    pathname: `/photos/${this.props.platform}`,
                    search: `?keyword=people`,
                  }}
                >
                  People
                </NavLink>
              </li>
              <li className={classes["navlink-container__link"]} onClick={() => this.props.clicked('business and work')}>
                <NavLink
                  strict
                  to={{
                    pathname: `/photos/${this.props.platform}`,
                    search: `?keyword=business and work`,
                  }}
                >
                  Business & Work
                </NavLink>
              </li>
              <li className={classes["navlink-container__link"]} onClick={() => this.props.clicked('technology')}>
                <NavLink
                  strict
                  to={{
                    pathname: `/photos/${this.props.platform}`,
                    search: `?keyword=technology`,
                  }}
                >
                  Technology
                </NavLink>
              </li>
              <li className={classes["navlink-container__link"]} onClick={() => this.props.clicked('interiors')}>
                <NavLink
                  strict
                  to={{
                    pathname: `/photos/${this.props.platform}`,
                    search: `?keyword=interiors`,
                  }}
                >
                  Interiors
                </NavLink>
              </li>
              <li className={classes["navlink-container__link"]} onClick={() => this.props.clicked('architecture')}>
                <NavLink
                  strict
                  to={{
                    pathname: `/photos/${this.props.platform}`,
                    search: `?keyword=architecture`,
                  }}
                >
                  Architecture
                </NavLink>
              </li>
              <li className={classes["navlink-container__link"]} onClick={() => this.props.clicked('food and drink')}>
                <NavLink
                  strict
                  to={{
                    pathname: `/photos/${this.props.platform}`,
                    search: `?keyword=food and drink`,
                  }}
                >
                  Food & Drink
                </NavLink>
              </li>
              <li className={classes["navlink-container__link"]} onClick={() => this.props.clicked('athletics')}>
                <NavLink
                  strict
                  to={{
                    pathname: `/photos/${this.props.platform}`,
                    search: `?keyword=athletics`,
                  }}
                >
                  Athletics
                </NavLink>
              </li>
            </ul>
          </div>
        );
    }
}



export default CategoryNavigation;