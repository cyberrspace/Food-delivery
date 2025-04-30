import AdvancedFeatures from '../AdvancedFeatures';
import BlogPost from '../BlogPost';
import Download from '../Download';
import EasySteps from '../EasySteps';
import Features from '../Features';
import Footer from '../Footer';
import Navbar from '../Navbar';
import RegisterRestaurant from '../RegisterRestaurant';
import Testimonials from '../Testimonials';
import Trusted from '../Trusted';
import WhyChoose from '../WhyChoose';
import YummyDishes from '../YummyDishes';

const Home = () => {
  return (
    // <div className="bg-[#f4f4f4] flex flex-col min-h-screen">
      <div className="">
      {/* Navbar stays fixed or sticky as needed */}
      <Navbar />

      {/* Wrap sections in a responsive container */}
      {/* <main className="mx-auto px-4 sm:px-6 lg:px-8 space-y-20"> */}
        <main className="">

        <Features />
        <Trusted />
        <WhyChoose />
        <YummyDishes />
        <AdvancedFeatures />
        <EasySteps />
        <Testimonials />
        <Download />
        <RegisterRestaurant />
        <BlogPost />

      </main>

      <Footer />
    </div>
  );
};

export default Home;
