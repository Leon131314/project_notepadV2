import link from "../img/link-bcg.jpg"
import code from "../img/code-bcg.jpg"
import menu from "../img/test3.jpg"



export const linkTags = {
    width: '50px',
};

export const codeTags = {
    width: '150px',
};



export const sectionStyle = {
    width: "100%",
    height: "100%",
    // backgroundImage: `url(${notes})`
    // WSTAWIANIE KOLEJNYCH ZDJEC TLA
        // `url(${back4})`
    // WSTAWIC Z TABLICY MAPEM??
};

export const menuStyle = {
    width: "500px",
    height: "250px",
    backgroundImage: `url(${menu})`,
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    alignItems:'center',
    marginLeft: 'auto',
    marginRight: '540px',
    marginTop: '10px',
    marginBottom: '10px',
    borderRadius: '20px',
    boxShadow: "5px 5px",
    position: 'relative',
    borderColor: '#138496',
    borderStyle: 'solid',
    borderWidth: '2px',
    opacity: '0,5'
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
    marginBottom: '10px',
    borderRadius: '20px',
    boxShadow: "5px 5px",
    position: 'relative'

};

export const editorStyle = ({
    height: 340,
    width: '100%',
    position: 'absolute',
    bottom: 15,
});