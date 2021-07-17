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
                                <a href={comunity.communityUrl}>
                                    <img src={comunity.imageUrl} />
                                    <span>{comunity.title}</span>
                                </a>
                            </li>
                        );
                    }
                })}
            </ul>
        </>
    );
}