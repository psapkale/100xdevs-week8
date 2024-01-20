import './App.css';
import RevenueCard from './components/RevenueCard';

function App() {
   // ! By default, Tailwind uses a mobile-first breakpoint system
   // ? So write classes by taking mobile-view into consideration and then add brakpoints {sm, md, lg, xl, 2xl} for other view-ports

   // md:bg-blue-700 := blue after/above 'md'
   return (
      <div className='w-[100vw] h-[100vh]'>
         <RevenueCard />
      </div>
   );
}

export default App;
