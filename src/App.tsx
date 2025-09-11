import {downloadFile} from "./components/blob"
import {SpringCard} from "./components/cardComponent"
import {SpringContainer} from "./components/container"
import {SpringContent, SpringHeader} from "./components/contentHandler"

export default function App() {
  return (
    <div>
      <SpringContainer>
        <SpringHeader>
          <h1 className="mainTitle"> Simplified Portfolio </h1>
        </SpringHeader>
        <SpringContent>
          <SpringCard title={'LinkedIn'} link={'https://www.linkedin.com/in/marcus-luis-s-gajo-29462b212'} >
          </SpringCard>
          <SpringCard title={'Github'} link={'https://github.com/gCookiez'} >
          </SpringCard>
          <SpringCard title={'PDF File'} onClick={() => { downloadFile('portfolio.pdf') }} link={'#'} >
          </SpringCard>
        </SpringContent>
      </SpringContainer>

    </div>
  )

}