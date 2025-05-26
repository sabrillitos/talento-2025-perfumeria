import React from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'

const AcercaDe = ({cart, borrarProducto}) => {
    return (
        <>
        <Header borrarProducto={borrarProducto} cartItems={cart}/>
            <h1>Un poco de nuestra historia</h1>
            <p>
            En L'Essence Noire, creemos que un perfume es más que una fragancia: es una declaración silenciosa, una presencia inolvidable y una huella que trasciende el tiempo.

            Nacimos con la visión de redefinir el lujo a través de aromas que despiertan emociones profundas y evocan el misterio de lo inexplorado. Nuestra colección ha sido cuidadosamente curada para quienes buscan algo más que lo convencional —para quienes entienden que la elegancia auténtica se encuentra en los detalles invisibles.

            Cada esencia que ofrecemos es una obra de arte, elaborada con ingredientes raros y procesos artesanales que respetan la tradición, mientras abrazan lo vanguardista. Nos inspiramos en lo oculto, lo etéreo y lo sublime; en la noche que envuelve secretos, en los susurros del ámbar, el cuero, el incienso y las flores oscuras.

            L'Essence Noire no es solo una tienda. Es un santuario del perfume. Un lugar donde el lujo se percibe en cada nota, y donde cada frasco cuenta una historia tan única como quien la lleva.

            Descubre el poder del aroma. Deja una marca invisible, pero imposible de ignorar.</p>

            <h3>¿Quiénes somos?</h3>

            <p>
            Somos L'Essence Noire, un refugio para quienes buscan más que una fragancia: una experiencia. Damos forma al misterio, al lujo y a la emoción a través de perfumes únicos y memorables.</p>

            <h3>¿Qué hacemos diferente?</h3>

            <p>
            No vendemos perfumes comunes. Seleccionamos y creamos esencias con alma, con ingredientes nobles y una estética que habla sin palabras. Cada aroma tiene un carácter, una historia, un secreto.</p>

            <h3>¿A quiénes está dirigida nuestra colección?</h3>

            <p>
            A quienes no temen destacar. A quienes entienden que la verdadera elegancia es silenciosa, pero imposible de ignorar. Nuestros perfumes no siguen tendencias: las crean.</p>

            <h3>¿Por qué el misterio?</h3>
            <p>
                Porque lo más poderoso no siempre se ve. Se intuye. Se percibe. Como el perfume perfecto: no se explica, se siente.</p>

            <h3>¿Qué puedes esperar al elegirnos?</h3>
            <p>
                Una esencia que hable por ti. Que deje huella. Que cuente tu historia… sin que tengas que decir una palabra.</p>
        <Footer/>
        </>
    )
}

export default AcercaDe
