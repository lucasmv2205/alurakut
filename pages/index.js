import { MainGrid } from '../src/components/MainGrid';
import { Box } from '../src/components/Box';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';
import { ComunitiesList } from '../src/components/ComunitiesList';
import { FriendsList } from '../src/components/FriendsList';
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';
import { useCallback, useState } from 'react';

function ProfileSidebar(props) {
  return (
    <Box as="aside">
      <img src={`https://github.com/${props.githubUser}.png`} style={{ borderRadius: '8px' }} />
      <hr />

      <p>
        <a className="boxLink" href={`https://github.com/${props.githubUser}`}>
          @{props.githubUser}
        </a>
      </p>
      <hr />

      <AlurakutProfileSidebarMenuDefault />
    </Box>
  );
}

export default function Home() {
  const githubUser = 'lucasmv2205';
  const [comunities, setComunities] = useState([
    { id: "2021-07-09T20:53:51.130Z", name: "PQ ir na aula amanhã?", logo: "https://static1.purebreak.com.br/articles/2/11/15/2/@/55643-enquanto-isso-no-whatsapp-sem-opengraph_1200-1.jpg" },
    { id: "2021-07-10T20:53:51.130Z", name: "Morre Praga", logo: "https://s2.glbimg.com/6C8iXLc146uY7UcX1kbDiprbD3k=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2021/5/v/YTfYLvSdm55eJTuZxCNg/memes-phoenix-force-mundial-free-fire-ffws-2021.jpeg" },
    { id: "2021-07-11T20:53:51.130Z", name: "Vercel", logo: "https://res.cloudinary.com/practicaldev/image/fetch/s--UajhAYy4--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/emsbo1jy8jh91vvohwrj.jpeg" },
    { id: "2021-07-11T20:53:50.130Z", name: "NextJS", logo: "https://miro.medium.com/max/1000/1*htbUdWgFQ3a94PMEvBr_hQ.png" },
    { id: "2021-07-12T20:53:51.130Z", name: "ReactJS", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" }
  ]);


  const handleCreateComunity = useCallback((event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    console.log(data.get('title'));
    console.log(data.get('image'));

    const comunity = {
      id: new Date().toISOString(),
      name: data.get('title'),
      logo: data.get('image'),
    }
    const updatedComunities = [...comunities, comunity];
    console.log(updatedComunities);
    setComunities(updatedComunities);
  }, [])



  return (
    <>
      <AlurakutMenu githubUser={githubUser} />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSidebar githubUser={githubUser} />
        </div>

        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <h1 className="title">
              Bem vindo(a)
            </h1>

            <OrkutNostalgicIconSet />
          </Box>

          <Box>
            <h2 className="subTitle">O que você deseja fazer?</h2>
            <form onSubmit={handleCreateComunity}>
              <div>
                <input
                  placeholder="Qual vai ser o nome da sua comunidade"
                  name="title"
                  aria-label="Qual vai ser o nome da sua comunidade"
                  type="text"
                />
              </div>
              <div>
                <input
                  placeholder="Coloque uma url para usarmos de capa"
                  name="image"
                  aria-label="Coloque uma url para usarmos de capa"
                />
              </div>

              <button type="submit">
                Criar comunidade
              </button>
            </form>
          </Box>
        </div>

        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
          <ProfileRelationsBoxWrapper>
            <FriendsList githubUser={githubUser} />
          </ProfileRelationsBoxWrapper>

          <ProfileRelationsBoxWrapper>
            <ComunitiesList comunities={comunities} />
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  );
}
