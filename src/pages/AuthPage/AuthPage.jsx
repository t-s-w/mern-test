import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm'

export default function AuthPage(props) {
    const { setUser } = props;
    return <main>
        <h1>Auth Page</h1>
        <SignUpForm setUser={setUser} />
        <LoginForm setUser={setUser} />
    </main>
}