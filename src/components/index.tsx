import Footer from './footer'
import Left from './left'
import Right from './right'

const Index = () => {
  // TODO: To create a compilled components
  document.title = "I am Ryann Kim Sesgundo"
  return (
    <div
      className="main-layout w-screen h-screen">
      <Left />
      <Right />
      <Footer />
    </div>
  )
}

export default Index
