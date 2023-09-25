"use client"
import './globals.css'
import {Header} from '@/components/header'
import {Menu} from '@/components/menu'
import {Footer} from '@/components/footer'
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux'
import { appStore } from './store'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className='conatainer-fluid'>
          <div className='row'>
            <Header />
          </div>
          <div className='row'>
            <div className='col-4'>
                <Menu />
            </div>
            <div className='col-6'>
              <Provider store={appStore}>
                  {children}
              </Provider>
            </div>
          </div>
          <div className='row'>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
