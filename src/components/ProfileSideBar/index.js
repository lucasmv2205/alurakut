import { AlurakutProfileSidebarMenuDefault } from "../../lib/AlurakutCommons"
import Box from "../Box"

export function ProfileSidebar(props) {
    return (
        <Box as="aside">
            <img src={`https://github.com/${props.githubUser}.png`} style={{ borderRadius: '8px' }} />
            <hr />

            <p>
                <a className="boxLink" href={`https://github.com/${props.githubUser}`}>
                    @{props.githubUser.login}
                </a>
            </p>
            <hr />

            <AlurakutProfileSidebarMenuDefault />
        </Box>
    )
}