import React from 'react'
import Header from './Header'

interface Props {
    children: React.ReactNode
}


const Layout:React.FC<Props> = ({children}) => {
  return (
    <div>
        <Header />
        <div>
            {children}
        </div>
    </div>
  )
}

export default Layout