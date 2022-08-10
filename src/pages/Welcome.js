import { Route } from "react-router-dom";

const Welcome = () => {
    return (
        <section>
            <h1>The Welcome Page</h1>
            {/* this route is nested route becoz its inside a 'Welcome' page. Only if welcome page is active, this new-user route will be evaluated by react-router. therefore when we defined the path for new route 'new-user', we started with the '/welcome' in order to activate the welcome page and hence 'new-user' route can also be active with '/new-user'. */}
            <Route path='/welcome/new-user'><p>Welcome, new user!</p></Route>
        </section>
    );
};

export default Welcome;