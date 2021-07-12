import  MainGrid  from '../src/components/MainGrid';
import  Box  from '../src/components/Box';
import { AlurakutMenu, OrkutNostalgicIconSet  } from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';
import { useState, useEffect } from 'react';


// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
// `

function ProfileSidebar(props) {
  return (
    <Box>
      <img src={`https://github.com/${props.githubUser}.png`} style={{ borderRadius: '8px' }} />
    </Box>
  );
}

export default function Home() {
  const githubUser = 'lucasmv2205';
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${githubUser}/following`)
    .then(response => response.json())
    .then(data => setFollowers(data))
  }, []);

  console.log(followers);

  const pessoasFavoritas = [
    'juunegreiros',
    'omariosouto',
    'peas',
    'rafaballerini',
    'marcobrunodev',
    'felipefialho'
  ];

  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style={{gridArea: 'profileArea'}}>
          <ProfileSidebar githubUser={githubUser} />
        </div>

        <div className="welcomeArea" style={{gridArea: 'welcomeArea'}}>
        <Box>
            <h1 className="title">
              Bem vindo(a) 
            </h1>

            <OrkutNostalgicIconSet />
          </Box>
        </div>

        <div className="profileRelationsArea" style={{gridArea: 'profileRelationsArea'}}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da comunidade ({followers.length})
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
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  );
}
