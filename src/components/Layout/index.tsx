import {Outlet} from "@mui/icons-material";
import SearchAppBar from "../Header";
import styles from './layout.module.css'
import Sidebar from "../Sidebar";
const Layout = () => {

     return (
        <div className={styles}>
            <SearchAppBar/>
            <main className={styles.wrapper}>
                <Sidebar/>
                <Outlet/>

            </main>
        </div>
    );
};

export default Layout;