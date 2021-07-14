
export function FollowingList({ followings }) {

    return (
        <>
            <h2 className="smallTitle">
                Seguindo ({followings.length})
            </h2>

            <ul>
                {followings.map((following, index) => {
                    if (index < 6) {
                        return (
                            <li key={following.id}>
                                <a href={`https://github.com/${following.login}`}>
                                    <img src={`https://github.com/${following.login}.png`} />
                                    <span>{following.login}</span>
                                </a>
                            </li>
                        );
                    }
                })}
            </ul>
        </>
    );
}