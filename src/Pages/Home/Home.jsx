import Banner from './Assets/Banner';
import WhyChoose from './Assets/WhyChoose';
import RecentListing from './RecentListing';
import SpecialOffers from './SpecialOffers';
import Testimonials from '../../Components/Testimonials';

const Home = () => {
    return (
        <div>
            <section className='pt-[64px] lg:pt-[95px]'><Banner></Banner></section>
            <section><WhyChoose></WhyChoose></section>
            <section><RecentListing></RecentListing></section>
            <section><SpecialOffers></SpecialOffers></section>
            <section><Testimonials></Testimonials></section>
        </div>
    );
};

export default Home;