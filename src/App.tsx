import './styles.css'

import Image from './game.png'
import LOGO from './logo.svg'
import { ClickCounter } from './ClickCounter'

export const App = () => {
  return (
    <div
      style={{
        width: '100hw',
        display: 'flex',
        alignItems: 'center',
        msFlexDirection: 'column',
      }}
    >
      <div>
        <h1>
          HER React TS + Webpac - {process.env.NODE_ENV} {process.env.name}
        </h1>
        <img src={Image} alt="gameTest" width={300} height={250} />
        <img src={LOGO} alt="gameTest" width={300} />
      </div>
      <div>
        <ClickCounter />
      </div>
    </div>
  )
}
