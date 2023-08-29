import './styles.css'
import { Layout } from './common/LayOut/iendx'
import { Header } from './organism/Header/Header'
import { FlexContainer } from './common/FlexContainer/FlexContainer'
import style from './App.module.scss'
import { PrewiePage } from './organism/PrewiePage/PrewiePage'

export const App = () => {
  return (
    <FlexContainer className={style.MainPage} flexDirection={'column'}>
      <Layout.Header>
        <Header></Header>
      </Layout.Header>
      <Layout.Body>
        <PrewiePage />
      </Layout.Body>
    </FlexContainer>
  )
}
