export function ComunitiesList({ comunities }) {

    return (
        <>
            <h2 className="smallTitle">
                Comunidades ({comunities.length})
            </h2>
            <ul>
                {comunities.map((comunity, index) => {
                    if (index < 6) {
                        return (
                            <li key={comunity.id}>
                                <a href={comunity.communityURL}>
                                    <img src={comunity.logo} />
                                    <span>{comunity.name}</span>
                                </a>
                            </li>
                        );
                    }
                })}
            </ul>
            <a>ver todos</a>
        </>
    );
}