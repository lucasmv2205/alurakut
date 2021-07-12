export function ComunitiesList(){
    const comunities = [
        { name: "Postgres", logo: "https://www.cyclonis.com/images/2018/10/1_7AOhGDnRL2eyJMUidCHZEA-765x383.jpg" },
        { name: "Morre Praga", logo: "https://s2.glbimg.com/6C8iXLc146uY7UcX1kbDiprbD3k=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2021/5/v/YTfYLvSdm55eJTuZxCNg/memes-phoenix-force-mundial-free-fire-ffws-2021.jpeg" },
        { name: "Vercel", logo: "https://res.cloudinary.com/practicaldev/image/fetch/s--UajhAYy4--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/emsbo1jy8jh91vvohwrj.jpeg" },
        { name: "ReactJS", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" }
        ];

    return(
        <>
            <h2 className="smallTitle">
                Comunidades ({comunities.length})
                </h2>
            <ul>
                {comunities.map((comunity) => {
                return(
                    <li>
                    <a href={`/comunidades/${comunity.name}`}>
                        <img src={comunity.logo}/>
                        <span>{comunity.name}</span>
                    </a>
                    </li>
                );
                })}
            </ul>
        </>
    );
}