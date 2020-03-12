import notes from "../img/back1.jpg";
import link from "../img/link-bcg.jpg"
import code from "../img/code-bcg.jpg"
// import back4 from "../img/back4jpg"


export const sectionStyle = {
    width: "100%",
    height: "100%",
    // backgroundImage: `url(${notes})`
    // WSTAWIANIE KOLEJNYCH ZDJEC TLA
        // `url(${back4})`
};

export const linkStyle = {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${link})`,
    backgroundSize: 'cover',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: '10px',
    borderRadius: '20px',
    boxShadow: "5px 5px",
    position: 'relative'

    };

export const codeStyle = {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${code})`,
    backgroundSize: 'cover',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
    borderRadius: '20px',
    boxShadow: "5px 5px"

};