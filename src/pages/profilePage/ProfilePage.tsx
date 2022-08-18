import { useNavigate } from 'react-router-dom'
import Header from '../../components/header/Header'
import { GreetingsContainer } from './Profile.styled';

const ProfilePage: React.FC = () => {

    const navigate = useNavigate();

    const isLogin = JSON.parse(localStorage.getItem("login") || '');

    const handleLogout = () => {
        localStorage.removeItem("login");
        navigate('/login');
    }

    return (
        <>
            {isLogin && isLogin.userLogin
                &&
                (<>
                    <Header />
                    <GreetingsContainer>
                        <p>Здравствуйте, <span>{isLogin.userEmail}</span></p>
                        <button onClick={handleLogout}>Выйти</button>
                    </GreetingsContainer >
                </>)
            }
        </>
    )
}

export default ProfilePage