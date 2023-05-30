import { Link, useLocation } from 'react-router-dom';
import styles from './MenuLink.module.css';
// rfc
import React from 'react'

export default function MenuLink({children, to}) {
    // ctr+space p/ importar
    const localizacao = useLocation();

  return (
        <Link className={`
            ${styles.link}
            ${localizacao.pathname === to ? styles.linkDestacado : ""}
        `} to={to}>
            {children}
        </Link >
  )
}
