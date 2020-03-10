import React from "react";

const styles = {
    container: {
        backgroundColor: '#4d4d50'
    }
}

const Header = ({ title }) =>
    <div style={styles.container}>
        {title}
    </div>;

export default Header;
