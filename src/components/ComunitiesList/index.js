export function ComunitiesList(props) {

    return (
        <>
            <h2 className="smallTitle">
                Comunidades ({props.comunities.length})
            </h2>
            <ul>
                {props.comunities.map((comunity) => {
                    return (
                        <li key={comunity.id}>
                            <a href={`/comunidades/${comunity.name}`}>
                                <img src={comunity.logo} />
                                <span>{comunity.name}</span>
                            </a>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}