import { MainGrid } from '../src/components/MainGrid';
import { Box } from '../src/components/Box';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';
import { ComunitiesList } from '../src/components/ComunitiesList';
import { FollowersList } from '../src/components/FollowersList';
import jwt from 'jsonwebtoken';
import nookies from 'nookies';
import * as Yup from 'yup';
import { FollowingList } from '../src/components/FollowingList';
import Button from '../src/components/Button';
import { StateButton } from '../src/utils/StateButton';
import { Loading } from '../src/components/Loading';
import { useToast } from '../src/contexts/ToastContext';
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';
import { useState, useEffect, useCallback } from 'react';
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

export default function Home(props) {
  const githubUser = props.githubUser;
  const [followers, setFollowers] = useState([]);
  const [followings, setFollowings] = useState([]);
  const [comunities, setComunities] = useState([]);
  const [stateButton, setStateButton] = useState(StateButton.start);
  const { addToast } = useToast();
  const [loadingGithubFriends, setLoadingGithubFriends] = useState(true);
  const [loadingDatoCms, setLoadingDatoCms] = useState(true);

  const getFollowers = useCallback(async () => {
    const response = await axios.get(`https://api.github.com/users/${githubUser}/followers`);

    return response;
  }, []);

  const getFollowings = useCallback(async () => {
    const response = await axios.get(`https://api.github.com/users/${githubUser}/following`);

    return response;
  }, []);

  useEffect(() => {
    async function getCommunities() {
      try {
        const response = await fetch('https://graphql.datocms.com/', {
          method: 'POST',
          headers: {
            'Authorization': '4ea83d5864a4f41d44bf0b83c474cb',
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            'query': `query{
            allCommunities {
              id
              title
              imageUrl
              communityUrl
            }
          }`
          })
        }).then((response) => response.json());

        setComunities(response.data.allCommunities);
        addToast({
          type: 'success',
          title: 'Sucesso ao buscar dados',
          description: 'Sucesso ao buscar dados do DatoCMS',
        });
        setInterval(() => setLoadingDatoCms(false), 1000);

      } catch (error) {
        addToast({
          type: 'error',
          title: 'Erro ao buscar dados',
          description: 'Erro ao buscar dados do github',
        });
      }
    }

    getCommunities();
  }, [setComunities]);

  useEffect(() => {
    async function getGithubFriends() {
      try {
        const response = await Promise.all([
          getFollowers(),
          getFollowings(),
        ]);

        setFollowers(response[0].data);
        setFollowings(response[1].data);
        addToast({
          type: 'success',
          title: 'Sucesso ao buscar dados',
          description: 'Sucesso ao buscar dados do github',
        });
        setInterval(() => setLoadingGithubFriends(false), 1000);

      } catch (error) {
        addToast({
          type: 'error',
          title: 'Erro ao buscar dados',
          description: 'Erro ao buscar dados do github',
        });
      }
    }

    getGithubFriends();
  }, [getFollowers, getFollowings]);


  function handleNewComunity(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    setTimeout(() => {
      setStateButton(StateButton.loading);
    }, 2000);

    const comunity = {
      title: data.get("title"),
      imageUrl:
        data.get("imageURL") ||
        `https://picsum.photos/300/300?${new Date().toISOString()}`,
      communityUrl: data.get("communityUrl") || "#",
    };

    fetch('/api/communities', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(comunity),
    }).then(async (response) => {
      const data = await response.json();
      console.log(data.record);
      const comunity = data.record;
      setComunities([...comunities, comunity]);
    });

    setStateButton(StateButton.success);

    addToast({
      type: 'success',
      title: 'Sucesso ao cadastrar comunidade',
      description: 'Sucesso ao cadastrar nova comunidade',
    });

    setTimeout(() => {
      setStateButton(StateButton.start);
    }, 2000);
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

            <OrkutNostalgicIconSet recados="3" fotos="10" fas="1" videos="0" mensagens="999" sexy="2" confiavel="2" />
          </Box>

          <Box>
            <h2 className="subTitle">O que voc?? deseja fazer?</h2>
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
                  name="imageURL"
                  aria-label="Coloque uma url para usarmos de capa"
                />
              </div>
              <div>
                <input
                  placeholder="Coloque a URL da comunidade"
                  name="communityUrl"
                  aria-label="Coloque a URL da comunidade"
                  type="text"
                />
              </div>

              <Button type="submit" state={stateButton}>
                Cadastrar
              </Button>
            </form>
          </Box>
        </div>

        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
          <ProfileRelationsBoxWrapper>
            {loadingGithubFriends ? (
              <div className="text-center">
                <Loading />
              </div>
            ) : (
              <FollowersList followers={followers} />
            )}
          </ProfileRelationsBoxWrapper>

          <ProfileRelationsBoxWrapper>
            {loadingGithubFriends ? (
              <div className="text-center">
                <Loading />
              </div>
            ) : (
              <FollowingList followings={followings} />
            )}
          </ProfileRelationsBoxWrapper>

          <ProfileRelationsBoxWrapper>
            {loadingDatoCms ? (
              <div className="text-center">
                <Loading />
              </div>
            ) : (
              <ComunitiesList comunities={comunities} />
            )}
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  );
}

export async function getServerSideProps(ctx) {
  const cookies = nookies.get(ctx);
  const token = cookies.USER_TOKEN;
  const decodedToken = jwt.decode(token);

  const { isAuthenticated } = await fetch('https://alurakut.vercel.app/api/auth', {
    headers: {
      Authorization: token
    }
  })
    .then((resposta) => resposta.json())
  console.log('Usu??rio Logado: ', isAuthenticated);

  if (!isAuthenticated) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      }
    }
  }

  const githubUser = decodedToken?.githubUser;

  if (!githubUser) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }

  return {
    props: {
      githubUser,
    }
  }
}