export const Home = () => {
    return (
        <div className="home-box">
            <div className="searchprompt">
                <h2>What are you watching?</h2>
            </div>

            <div className="searchbar">
                <input type="text" id="home-search" placeholder="..."/>
            </div>
        </div>
    )
};

export default Home;