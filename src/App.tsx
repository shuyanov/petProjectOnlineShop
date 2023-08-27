import './styles.css'
import { Layout } from './common/LayOut/iendx'
import { Header } from './organism/Header/Header'
import { FlexContainer } from './common/FlexContainer/FlexContainer'
import style from './App.module.scss'

export const App = () => {
  return (
    <FlexContainer className={style.MainPage}>
      <Layout.Header>
        <Header></Header>
      </Layout.Header>
    </FlexContainer>
  )
}
