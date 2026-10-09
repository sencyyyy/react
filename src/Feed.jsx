
function Feed({images=1}) {

    let feed = Array(images).fill(<img class="feedimg" src="https://picsum.photos/200/300" />)

    return (
        <>
        <div id="feed">
            {feed}
        </div>
        </>
    )
}

export default Feed