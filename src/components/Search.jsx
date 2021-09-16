import logo from '../logo.png'

function Search() {
    return (
        <div className="container">
            <div className="header">
                <div className="caption">
                    <h4>WIKIPEDIA</h4>
                    <p>The Free Encyclopedia</p>
                </div>
                <img src={logo} alt="" />
            </div>
            <div className="content">
                <form action="">
                    <input type="text" className="search"/>
                </form>
            </div>
            <div className="word">
                {/* Search result component */}
            </div>
        </div>

    );
}
export default Search;
