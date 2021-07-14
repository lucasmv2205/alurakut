import { MainGrid } from '../src/components/MainGrid';
import { Box } from '../src/components/Box';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';
import { ComunitiesList } from '../src/components/ComunitiesList';
import { FollowersList } from '../src/components/FollowersList';
import { FollowingList } from '../src/components/FollowingList';
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';
import { useState, useEffect } from 'react';
import axios from 'axios';


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
  const [followers, setFollowers] = useState([]);
  const [followings, setFollowings] = useState([]);
  const [comunities, setComunities] = useState([
    { id: "147896", name: "PQ ir na aula amanhã?", logo: "https://static1.purebreak.com.br/articles/2/11/15/2/@/55643-enquanto-isso-no-whatsapp-sem-opengraph_1200-1.jpg", communityURL: "#" },
    { id: "147852", name: "Morre Praga", logo: "https://s2.glbimg.com/6C8iXLc146uY7UcX1kbDiprbD3k=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2021/5/v/YTfYLvSdm55eJTuZxCNg/memes-phoenix-force-mundial-free-fire-ffws-2021.jpeg", communityURL: "#" },
    { id: "78965", name: "NextJS", logo: "https://miro.medium.com/max/1000/1*htbUdWgFQ3a94PMEvBr_hQ.png", communityURL: "#" },
    { id: "357951", name: "ReactJS", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png", communityURL: "#" }
  ]);

  useEffect(() => {
    async function getFollowers() {
      try {
        const response = await axios.get(`https://api.github.com/users/${githubUser}/followers`);
        setFollowers(response.data)
      } catch (error) {
        addToast({
          type: 'error',
          title: 'Erro ao buscar amigos',
          description: 'Erro ao realizar requisição',
        });
      }
    }
    getFollowers()
  }, []);

  useEffect(() => {
    async function getFollowings() {
      try {
        const response = await axios.get(`https://api.github.com/users/${githubUser}/following`);
        setFollowings(response.data)
      } catch (error) {
        addToast({
          type: 'error',
          title: 'Erro ao buscar seguidores',
          description: 'Erro ao realizar requisição',
        });
      }
    }
    getFollowings()
  }, []);


  function handleNewComunity(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const comunity = {
      id: new Date().toISOString(),
      title: data.get("title"),
      logo:
        data.get("logo") ||
        `https://picsum.photos/300/300?${new Date().toISOString()}`,
      communityURL: data.get("communityURL") || "#",
    };

    setComunities([...comunities, comunity]);
  }



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
            <form onSubmit={handleNewComunity}>
              <div>
                <input
                  placeholder="Qual vai ser o nome da sua comunidade?"
                  name="title"
                  aria-label="Qual vai ser o nome da sua comunidade"
                  type="text"
                />
              </div>
              <div>
                <input
                  placeholder="Coloque uma url para usarmos de capa"
                  name="logo"
                  aria-label="Coloque uma url para usarmos de capa"
                />
              </div>
              <div>
                <input
                  placeholder="Coloque a URL da comunidade"
                  name="communityURL"
                  aria-label="Coloque a URL da comunidade"
                  type="text"
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
            <FollowersList followers={followers} />
          </ProfileRelationsBoxWrapper>

          <ProfileRelationsBoxWrapper>
            <FollowingList followings={followings} />
          </ProfileRelationsBoxWrapper>

          <ProfileRelationsBoxWrapper>
            <ComunitiesList comunities={comunities} />
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  );
}
