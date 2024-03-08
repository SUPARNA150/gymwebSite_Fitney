import './hero.css'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-left'>
            <h2>GET HEALTHY BODY</h2>
            <h2>WITH THE PERFECT</h2>
            <h2>EXERCISE</h2>
            <p>We are always there to help you to make a healthy body and mind hrough the power of fitness.</p>
            <button className='join-now'> Join Now</button>
        </div>
        <div className='hero-right'>
            <img src='https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' />
        </div>
    </div>
  )
}

export default Hero
