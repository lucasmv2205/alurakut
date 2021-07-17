import { useState, useEffect } from 'react'
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault } from '../src/lib/AlurakutCommons'
import { FollowingList } from '../src/components/FollowingList'
import { Box } from '../src/components/Box';
import { MainGrid } from '../src/components/MainGrid'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations'
import ProfilePage from '../src/components/ProfilePage'
import TableSocial from '../src/components/TableuSocial'
import axios from 'axios';
import { useToast } from '../src/contexts/ToastContext'


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


export default function Profile() {
    const [gitUser, setGitUser] = useState('')
    const { addToast } = useToast();

    useEffect(() => {
        async function getGithubData() {
            try {
                const response = await axios.get(`https://api.github.com/users/lucasmv2205`);

                console.log(response.data.login);

                setGitUser(response.data.login);
                addToast({
                    type: 'info',
                    title: 'Página de perfil carregada com sucesso',
                    description: 'Página de perfil carregada com sucesso',
                });

            } catch (error) {
                addToast({
                    type: 'error',
                    title: 'Erro ao carregar página de perfil',
                    description: 'Erro ao carregar página de perfil',
                });
            }
        }

        getGithubData();
    }, []);

    return (
        <>
            <AlurakutMenu />
            <MainGrid>
                {console.log(gitUser)}
                <div className="profileArea" style={{ gridArea: 'profileArea' }}>
                    <ProfileSidebar githubUser={gitUser} />
                </div>
                <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
                    <ProfilePage githubUser={gitUser} />
                    <TableSocial />
                </div>
            </MainGrid>
        </>
    )
}