const Header = (props) => {
    return (
        <header>
            <h1> {title} </h1>
        </header>
    )
}

Header.deafultProps = {
    title: 'Küster Verso',
}

Header.propTypes = {
    title: propTypes.string.isRequired,
}

export default Header