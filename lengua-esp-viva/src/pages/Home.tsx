import Hero from '../components/Hero'
import Header from "../components/Header";
import Solutions from "../components/Solutions";
import Testemunhos from "../components/Testemunhos";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Planos from "../components/Planos";
import { Contato } from '../components/Contato';
import About from '../components/About';

export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <About />   
            <Solutions />
            <Testemunhos />
            <Planos />
            <FAQ />
            <Contato />
            <Footer />
        </>
    )
}