import DefaultIMG from "./assets/perfil.jpg"

function Destaque({picture=DefaultIMG, title}) {
    return (
        <div class="destacado">
            <div id="imagebox">
                <img src={picture} />
            </div>
        <b>{title}</b>
        </div>
    )
}

function GenDestaques({quantos}) {
    let destaques = []
    for (let i = 1; i <= quantos; i++) {
        destaques.push(<Destaque title={`Destaque ${i}`} />)
    }
    return destaques
}

export default GenDestaques