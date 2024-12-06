import Header from "@/components/Navbar";
import HeroSection from "@/components/Herosection";
import Content from "@/components/content";
import Section from "@/components/section";
import Learning from "@/components/learning";
import Contact from "@/components/contact"
import Footer from "@/components/footer";



const Home = () => {
  return (
    <div>
      <Header />
    <HeroSection/>
    <Content />
    <Section/>
    <Learning />
    <Contact/>
    <Footer/>
    </div>
  );
};

export default Home;
