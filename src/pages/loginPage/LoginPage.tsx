import { Button, ErrorMessage, ErrorSign, ErrorWrapper, FormContainer, FormInput, FormWrapper, Instructions, LoginContainer, RememberContainer } from './Login.styled';
import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../../components/header/Header'
import axios from '../../api/axios';

const LOGIN_URL: string = '/api/auth/login';

const LoginPage: React.FC = () => {

    const navigate = useNavigate();

    const userRef = useRef<HTMLInputElement>(null);

    const [userEmail, setUserEmail] = useState<string>('')
    const [pwd, setPwd] = useState<string>('');
    const [errMsg, setErrMsg] = useState<string>('');
    const [emptyUser, setEmptyUser] = useState<boolean>(false);
    const [disabled, setDisabled] = useState<boolean>(false);

    useEffect(() => {
        if (null !== userRef.current) {
            userRef.current.focus();
        }
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [userEmail, pwd])

    const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmptyUser(false)
        setUserEmail(e.target.value)
    }

    const style = (emptyUser: boolean) => {
        if (emptyUser) {
            return {
                color: "#E26F6F",
                border: "1px solid #E26F6F"
            }
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setDisabled(true);
        await axios
            .post(LOGIN_URL, {
                userEmail,
                pwd,
            })
            .then((response) => {
                console.log("response", response);
                localStorage.setItem(
                    "login",
                    JSON.stringify({
                        userEmail,
                        userLogin: true,
                        token: response.data.access_token,
                    })
                );
                setErrMsg('');
                setUserEmail('');
                setPwd('');
                navigate('/profile');
            })
            .catch((error) => {
                setDisabled(false)
                if (userEmail === '') {
                    setEmptyUser(true)
                }
                else if (userEmail !== '' && pwd !== '') {
                    setEmptyUser(false)
                    setErrMsg(error.response.data.message)
                }
            });
    };

    return (
        <>
            <LoginContainer>
                <Header />
                <FormContainer>
                    {errMsg && <ErrorWrapper>
                        <ErrorSign>!</ErrorSign>
                        <ErrorMessage>Пользователя {userEmail} не существует</ErrorMessage>
                    </ErrorWrapper>}
                    <FormWrapper>
                        <form onSubmit={handleSubmit}>
                            <FormInput>
                                <label htmlFor="username">Логин</label>
                                <input
                                    type="text"
                                    id="username"
                                    ref={userRef}
                                    autoComplete="off"
                                    onChange={handleChangeEmail}
                                    value={userEmail}
                                    style={style(emptyUser)}
                                />
                                {emptyUser &&
                                    <Instructions>
                                        Обязательное поле
                                    </Instructions>
                                }
                            </FormInput>
                            <FormInput>
                                <label htmlFor="password">Пароль</label>
                                <input
                                    type="password"
                                    id="password"
                                    onChange={(e) => setPwd(e.target.value)}
                                    value={pwd}
                                    autoComplete="off"
                                />
                            </FormInput>
                            <RememberContainer>
                                <input
                                    type="checkbox"
                                    id="rememberPwd"
                                    name="rememberPwd"
                                />
                                <label htmlFor="rememberPwd">Запомнить пароль</label>
                            </RememberContainer>
                            <Button disabled={disabled}>
                                Войти
                            </Button>
                        </form>
                    </FormWrapper>
                </FormContainer>
            </LoginContainer>
        </>
    )
}

export default LoginPage