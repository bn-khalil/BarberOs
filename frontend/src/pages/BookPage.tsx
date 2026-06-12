import { Daypicker } from '../components/DayPicker'
import { Header } from '../sections/Header'

function BookPage() {
  return (
    <main className="md:max-w-5xl mx-auto px-4">
        <Header/>
        <Daypicker />
    </main>
  )
}

export default BookPage