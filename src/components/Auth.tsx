import RegisterationForm from '../components/RegisterationForm'
const Auth = () => {
  return (
    <section className="section auth-section">
        <div className="container mx-auto">
            <div className="register">
                <RegisterationForm />
            </div>
            <div className="login"></div>
        </div>
    </section>
  )
}

export default Auth