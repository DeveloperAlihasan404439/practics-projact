
import { Outlet, useNavigation } from 'react-router-dom';
import Header from '../Header/Header';
import Loding from '../Loding/Loding';

const Main = () => {
    const loding = useNavigation()
    console.log(loding);
    return (
        <div>
            <Header/>
        <div className={loding.state === "loading"? 'bg-[#062425]':'bg-white'}>
                {
                    loding.state === "loading"?<Loding/>:<Outlet/>
                }
            </div>
            
        </div>
    );
};

export default Main;