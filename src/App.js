import { useEffect } from 'react';
// import style from  './App.module.scss';
import axios from 'axios'
import './App.css'
import IndexRouter from './router/IndexRouter'
function App() {
// useEffect(()=>{
//     axios.get('/api/mmdb/movie/v3/list/hot.json?ct=%E4%B8%8A%E6%B5%B7&ci=10&channelId=4').then(res => {
//         console.log(res );
//     })
// },[])
  return ( 
      <IndexRouter></IndexRouter>
  );
}

export default App;
// .css可能会影响其他组件样式 