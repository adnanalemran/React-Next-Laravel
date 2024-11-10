
import { Helmet } from "react-helmet";
const HomePage = () => {
    return (
        <div className="py-4">
            <Helmet>
                <title>My Title</title>
                <meta name="description" content="application" />
            </Helmet>

            <h1 className="text-3xl font-bold underline text-primary">
                Hello world!
            </h1>
        </div>
    );
};

export default HomePage;