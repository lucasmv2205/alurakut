import { useState, useEffect } from 'react';

export function FriendsList(props){
    const [followers, setFollowers] = useState([]);

    useEffect(() => {
        fetch(`https://api.github.com/users/${props.githubUser}/followers`)
        .then(response => response.json())
        .then(data => setFollowers(data))
    }, []);

    return(
        <>
            <h2 className="smallTitle">
                Amigos ({followers.length})
            </h2>

            <ul>
                {followers.map((follower) => {
                return(
                    <li>
                    <a href={`/users/${follower.login}`} key={follower.id}>
                        <img src={`https://github.com/${follower.login}.png`} />
                        <span>{follower.login}</span>
                    </a>
                    </li>
                );
                })}
            </ul>
        </>
    );
}