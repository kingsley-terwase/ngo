import { Routes, Route } from "react-router-dom";
import { HomePage } from "../Pages/Public";
import PublicLayout from "../Layout/PublicLayout";
import AuthPages from "../Pages/Public/Auth";
import VolunteerPage from "../Pages/Public/Volunteer";
import CausesPage from "../Pages/Public/Causes";
import { BlogsPage } from "../Pages/Public/Blog";
import { AboutUsPage } from "../Pages/Public/About";
import ImpactPage from "../Pages/Public/Impact";
import DonatePage from "../Pages/Public/Donate";
import ContactPage from "../Pages/Public/Contact";

const PublicRoutes = () => {
    return (
        <PublicLayout>
            <Routes>
                <Route path="/">
                    <Route index element={<HomePage />} />
                    <Route path='/auth' element={<AuthPages />} />
                    <Route path='/volunteer' element={<VolunteerPage />} />
                    <Route path='/causes' element={<CausesPage />} />
                    <Route path='/blog' element={<BlogsPage />} />
                    <Route path='/about' element={<AboutUsPage />} />
                    <Route path='/impact' element={<ImpactPage />} />
                    <Route path='/donate' element={<DonatePage />} />
                    <Route path='/contact' element={<ContactPage />} />
                </Route>
            </Routes>
        </PublicLayout>
    );
};

export default PublicRoutes;
