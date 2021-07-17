import { OrkutNostalgicIconSet } from '../../lib/AlurakutCommons'
import { Box } from '../Box'
import { FaArrowLeft } from "react-icons/fa";
import Link from 'next/link'

export default function ProfilePage(props) {

    return (
        <Box>
            <h1 className="title">
                Lucas Martins, @{props.githubUser}
            </h1>

            <h3>Home{' '}
                <Link href="/">
                    <a>{' '}<FaArrowLeft />{' '}</a>
                </Link>
            </h3>

            <hr />
            <div className="profile-phrase">
                <i>"Make it work, make it right, make it fast", Kent Back</i>
            </div>
            <hr />
            <OrkutNostalgicIconSet recados="3" fotos="10" fas="1" videos="0" mensagens="999" sexy="2" confiavel="2" />
            <hr />
        </Box>
    )
}