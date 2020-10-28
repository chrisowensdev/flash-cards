const Welcome = ({name}) => {

    return (
        <>
    {!!name ? (<h1>Welcome, {name}</h1>) : (<h1>Welcome</h1>)}
    </>
    )
}

export default Welcome;