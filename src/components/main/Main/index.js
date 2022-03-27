import HomeBanner from "../HomeBanner";
import HomeMessageBox from "../HomeMessageBox";

import './index.scss';

const Main = props => {
    return(
        <div id='main'>
            <HomeBanner />
            <HomeMessageBox/>
        </div>
    )

}

export default Main;