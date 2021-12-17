import Header from '../components/Header';
import Movielist from '../components/Movielist';
import SliderMovie from '../components/SliderMovie';


export  const Loader = () => {
  return (
    <div>
     <img className='loader' src='/img/loader-img.jpg' alt='loader'/>
       <h2>Loading</h2>
    </div>
  );
};
const Home = () => {
  return (
    <div>

       <div className="container">
         
          <Header/>
      </div>    
  
        {/* {isLoading    ? <Loader/> : }    */}
        <SliderMovie  type="upcoming"/>
      <div className="container">
       <Movielist type='upcoming' title='Upcoming movies'/> 
        <Movielist type='top_rated' title='Top movies'/>
        <Movielist type='popular' title='Popular movies'/> 
      </div>

    </div>
  );

};
export default Home;