
export function FriendsList({ followers }) {

    return (
        <>
            <h2 className="smallTitle">
                Amigos ({followers.length})
            </h2>

            <ul>
                {followers.map((follower, index) => {
                    if (index < 6) {
                        return (
                            <li key={follower.id}>
                                <a href={`https://github.com/${follower.login}`}>
                                    <img src={`https://github.com/${follower.login}.png`} />
                                    <span>{follower.login}</span>
                                </a>
                            </li>
                        );
                    }
                })}
            </ul>
        </>
    );
}