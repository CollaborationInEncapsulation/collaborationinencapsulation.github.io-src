/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Navigation from './Navigation';
import Link from '../Link';
import s from './Header.css';

class Header extends React.Component {

  componentDidMount() {
    window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.root);
  }

  render() {
    return (
      <header className={`mdl-layout__header mdl-layout__header--scroll ${s.header}`} ref={node => (this.root = node)}>
        <h1 className={s.name}>
          Collaboration in Encapsulation
        </h1>
        <div className={`mdl-layout__header-row ${s.row}`}>
          <Link className={`mdl-layout-title ${s.title}`} to="/">
            coinen.io
          </Link>
          <div className="mdl-layout-spacer" />
          <Navigation />
        </div>
        <img className={s.img} src={'header_bg.jpg'} alt={'header_bg'} />
      </header>
    );
  }
}

export default Header;
