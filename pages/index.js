import  { MainGrid }  from '../src/components/MainGrid';
import  { Box }  from '../src/components/Box';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';
import { ComunitiesList } from '../src/components/ComunitiesList';
import { FriendsList } from '../src/components/FriendsList';
import { AlurakutMenu, OrkutNostalgicIconSet  } from '../src/lib/AlurakutCommons';

function ProfileSidebar(props) {
  return (
    <Box>
      <img src={`https://github.com/${props.githubUser}.png`} style={{ borderRadius: '8px' }} />
    </Box>
  );
}

export default function Home() {
  const githubUser = 'lucasmv2205';

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
            <FriendsList githubUser={githubUser} />
          </ProfileRelationsBoxWrapper>

          <ProfileRelationsBoxWrapper>
            <ComunitiesList />
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  );
}
