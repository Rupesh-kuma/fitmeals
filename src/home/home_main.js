import Banner from './banner';
import Fitmeals from './Choose-Fitmeals';
import Client from './Client_diaries';
// import Meal from './home/Meal_plan';
import Recent from './Recent_articles';
import Clients from './clients_say';
import Informetion from './informetion';
import Need from './need_help';
import Order from './order';
import Sec_01 from './section-1';
import Nav from '../common/navbar';
const Home = () => {
  return (
    <>
      <Nav />
      <Banner />
      <Sec_01 />
      <Fitmeals />
      <Order />
      <Need />
      <Client />
      <Clients />
      <Informetion />
      <Recent />
    </>
  );
}
export default Home;